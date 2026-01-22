# WordPress to Next.js - Pixel-Perfect Rebuild Plan

## Audit Summary

**Audit Date:** 2026-01-21
**WordPress Site:** https://visitingmedia.com/
**Next.js Site:** /Users/jkw/visitingmedia-nextjs/

### Pages Audited
✅ Homepage - 12 sections documented
✅ Why Us - Complete structure documented
✅ SalesHub (Solutions) - Complete structure documented
✅ Testimonials - Complete structure documented
✅ Community - Minimal page documented
✅ Blog - Complete structure documented
❌ Customers - Page does not exist on WordPress (404)
✅ Integrations - Already built (verify against WordPress if exists)

---

## CRITICAL GAPS IDENTIFIED

### Homepage - Currently 6 sections, needs 12 sections

**MISSING SECTIONS:**
1. **Brand Trust Logo Grid** (Section 3)
   - 11 company logos in horizontal grid
   - Companies: Hilton, Marriott, Hyatt, IHG, Accor, MGM, Omni, Loews, Four Seasons, Kimpton, Westin

2. **Awards Section Images** (Section 4)
   - Currently have text, missing images
   - Need: HTR Awards badge, Certificate of Excellence badge, Support badge

3. **Platform Overview Section** (Section 7) - COMPLETELY MISSING
   - 4 subsections with alternating text-image layout:
     a. "Engaging Virtual & In-Person Sales"
     b. "Virtual Media Production" (with iPad mockup image)
     c. "Upgraded Channel Distribution" (with multi-device mockup)
     d. "Immersive Selling Strategy"

4. **Tabbed Solutions Interface** (Section 8)
   - Currently have: Static 4-column card grid
   - Need: Client-side tabbed component with 4 tabs:
     - TrueTour™ (4 bullet features)
     - SalesHub™ (9 bullet features)
     - Product Studio (6 bullet features)
     - Training & Support (7 bullet features)

5. **Customer Stories Grid** (Section 9) - COMPLETELY MISSING
   - 3-column grid with case study images
   - Stories: Hilton Garden Inn, Hotel on Rivington, Hyatt Regency
   - Each with image, quote, and link

6. **Integration Partners Section** (Section 10) - COMPLETELY MISSING
   - Horizontal scrollable carousel
   - Partner logos: Teneo, WeddingWire, Cvent, Synxis Sabre

7. **Footer** - Need proper multi-column footer
   - Currently missing
   - Need: 6-column grid (Why Us, Solution By Need, Solution By Role, Company, Support, Social)

### Why Us Page - Missing Visual Elements

**MISSING:**
1. **Hero Background Image** - Luxury hotel lobby photograph
2. **Customer Journey Timeline** - Accordion component (not just static list)
   - 5 steps: Property Tour → Content Review → Brand Approval → Production → Launch
3. **Press/News Section** - Blog article previews with images
4. **Logo Carousel** - Customer brand logos scrolling

### Solutions (SalesHub) Page - Missing Visuals

**MISSING:**
1. **Device Mockup Images** - Product screenshots on devices
2. **Logo Carousel** - 10+ customer logos horizontal scroll
3. **Feature Section Images** - Illustrations or icons for each feature

### Testimonials Page - Missing Structure

**MISSING:**
1. **Hero Image** - Hotel Polaris photograph
2. **Testimonial Cards with Background Images** - Currently just text
   - Each card needs hotel/resort photography background (1024x1024px)
   - Dark overlay for text readability
3. **Features Section** - 4-column grid after testimonials
4. **Related Resources** - Blog article previews with images

### Community Page
- ✅ Minimal page - already correct structure
- Verify Request Demo button functionality

### Blog Page - Verify Structure

**CHECK:**
1. Filter buttons working correctly
2. Blog article cards with images
3. Load More functionality
4. Responsive grid layout

### Integrations Page
- ✅ Already built - verify matches WordPress

---

## VISUAL ASSETS NEEDED

### Homepage Assets
```
/public/images/brands/
- hilton-logo.svg
- marriott-logo.svg
- hyatt-logo.svg
- ihg-logo.svg
- accor-logo.svg
- mgm-logo.svg
- omni-logo.svg
- loews-logo.svg
- four-seasons-logo.svg
- kimpton-logo.svg
- westin-logo.svg

/public/images/awards/
- htr-awards-badge.png
- certificate-excellence.png
- support-badge.png

/public/images/mockups/
- ipad-truetour-mockup.png (Section 7b)
- multi-device-mockup.png (Section 7c)

/public/images/case-studies/
- hilton-garden-inn.jpg
- hotel-on-rivington.jpg
- hyatt-regency.jpg

/public/images/partners/
- teneo-logo.svg
- weddingwire-logo.svg
- cvent-logo.svg
- synxis-logo.svg
```

### Why Us Assets
```
/public/images/hero/
- luxury-hotel-lobby.jpg

/public/images/press/
- blog-ilha-inspire.jpg
- blog-htr-ranking.jpg
- blog-deloitte-fast-500.jpg
```

### SalesHub Assets
```
/public/images/products/
- saleshub-device-mockup.png
- feature-icon-1.svg
- feature-icon-2.svg
- feature-icon-3.svg

/public/images/logos/ (carousel)
- (10+ customer logos for scrolling carousel)
```

