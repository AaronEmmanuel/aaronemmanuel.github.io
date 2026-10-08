# Autonomous inspection with ROS 2 and Unitree Go2

Aaron Emmanuel — independent project, October 2026.

## Development sequence

1. TurtleBot 4 / ROS 2 Humble / Gazebo Fortress established simulated LiDAR SLAM,
   saved-map localization, Nav2 navigation and a three-station inspection workflow.
2. OpenCV ArUco asset IDs, perspective-corrected regions and HSV classification
   read known indicator panels. This is controlled indicator reading, not general
   equipment fault diagnosis.
3. A Python ROS adapter and official C++ Unitree SDK2 worker map navigation
   commands into native DDS Sport Move1008 / StopMove1003 calls. Early protocol
   tests used a local emulator with synthetic feedback.
4. A custom native Sport API simulation server connects that SDK interface to
   MuJoCo motor torques, a reused ONNX walking policy and motor PD control.
   Measured physics state returns through SDK SportModeState and DDS to ROS.
5. An original PyTorch RGB detector adds cone/extinguisher recognition. ONNX
   Runtime consumes received camera pixels and publishes Detection2DArray.
6. Newly introduced stationary collision/LiDAR fixtures test replanning and
   explicit no-route mission disarming. The saved floorplan is unchanged.
7. Same-stamp RGB, metric depth, CameraInfo and map-to-camera TF add visible
   surface range and stationary-object map memory.

## Command and sensing architecture

Inspection goals → Nav2 → mission-armed ROS relay / freshness gates → ROS SDK
adapter → official Unitree SDK2 worker → native DDS → custom Sport simulation
server → reused walking policy / PD motor torques → MuJoCo physics.

Measured pose, velocity and orientation return through the SDK/DDS state channel.
The Go2 profile uses simulator-truth-derived odometry. AMCL localizes against a
supplied geometry-derived floorplan. This does not demonstrate Go2 SLAM or an
independent hardware odometer.

The simulated tilted body LiDAR casts seven rings across 360 azimuths. The raw
PointCloud2 stays available; orientation leveling and a height band produce the
virtual gravity-level LaserScan used by 2D navigation. The onboard RGB camera is
a generic synthetic camera model, not calibrated physical Go2 sensing.

## Control correction

Small gait drift at home repeatedly crossed the controller's approach/alignment
boundary. A C++ plugin subclasses Humble regulated pure pursuit, enters alignment
inside 0.18 m and retains it until departure exceeds 0.26 m. It retains the actual
goal checker and RPP collision/regulation checks. A different goal resets phase.

Recorded baseline: 16 meaningful turn-command reversals / 33.20 s alignment.
Final fixed run: zero reversals / 8.44 s. This is a specific arrival regression,
not general gait smoothness or precise velocity tracking.

[Final arrival audit](evidence/arrival-audit.json).

## Learned detector

Original eight-convolution centre/box network, 183,814 parameters, trained from
scratch in PyTorch. 2,800 / 480 / 600 train / validation / test images come from
140 / 24 / 30 disjoint synthetic scenes. Checkpoint and confidence threshold were
selected with validation data. No cross-split RGB hashes overlap.

Independent CPU ONNX evaluation at IoU 0.50: 663 TP, 64 FP, 72 FN; 91.20%
precision and 90.20% recall. False detections occurred in 15 / 148 empty test
images. Views within scenes are correlated. Real-world generalization is untested.

Recognition fixtures are visual-only. Learned labels do not control collision
avoidance; Nav2 uses LiDAR. This detector is distinct from the reused gait policy.

## Obstacle response

The crate appears only after an accepted goal and measured motion. Physical
collision geometry and navigation LiDAR see it; there is no saved-map or keepout
injection. In the final detour trial, the first independently received clear
revised plan arrived 0.833 s after applied obstacle state. Minimum sampled padded
footprint clearance was 0.439 m; named collision contacts were checked per 2 ms
physics integration step. Electrical required three viewpoint refinements.

The separate full-width barrier trial uses an explicit no-recovery behaviour tree.
The action aborts when replanning cannot find a route; the application disarms,
no later nonzero SDK publications are recorded, and physics settles. Twelve
checks passed. These are nominal simulated measurements, not hardware safety or
worst-case stopping bounds. They are new stationary obstacles, not moving people.

