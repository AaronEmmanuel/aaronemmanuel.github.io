import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div><p className="eyebrow">Aaron Emmanuel</p><h2>Engineering for the real world.</h2></div>
      <div className="footer-links"><Link href="/about">About</Link><Link href="/projects">Projects</Link><a href="mailto:aaron.p.emmanuel@outlook.com">Email</a><a href="/Aaron-Emmanuel-Resume.pdf" target="_blank">Résumé</a><a href="https://ca.linkedin.com/in/aaron-emmanuel" target="_blank" rel="noreferrer">LinkedIn</a><Link href="/projects/circulr-rvm">Circulr RVM</Link></div>
      <p>Robotics · Mechatronics · Embedded systems · Electrical engineering · Artificial intelligence</p>
      <span>Portfolio 2026</span>
    </footer>
  );
}
