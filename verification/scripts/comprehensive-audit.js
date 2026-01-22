const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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

async function auditPage(url) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for images to load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      );
    });

    const audit = await page.evaluate(() => {
      // Typography audit
      const typography = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,p')).map(el => {
        const styles = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          text: el.textContent.trim().substring(0, 100),
          font: {
            family: styles.fontFamily,
            size: styles.fontSize,
            weight: styles.fontWeight,
            lineHeight: styles.lineHeight,
            color: styles.color
          },
          spacing: {
            marginTop: styles.marginTop,
            marginBottom: styles.marginBottom,
            paddingTop: styles.paddingTop,
            paddingBottom: styles.paddingBottom
          }
        };
      });

      // Images audit
      const images = Array.from(document.images).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        loading: img.loading,
        decoding: img.decoding
      }));

      // Background images
      const backgroundImages = Array.from(document.querySelectorAll('*'))
        .filter(el => {
          const bg = getComputedStyle(el).backgroundImage;
          return bg && bg !== 'none' && bg.includes('url');
        })
        .map(el => ({
          tag: el.tagName.toLowerCase(),
          class: el.className,
          backgroundImage: getComputedStyle(el).backgroundImage
        }));

      // Buttons and links
      const buttons = Array.from(document.querySelectorAll('button, a[href]')).map(el => {
        const styles = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          text: el.textContent.trim(),
          href: el.href || null,
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: styles.border,
          borderRadius: styles.borderRadius,
          padding: styles.padding,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight
        };
      });

      // Forms
      const forms = Array.from(document.querySelectorAll('form')).map(form => ({
        action: form.action,
        method: form.method,
        inputs: Array.from(form.querySelectorAll('input, textarea, select')).map(input => ({
          type: input.type,
          name: input.name,
          id: input.id,
          placeholder: input.placeholder,
          required: input.required
        }))
      }));

      // Sections and layout
      const sections = Array.from(document.querySelectorAll('section, main > div')).map(section => {
        const styles = getComputedStyle(section);
        return {
          tag: section.tagName.toLowerCase(),
          class: section.className,
          backgroundColor: styles.backgroundColor,
          padding: styles.padding,
          margin: styles.margin
        };
      });

      return {
        typography: typography.slice(0, 50), // Limit to first 50 elements
        images: images.slice(0, 30),
        backgroundImages: backgroundImages.slice(0, 20),
        buttons: buttons.slice(0, 30),
        forms,
        sections: sections.slice(0, 20)
      };
    });

    await browser.close();
    return audit;

  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

async function auditAllPages() {
  console.log('Starting comprehensive audit...\n');

  const results = {};

  for (const pageConfig of pages) {
    console.log(`\n📋 Auditing ${pageConfig.name}...`);

    results[pageConfig.name] = {
      wordpress: null,
      nextjs: null,
      differences: {}
    };

    // Audit WordPress version
    try {
      console.log(`  Auditing WordPress version...`);
      results[pageConfig.name].wordpress = await auditPage(pageConfig.wordpress);
      console.log(`  ✓ WordPress audit complete`);
    } catch (error) {
      console.error(`  ✗ WordPress audit failed: ${error.message}`);
      results[pageConfig.name].wordpress = { error: error.message };
    }

    // Audit Next.js version
    try {
      console.log(`  Auditing Next.js version...`);
      results[pageConfig.name].nextjs = await auditPage(pageConfig.nextjs);
      console.log(`  ✓ Next.js audit complete`);
    } catch (error) {
      console.error(`  ✗ Next.js audit failed: ${error.message}`);
      results[pageConfig.name].nextjs = { error: error.message };
    }

    // Calculate differences
    if (results[pageConfig.name].wordpress && results[pageConfig.name].nextjs) {
      const wp = results[pageConfig.name].wordpress;
      const nx = results[pageConfig.name].nextjs;

      results[pageConfig.name].differences = {
        imageCount: {
          wordpress: wp.images?.length || 0,
          nextjs: nx.images?.length || 0,
          diff: Math.abs((wp.images?.length || 0) - (nx.images?.length || 0))
        },
        buttonCount: {
          wordpress: wp.buttons?.length || 0,
          nextjs: nx.buttons?.length || 0,
          diff: Math.abs((wp.buttons?.length || 0) - (nx.buttons?.length || 0))
        },
        formCount: {
          wordpress: wp.forms?.length || 0,
          nextjs: nx.forms?.length || 0,
          diff: Math.abs((wp.forms?.length || 0) - (nx.forms?.length || 0))
        },
        sectionCount: {
          wordpress: wp.sections?.length || 0,
          nextjs: nx.sections?.length || 0,
          diff: Math.abs((wp.sections?.length || 0) - (nx.sections?.length || 0))
        }
      };

      console.log(`  Images: WP ${wp.images?.length || 0}, Next ${nx.images?.length || 0}`);
      console.log(`  Buttons/Links: WP ${wp.buttons?.length || 0}, Next ${nx.buttons?.length || 0}`);
      console.log(`  Forms: WP ${wp.forms?.length || 0}, Next ${nx.forms?.length || 0}`);
      console.log(`  Sections: WP ${wp.sections?.length || 0}, Next ${nx.sections?.length || 0}`);
    }
  }

  // Save results to JSON
  const outputPath = path.join(__dirname, '../reports/comprehensive-audit.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n✓ Audit results saved to ${outputPath}`);

  return results;
}

// Run if called directly
if (require.main === module) {
  auditAllPages()
    .then(() => {
      console.log('\n✓ Comprehensive audit complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n✗ Comprehensive audit failed:', error);
      process.exit(1);
    });
}

module.exports = { auditAllPages, auditPage };
