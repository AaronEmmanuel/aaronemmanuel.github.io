import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circulr Reverse Vending Machine | Aaron Emmanuel",
  description: "A reusable-container return machine designed, built, programmed, and tested by Aaron Emmanuel, deployed at Fiesta Farms in Toronto.",
};

const returnSteps = [
  ["Start", "A button begins the return session."],
  ["Scan", "The Raspberry Pi checks the barcode against a locally stored list of accepted containers."],
  ["Return", "An approved scan unlocks the return gate. Distance sensors monitor the handoff and flag removal or substitution."],
  ["Finish", "One printed receipt totals the accepted returns, ready to redeem as a grocery-store discount."],
];

export default function CirculrPage() {
  return (
    <main className="case circulr-case">
      <header className="circulr-hero shell">
        <div className="case-title">
          <Link className="back-link" href="/projects">← All projects</Link>
          <p className="eyebrow">Industry project · Circulr · 2024–2026</p>
          <h1>Making reuse<br /><em>returnable.</em></h1>
          <p>A compact reverse vending machine that accepts reusable containers and turns each return into a grocery-store reward.</p>
          <div className="circulr-hero-details"><strong>Circulr Reverse Vending Machine</strong><span>Designed, built, programmed, and tested by Aaron Emmanuel.</span></div>
          <a className="button quiet" href="#return-experience">See the return experience ↓</a>
        </div>
        <figure className="circulr-photo"><img src="/circulr/fiesta-farms.jpg" alt="Complete Circulr mini reverse vending machine installed at Fiesta Farms, with its green return gate, scanner, and customer instructions" fetchPriority="high" /><figcaption>Mini RVM · Fiesta Farms, Toronto</figcaption></figure>
      </header>

      <section className="circulr-milestones shell" aria-label="Project overview"><div><span>Ownership</span><strong>Concept to deployment</strong></div><div><span>Focus</span><strong>Mechanics + electronics + software</strong></div><div><span>In-store deployment</span><strong>October 2025</strong></div></section>

      <section className="case-overview shell"><div><p className="eyebrow">The challenge</p><h2>Make container returns part of the everyday shop.</h2></div><div><p>Circulr needed a practical way for customers to return reusable packaging in a grocery store. The machine had to validate each return, handle containers carefully, and issue a reward through a straightforward customer interaction.</p><p>As the sole engineer building the system, I connected mechanical design, electrical integration, software, fabrication, and testing into one working product.</p><div className="scope-tags"><span>Mechanical design</span><span>Embedded software</span><span>Electrical integration</span><span>Rapid prototyping</span><span>Deployment</span></div></div></section>

      <section id="return-experience" className="circulr-demo shell">
        <div><p className="eyebrow">01 / The return experience</p><h2>Scan. Return.<br />Get rewarded.</h2><p className="circulr-intro">A guided transaction connects a physical container to a validated refund, with the machine checking the handoff along the way.</p><ol className="return-steps">{returnSteps.map(([title, copy], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div>
        <figure className="circulr-video"><video autoPlay muted loop playsInline controls preload="metadata" poster="/circulr/return-poster.jpg" aria-label="Customer scanning and returning a container, then pressing the finish button"><source src="/circulr/return-demo.mp4" type="video/mp4" /></video><figcaption>A return at the deployed machine. Silent video.</figcaption></figure>
      </section>

      <section className="circulr-evolution shell"><header><p className="eyebrow">02 / Product evolution</p><h2>Smaller footprint.<br />A more focused machine.</h2><p>The first system explored four return streams. Store feedback and return patterns shaped a simpler, single-module product centered on jars and cans.</p></header><div className="evolution-grid"><article><span>Initial full-scale system</span><h3>Four streams, one platform.</h3><p>A four-module design accommodated wine bottles, mason jars, yogurt tubs, and cans. Its conveyor-based architecture established the first complete return system.</p></article><article><span>Deployed mini RVM</span><h3>Built around the most common returns.</h3><p>A compact single-module machine reduced the footprint and number of mechanisms. Focusing on jars and cans simplified the return path and made the customer interaction quicker.</p></article></div></section>

      <section className="circulr-engineering shell"><header><p className="eyebrow">03 / Engineering the product</p><h2>One machine.<br />Connected disciplines.</h2></header><div className="engineering-grid"><article><span>Mechanical development</span><h3>Handle reusable containers carefully.</h3><p>Chute geometry and cushioning were refined through rapid prototypes and repeated testing. The aim was a reliable slide into storage without sticking or damaging glass containers.</p></article><article><span>Electrical integration</span><h3>Build with proven components.</h3><p>Off-the-shelf sensors, servo motors, a barcode scanner, and a receipt printer were integrated around a Raspberry Pi. Component choices prioritized cost, availability, and speed to market.</p></article><article><span>Embedded software</span><h3>Validate the whole transaction.</h3><p>Python software manages the approved-barcode list, gate behavior, sensor feedback, item values, and receipt total. A rejected barcode leaves the gate locked; a detected handoff error excludes that item from the refund.</p></article><article><span>Operational reliability</span><h3>Recover without a manual restart.</h3><p>Automatic startup, watchdog monitoring, and timeout-triggered restarts were added to address observed software failures and support unattended operation in the store.</p></article></div></section>

      <section className="circulr-results shell"><header><p className="eyebrow">04 / Tested performance</p><h2>Validated at the item and system level.</h2></header><div className="circulr-result-grid"><div><strong>6 + cans</strong><span>supported mason-jar SKUs plus aluminum cans</span></div><div><strong>100%</strong><span>identification of supported items in testing</span></div><div><strong>100%</strong><span>rejection of tested unsupported containers</span></div><div><strong>~1 s</strong><span>processing time per item</span></div><div><strong>40%</strong><span>under the approved project budget</span></div></div></section>

      <section className="circulr-deployment shell"><div><p className="eyebrow">05 / In the real world</p><h2>From the workshop<br />to Fiesta Farms.</h2><p>In-store testing began at Fiesta Farms in Toronto in September 2025, followed by customer deployment in October. Circulr recorded the last reported issue in March 2026, followed by six months without a reported failure.</p><p className="circulr-source-note">Identification, rejection, and processing results were recorded during project testing. The six-month operational update was reported by Circulr and is not an independently measured uptime statistic.</p></div><div className="circulr-timeline"><div><span>June 2024 – August 2025</span><strong>Full-time technical lead</strong><p>Design, integration, build, software development, and testing.</p></div><div><span>September 2025</span><strong>Initial in-store testing</strong><p>Single-module RVM installed and tested at Fiesta Farms.</p></div><div><span>October 2025</span><strong>Customer deployment</strong><p>The return experience entered customer operation.</p></div><div><span>Through June 2026</span><strong>Continued development and support</strong><p>Part-time work as an independent contractor following the full-time role.</p></div></div></section>

      <section className="credits shell"><div><span>Designed & built</span><p>Aaron Emmanuel · Sole technical lead</p></div><div><span>Company</span><p><a href="https://circulr.ca/collection-technology/" target="_blank" rel="noreferrer">Circulr · Reusable packaging collection technology ↗</a></p></div></section>
      <nav className="case-next shell"><Link href="/projects/motion-planning">← Motion Planning</Link><Link href="/projects">All projects ↗</Link></nav>
    </main>
  );
}
