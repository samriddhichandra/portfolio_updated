import { useEffect, useMemo, useRef, useState } from "react";
import "./styles/AiMlRos.css";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Environment,
  Float,
  Line,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { FaBrain, FaChartLine, FaProjectDiagram, FaRobot } from "react-icons/fa";

type NodePoint = {
  position: [number, number, number];
  size: number;
};

function NeuralSculpture() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  const { nodes, links } = useMemo(() => {
    const makeLayer = (z: number, count: number, radius: number) => {
      const pts: NodePoint[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const jitter = 0.25 * (i % 2 === 0 ? 1 : -1);
        pts.push({
          position: [
            Math.cos(angle) * radius + jitter,
            Math.sin(angle) * radius - jitter,
            z,
          ],
          size: 0.12 + ((i * 13) % 7) * 0.01,
        });
      }
      return pts;
    };

    const layerA = makeLayer(-1.3, 10, 1.8);
    const layerB = makeLayer(0, 12, 2.2);
    const layerC = makeLayer(1.3, 10, 1.8);
    const allNodes = [...layerA, ...layerB, ...layerC];

    const makeLinks = (a: NodePoint[], b: NodePoint[]) => {
      const lines: [THREE.Vector3, THREE.Vector3][] = [];
      a.forEach((na, i) => {
        const pick1 = b[(i * 3) % b.length];
        const pick2 = b[(i * 7 + 2) % b.length];
        lines.push([
          new THREE.Vector3(...na.position),
          new THREE.Vector3(...pick1.position),
        ]);
        lines.push([
          new THREE.Vector3(...na.position),
          new THREE.Vector3(...pick2.position),
        ]);
      });
      return lines;
    };

    const allLinks = [...makeLinks(layerA, layerB), ...makeLinks(layerB, layerC)];
    return { nodes: allNodes, links: allLinks };
  }, []);

  useFrame((_state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.22;
    if (core.current) core.current.rotation.x += delta * 0.3;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={core}>
          <torusKnotGeometry args={[0.55, 0.18, 160, 24]} />
          <meshStandardMaterial
            color="#c2a4ff"
            emissive="#8a56ff"
            emissiveIntensity={0.9}
            metalness={0.35}
            roughness={0.22}
          />
        </mesh>
      </Float>

      {links.map(([a, b], idx) => (
        <Line
          key={idx}
          points={[a, b]}
          color="#b0a0ff"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}

      {nodes.map((n, idx) => (
        <Float
          key={idx}
          speed={1.8}
          rotationIntensity={0.2}
          floatIntensity={0.45}
          floatingRange={[-0.15, 0.15]}
        >
          <mesh position={n.position}>
            <icosahedronGeometry args={[n.size, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#c2a4ff"
              emissiveIntensity={0.25}
              metalness={0.2}
              roughness={0.35}
            />
          </mesh>
        </Float>
      ))}

      <Sparkles
        count={85}
        size={1.4}
        speed={0.35}
        opacity={0.6}
        color="#c2a4ff"
        scale={[8, 6, 6]}
      />
    </group>
  );
}

function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 7.5], fov: 40, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true }}
      className="aimlros-canvas"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[6, 4, 6]} intensity={1.2} />
      <pointLight position={[-6, -2, 2]} intensity={0.8} color="#c2a4ff" />
      <NeuralSculpture />
      <Environment preset="night" environmentIntensity={0.65} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}

const AiMlRos = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setIsActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aimlros-section" id="aiml" ref={containerRef}>
      <div className="aimlros-container">
        <div className="aimlros-header">
          <h2 className="title">AI / ML • ROS • Data Science</h2>
          <p className="para">
            I'm interested in building intelligent robotics software where{" "}
            <span className="aimlros-highlight">perception</span>,{" "}
            <span className="aimlros-highlight">planning</span>, and{" "}
            <span className="aimlros-highlight">real‑time systems</span> meet
            great UX. My focus is turning messy, high‑frequency robot data into
            reliable decisions and operator experiences—dashboards, tools, and
            workflows that feel effortless but stay production‑safe.
          </p>
        </div>

        <div className="aimlros-grid">
          <div className="aimlros-left">
            <div className="aimlros-pillRow" aria-label="Areas of interest">
              <div className="aimlros-pill">ROS2 toolchains</div>
              <div className="aimlros-pill">Telemetry + analytics</div>
              <div className="aimlros-pill">Perception pipelines</div>
              <div className="aimlros-pill">Simulation + digital twins</div>
              <div className="aimlros-pill">Edge deployment</div>
            </div>

            <div className="aimlros-cards">
              <div className="aimlros-card">
                <div className="aimlros-cardIcon" aria-hidden="true">
                  <FaRobot />
                </div>
                <h4>ROS dashboards that feel native</h4>
                <p>
                  I want to build modern operator UIs for ROS data—bag playback,
                  topic inspection, safety layers, and live maps—optimized for
                  latency and clarity.
                </p>
              </div>
              <div className="aimlros-card">
                <div className="aimlros-cardIcon" aria-hidden="true">
                  <FaBrain />
                </div>
                <h4>Perception → decisions</h4>
                <p>
                  From model experiments to production pipelines: dataset
                  tooling, evaluation, and monitoring so ML stays measurable and
                  dependable in the real world.
                </p>
              </div>
              <div className="aimlros-card">
                <div className="aimlros-cardIcon" aria-hidden="true">
                  <FaProjectDiagram />
                </div>
                <h4>Systems thinking</h4>
                <p>
                  I enjoy designing end‑to‑end architectures—streaming,
                  validation, storage, and visualization—so robotics software
                  scales with confidence.
                </p>
              </div>
              <div className="aimlros-card">
                <div className="aimlros-cardIcon" aria-hidden="true">
                  <FaChartLine />
                </div>
                <h4>Data stories that drive action</h4>
                <p>
                  Turning telemetry into insights: anomaly cues, trend
                  dashboards, and "why it happened" views that help teams debug
                  faster.
                </p>
              </div>
            </div>
          </div>

          <div className="aimlros-right">
            <div className="aimlros-viewer" aria-label="Interactive 3D visual">
              {isActive ? (
                <Scene3D />
              ) : (
                <div className="aimlros-viewerPlaceholder">
                  <div className="aimlros-placeholderTitle">3D Visual</div>
                  <div className="aimlros-placeholderSub">
                    Scroll a bit more to activate
                  </div>
                </div>
              )}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMlRos;