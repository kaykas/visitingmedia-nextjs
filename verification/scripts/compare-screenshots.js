const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch').default || require('pixelmatch');

const pages = [
  'homepage',
  'why-us',
  'testimonials',
  'customers',
  'community',
  'integration',
  'request-demo',
  'blog',
  'solutions'
];

async function compareScreenshots(page1Path, page2Path, diffPath, options = {}) {
  const threshold = options.threshold || 0.1;

  return new Promise((resolve, reject) => {
    const img1 = PNG.sync.read(fs.readFileSync(page1Path));
    const img2 = PNG.sync.read(fs.readFileSync(page2Path));

    const { width, height } = img1;

    // Resize img2 if dimensions don't match
    if (img2.width !== width || img2.height !== height) {
      console.log(`  ⚠️  Dimension mismatch: WP=${width}x${height}, Next=${img2.width}x${img2.height}`);

      // Use the larger dimensions
      const maxWidth = Math.max(width, img2.width);
      const maxHeight = Math.max(height, img2.height);

      const resizedImg1 = new PNG({ width: maxWidth, height: maxHeight });
      const resizedImg2 = new PNG({ width: maxWidth, height: maxHeight });

      PNG.bitblt(img1, resizedImg1, 0, 0, width, height, 0, 0);
      PNG.bitblt(img2, resizedImg2, 0, 0, img2.width, img2.height, 0, 0);

      const diff = new PNG({ width: maxWidth, height: maxHeight });
      const numDiffPixels = pixelmatch(
        resizedImg1.data,
        resizedImg2.data,
        diff.data,
        maxWidth,
        maxHeight,
        { threshold }
      );

      fs.writeFileSync(diffPath, PNG.sync.write(diff));

      const totalPixels = maxWidth * maxHeight;
      const diffPercentage = (numDiffPixels / totalPixels) * 100;

      resolve({
        matched: diffPercentage < 5,
        diffPercentage: diffPercentage.toFixed(2),
        numDiffPixels,
        totalPixels,
        dimensions: { wordpress: `${width}x${height}`, nextjs: `${img2.width}x${img2.height}` }
      });

      return;
    }

    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      width,
      height,
      { threshold }
    );

    fs.writeFileSync(diffPath, PNG.sync.write(diff));

    const totalPixels = width * height;
    const diffPercentage = (numDiffPixels / totalPixels) * 100;

    resolve({
      matched: diffPercentage < 5,
      diffPercentage: diffPercentage.toFixed(2),
      numDiffPixels,
      totalPixels,
      dimensions: { wordpress: `${width}x${height}`, nextjs: `${width}x${height}` }
    });
  });
}

async function compareAllPages() {
  console.log('Starting screenshot comparison...\n');

  const results = [];

  for (const page of pages) {
    console.log(`\n🔍 Comparing ${page}...`);

    const wpPath = path.join(__dirname, '../screenshots/wordpress', `${page}.png`);
    const nextPath = path.join(__dirname, '../screenshots/nextjs', `${page}.png`);
    const diffPath = path.join(__dirname, '../screenshots/diffs', `${page}-diff.png`);

    // Create diffs directory if it doesn't exist
    const diffsDir = path.join(__dirname, '../screenshots/diffs');
    if (!fs.existsSync(diffsDir)) {
      fs.mkdirSync(diffsDir, { recursive: true });
    }

    try {
      if (!fs.existsSync(wpPath)) {
        console.log(`  ✗ WordPress screenshot not found`);
        results.push({ page, error: 'WordPress screenshot missing' });
        continue;
      }

      if (!fs.existsSync(nextPath)) {
        console.log(`  ✗ Next.js screenshot not found`);
        results.push({ page, error: 'Next.js screenshot missing' });
        continue;
      }

      const comparison = await compareScreenshots(wpPath, nextPath, diffPath);

      console.log(`  Dimensions: WP ${comparison.dimensions.wordpress}, Next ${comparison.dimensions.nextjs}`);
      console.log(`  Difference: ${comparison.diffPercentage}% (${comparison.numDiffPixels.toLocaleString()} pixels)`);
      console.log(`  Status: ${comparison.matched ? '✓ MATCH' : '✗ MISMATCH'}`);

      results.push({
        page,
        ...comparison
      });

    } catch (error) {
      console.error(`  ✗ Comparison failed: ${error.message}`);
      results.push({ page, error: error.message });
    }
  }

  console.log('\n\n=== COMPARISON RESULTS ===');
  const matched = results.filter(r => r.matched);
  const mismatched = results.filter(r => !r.matched && !r.error);
  const errors = results.filter(r => r.error);

  console.log(`Matched: ${matched.length}`);
  console.log(`Mismatched: ${mismatched.length}`);
  console.log(`Errors: ${errors.length}`);

  if (mismatched.length > 0) {
    console.log('\nPages with differences:');
    mismatched.forEach(r => {
      console.log(`  - ${r.page}: ${r.diffPercentage}% different`);
    });
  }

  // Save results to JSON
  fs.writeFileSync(
    path.join(__dirname, '../reports/comparison-results.json'),
    JSON.stringify(results, null, 2)
  );

  return results;
}

// Run if called directly
if (require.main === module) {
  compareAllPages()
    .then(() => {
      console.log('\n✓ Screenshot comparison complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n✗ Screenshot comparison failed:', error);
      process.exit(1);
    });
}

module.exports = { compareAllPages, compareScreenshots };
