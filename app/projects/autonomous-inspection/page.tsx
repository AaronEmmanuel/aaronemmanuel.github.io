import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const base = "/inspection";
const imageDimensions: Record<string, [number, number]> = {
  "pump-panel.png": [640, 480],
  "electrical-panel.png": [640, 480],
  "learned-raw.png": [640, 480],
  "learned-annotated.png": [640, 480],
  "learned-camera-training.png": [1980, 810],
  "go2-avoidance-paths.png": [2160, 1224],
  "go2-depth-pair.png": [1312, 565],
  "go2-depth-occlusion.png": [1320, 440],
};

export const metadata: Metadata = {
  title: "Autonomous Inspection with ROS 2 and Unitree Go2 | Aaron Emmanuel",
  description: "From TurtleBot LiDAR SLAM to SDK-driven Go2 simulation: autonomous inspection, learned RGB vision, obstacle response and aligned depth with object memory.",
  alternates: { canonical: "/projects/autonomous-inspection/" },
  openGraph: {
    title: "From ROS 2 to Go2 | Aaron Emmanuel",
    description: "Building and testing an autonomous inspection application across two simulated robot platforms.",
    images: [{ url: "/inspection/go2-depth-view.png", width: 1200, height: 740, alt: "Simulated Go2 inspection, navigation map, onboard RGB and aligned depth" }],
  },
};

function Film({ file, poster, label, caption }: { file: string; poster: string; label: string; caption: string }) {
  return <figure className="inspection-film"><video controls playsInline preload="none" poster={`${base}/${poster}`} aria-label={label}><source src={`${base}/${file}`} type="video/mp4" /></video><figcaption>{caption}<a href={`${base}/${file}`} target="_blank" rel="noreferrer">Open video ↗</a></figcaption></figure>;
}

