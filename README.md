# Aaron Emmanuel Portfolio

Source for [aaronemmanuel.github.io](https://aaronemmanuel.github.io), built with Next.js and exported as a static site.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static export is published from the repository's `gh-pages` branch.

## Video playback

`ViewportVideo` plays muted when at least 25% of the video is visible and pauses
when it leaves that area or the browser tab is hidden. It preserves a viewer's
manual pause. Existing controls and loop choices remain; reduced-motion and
Save-Data preferences disable automatic playback. Videos use `preload="none"`
until playback is requested.

## Private analytics

Cloudflare Web Analytics reports are available only in the owner's signed-in
Cloudflare dashboard. There is no public counter or hidden statistics in the page.
The public beacon ID in `SiteAnalytics` only submits metrics; it does not grant
access to reports. The script loads only on `aaronemmanuel.github.io`, so local
previews do not pollute production traffic. Cloudflare's default SPA measurement
handles client-side navigation. Do not put account credentials or API keys here.


## Project presentation

The homepage and library preserve the original project order, with arm sorting last. The arm page opens with contact-grasp simulation footage, followed by three recorded tasks shown side by side on desktop and stacked on mobile. Videos use the shared muted viewport-autoplay player and respect reduced-motion preferences. The case study contains a readable progression, scoped results and optional engineering detail. Public assets include only the media used by the page; logs, audit records, the report and sampled operator capture remain in the local project archive.
