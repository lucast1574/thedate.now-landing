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
