# Camera-Guided Robot Arm Sorting: engineering progression

An independent Ubuntu/ROS 2 simulation prototype for controlled component staging. No physical robot deployment claimed.

1. Establish gravity/contact manipulation with a scripted baseline and 60 expert episodes.
2. Retain failed direct action imitation: initial 0/18, corrective 0/18, recovery-augmented 6/18.
3. Develop a different learned kinematics model with conventional feedback. This is not a VLA or learned visual action policy.
4. Add actual image-input Qwen3-VL selection, independent proposal guards and calibrated depth localization.
5. Deploy the complete runtime on Ubuntu ARM64 and measure CPU inference/display bottlenecks.
6. Add independently advancing ROS 2 physics, feedback freshness, leases, held-contact monitoring and bounded recovery.
7. Preserve the first frozen reserved protocol: 14/15 checks and 9/10 placements. Correct supervised stationary sensing without relaxing deadlines; validate on separate development scenes.
8. Freeze a new complete protocol: 15/15 checks and 10/10 placements. Three clarifications, a moved-target refusal and lifted cancellation are separate outcomes. Raw model abstention/validated selection is 12/15, distinct from guarded execution.

Historical protocols differ and must not be pooled into a controlled success trend. Original evidence, unsuccessful experiments and operating boundaries are retained in the complete local release.

[Technical report](technical-report.pdf) · [Final cases](final-results.json) · [Final artifact audit](final-verification.json) · [First reserved cases](initial-results.json) · [Film provenance](film-manifest.json)
