# Minos Wings

A single-page restaurant website for Minos Wings in Chaparral, New Mexico. Tagline: **Big Flavor. Every Bite.**

## Technology
React, Vite, JavaScript/JSX, plain CSS, BEM class names, local Barlow Condensed font, and the official Normalize.css 8.0.1. Use Node.js 24 LTS.

## Run locally
Extract this folder and open it in VS Code. In its terminal:

```bash
npm install
npm run dev
npm run build
```

Additional commands: `npm run lint` and `npm run preview`.
Vite outputs production files to **dist**, not build. The lockfile is included; CI uses `npm ci`.

## Business information and assets
- Edit `src/utils/constants.js` for the phone, hours, service area, prices, flavor limits, combos, FAQs, navigation, email and Facebook settings.
- Images are included in `src/assets/images/`. No images need to be added manually. `menu.webp` and `promotion.webp` are optimized copies of the supplied menu and promotional graphic. The Logo and FoodPhoto components use SVG viewports to display the appropriate parts of these images without recreating the branding or sourcing unrelated photography. These are promotional images; combo inclusions are described in text.
- `public/favicon.png` is an M monogram. `public/social-preview.jpg` is the supplied promotional artwork for sharing.
- Barlow Condensed is served locally from `src/assets/fonts/`; its OFL license is included.
- Component styles are in their respective folders. Global styles and shared button/container classes are in `src/index.css`.

## Details to supply before public launch
- Repository name defaults to **minos-wings** because the request left it unspecified.
- Email placeholder: `hello@example.com`. Replace it and set `emailVerified: true` to display a functional mailto link.
- Facebook placeholder: `https://www.facebook.com/YOUR_PAGE_HERE`. Replace it and set `facebookVerified: true` to display a safe external link.
- Until confirmed, the page labels email and Facebook as “to be supplied” rather than presenting broken links.
- No street address was supplied; the site shows Chaparral, NM and asks customers to call for pickup details. No directions link is fabricated.
- Weekday hours are the supplied Monday–Friday, 8:00 am–8:00 pm. Weekend availability is left to a phone inquiry.
- No customer reviews were supplied, so no testimonials or ratings are invented.
- Verify prices and availability before launch. There is no checkout, payment processing, or contact-form backend; ordering uses telephone links.

## GitHub Pages setup — actions for you to perform
Nothing has been committed, pushed, deployed, or changed in your GitHub account.

1. On GitHub, create an empty repository named `minos-wings` under `thegrindnet`. Do not initialize it with a README, license, or gitignore.
2. Open this project folder in a terminal, then run:

```bash
git init
git add .
git commit -m "Create Minos Wings website"
git branch -M main
git remote add origin https://github.com/thegrindnet/minos-wings.git
git push -u origin main
```

3. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Open **Actions → Deploy Minos Wings to GitHub Pages**. If the initial run failed before Pages was enabled, rerun it or choose **Run workflow** on `main`.
5. The workflow installs Node 24, runs `npm ci`, lints, builds, uploads `dist`, and deploys it. Future pushes to `main` deploy automatically. You do not upload dist manually.
6. Expected URL: https://thegrindnet.github.io/minos-wings/

`vite.config.js` uses `base: './'`, keeping built JS, CSS, fonts, images and the favicon portable under a repository subdirectory. There is no router, no .htaccess and no runtime CDN dependency. If you choose another repository name, change the repository name in these instructions and the absolute Open Graph image URL in `index.html`. Add an absolute `og:url` or canonical URL only after the final production address is confirmed.

## Architecture reference
Inspected `thegrindnet/mesilla_view_builders_website` current main on September 24, 2026, commit `ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e`. Followed its functional components, component-folder pattern, stylesheet imports, App assembly, constants module and relative Vite base. Restaurant-specific sections replace construction sections. Unlike the reference's checked-in docs output, this project deploys dist through Actions as requested.

## Normalize.css
`src/vendor/normalize.css` is the complete unmodified file downloaded from:
https://necolas.github.io/normalize.css/8.0.1/normalize.css

It is imported first in `src/main.jsx`, before custom global styles and App/component styles. The license and version comment are preserved.

## Accessibility and responsive behavior
Semantic landmarks, one H1, skip link, descriptive image labels, visible keyboard focus, native expandable FAQs, an accessible mobile navigation toggle with Escape support, reduced-motion styles, and mobile phone ordering. No fabricated form submission or empty buttons.

## Full source and verification
See the accompanying `SOURCE-CONTENTS.md` for every text source file in full, `DIRECTORY-TREE.txt` for the complete deliverable tree, and `VERIFICATION.md` for the checks performed. All binary assets and the full installable project are included in this ZIP.
