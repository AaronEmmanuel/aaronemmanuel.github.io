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

The homepage and project library preserve the original single-list order: inspection, CARDS, ASL glove, motion planning, Circulr, and arm sorting. Numbering is sequential, and CARDS remains the homepage hero. The arm case study uses original sampled workcell recordings for its main demonstration and interruption examples. Videos use the shared viewport player: muted autoplay on entry, pause offscreen, manual controls, and reduced-motion/data-saving preferences. The original editorial film remains archived with its exact edit manifest; it is not the primary demonstration.

The arm case study leads with a recorded Ubuntu language workflow and plain-language progression. Detailed architecture and measured limits are expandable on the page. The technical report is retained in the private local project release and removed from public website assets. The new language video is a sampled stepped-mode operator demonstration; continuous evaluation and fresh operator failures are kept distinct.
