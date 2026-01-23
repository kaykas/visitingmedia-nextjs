# Visiting Media: Pixel-Perfect WordPress to Next.js Migration Guide

**Last Updated:** January 22, 2026
**Project Status:** Round 9 attempted but failed - REVERTED to baseline (50.04%)
**Current State:** 50.04% difference (baseline), 767px height gap
**Overall Progress:** 1 of 9 pages - needs Rounds 2-7 re-applied
**⚠️ CRITICAL:** Rounds 2-7 fixes (31.98% state) were uncommitted and lost during failed Round 9

---

## 🎯 PROJECT OBJECTIVE

Convert the WordPress visitingmedia.com website to Next.js 16.1.4 with **pixel-perfect accuracy** - achieving less than 5% visual difference on all pages when compared via automated screenshot testing.

**Why This Matters:**
- The WordPress site is the production reference
- Every visual detail must match exactly: spacing, colors, fonts, layouts
- We're not redesigning - we're replicating with precision

---

## 📊 CURRENT STATUS SUMMARY

### Page-by-Page Progress

| Page | Baseline Diff | Current Diff | Height Gap | Status |
|------|--------------|--------------|------------|---------|
| Request Demo | 45.15% | 17.79% ⏸️ | Unknown | PAUSED - 60% improvement achieved, paused at 18.49% |
| **Why Us** | **50.04%** | **50.04%** ⚠️ | **767px** | **REVERTED - Round 9 failed, need to re-apply Rounds 2-7** |
| Community | 62.82% | - | - | PENDING |
| Homepage | 66.10% | - | - | PENDING |
| Integration | 69.49% | - | - | PENDING |
| Customers | 72.21% | - | - | PENDING |
| Blog | 78.79% | - | - | PENDING |
| Solutions | 84.54% | - | - | PENDING |
| Testimonials | 92.15% | - | - | PENDING |

### Why Us Page Detailed Progress

**Round-by-Round Improvements:**

| Round | Changes | Pixel Diff | Height | Improvement |
|-------|---------|-----------|--------|-------------|
| Baseline | Initial state | 50.04% | 2639px | - |
| Round 1 | Structural changes (FAILED) | 51.28% | - | -1.24pp (worse) |
| Revert | Back to baseline | 50.04% | 2639px | Reset |
| Round 2 | CSS fixes (hero, stats, service cards) | 43.71% | 2829px | +6.33pp |
| Round 3 | AccordionTimeline redesign | 41.71% | 2935px | +2.00pp |
| Round 4 | Increased hero/stats/service card padding | 41.99% | 3057px | -0.28pp |
| Round 5 | Customer Journey, Integration, Press, CTA spacing | 40.87% | 3257px | +1.12pp |
| Round 6 | Comprehensive spacing adjustments | 36.59% | 3382px | +4.28pp |
| Round 7 | Press section background fix | **31.98%** | **3382px** | **+4.61pp** |
| Round 8 | Experimental adjustments (reverted) | 31.98% | 3382px | No change |

**Total Improvement:** 18.06 percentage points (50.04% → 31.98%)
**Height Recovered:** 743px of 767px gap (96.9% complete)
**Remaining:** 24px height gap, 31.98% pixel difference

---

## 🛠️ TECHNICAL SETUP

### Technology Stack

- **Framework:** Next.js 16.1.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with CSS variables
- **Screenshots:** Puppeteer (headless Chrome)
- **Comparison:** Pixelmatch with 0.1 threshold
- **Image Processing:** PNGJS

### File Structure

```
/Users/jkw/visitingmedia-nextjs/
├── app/
│   ├── why-us/page.tsx           ← Why Us page (currently being fixed)
│   ├── request-demo/page.tsx     ← Request Demo (paused at 17.79%)
│   ├── [other pages]/page.tsx    ← Remaining 7 pages
├── components/
│   ├── Header.tsx                ← Shared navigation
│   ├── Footer.tsx                ← Shared footer (already fixed to #14232e)
│   ├── AccordionTimeline.tsx     ← Customer Journey component (redesigned)
├── verification/
│   ├── scripts/
│   │   └── capture-screenshots.js  ← Puppeteer screenshot tool
│   ├── screenshots/
│   │   ├── wordpress/            ← WordPress reference screenshots
│   │   ├── nextjs/               ← Next.js build screenshots
│   │   └── diffs/                ← Red-pixel difference images
└── public/
    └── images/                   ← Image assets
```

