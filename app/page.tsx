import { ViewportVideo } from "@/components/viewport-video";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <section className="home-hero shell">
        <div className="home-copy">
          <p className="eyebrow">Mechatronics · Robotics · Intelligent systems</p>
          <h1>Building machines that <em>sense, decide,</em> and move.</h1>
          <p className="lede">I’m Aaron Emmanuel, a mechatronics engineering graduate completing a Master of Engineering at the University of Toronto. I’m interested in robotics, artificial intelligence, embedded systems, and the engineering required to turn ambitious ideas into working physical systems.</p>
          <div className="actions"><Link className="button primary" href="/projects">Explore projects <span>↗</span></Link><Link className="button quiet" href="/about">More about me</Link></div>
        </div>
        <div className="home-reel">
          <ViewportVideo loop poster="/cards/v2/cards-robots-poster.jpg" aria-label="Two self-balancing robots operating together"><source src="/cards/v2/cards-robots-together.mp4" type="video/mp4" /></ViewportVideo>
          <div className="reel-caption"><span>Featured system</span><strong>CARDS collaborative robot platform</strong></div>
        </div>
      </section>

      <section className="featured shell">
        <header className="section-head"><div><p className="eyebrow">Selected work</p><h2>Projects built across disciplines.</h2></div><p>Mechanical design, electronics, embedded intelligence, controls, fabrication, and system validation.</p></header>
        <div className="project-grid four-projects curated-projects">
          {projects.filter(p => ["cards", "circulr", "asl", "inspection"].includes(p.id)).map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
        <Link className="archive-link" href="/projects"><span>Explore physical builds and simulation projects</span><b>06 documented projects ↗</b></Link>
      </section>

      <section className="discipline-band shell">
        <p className="eyebrow">Areas of interest</p>
        <div><span>Robotics</span><span>Artificial intelligence</span><span>Embedded systems</span><span>Electrical engineering</span><span>Mechatronics</span><span>Intelligent sensing</span></div>
      </section>
    </main>
  );
}
