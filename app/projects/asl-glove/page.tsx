import Link from "next/link";

const facts = [["A–Z","complete alphabet"],["8","fused sensor features"],["~50 Hz","live sensing rate"],["2","visual and spoken outputs"]];

export default function AslGlovePage() {
  return (
    <main className="case asl-case">
      <header className="case-hero shell">
        <div className="case-title"><Link className="back-link" href="/projects">← All projects</Link><p className="eyebrow">Master of Engineering · 2025</p><h1>Sensor-Based ASL Recognition Glove</h1><p>A wearable sensing network that translated hand gestures into visible and spoken letters.</p></div>
        <figure className="case-film portrait-film"><video autoPlay muted loop playsInline preload="auto" poster="/asl/v2/glove-hero.jpg" aria-label="ASL glove recognizing hand gestures in front of the live interface"><source src="/asl/v2/live-recognition-demo.mp4" type="video/mp4" /></video><figcaption><span>Live sensing</span><span>Bluetooth</span><strong>Recognition in real time</strong></figcaption></figure>
      </header>

      <section className="case-overview shell"><div><p className="eyebrow">System developed</p><h2>Wearable sensing connected to intelligent output.</h2></div><div><p>Five flex sensors and a six-axis IMU captured finger posture and hand movement. An ESP32 conditioned and streamed the data to a Python recognition pipeline with networked display and text-to-speech output.</p><div className="scope-tags"><span>Wearable hardware</span><span>Embedded sensing</span><span>Bluetooth</span><span>Machine learning</span><span>Python interface</span></div></div></section>

      <section className="story shell">
        <header className="story-head"><p className="eyebrow">Project storyline</p><h2>From hand motion to recognized language.</h2></header>

        <article className="story-step"><div className="step-number">01</div><div className="step-copy"><span>Wearable architecture</span><h3>Capture finger shape and whole-hand motion.</h3><p>Five flex sensors measured individual finger bend while an MPU6050 captured orientation and movement. An ESP32 at the wrist sampled both sensing modes and prepared the signals for live transmission.</p></div><div className="media-grid three components"><figure className="media dark contain"><img src="/asl/v2/glove-hero.jpg" alt="Complete ASL recognition glove" /></figure><figure className="media light contain"><img src="/asl/v2/flex-sensor.jpg" alt="Flex sensor used to measure finger bend" /></figure><figure className="media light contain"><img src="/asl/v2/imu-component.jpg" alt="MPU6050 inertial sensor" /></figure></div></article>

        <article className="story-step"><div className="step-number">02</div><div className="step-copy"><span>Integration</span><h3>Package sensing and control into a wearable prototype.</h3><p>The ESP32, inertial sensor, wiring, and finger sensors were integrated directly into the glove. Placement and strain relief mattered because the electrical system needed to remain stable through repeated hand movement.</p></div><div className="media-grid two tall"><figure className="media dark contain"><img src="/asl/v2/esp32-wrist.jpg" alt="ESP32 controller mounted at the glove wrist" /></figure><figure className="media dark contain"><img src="/asl/v2/imu-closeup.jpg" alt="MPU6050 installed on the ASL glove" /></figure></div></article>

        <article className="story-step"><div className="step-number">03</div><div className="step-copy"><span>Condition and calibrate</span><h3>Turn flexible hardware into repeatable data.</h3><p>Exponential moving averages, a small dead band, fixed ADC settings, and IMU filtering reduced jitter. Per-finger rest and full-bend calibration adapted the glove to sensor and fit variation.</p></div><div className="signal-panel"><div><span>01</span><strong>Sample</strong></div><i>→</i><div><span>02</span><strong>Filter</strong></div><i>→</i><div><span>03</span><strong>Normalize</strong></div><i>→</i><div><span>04</span><strong>Fuse</strong></div></div></article>

        <article className="story-step"><div className="step-number">04</div><div className="step-copy"><span>Recognize</span><h3>Fuse eight features into one gesture representation.</h3><p>Five normalized bend values and three accelerometer axes formed an eight-feature vector. Python and scikit-learn were used to compare k-nearest neighbors, Random Forest, support vector machine, and multilayer perceptron models. kNN was selected for the live pipeline.</p></div><div className="recognition-panel"><div className="feature-vector">{["F1","F2","F3","F4","F5","AX","AY","AZ"].map(x=><span key={x}>{x}</span>)}</div><div className="model-row"><strong>kNN selected</strong><span>Random Forest</span><span>SVM</span><span>MLP</span></div></div></article>

        <article className="story-step"><div className="step-number">05</div><div className="step-copy"><span>Communicate</span><h3>Make the recognized result available across devices.</h3><p>The Python interface displayed each recognized letter and could speak it aloud. Any device on the same Wi-Fi network could open the shared live interface. The complete alphabet, including dynamic J and Z gestures, was included in the demonstration.</p></div><div className="media-grid demo-layout"><figure className="media dashboard"><img src="/asl/v2/live-dashboard.png" alt="Live ASL recognition dashboard showing the word REST" /><figcaption>Network interface · visual and spoken output</figcaption></figure><figure className="media portrait-demo"><video autoPlay muted loop playsInline preload="metadata" poster="/asl/v2/glove-hero.jpg"><source src="/asl/v2/live-recognition-demo.mp4" type="video/mp4" /></video><figcaption>Live demonstration</figcaption></figure></div></article>
      </section>

      <section className="facts shell">{facts.map(([value,label])=><div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="credits shell"><div><span>Team</span><p>Aaron Emmanuel · George Mikhaiel</p></div><div><span>Course</span><p>MIE1050H · Design of Intelligent Sensor Networks</p></div></section>
      <nav className="case-next shell"><Link href="/projects/cards">← Previous project · CARDS</Link><Link href="/projects">Project library</Link></nav>
    </main>
  );
}
