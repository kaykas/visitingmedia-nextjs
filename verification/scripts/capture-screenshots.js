const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ALLOWED_DOMAINS = ['visitingmedia.com', 'localhost'];
const TIMEOUT_MS = 60000;

const pages = [
  { name: 'homepage', wordpress: 'https://visitingmedia.com/', nextjs: 'http://localhost:3000/' },
  { name: 'why-us', wordpress: 'https://visitingmedia.com/why-us/', nextjs: 'http://localhost:3000/why-us' },
  { name: 'testimonials', wordpress: 'https://visitingmedia.com/testimonials/', nextjs: 'http://localhost:3000/testimonials' },
  { name: 'customers', wordpress: 'https://visitingmedia.com/customer/', nextjs: 'http://localhost:3000/customers' },
  { name: 'community', wordpress: 'https://visitingmedia.com/community/', nextjs: 'http://localhost:3000/community' },
  { name: 'integration', wordpress: 'https://visitingmedia.com/integration/', nextjs: 'http://localhost:3000/integration' },
  { name: 'request-demo', wordpress: 'https://visitingmedia.com/request-demo/', nextjs: 'http://localhost:3000/request-demo' },
  { name: 'blog', wordpress: 'https://visitingmedia.com/blog/', nextjs: 'http://localhost:3000/blog' },
  { name: 'solutions', wordpress: 'https://visitingmedia.com/solutions/', nextjs: 'http://localhost:3000/solutions' }
];

async function captureScreenshot(url, outputPath, retries = 3) {
  let browser;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });

      console.log(`  Navigating to ${url}...`);
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: TIMEOUT_MS
      });

      // Wait a bit for page to settle
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Wait for images to load with timeout
      try {
        await Promise.race([
          page.evaluate(() => {
            return Promise.all(
              Array.from(document.images)
                .filter(img => !img.complete)
                .map(img => new Promise(resolve => {
                  img.onload = img.onerror = resolve;
                  setTimeout(resolve, 5000); // Timeout individual images after 5s
                }))
            );
          }),
          new Promise(resolve => setTimeout(resolve, 10000)) // Overall timeout 10s
        ]);
      } catch (err) {
        console.log(`  ⚠️  Image loading check timed out, continuing...`);
      }

      // Additional wait for any animations
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log(`  Capturing screenshot...`);
      await page.screenshot({
        path: outputPath,
        fullPage: true
      });

      await browser.close();
      console.log(`  ✓ Screenshot saved to ${outputPath}`);
      return true;

    } catch (error) {
      console.error(`  ✗ Attempt ${attempt} failed: ${error.message}`);
      if (browser) await browser.close();

      if (attempt === retries) {
        throw error;
      }

      console.log(`  Retrying in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

async function captureAllScreenshots() {
  console.log('Starting screenshot capture...\n');

  const results = {
    successful: [],
    failed: []
  };

  for (const pageConfig of pages) {
    console.log(`\n📸 Capturing ${pageConfig.name}...`);

    // Capture WordPress version
    const wpPath = path.join(__dirname, '../screenshots/wordpress', `${pageConfig.name}.png`);
    try {
      await captureScreenshot(pageConfig.wordpress, wpPath);
      results.successful.push({ page: pageConfig.name, type: 'wordpress' });
    } catch (error) {
      console.error(`Failed to capture WordPress ${pageConfig.name}:`, error.message);
      results.failed.push({ page: pageConfig.name, type: 'wordpress', error: error.message });
    }

    // Capture Next.js version
    const nextPath = path.join(__dirname, '../screenshots/nextjs', `${pageConfig.name}.png`);
    try {
      await captureScreenshot(pageConfig.nextjs, nextPath);
      results.successful.push({ page: pageConfig.name, type: 'nextjs' });
    } catch (error) {
      console.error(`Failed to capture Next.js ${pageConfig.name}:`, error.message);
      results.failed.push({ page: pageConfig.name, type: 'nextjs', error: error.message });
    }
  }

  console.log('\n\n=== CAPTURE RESULTS ===');
  console.log(`Successful: ${results.successful.length}`);
  console.log(`Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\nFailed captures:');
    results.failed.forEach(f => {
      console.log(`  - ${f.page} (${f.type}): ${f.error}`);
    });
  }

  // Save results to JSON
  fs.writeFileSync(
    path.join(__dirname, '../reports/capture-results.json'),
    JSON.stringify(results, null, 2)
  );

  return results;
}

// Run if called directly
if (require.main === module) {
  captureAllScreenshots()
    .then(() => {
      console.log('\n✓ Screenshot capture complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n✗ Screenshot capture failed:', error);
      process.exit(1);
    });
}

module.exports = { captureAllScreenshots, captureScreenshot };