### Key Dependencies

```json
{
  "dependencies": {
    "next": "16.1.4",
    "react": "^19",
    "puppeteer": "^23.11.1",
    "pixelmatch": "^6.0.0",
    "pngjs": "^7.0.0"
  }
}
```

---

## 📸 VERIFICATION WORKFLOW

### Step-by-Step Process for Each Page

#### 1. Capture Screenshots

```bash
# From project root
node verification/scripts/capture-screenshots.js 2>&1 | grep -A 4 "page-name"
```

This captures both WordPress (reference) and Next.js (current build) at 1920px viewport width.

**Output locations:**
- WordPress: `/verification/screenshots/wordpress/{page}.png`
- Next.js: `/verification/screenshots/nextjs/{page}.png`

#### 2. Compare Screenshots with Height Normalization

```bash
node -e "
const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch').default;

const basePath = '/Users/jkw/visitingmedia-nextjs/verification/screenshots';
const wpPath = basePath + '/wordpress/{PAGE}.png';
const njPath = basePath + '/nextjs/{PAGE}.png';
const diffPath = basePath + '/diffs/{PAGE}.png';

const wpImg = PNG.sync.read(fs.readFileSync(wpPath));
const njImg = PNG.sync.read(fs.readFileSync(njPath));

const width = wpImg.width;
const maxHeight = Math.max(wpImg.height, njImg.height);

// Create extended images with white padding for shorter image
const wpExtended = new PNG({ width, height: maxHeight });
const njExtended = new PNG({ width, height: maxHeight });

PNG.bitblt(wpImg, wpExtended, 0, 0, wpImg.width, wpImg.height, 0, 0);
PNG.bitblt(njImg, njExtended, 0, 0, njImg.width, njImg.height, 0, 0);

// Fill gap with white pixels
if (wpImg.height < maxHeight) {
  for (let y = wpImg.height; y < maxHeight; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) << 2;
      wpExtended.data[idx] = 255;     // R
      wpExtended.data[idx + 1] = 255; // G
      wpExtended.data[idx + 2] = 255; // B
      wpExtended.data[idx + 3] = 255; // A
    }
  }
}

if (njImg.height < maxHeight) {
  for (let y = njImg.height; y < maxHeight; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) << 2;
      njExtended.data[idx] = 255;
      njExtended.data[idx + 1] = 255;
      njExtended.data[idx + 2] = 255;
      njExtended.data[idx + 3] = 255;
    }
  }
}

// Pixel-by-pixel comparison
const diff = new PNG({ width, height: maxHeight });
const numDiffPixels = pixelmatch(wpExtended.data, njExtended.data, diff.data, width, maxHeight, { threshold: 0.1 });

fs.writeFileSync(diffPath, PNG.sync.write(diff));

const totalPixels = width * maxHeight;
const diffPercentage = (numDiffPixels / totalPixels) * 100;

console.log('Page Comparison:');
console.log('WordPress size:', wpImg.width + 'x' + wpImg.height);
console.log('Next.js size:', njImg.width + 'x' + njImg.height);
console.log('Normalized height:', maxHeight);
console.log('Different pixels:', numDiffPixels, '/', totalPixels);
console.log('Difference percentage:', diffPercentage.toFixed(2) + '%');
console.log('Height difference:', Math.abs(wpImg.height - njImg.height) + 'px');
"
```

**Replace `{PAGE}` with:** `why-us`, `request-demo`, `homepage`, etc.

#### 3. Analyze Differences

Use Task tool with subagent_type=general-purpose to analyze:
- Read WordPress screenshot
- Read Next.js screenshot
- Read diff image
- Identify specific sections with differences
- Provide CSS fix recommendations

#### 4. Apply Fixes Incrementally

Make ONE set of related changes at a time, then re-verify. Never batch multiple unrelated changes.

#### 5. Iterate Until < 5%

Repeat steps 1-4 until pixel difference is below 5% threshold.

---

## 🎨 WORDPRESS CSS SPECIFICATIONS

### Color Palette

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Dark Blue | `#14232e` | Footer, Service Cards, Press section |
| Dark Gray | `#272a2e` | Hero section backgrounds |
| Gold/Tan | `#8d775e` | Statistics numbers, accents, circles |
| Tan Border | `#d8c5b0` | Service card borders, links on dark |
| Teal Primary | `#4c7c8a` | Primary buttons |
| Teal Hover | `#7096a1` | Button hover states |
| Text Black | `#212121` | Primary text on white |
| Light Gray | `#F9F9F9` | Background sections |

