# The Date — landings

Independent public marketing app for https://thedate.now and https://save.thedate.now.
Extracted from lucast1574/thedate.now-front at 9429208, preserving both brands,
SEO guides, metadata, fonts and entrance animations.

The host selects the brand. Calls to action open https://crea.thedate.now or
https://studio.save.thedate.now. This app has no API credentials or backend dependency.

## Development

Use Node.js 24. Run `npm ci`, `npm run dev`, and `npm run check`.
For local wedding previews send Host: save.thedate.now.

## Deployment

Dokploy builds the root Dockerfile on main, port 3000. The existing public-domain
services use this repository. Studios and invitation containers continue using
thedate.now-front; the API remains in thedate.now-back.

`src/features/marketing` contains the sections and SEO helpers; `src/styles`
retains the original base/marketing cascade. Brand references live in `brand/`.

## Product previews and SEO

The homepages show read-only animated compositions. Editing and the interactive
demo stay in the studios. Existing entrance and hero components are preserved.
Motion stops outside the viewport and respects prefers-reduced-motion.

Static template SVGs are exported from the frontend catalogue. Regenerate with
`node scripts/export-product-previews.mjs /absolute/path/to/frontend`, then format
`src/features/marketing/template-preview-data.json`. The export records the source
commit. Fonts and Lucide icons retain their licenses in public/previews/licenses.
Previews use fictional names and photo placeholders, never customer assets.

Each public host has its own canonical URL, social metadata, structured data and
sitemap of five pages: home, invitation guide, templates, WhatsApp and guest
organization. Cross-brand topic paths return 404. Unknown hosts are noindex and
have no sitemap entries. Dates reflect this content update, not request time.
There are no invented reviews, ratings or price claims. Search Console rankings
and indexing were not measured; these changes improve the crawlable information
and technical foundations without promising search positions.
