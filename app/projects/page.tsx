import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero shell projects-hero"><p className="eyebrow">Project library · 06 case studies</p><h1>Systems designed,<br />built, and tested.</h1><div className="page-intro"><p>Physical machines, experimental testbeds, and simulated robots—organized by the evidence behind each build.</p><p>Industry, academic, and independent work share one engineering thread: connect the system, test its behavior, and explain the result.</p></div><nav className="collection-jumps" aria-label="Project categories"><a href="#physical">Physical builds &amp; testbeds <span>04 ↓</span></a><a href="#simulation">Simulation &amp; robotics software <span>02 ↓</span></a></nav></section>
      <section className="project-collection shell" id="physical" aria-labelledby="physical-title"><header className="collection-head"><div><p className="eyebrow">01 / Built and observed</p><h2 id="physical-title">Physical builds<br />&amp; testbeds.</h2></div><p>Working hardware and experiments with physical sensing. Motion planning combines a real camera-projector testbed with controlled simulation.</p></header><div className="library grouped-library">{projects.filter(p=>p.group==="physical").map(p=><ProjectCard key={p.id} {...p} />)}</div></section>
      <section className="project-collection shell" id="simulation" aria-labelledby="simulation-title"><header className="collection-head"><div><p className="eyebrow">02 / Simulate and evaluate</p><h2 id="simulation-title">Simulation &amp;<br />robotics software.</h2></div><p>Robot applications developed in controlled virtual environments. Case studies separate demonstrated software behavior from untested physical deployment.</p></header><div className="library grouped-library">{projects.filter(p=>p.group==="simulation").map(p=><ProjectCard key={p.id} {...p} />)}</div></section>
      <section className="coming-next shell"><span>Across the library</span><p>Each project identifies its context, my contribution, demonstrated outcome, and operating limits. Academic and personal labels describe where the work began; the case study shows what was achieved.</p></section>
    </main>
  );
}