[Blocked-passage audit](evidence/blocked-audit.json).

## Aligned depth and object memory

Onboard RGB and MuJoCo metric depth use the same simulation state, 640×480
dimensions, stamp, optical frame and intrinsics. Depth is 32FC1 optical-Z metres;
0.1–8 m valid, NaN outside. This is ideal synthetic RGB-D, not stereo/learned
depth, physical calibration or a noise model.

The ROS tracker accepts the learned detection arrays, received depth/RGB,
CameraInfo and stamped map-to-camera TF. Exact-stamp fusion rejects stale,
invalid and missing-transform cases. Robust narrow-box surface pixels are
backprojected through the intrinsics. Displayed Euclidean camera-to-visible-
surface range differs from optical-Z; it is not object centre or collision clearance.

Same-class one-to-one association uses 0.45 m XY / 0.30 m Z gates, withholding
near ties. Three observations confirm a track. Tentative tracks expire after
1.5 s; confirmed stationary memory persists for up to 300 simulation seconds.
Remembered markers fade and retain explicit age. Public numbers allocate only
on confirmation and remain stable on reacquisition; private candidate IDs persist
internally. This is not moving-object velocity or person tracking.

## Final integrated evidence

depth_tracking_final_1: 17 / 17 mission, 8 / 8 camera, 12 / 12 obstacle and
12 / 12 depth checks. Four single-action navigation goals complete pump, valve,
electrical and home. 1,720 movement publications match 1,720 SDK Move handlers;
13 Stop handlers and 3,713 DDS samples match physics. Six fixtures each obtain
one distinct confirmed identity.

375 matched RGB-D/TF pairs support the tracker; delivery/fusion is not lossless.
False boxes and missed detections remain in the evidence. A separate nine-frame
frozen-camera opaque-occluder test passed 6 / 6 checks, preserving identity after
the view changed. It is not a moving-robot or moving-person occlusion test.

[Final integrated audit payloads](evidence/final-depth-audits.json).

## Recording and public numbering

The final depth video is a post-run presentation replay of immutable measured
data, with larger unclipped labels and public numbers 1–6. Original spectator
imagery is reused; saved ROS RGB/depth are decoded and reannotated; the map is
rebuilt from prior recorded events. Normal JPEG/MP4 re-encoding applies. The
original live source/config snapshot and media remain archived separately.
The corrected display sources have not been rerun in a new integrated live mission.

Seven display checks pass, including 2,011 in-bounds map-label placements across
397 frames and nonoverlapping camera labels on all received tracking frames.
[Display checks](evidence/display-tests.json).

Inspection movies show separate trials at approximately 3× wall-time playback.
The depth replay contains 397 frames, lasts 63.44 s and retains the original
approximately 2.086 fps / 189.83 s capture cadence. Playback speed is not
simulation speed. The early SDK test and
[initial Go2 motion video](go2-physics-response.mp4) use normal wall-time playback.
[Media hashes and original trial captions](media-provenance.json).

## Ownership and reused components

Project contributions: mission and inspection software, ROS relays/interfaces,
official-SDK adapter and native worker, custom simulation Sport server, C++
arrival plugin, simulated sensor publication/projection, own RGB training/inference,
RGB-D fusion/stationary tracker, logging, audits and presentation tools.

Upstream components: ROS 2, Nav2 planning/controllers, AMCL, SLAM Toolbox,
TurtleBot 4 simulation, official Unitree SDK2, OpenCV, PyTorch/ONNX and MuJoCo.
Path planning is integration of upstream Nav2 algorithms, not an original planner.

Reused model/policy deployment: [wty-yy/go2_rl_gym](https://github.com/wty-yy/go2_rl_gym),
commit 30e74dc507bec7a642a8c98be26081f2c6f0822d. The pre-trained walking policy was
reused rather than trained for this project. The custom server is not Unitree's
proprietary Sport controller. Vendor firmware modes/leases, physical sensors and
calibration, hardware deployment, rough terrain, manipulation, precise velocity
tracking, hard real-time operation and broader reliability remain unverified.

## Source and reproducibility

The implementation, tests, trained RGB model and full raw evidence are retained
locally. This website publishes selected recordings, technical notes and recorded
audit results. The source archive and datasets are not publicly downloadable here.
A clean second-machine full bootstrap has not been tested.
