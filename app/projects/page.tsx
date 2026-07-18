import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero shell projects-hero"><p className="eyebrow">Project library</p><h1>Systems designed, built, and tested.</h1><div className="page-intro"><p>A growing archive of university, graduate, and independent engineering work.</p><p>Each case study follows the project from early decisions through design, integration, and demonstrated results.</p></div></section>
      <section className="library shell">
        <ProjectCard number="01" title="Collaborative Autonomous Robot Delivery System" summary="Two modular self-balancing robots developed as a collaborative delivery platform, combining custom mechanics, embedded electronics, control software, and system testing." tags={["University capstone", "Robotics", "2024–2025"]} href="/projects/cards" media="/cards/v2/cards-robots-together.mp4" poster="/cards/v2/robot-team.png" />
        <ProjectCard number="02" title="Sensor-Based ASL Recognition Glove" summary="A wearable intelligent sensing network that fused finger bend and hand motion to recognize the complete ASL alphabet with live visual and spoken output." tags={["Master's project", "Wearable sensing", "2025"]} href="/projects/asl-glove" media="/asl/v2/live-recognition-demo.mp4" poster="/asl/v2/glove-hero.jpg" portrait />
        <ProjectCard number="03" title="Dynamic Robot Motion Planning" summary="A common replanning framework used to compare RRT, RRT-Connect, RRT*, and RRTX across a repeatable dynamic simulation and a live physical camera-projector testbed." tags={["Master's project", "Motion planning", "2026"]} href="/projects/motion-planning" media="/motion-planning/planner-comparison.mp4" poster="/motion-planning/planner-snapshots.jpg" />
      </section>
      <section className="coming-next shell"><span>Next</span><p>Additional graduate, undergraduate, and independent projects will join this library as they are documented.</p></section>
    </main>
  );
}