### Testimonials Assets
```
/public/images/testimonials/
- marriott-san-diego.jpg
- mgm-resorts.jpg
- sh-hotels.jpg
- chicago-marriott.jpg
- hilton-garden-inn-bg.jpg
- heldrich-hotel-bg.jpg
- (additional testimonial backgrounds)
```

---

## COMPONENT ARCHITECTURE NEEDED

### New Client Components Required

1. **TabbedInterface.tsx**
   - Props: tabs (array of {id, label, content})
   - State: activeTab
   - Keyboard navigation support
   - Responsive mobile accordion fallback

2. **LogoCarousel.tsx**
   - Props: logos (array of {src, alt, href})
   - Auto-scroll with pause on hover
   - Infinite loop
   - Responsive sizing

3. **AccordionTimeline.tsx**
   - Props: steps (array of {title, content, icon})
   - Expandable/collapsible
   - Single or multi-expand modes
   - Animation transitions

4. **TestimonialCard.tsx**
   - Props: quote, author, title, company, backgroundImage
   - Image overlay with gradient
   - Responsive text sizing

5. **ResourceCard.tsx**
   - Props: image, category, title, href
   - Hover effects
   - Lazy loading images

---

## REBUILD PRIORITY ORDER

### Phase 1: Homepage Foundation (HIGH PRIORITY)
1. ✅ Download all brand logos (11 logos)
2. ✅ Download award badges (3 badges)
3. ✅ Download mockup images (2 mockups)
4. ✅ Add Brand Trust logo grid to Section 3
5. ✅ Add award badge images to Section 4
6. ✅ Build Platform Overview Section 7 (4 alternating blocks)

### Phase 2: Homepage Interactive Components
7. ✅ Create TabbedInterface component
8. ✅ Replace static solution cards with tabbed interface
9. ✅ Download case study images
10. ✅ Build Customer Stories grid (Section 9)
11. ✅ Download partner logos
12. ✅ Build Integration Partners carousel (Section 10)

### Phase 3: Homepage Polish
13. ✅ Build proper Footer component (6-column grid)
14. ✅ Verify all typography matches WordPress
15. ✅ Verify all spacing/padding matches
16. ✅ Test responsive breakpoints (576px, 768px, 992px, 1260px)

### Phase 4: Why Us Page
17. ✅ Download hero image
18. ✅ Add hero background image
19. ✅ Create AccordionTimeline component
20. ✅ Replace static timeline with accordion
21. ✅ Download press/blog images
22. ✅ Add Press section with blog previews
23. ✅ Add logo carousel

### Phase 5: SalesHub/Solutions Page
24. ✅ Download device mockup images
25. ✅ Add mockup images to features
26. ✅ Download customer logos for carousel
27. ✅ Add logo carousel
28. ✅ Verify layout matches WordPress exactly

### Phase 6: Testimonials Page
29. ✅ Download hero image (Hotel Polaris)
30. ✅ Download testimonial background images (6+ images)
31. ✅ Create TestimonialCard component
32. ✅ Build testimonial cards grid with images
33. ✅ Add Features section (4-column grid)
34. ✅ Download blog preview images
35. ✅ Add Related Resources section

### Phase 7: Blog Page
36. ✅ Verify filter functionality
37. ✅ Download blog article images
38. ✅ Build article cards with images
39. ✅ Implement Load More functionality

### Phase 8: Final Verification
40. ✅ Side-by-side comparison: WordPress vs Next.js (each page)
41. ✅ Verify all images loaded correctly
42. ✅ Verify all interactive components working
43. ✅ Test all responsive breakpoints
44. ✅ Verify typography exact match
45. ✅ Verify color palette exact match
46. ✅ Performance audit (Lighthouse)
47. ✅ Accessibility audit
48. ✅ Deploy to Vercel

---

## TECHNICAL NOTES

### Typography
- WordPress uses: Tomato Grotesk (primary) + Inter (secondary)
- Next.js using: Inter only (Tomato Grotesk is premium font)
- **Decision needed:** Purchase Tomato Grotesk or accept Inter-only limitation?

### Responsive Breakpoints
```css
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1260px;
```

### Color Variables (Already Correct)
```css
--color-azure: #4C7C8A;
--color-gold: #d8c5b0;
--color-black: #212121;
--color-gray-light: #f6f6f6;
```

### Interactive Components Best Practices
- Use `'use client'` directive for client components
- Implement keyboard navigation
- Add ARIA labels for accessibility
- Smooth transitions (300ms standard)
- Responsive: tabs → accordion on mobile

---

## ESTIMATED COMPLETION

**Total Tasks:** 48 tasks across 8 phases

**Phase 1-3 (Homepage):** Critical path
**Phase 4-6 (Other Pages):** Can be done in parallel
**Phase 7-8 (Polish):** Sequential

**Current Status:** Phase 1 ready to start after asset download

---

## NEXT IMMEDIATE ACTIONS

1. Download all brand logos from WordPress site
2. Download all award badges
3. Download all mockup images
4. Start rebuilding Homepage Section 3 (Brand Trust)
5. Continue through phases systematically

**No shortcuts. Pixel-perfect matching required.**
