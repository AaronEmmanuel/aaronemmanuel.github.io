import Link from "next/link";

type ProjectCardProps = { number: string; title: string; summary: string; tags: string[]; href: string; media: string; poster: string; portrait?: boolean };

export function ProjectCard({ number, title, summary, tags, href, media, poster, portrait }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link href={href} className={`card-media${portrait ? " portrait" : ""}`} aria-label={`View ${title}`}>
        <video autoPlay muted loop playsInline preload="metadata" poster={poster}><source src={media} type="video/mp4" /></video>
        <span>{number}</span>
      </Link>
      <div className="card-body"><p>{tags.join(" · ")}</p><h3><Link href={href}>{title}</Link></h3><span>{summary}</span><Link className="case-link" href={href}>View case study ↗</Link></div>
    </article>
  );
}