### Typography Specifications

**Hero Sections:**
- H1: 64-72px desktop, 42px mobile, uppercase, font-medium
- H2: 24-32px, azure-lighter color, font-secondary
- Opacity on background images: 40%

**Statistics:**
- Numbers: 52px, #8d775e (gold), font-medium
- Labels: 20px, font-secondary, leading-snug

**Service Cards:**
- Heading: 32px, font-bold
- Body: 16px (base), font-secondary, white/90 opacity
- Links: 13px uppercase, tracking-[1.63px], font-semibold

**Buttons:**
- Primary: px-10 py-5, rounded-full, uppercase, 13px, tracking-wider
- Teal: #4c7c8a background, #7096a1 hover

### Spacing System

WordPress uses rem-based spacing (1rem = 10px in their setup):

**Section Padding (py):**
- Small sections: py-20 lg:py-28 (80px/112px)
- Hero sections: py-48 lg:py-64 (192px/256px)
- With extra bottom: pb-24 lg:pb-32 (96px/128px) or pb-24 lg:pb-36 (96px/144px)

**Gaps:**
- Statistics grid: gap-8 gap-y-24 lg:gap-y-28
- Service cards grid: gap-8 lg:gap-12

**Margins:**
- Section titles: mb-16 to mb-28 depending on section
- Content blocks: mb-10 to mb-20

---

## ✅ WHY US PAGE: COMPLETE FIX HISTORY

### What Has Been Fixed (7 Rounds)

#### Round 2: Initial CSS Fixes
**File:** `app/why-us/page.tsx`

**Hero Section (lines 36-50):**
```tsx
<section className="relative bg-[#272a2e] text-white py-30 lg:py-48 overflow-hidden">
  <Image opacity="opacity-50" />
  <h1 className="text-[36px] lg:text-[64px] mb-[17px]">
```

**Statistics Section (lines 57-87):**
```tsx
<section className="bg-white text-[#212121] py-16 lg:py-24">
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 gap-y-16 mb-16">
    <div className="text-[48px] text-[#8d775e]">
```
- Removed gray card backgrounds
- Changed to 2-column base grid
- Gold color for numbers

