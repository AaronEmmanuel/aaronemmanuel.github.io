import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div><p className="eyebrow">Aaron Emmanuel</p><h2>Engineering for the real world.</h2></div>
      <div className="footer-links"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/projects/cards">CARDS</Link><Link href="/projects/asl-glove">ASL Glove</Link><Link href="/projects/motion-planning">Motion Planning</Link></div>
      <p>Robotics · Mechatronics · Embedded systems · Electrical engineering · Artificial intelligence</p>
      <span>Portfolio 2026</span>
    </footer>
  );
}
