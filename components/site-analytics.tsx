"use client";

import { useEffect } from "react";

export function SiteAnalytics() {
  useEffect(() => {
    // This is a public beacon ID, not a dashboard credential. Local previews
    // do not send traffic into the portfolio's production analytics.
    if (window.location.hostname !== "aaronemmanuel.github.io") return;

    const script = document.createElement("script");
    script.id = "cloudflare-web-analytics";
    script.type = "module";
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({ token: "2d64431b65c24f5f8d478c723bb3227a" });
    document.body.appendChild(script);

    return () => { script.remove(); };
  }, []);

  return null;
}
