import Link from "next/link";

const interests = ["Robotics and autonomous systems", "Artificial intelligence", "Embedded electronics", "Intelligent sensing", "Control systems", "Electrical system design"];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero shell about-hero"><p className="eyebrow">About me</p><h1>Curious about the entire system.</h1><div className="page-intro"><p>I’m a mechatronics engineering graduate completing a Master of Engineering at the University of Toronto.</p><p>My interests sit where physical design, electronics, computation, and intelligent behavior come together. I enjoy understanding how every part of a system affects the final result, then working through the details needed to make it reliable.</p></div></section>
      <section className="about-grid shell">
        <div><p className="eyebrow">What interests me</p><h2>Machines that understand and interact with the physical world.</h2></div>
        <div className="interest-list">{interests.map((item, index)=><div key={item}><span>{String(index + 1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div>
      </section>
      <section className="about-note shell"><div><p className="eyebrow">How I approach projects</p><h2>Follow the problem across disciplines.</h2></div><p>My projects often move through concept development, mechanical and electrical design, embedded programming, system integration, and physical testing. I value the iteration that happens between those stages because that is usually where the most useful engineering decisions emerge.</p></section>
      <section className="next-panel shell"><p className="eyebrow">See the work</p><h2>Explore the systems behind the ideas.</h2><Link className="button primary" href="/projects">View all projects ↗</Link></section>
    </main>
  );
}