function ImageEvidence({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return <figure className="inspection-image"><a href={`${base}/${file}`} target="_blank" rel="noreferrer" aria-label={`Enlarge: ${alt}`}><Image src={`${base}/${file}`} alt={alt} width={imageDimensions[file][0]} height={imageDimensions[file][1]} loading="lazy" /></a><figcaption>{caption}<span>Click to enlarge ↗</span></figcaption></figure>;
}

const chapters = [["foundation", "ROS 2 foundation"], ["inspection", "Inspection mission"], ["unitree", "Unitree integration"], ["vision", "Learned vision"], ["obstacles", "Obstacle response"], ["depth", "Depth and memory"]];

export default function InspectionPage() {
  return (
    <main className="case inspection-case">
      <header className="inspection-hero shell">
        <Link className="back-link" href="/projects">← All projects</Link>
        <div className="inspection-title-row"><div><p className="eyebrow">Independent project · October 2026 · Simulation</p><h1>From ROS 2<br />to <em>Go2.</em></h1></div><div><h2>Autonomous inspection, built one capability at a time.</h2><p>A wheeled robot established the navigation and inspection workflow. A simulated quadruped then carried the application through the Unitree SDK—with learned vision, obstacle response and a memory of what it had seen.</p><a className="button quiet" href="#foundation">Follow the development story ↓</a></div></div>
        <div id="top-demo"><Film file="go2-depth-tracking.mp4" poster="go2-depth-view.png" label="Completed Go2 inspection with navigation, RGB detection, depth and stationary object memory" caption="The completed system. Recorded depth mission replay with clearer labels, at 3× wall time; original measured motion and sensor data." /></div>
        <div className="inspection-at-a-glance"><div><span>Platforms</span><strong>TurtleBot 4 → Unitree Go2</strong></div><div><span>Application</span><strong>Navigate · inspect · return</strong></div><div><span>My focus</span><strong>Integration, perception and verification</strong></div></div>
      </header>

      <section className="case-overview shell"><div><p className="eyebrow">The challenge</p><h2>Make a robot do useful work.</h2></div><div><p>The goal was an inspection application that could travel between assets, read their indicators and return with recorded observations. Each extension had to produce evidence: movement, a camera result, a revised path or a persistent object location.</p><p>I built the mission software, ROS interfaces, SDK adapter, simulation server, perception model, depth tracker and verification tools around established robotics components. The project grew through separate preserved profiles, so each milestone could be inspected on its own.</p><div className="scope-tags"><span>ROS 2 / Linux</span><span>LiDAR / Nav2</span><span>C++ / Python</span><span>Unitree SDK2</span><span>RGB-D / PyTorch</span></div></div></section>

      <nav className="inspection-chapters shell" aria-label="Development chapters">{chapters.map(([id, title], i) => <a key={id} href={`#${id}`}><span>0{i + 1}</span>{title}</a>)}</nav>

      <div className="inspection-story shell">
        <section id="foundation" className="inspection-chapter">
          <header><span className="inspection-step">01</span><div><p className="eyebrow">ROS 2 foundation</p><h2>Start with a platform<br />that lets the application grow.</h2></div><div><p>The first custom chassis pitched during turns, disturbing the plane of the 2D LiDAR. I moved the application to the established TurtleBot 4 baseline in Gazebo Fortress, then tuned the VM simulation to keep the demonstration usable.</p><p>ROS 2 connects sensor streams, coordinate transforms and motion commands. LiDAR SLAM supplied the earlier map; saved-map AMCL localization and Nav2 supplied the inspection route.</p></div></header>
          <div className="inspection-explainer"><div><span>SLAM</span><p>Use laser scans and motion to build a map while estimating where the robot is.</p></div><div><span>Localization</span><p>Match current scans to a saved map to estimate the robot’s position.</p></div><div><span>Navigation</span><p>Plan a route, follow it and respond to obstacles using current sensor data.</p></div></div>
          <p className="inspection-note">TurtleBot is the LiDAR SLAM reference. The footage below shows a later saved-map inspection mission, rather than mapping a new room.</p>
        </section>

        <section id="inspection" className="inspection-chapter">
          <header><span className="inspection-step">02</span><div><p className="eyebrow">Make navigation useful</p><h2>Travel to an asset.<br />Look. Record a result.</h2></div><div><p>I added a mission layer that sends navigation goals, waits for arrival, collects fresh onboard images and records an inspection result before continuing home. Cancellation and navigation failures have explicit handling.</p><p>OpenCV reads known ArUco asset markers and the colour of a perspective-corrected indicator region. This demonstrates controlled visual inspection: healthy pump and valve indicators, and a warning electrical panel.</p></div></header>
          <Film file="inspection-mission.mp4" poster="turtlebot-inspection.png" label="TurtleBot inspection in Gazebo with following camera, RViz and onboard indicator reading" caption="TurtleBot 4 / Gazebo: following view, RViz and actual simulated onboard camera. Saved-map navigation; approximately 3× wall-time time-lapse." />
          <div className="inspection-pair"><ImageEvidence file="pump-panel.png" alt="Onboard image identifying the pump panel's green indicator as healthy" caption="Known asset ID + green indicator → healthy." /><ImageEvidence file="electrical-panel.png" alt="Onboard image identifying the electrical panel's red indicator as warning" caption="Known asset ID + red indicator → warning. These Go2 camera frames are from the later SDK-driven mission." /></div>
        </section>

        <section id="unitree" className="inspection-chapter">
          <header><span className="inspection-step">03</span><div><p className="eyebrow">Cross the robot interface</p><h2>Turn a ROS command<br />into a responding Go2.</h2></div><div><p>I first tested command mapping, limits, stop requests and error replies through the official C++ Unitree SDK2 against a local protocol test server. That established the communication contract; it did not yet demonstrate a moving robot.</p><p>The next backend connected those SDK calls to MuJoCo physics. A custom Sport API simulation server receives Move and StopMove calls; a credited pre-trained walking policy and motor control produce motion. Measured state returns through native DDS to ROS 2.</p></div></header>
          <div className="inspection-architecture" role="group" aria-label="Go2 command and feedback architecture"><p className="eyebrow">Commands become motion</p><ol>{[["Mission", "Inspection goals"], ["Nav2", "Planned velocity"], ["ROS relay", "Arm / freshness gates"], ["Unitree SDK2", "Native DDS calls"], ["Custom server", "Simulation Sport API"], ["MuJoCo + policy", "Motor torques / physics"]].map(([name, detail]) => <li key={name}><strong>{name}</strong><span>{detail}</span></li>)}</ol><div className="inspection-feedback"><span>Feedback ←</span><p>Measured pose and velocity → SDK / DDS → ROS odometry and TF. Simulated LiDAR and camera streams feed navigation and perception.</p></div></div>
          <Film file="go2-autonomous-inspection.mp4" poster="go2-inspection-view.png" label="SDK-driven Go2 completing the pump, valve, electrical and home inspection route" caption="Go2 inspection: motor-torque-driven simulation, official SDK calls and measured feedback. Supplied floorplan and physics-derived odometry; 3× wall time." />
          <div className="inspection-decision"><p className="eyebrow">A problem worth fixing</p><h3>Remove the repeated turn at home.</h3><p>Small gait drift repeatedly switched the navigation controller between approach and final-heading alignment. I added a C++ controller plugin with separate entry and exit radii, while retaining Nav2’s goal checker and collision checks. In the final comparison, home alignment went from 16 turn-direction reversals in 33.20 seconds to zero in 8.44 seconds.</p><a href={`${base}/evidence/arrival-audit.json`} target="_blank" rel="noreferrer">Inspect the recorded arrival audit ↗</a></div>
          <details className="inspection-details"><summary>See the earlier SDK communication test</summary><Film file="unitree-software-tests.mp4" poster="sdk-tests.png" label="Earlier Unitree SDK software tests against a local protocol emulator" caption="Earlier local SDK emulator: payload mapping, limits and error replies. Synthetic feedback; this stage does not drive either simulated robot." /></details>
        </section>

        <section id="vision" className="inspection-chapter">
          <header><span className="inspection-step">04</span><div><p className="eyebrow">Add learned perception</p><h2>Recognize objects<br />without asset markers.</h2></div><div><p>Marker-based panel reading is useful when the asset layout is known. To extend perception, I trained a compact PyTorch convolutional detector from scratch for traffic cones and fire extinguishers, using varied synthetic scenes.</p><p>The deployed ONNX model reads received ROS camera pixels and publishes standard detection messages. Six recognition targets are distributed around the room. They are visual fixtures; LiDAR handles collision avoidance separately.</p></div></header>
          <div className="inspection-metrics"><div><strong>91.2%</strong><span>precision</span></div><div><strong>90.2%</strong><span>recall</span></div><div><strong>600</strong><span>held-out images / 30 scenes</span></div><div><strong>183,814</strong><span>trained parameters</span></div></div>
          <p className="inspection-note">Held-out synthetic test, IoU ≥ 0.50. False detections occurred in 15 of 148 empty images. These results measure this dataset, rather than physical-world recognition.</p>
          <Film file="learned-camera-detection.mp4" poster="learned-camera-view.png" label="Go2 inspection with learned cone and extinguisher detections in its onboard camera" caption="Learned detector operating on the simulated robot’s actual ROS camera stream. Separate integrated trial; approximately 3× wall time." />
          <div className="inspection-pair"><ImageEvidence file="learned-raw.png" alt="Unannotated simulated onboard camera image containing a cone" caption="Received onboard RGB image." /><ImageEvidence file="learned-annotated.png" alt="The same camera image with a learned cone detection box" caption="The model’s detection from those pixels." /></div>
          <details className="inspection-details"><summary>Training and held-out evaluation</summary><ImageEvidence file="learned-camera-training.png" alt="Training and validation loss curves, plus held-out precision and recall by object class" caption="Scene-disjoint train / validation / test splits. Checkpoint and detection threshold selected using validation data." /></details>
        </section>

        <section id="obstacles" className="inspection-chapter">
          <header><span className="inspection-step">05</span><div><p className="eyebrow">Respond to the unexpected</p><h2>Find another route.<br />Or stop the mission.</h2></div><div><p>A saved route is only a starting point. I introduced a collision- and LiDAR-visible crate after the robot began moving, without editing the saved floorplan. Nav2 updated its obstacle representation and replanned around the rack to the same active goal.</p><p>A separate full-width barrier left no route. An explicit no-recovery behaviour tree aborted navigation; the application disarmed movement and physics confirmed settling. Tests compared received plans, scan endpoints, costmaps, SDK calls and measured motion.</p></div></header>
          <Film file="go2-obstacle-detour.mp4" poster="go2-avoidance-view.png" label="Go2 replanning around a newly introduced crate and completing its inspections" caption="New stationary crate → LiDAR observation → revised path → completed mission. Separate detour trial; approximately 3× wall time." />
          <div className="inspection-pair inspection-obstacle-pair"><ImageEvidence file="go2-avoidance-paths.png" alt="Original and revised Go2 paths around the introduced obstacle" caption="Recorded path and obstacle evidence from the detour trial." /><Film file="go2-blocked-passage.mp4" poster="go2-blocked-completed.png" label="Go2 aborting navigation and stopping when a barrier leaves no route" caption="No route → abort → disarm → measured settling. Separate barrier trial; approximately 3× wall time." /></div>
          <p className="inspection-note">The first clear revised plan was independently observed 0.833 seconds after crate insertion. This is a nominal simulated timing, not a worst-case or hardware stopping guarantee. The detour’s electrical inspection required three viewpoint refinements.</p>
        </section>

        <section id="depth" className="inspection-chapter">
          <header><span className="inspection-step">06</span><div><p className="eyebrow">Give detections a place</p><h2>See an object.<br />Remember where it was.</h2></div><div><p>A detection box says where an object is in an image. I added same-stamp RGB and metric depth, camera intrinsics and a stamped map transform to estimate visible surface points and their ranges.</p><p>A stationary-object tracker confirms repeated observations, associates new views with existing objects and remembers them when they leave view. Six confirmed objects receive stable public numbers 1–6; temporary candidates remain internal.</p></div></header>
          <ImageEvidence file="go2-depth-pair.png" alt="Aligned RGB and optical-Z depth with confirmed cone and extinguisher IDs and surface ranges" caption="Received RGB and depth from the same simulation state. Distances are camera-to-visible-surface ranges, rather than object-centre distance or collision clearance." />
          <div className="inspection-explainer"><div><span>Visible</span><p>Fresh RGB-D evidence updates the object’s map location and surface range.</p></div><div><span>Remembered</span><p>When the object is out of view, its marker fades and its observation age remains explicit.</p></div><div><span>Reacquired</span><p>A compatible later observation restores the same confirmed object number.</p></div></div>
          <ImageEvidence file="go2-depth-occlusion.png" alt="Two cones before occlusion, one completely hidden, then both reacquired with the same IDs" caption="Separate frozen-camera test with an opaque occluder and a changed camera pose. Six of six checks passed; this is stationary-object memory, not moving-person tracking." />
          <a className="button quiet" href="#top-demo">Return to the completed-system video ↑</a>
        </section>
      </div>

      <section id="evidence" className="inspection-results shell"><header><p className="eyebrow">Verify the complete chain</p><h2>Evidence behind<br />the demonstration.</h2><p>The final depth mission completed pump, valve, electrical and home goals. Checks connect commands to SDK handlers, feedback to physics, and perception outputs to actual received camera and depth payloads.</p></header><div className="inspection-metrics"><div><strong>17 / 17</strong><span>mission checks</span></div><div><strong>8 / 8</strong><span>camera checks</span></div><div><strong>12 / 12</strong><span>obstacle checks</span></div><div><strong>12 / 12</strong><span>depth checks</span></div></div><div className="inspection-result-copy"><p><strong>1,720 movement publications</strong> matched 1,720 native SDK Move handlers. All six fixtures acquired distinct confirmed identities. Separate blocked-passage and occlusion tests exercise behaviours that the nominal route alone cannot prove.</p><p>Passing describes these controlled trials. Transport was not lossless, detections had misses and false positives, and the small set of runs does not establish broad reliability.</p></div><div className="inspection-downloads"><a href={`${base}/technical-notes.md`} target="_blank" rel="noreferrer"><span>Architecture and scope</span><strong>Read the technical notes ↗</strong></a><a href={`${base}/evidence/final-depth-audits.json`} target="_blank" rel="noreferrer"><span>Recorded checks</span><strong>Inspect the final audit data ↗</strong></a><a href={`${base}/media-provenance.json`} target="_blank" rel="noreferrer"><span>Recording provenance</span><strong>Inspect the media record ↗</strong></a></div></section>

      <section className="inspection-scope shell"><div><p className="eyebrow">What this demonstrates</p><h3>Application engineering<br />across the robot stack.</h3><p>ROS 2 / Linux, LiDAR navigation, C++ and Python interfaces, SDK communication, mission logic, learned RGB perception, aligned depth, stationary-object memory and source-backed tests.</p></div><div><p className="eyebrow">Simulation boundaries</p><p>Go2 uses a supplied geometry-derived floorplan and simulator-derived odometry. The SDK is official; the Sport API server is custom simulation code. The walking policy is reused from <a href="https://github.com/wty-yy/go2_rl_gym" target="_blank" rel="noreferrer">wty-yy/go2_rl_gym ↗</a>, while the RGB detector was trained for this project.</p><p>Physical deployment, real sensor calibration, proprietary Sport locomotion, Go2 SLAM, moving-person tracking and hardware safety remain unverified. Depth is ideal synthetic RGB-D. Panel inspection uses known markers and indicators.</p><p>Videos show separate trials. Inspection footage is approximately 3× wall-time playback, with low capture frame rates. The final depth presentation was re-rendered from recorded measurements to improve labels; it is not a new live run.</p></div></section>
      <nav className="case-next shell"><Link href="/projects">Project library</Link><Link href="/projects/cards">Explore physical robotics · CARDS →</Link></nav>
    </main>
  );
}
