import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Aaron Emmanuel home"><span>AE</span><b>Aaron Emmanuel</b></Link>
      <nav aria-label="Primary navigation"><Link href="/about">About</Link><Link href="/projects">Projects</Link></nav>
      <span className="status"><i />Toronto, Canada</span>
    </header>
  );
}