**Service Cards Section (lines 89-128):**
```tsx
<section className="bg-[#14232e] text-white py-16 lg:py-22">
  <div className="border border-[#d8c5b0] p-12 px-[52px]">
    <Link className="text-[#d8c5b0] ... uppercase">LEARN MORE →</Link>
```
- Dark blue background (#14232e)
- Tan borders (#d8c5b0)
- Added "LEARN MORE" links

**Result:** 50.04% → 43.71% (6.33pp improvement), height 2639px → 2829px

#### Round 3: AccordionTimeline Redesign
**File:** `components/AccordionTimeline.tsx`

```tsx
// Changed from card-based to inline design
<div className="flex-shrink-0 w-[35px] h-[35px] rounded-full bg-[#8d775e] text-white">
  {index + 1}
</div>
<span className={`text-xl text-[#8d775e] ... ${expandedIndex === index ? 'rotate-90' : 'rotate-0'}`}>
  ›
</span>
```

- 35px gold circles (#8d775e) with white numbers
- Chevron (›) rotates 90deg on expand
- Removed cards, borders, shadows
- pl-20 for content alignment

**Result:** 43.71% → 41.71% (2.00pp improvement), height 2829px → 2935px

#### Round 4: Increased Spacing (First Attempt)
**File:** `app/why-us/page.tsx`

- Hero: py-30 → py-40, lg:py-48 → lg:py-56
- Hero title: 36px/64px → 42px/72px
- Hero opacity: 50% → 40%
- Statistics: gap-y-16 → gap-y-20, numbers 48px → 52px
- Service Cards: py-16/py-22 → py-20/py-28, padding adjustments

**Result:** 41.71% → 41.99% (slight regression), height 2935px → 3057px

#### Round 5: Lower Section Spacing
**File:** `app/why-us/page.tsx`

- Customer Journey: py-16/py-24 → py-20/py-28, mb-16 → mb-20
- Integration: py-16/py-24 → py-20/py-28, mb-12 → mb-16
- Press: py-16/py-24 → py-20/py-28, mb-12 → mb-16
- CTA: py-16/py-24 → py-20/py-28, mb-8 → mb-10

**Result:** 41.99% → 40.87% (1.12pp improvement), height 3057px → 3257px

#### Round 6: Comprehensive Spacing Increases
**File:** `app/why-us/page.tsx`

- Hero: py-40/py-56 → py-48/py-64, subtitle added leading-relaxed
- Statistics: pb-20/pb-32 → pb-24/pb-36, gap-y-20 → gap-y-24/gap-y-28
- Service Cards: py-20/py-28 → py-24/py-32, all cards p-14 px-[56px] uniform
- Customer Journey: mb-20 → mb-24/mb-28
- Integration: mb-16 → mb-20, pb-24/pb-32 added
- Press: mb-16 → mb-20, pb-24/pb-32 added
- CTA: py-20/py-28 → py-24/py-32

**File:** `components/AccordionTimeline.tsx`

- space-y-6 → space-y-8
- mb-6 → mb-10
- Added pb-6 to content wrapper

**Result:** 40.87% → 36.59% (4.28pp improvement), height 3257px → 3382px

#### Round 7: Press Section Background Fix
**File:** `app/why-us/page.tsx` (line 161)

**CRITICAL FIX:**
```tsx
// BEFORE (WRONG):
<section className="bg-white py-20 lg:py-28 pb-24 lg:pb-32">

// AFTER (CORRECT):
<section className="bg-[#14232e] text-white py-20 lg:py-28 pb-24 lg:pb-32">
```

WordPress has the Press section with dark blue background (#14232e), NOT white. This single change accounted for ~20-25% of the pixel difference.

**Result:** 36.59% → 31.98% (4.61pp improvement), height remains 3382px

#### Round 8: Experimental Adjustments (Reverted)
**File:** `app/why-us/page.tsx`

**Attempted Fix 1: Customer Journey Background**
```tsx
// Tested: bg-[#fefefe] instead of bg-[var(--color-gray-light)]
// Result: 31.98% → 32.00% (0.02pp regression - minimal impact)
// Decision: Reverted - var(--color-gray-light) is already close to WordPress
```

**Attempted Fix 2: Hero Image Opacity**
```tsx
// Tested: opacity-35 instead of opacity-40
// Result: 31.98% → 32.06% (0.08pp regression)
// Decision: Reverted - reducing opacity made the image too dark
// Note: WordPress shows warmer tones, Next.js shows cooler tones
// Root cause likely image file, blend mode, or other factors beyond opacity
```

**Learning:** Small opacity/background adjustments had minimal or negative impact. The remaining 31.98% difference is likely from:
1. Hero image color rendering (requires different approach - maybe mix-blend-mode or image comparison)
2. Font rendering/anti-aliasing differences
3. Micro-spacing differences distributed across sections

**Final State:** Reverted both changes, back to stable 31.98% baseline

---

## 🚨 CRITICAL DISCOVERIES & LESSONS LEARNED

### 1. Extract WordPress CSS BEFORE Making Changes

**Lesson from Round 1 Failure:**
- Making aggressive structural changes without understanding exact WordPress styling made things WORSE (50.04% → 51.28%)
- ALWAYS delegate a task to extract exact WordPress CSS specifications first
- Use those specs to make targeted changes

### 2. Background Colors Are Critical

**Press Section Discovery:**
- A single section with wrong background color accounted for 4.61pp (20-25%) of total pixel difference
- Even when spacing and layout are perfect, wrong colors create massive pixel differences
- Always verify background colors in EVERY section against WordPress

### 3. Height ≠ Pixel Difference

**Key Insight:**
- Round 4 added 122px of height but pixel difference went UP slightly (41.71% → 41.99%)
- Adding vertical space without matching exact WordPress spacing can introduce NEW differences
- Focus on EXACT spacing values, not just "adding more padding"

### 4. Incremental Verification Is Essential

**Workflow:**
- Make ONE set of related changes
- Capture screenshots immediately
- Compare before proceeding
- If regression occurs, revert and try different approach

**Anti-pattern:**
- Making 10 changes across multiple files
- Capturing screenshot once at end
- Unable to identify which change caused regression

### 5. Shared Components Affect Multiple Pages

**Header Component Issue:**
- Request Demo page: making header changes caused regression (17.79% → 18.49%)
- Header appears on ALL pages
- Changing shared components requires re-verification of ALL pages using that component

**Components to watch:**
- `components/Header.tsx` - Navigation (used everywhere)
- `components/Footer.tsx` - Already fixed to #14232e (used everywhere)
- `components/AccordionTimeline.tsx` - Customer Journey (used on Why Us, possibly others)

### 6. WordPress Section Backgrounds Pattern

**Discovered Pattern:**
```
Hero: #272a2e (dark gray) with opacity-40 image overlay
Statistics: white background
Service Cards: #14232e (dark blue)
Customer Journey: light gray (#F9F9F9)
Integration: white background
Press: #14232e (dark blue) ← CRITICAL: was incorrectly white
CTA: light gray (#F9F9F9)
Footer: #14232e (dark blue) ← already correct
```

This alternating light/dark pattern is CRITICAL for matching WordPress.

### 7. Rem vs Px Conversion

WordPress uses rem-based spacing where 1rem = 10px:
- WordPress: `padding: 12rem;` = 120px
- Tailwind: `py-30` = 120px ✅
- WordPress: `padding: 5.5rem;` = 55px
- Tailwind: `py-14` = 56px ✅ (close enough)

### 8. Component Styling Consistency

**Service Cards Issue:**
- First card had p-14 px-[56px]
- Other cards had p-12 px-[52px]
- Inconsistency created visual differences
- Made ALL cards uniform in Round 6

**Rule:** When you have repeated components (3 service cards, 6 statistics, etc.), ensure ALL instances have IDENTICAL styling.

---

## 📋 REMAINING WORK: WHY US PAGE

### Current State
- **Pixel Difference:** 31.98%
- **Height Gap:** 24px (WordPress 3406px, Next.js 3382px)
- **Target:** < 5% pixel difference

### Known Remaining Issues

#### 1. Hero Section Image Rendering (~5-10% pixel difference)
**Problem:** The luxury-lobby.png image renders with different color characteristics between WordPress and Next.js.

**WordPress:** Warmer brown tones (rgb 74,60,40 range)
**Next.js:** Cooler gray tones (rgb 72,62,51 range)

**Potential Fixes:**
- ~~Adjust opacity from 40% to different value~~ ❌ **Tested in Round 8**: opacity-35 made it worse (32.06%)
- Add `mix-blend-mode` CSS property (untested)
- Check if WordPress applies a color filter/overlay on the image
- Verify image file is identical between WordPress and Next.js
- Try adding a warm color overlay div behind the image
- Test different opacity values in other direction (45%, 50%)

**Location:** `app/why-us/page.tsx` lines 38-44
**Round 8 Learning:** Simple opacity adjustments insufficient - need more sophisticated approach

#### 2. Font Rendering & Anti-aliasing (~5-10% pixel difference)
**Problem:** Text appears slightly different due to font weight, anti-aliasing, or line-height micro-differences.

**Observations:**
- Customer Journey accordion text shows 16-17% pixel difference
- Suggests font-weight might be slightly bolder in WordPress
- Line-height differences causing text to render 1-2px vertically different

**Potential Fixes:**
- Add explicit font-weight values: `font-semibold` → `font-[600]`
- Verify font-secondary CSS variable matches WordPress exactly
- Check if WordPress uses any font-smoothing or anti-aliasing CSS
- Adjust line-height values to match WordPress exactly

#### 3. Final 24px Height Gap (distributed)
**Problem:** 24px short overall, distributed across multiple sections.

**Likely locations:**
- Service cards may need slight padding increase
- Button margins/padding
- Section transitions
- Footer height

**Approach:**
- Use Task agent to analyze pixel-level differences
- Identify specific sections contributing to 24px
- Make micro-adjustments (+4px here, +8px there)

#### 4. Customer Journey Background Color ~~(TESTED - MINIMAL IMPACT)~~
**Current:** `bg-[var(--color-gray-light)]`
**WordPress:** rgb(254,254,254) - nearly white
**Next.js (actual render):** Appears very close to WordPress

**Round 8 Test Result:**
```tsx
// Tested changing to bg-[#fefefe]
// Result: 31.98% → 32.00% (0.02pp regression)
// Conclusion: var(--color-gray-light) is already close enough
// Decision: Keep current implementation
```

**Status:** ✅ Not a significant contributor to remaining 31.98% difference

#### 5. Statistics Section Overlap (needs investigation)
**Problem:** Analysis showed sections might be rendering in wrong order or overlapping around y=400-1100.

**Current Status:** Unclear if this is a real issue or artifact of how screenshots were captured.

**Investigation Needed:**
- Visual inspection of both screenshots side-by-side
- Check z-index values
- Verify section order in rendered HTML
- Check for any absolute positioning that might cause overlap

### Recommended Next Steps for Why Us Page

**Priority Order:**

1. **Hero Image Rendering** (HIGH IMPACT - ~5-10% reduction)
   - Test different opacity values (35%, 45%, 50%)
   - Add mix-blend-mode experiments
   - Compare actual image files

2. **Customer Journey Background** (QUICK WIN)
   - Change to #fefefe
   - Re-verify immediately

3. **Font Rendering** (MEDIUM IMPACT - ~5% reduction)
   - Add explicit font-weight values
   - Match WordPress font-smoothing

4. **Final 24px Height** (LOW IMPACT - cosmetic)
   - Delegate analysis task
   - Apply micro-adjustments

5. **Statistics Overlap Investigation** (UNKNOWN)
   - Visual inspection first
   - Only fix if real issue found

**Success Criteria:**
- Pixel difference < 5%
- Height within 10px of WordPress
- Visual inspection shows no obvious differences

---

## 📋 REMAINING PAGES: TODO LIST

### 1. Request Demo Page
**Status:** PAUSED at 17.79% (achieved 60% improvement)
**Baseline:** 45.15%
**Last Work:** Paused at 18.49% after header changes made things worse

**Known Issues:**
- Header changes caused regression (17.79% → 18.49%)
- DO NOT modify header when fixing this page
- Focus on page-specific styling only

**Approach:**
- Review what changes were made that achieved 60% improvement
- Resume from 17.79% state
- Avoid shared component modifications

### 2. Community Page
**Baseline:** 62.82%
**Status:** Not started

**Approach:**
- Capture baseline screenshots
- Extract WordPress CSS specifications
- Apply learnings from Why Us page
- Verify background colors for ALL sections

### 3. Homepage
**Baseline:** 66.10%
**Status:** Not started

**Special Considerations:**
- Homepage is the most visible page
- Likely has complex hero section
- May have multiple sections with different backgrounds
- Take extra care with image rendering

### 4. Integration Page
**Baseline:** 69.49%
**Status:** Not started

**Notes:**
- May include partner logos
- Verify logo images exist in /public/images/
- Check if WordPress displays logos that Next.js is missing

### 5. Customers Page
**Baseline:** 72.21%
**Status:** Not started

**Notes:**
- May include customer logos or testimonial cards
- Verify all image assets exist

### 6. Blog Page
**Baseline:** 78.79%
**Status:** Not started

**Notes:**
- May have blog post cards/grid
- Check pagination styling
- Verify date formatting

### 7. Solutions Page
**Baseline:** 84.54%
**Status:** Not started

**Special Considerations:**
- High baseline difference suggests major structural differences
- May need significant layout work
- Budget extra time for this page

### 8. Testimonials Page
**Baseline:** 92.15%
**Status:** Not started (HIGHEST baseline difference)

**Special Considerations:**
- 92.15% is VERY high baseline
- Likely has major structural differences from WordPress
- May need complete redesign/rebuild
- Save for last - most challenging page
- Consider delegating to specialized agent for testimonials layout

---

## 🎯 RECOMMENDED WORKFLOW FOR NEW CHAT

### Session Startup Sequence

1. **Read This Document First**
   - Location: `/Users/jkw/visitingmedia-nextjs/PIXEL_PERFECT_MIGRATION_GUIDE.md`
   - Understand project context, current progress, lessons learned

2. **Verify Environment**
   ```bash
   cd /Users/jkw/visitingmedia-nextjs
   node --version  # Should be v24.1.0
   npm run dev  # Verify Next.js dev server starts
   ```

3. **Capture Baseline for Current Page**
   ```bash
   node verification/scripts/capture-screenshots.js 2>&1 | grep -A 4 "page-name"
   ```

4. **Run Comparison to Establish Starting Point**
   - Use the comparison script from "VERIFICATION WORKFLOW" section
   - Document baseline percentage and height
   - Update TodoWrite list

5. **Decide: Continue Why Us or Move to Next Page?**

   **If continuing Why Us:**
   - Current: 31.98% difference, 24px height gap
   - Focus on Hero image rendering first (highest impact)
   - Then Customer Journey background
   - Then font rendering

   **If moving to next page:**
   - Request Demo: Resume from 17.79% (AVOID header changes)
   - Community: Start fresh with baseline capture
   - Others: Work in order of increasing difficulty

### For Each Page - Step-by-Step

**Step 1: Baseline Establishment**
1. Capture screenshots
2. Run comparison
3. Document baseline metrics
4. Take before screenshots for reference

**Step 2: WordPress CSS Extraction**
1. Delegate task to extract EXACT WordPress CSS
2. Get specifications for:
   - All section background colors
   - All padding/margin values
   - All font sizes
   - All colors (text, borders, accents)
3. Document in a page-specific markdown file

**Step 3: First Fix Round - Section Backgrounds**
1. Fix ALL section background colors first (highest impact)
2. This alone can reduce pixel difference by 20-30%
3. Verify immediately

**Step 4: Spacing Fix Round - Vertical Spacing**
1. Apply correct padding to all sections
2. Fix gaps between elements
3. Adjust margins
4. Verify height is increasing toward target

**Step 5: Typography Fix Round**
1. Fix font sizes
2. Fix font weights
3. Fix line heights
4. Fix colors

**Step 6: Component Fix Round**
1. Fix borders
2. Fix button styling
3. Fix cards/grid layouts
4. Fix images

**Step 7: Fine-Tuning**
1. Micro-adjustments to close final gaps
2. Image rendering fixes
3. Font rendering optimizations

**Step 8: Validation**
- Pixel difference < 5%?
- Height within 10px?
- Visual inspection passes?
- If yes: DONE, move to next page
- If no: Iterate with focused fixes

### Avoiding Common Mistakes

❌ **DON'T:**
- Modify shared components (Header, Footer) unless absolutely necessary
- Make 10 changes before verifying
- Guess at CSS values without extracting WordPress specs
- Batch unrelated fixes together
- Skip incremental verification

✅ **DO:**
- Extract WordPress CSS FIRST
- Fix one category at a time (backgrounds, then spacing, then typography)
- Verify after EACH round of changes
- Document what you changed and the result
- Use TodoWrite to track progress
- Revert if regression occurs

---

## 🔧 USEFUL COMMANDS REFERENCE

### Screenshot Capture
```bash
# Capture all pages (takes ~5 minutes)
node verification/scripts/capture-screenshots.js

# Capture specific page only
node verification/scripts/capture-screenshots.js 2>&1 | grep -A 4 "page-name"
```

### Comparison (Replace {PAGE} with actual page name)
```bash
node -e "
const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch').default;

const basePath = '/Users/jkw/visitingmedia-nextjs/verification/screenshots';
const wpPath = basePath + '/wordpress/{PAGE}.png';
const njPath = basePath + '/nextjs/{PAGE}.png';
const diffPath = basePath + '/diffs/{PAGE}.png';

const wpImg = PNG.sync.read(fs.readFileSync(wpPath));
const njImg = PNG.sync.read(fs.readFileSync(njPath));

const width = wpImg.width;
const maxHeight = Math.max(wpImg.height, njImg.height);

const wpExtended = new PNG({ width, height: maxHeight });
const njExtended = new PNG({ width, height: maxHeight });

PNG.bitblt(wpImg, wpExtended, 0, 0, wpImg.width, wpImg.height, 0, 0);
PNG.bitblt(njImg, njExtended, 0, 0, njImg.width, njImg.height, 0, 0);

if (wpImg.height < maxHeight) {
  for (let y = wpImg.height; y < maxHeight; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) << 2;
      wpExtended.data[idx] = 255;
      wpExtended.data[idx + 1] = 255;
      wpExtended.data[idx + 2] = 255;
      wpExtended.data[idx + 3] = 255;
    }
  }
}

if (njImg.height < maxHeight) {
  for (let y = njImg.height; y < maxHeight; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) << 2;
      njExtended.data[idx] = 255;
      njExtended.data[idx + 1] = 255;
      njExtended.data[idx + 2] = 255;
      njExtended.data[idx + 3] = 255;
    }
  }
}

const diff = new PNG({ width, height: maxHeight });
const numDiffPixels = pixelmatch(wpExtended.data, njExtended.data, diff.data, width, maxHeight, { threshold: 0.1 });

fs.writeFileSync(diffPath, PNG.sync.write(diff));

const totalPixels = width * maxHeight;
const diffPercentage = (numDiffPixels / totalPixels) * 100;

console.log('Page Comparison:');
console.log('WordPress size:', wpImg.width + 'x' + wpImg.height);
console.log('Next.js size:', njImg.width + 'x' + njImg.height);
console.log('Normalized height:', maxHeight);
console.log('Different pixels:', numDiffPixels, '/', totalPixels);
console.log('Difference percentage:', diffPercentage.toFixed(2) + '%');
console.log('Height difference:', Math.abs(wpImg.height - njImg.height) + 'px');
"
```

### Git Operations
```bash
# Check what files have changed
git status

# Revert specific file if changes made things worse
git checkout path/to/file.tsx

# View changes before committing
git diff path/to/file.tsx

# Stage and commit when page reaches <5%
git add app/page-name/page.tsx
git commit -m "Fix page-name: 50.04% → 4.89% pixel difference"
```

### File Operations
```bash
# Read file to check current state
cat app/why-us/page.tsx

# Search for specific CSS class
grep -n "bg-\[#" app/why-us/page.tsx

# Find all files using a component
grep -r "AccordionTimeline" app/
```

---

## 📊 SUCCESS METRICS

### Page-Level Success
- ✅ Pixel difference < 5%
- ✅ Height within 10px of WordPress
- ✅ Visual inspection shows no obvious differences
- ✅ All section background colors match exactly
- ✅ Spacing matches WordPress specifications

### Project-Level Success
- ✅ All 9 pages below 5% threshold
- ✅ Shared components (Header, Footer) verified on all pages
- ✅ No regressions when moving between pages
- ✅ Documentation updated with any new discoveries

---

## 🚀 QUICK START FOR NEW SESSION

```bash
# 1. Navigate to project
cd /Users/jkw/visitingmedia-nextjs

# 2. Read this guide
cat PIXEL_PERFECT_MIGRATION_GUIDE.md

# 3. Start dev server
npm run dev

# 4. Capture current state (replace {PAGE})
node verification/scripts/capture-screenshots.js 2>&1 | grep -A 4 "{PAGE}"

# 5. Compare to establish baseline
# Run comparison script with {PAGE} replaced

# 6. Start fixing!
```

**Suggested First Task:**
```
"Continue fixing the Why Us page from 31.98% pixel difference.
Focus on fixing the Hero section image rendering first (highest impact).
Read PIXEL_PERFECT_MIGRATION_GUIDE.md for full context.
Current state: 31.98% diff, 24px height gap, Round 7 just completed."
```

---

## 📝 NOTES & CONTEXT

### Why This Approach Works

1. **Incremental Validation:** Each change is verified immediately
2. **WordPress as Source of Truth:** Extract exact specifications, don't guess
3. **Automated Measurement:** Pixelmatch provides objective metrics
4. **Height Normalization:** Allows fair comparison of pages with different heights
5. **Task Agent Delegation:** Complex analysis delegated to AI agents with vision capabilities

### Time Estimates (per page)

**Easy Pages** (< 50% baseline): 2-4 hours
- Request Demo (45.15%)

**Medium Pages** (50-70% baseline): 4-6 hours
- Why Us (50.04%) - 7 rounds completed, nearly done
- Community (62.82%)
- Homepage (66.10%)
- Integration (69.49%)

**Hard Pages** (70-85% baseline): 6-10 hours
- Customers (72.21%)
- Blog (78.79%)
- Solutions (84.54%)

**Very Hard Pages** (> 85% baseline): 10-15 hours
- Testimonials (92.15%)

**Total Estimated Time:** 60-80 hours for all 9 pages

**Current Progress:** ~8 hours invested in Why Us (80% complete)

---

## 🎉 FINAL NOTES

This document contains EVERYTHING you need to continue this project:
- Complete history of what's been done
- Exact commands to run
- Lessons learned from failures
- Specifications for success
- Remaining work broken down

**Most Important Takeaways:**

1. Always extract WordPress CSS FIRST
2. Fix background colors FIRST (highest impact)
3. Verify after EACH round of changes
4. Don't touch shared components unless necessary
5. Height recovered ≠ pixel difference improvement

**When You Complete Why Us Page:**
- Document final fixes applied
- Update this guide with any new discoveries
- Capture final screenshots for reference
- Move to Request Demo (resume from 17.79%)

**When You Complete All 9 Pages:**
- Run full screenshot suite on all pages
- Verify no regressions occurred
- Do final visual inspection of entire site
- Deploy to production

Good luck! You have all the information you need to complete this successfully. 🚀
