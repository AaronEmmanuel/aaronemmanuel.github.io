import Link from "next/link";
import { ProjectCard } from "@/components/project-card";

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
          <video autoPlay muted loop playsInline preload="metadata" poster="/cards/v2/robot-team.png" aria-label="Two self-balancing robots operating together"><source src="/cards/v2/cards-robots-together.mp4" type="video/mp4" /></video>
          <div className="reel-caption"><span>Featured system</span><strong>CARDS collaborative robot platform</strong></div>
        </div>
      </section>

      <section className="featured shell">
        <header className="section-head"><div><p className="eyebrow">Selected work</p><h2>Projects built across disciplines.</h2></div><p>Mechanical design, electronics, embedded intelligence, controls, fabrication, and system validation.</p></header>
        <div className="project-grid">
          <ProjectCard number="01" title="Collaborative Autonomous Robot Delivery System" summary="Two modular self-balancing robots developed as a collaborative delivery platform." tags={["Robotics", "Controls", "Electrical"]} href="/projects/cards" media="/cards/v2/cards-robots-together.mp4" poster="/cards/v2/robot-team.png" />
          <ProjectCard number="02" title="Sensor-Based ASL Recognition Glove" summary="A wearable sensing network that recognized ASL letters and produced visual and spoken output." tags={["Wearables", "Embedded", "Machine learning"]} href="/projects/asl-glove" media="/asl/v2/live-recognition-demo.mp4" poster="/asl/v2/glove-hero.jpg" portrait />
          <ProjectCard number="03" title="Dynamic Robot Motion Planning" summary="A comparative study of RRT-family replanning using controlled simulation and a live camera-projector workspace." tags={["Motion planning", "Computer vision", "Simulation"]} href="/projects/motion-planning" media="/motion-planning/planner-comparison.mp4" poster="/motion-planning/planner-snapshots.jpg" />
        </div>
        <Link className="archive-link" href="/projects"><span>View the complete project library</span><b>03 documented projects ↗</b></Link>
      </section>

      <section className="discipline-band shell">
        <p className="eyebrow">Areas of interest</p>
        <div><span>Robotics</span><span>Artificial intelligence</span><span>Embedded systems</span><span>Electrical engineering</span><span>Mechatronics</span><span>Intelligent sensing</span></div>
      </section>
    </main>
  );
}
