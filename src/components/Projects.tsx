import "./styles/Projects.css";
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const projects = [
    {
      title: "Dynamic Dashboard Builder",
      company: "Eric Robotics",
      year: "2025",
      category: "Full Stack",
      overview:
        "Production drag-and-drop dashboard platform with modular widgets and real-time data binding",
      description:
        "Built a scalable, reusable widget platform enabling teams to create custom dashboards without code. Architected separation of concerns across React frontend (UI builder), Express backend (API layer), and MySQL (persistence). Implemented drag-and-drop state management for layout updates and configuration storage.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MySQL",
        "GSAP",
        "REST APIs",
      ],
      impact: "40% reduction in dashboard development time",
      architecture: {
        title: "Dashboard Builder Architecture",
        layers: [
          {
            name: "React Client",
            description: "Drag-and-drop UI with real-time layout preview",
          },
          {
            name: "Widget Registry",
            description: "Modular component system for feature reusability",
          },
          {
            name: "Layout Engine",
            description: "Serialization and persistence of dashboard configs",
          },
          {
            name: "Express API",
            description: "RESTful endpoints for CRUD operations",
          },
          {
            name: "Node Services",
            description: "WebSocket layer for real-time data binding",
          },
          {
            name: "MySQL",
            description: "Persisted dashboard configs and layouts",
          },
        ],
        keyPoints: [
          "Widget registry keeps features modular and reusable across apps",
          "Persisted layout serialization makes dashboards portable and versionable",
          "Real-time streams stay separate from config writes for reliability",
        ],
      },
    },
    {
      title: "Real-Time Robot Control Dashboard",
      company: "Eric Robotics",
      year: "2025",
      category: "Full Stack & Real-Time",
      overview:
        "Cross-platform control UI with video streaming, safety constraints, and ~25% performance improvement",
      description:
        "Engineered a production-grade robot control system with low-latency bidirectional communication. Implemented safety validation layer enforcing speed limits and execution constraints. Optimized streaming pipeline to keep UI responsive under continuous telemetry updates.",
      technologies: [
        "React.js",
        "Node.js",
        "WebSockets",
        "Video Streaming",
        "Safety Logic",
      ],
      impact: "25% performance improvement, sub-100ms command latency",
      architecture: {
        title: "Robot Control System Design",
        layers: [
          {
            name: "Operator UI",
            description: "Real-time control interface and telemetry dashboard",
          },
          {
            name: "WebSocket Commands",
            description: "Low-latency command channel for direct control",
          },
          {
            name: "Node/Express Gateway",
            description: "Central message router and request handler",
          },
          {
            name: "Safety Validator",
            description: "Speed limits, execution constraints, emergency stop",
          },
          {
            name: "Telemetry Stream",
            description: "High-volume sensor data, video feeds, status updates",
          },
          {
            name: "Robot Hardware/MCU",
            description:
              "Motor controllers, sensors, and embedded safety circuits",
          },
        ],
        keyPoints: [
          "Safety validation enforces speed limits and execution constraints",
          "WebSocket channels separate command/control from high-volume telemetry",
          "Streaming pipeline stays isolated to keep UI responsive under load",
        ],
      },
    },
    {
      title: "Autonomous Mapping UI",
      company: "Eric Robotics",
      year: "2025",
      category: "Full Stack & Data Visualization",
      overview:
        "Interactive mapping interface for live path tracking, sensor overlays, and spatial visualization",
      description:
        "Built real-time spatial visualization for autonomous systems with live path rendering, sensor data overlays, and dynamic obstacle detection. Optimized canvas rendering for smooth animation updates at 60fps with thousands of data points.",
      technologies: [
        "React.js",
        "Canvas API",
        "WebSockets",
        "GIS Data",
        "Real-time Rendering",
      ],
      impact: "Real-time path tracking with <50ms update latency",
      architecture: {
        title: "Mapping System Architecture",
        layers: [
          {
            name: "Map Renderer",
            description: "Canvas-based 2D/3D visualization",
          },
          {
            name: "Sensor Data Stream",
            description: "GPS, LiDAR, camera feeds over WebSocket",
          },
          {
            name: "Path Engine",
            description: "Real-time trajectory calculation and rendering",
          },
          {
            name: "Data Aggregator",
            description: "Fuses multiple sensor streams with timestamps",
          },
        ],
        keyPoints: [
          "Canvas rendering optimized for 60fps with throttled updates",
          "Spatial indices for efficient obstacle detection",
          "Decoupled rendering thread for smooth UI under heavy compute",
        ],
      },
    },
    {
      title: "ROS Bag Playback Dashboard",
      company: "Eric Robotics",
      year: "2025",
      category: "Full Stack & Debugging Tools",
      overview:
        "ROS bag ingestion + replay with timeline scrubbing, topic inspection, and path rendering for debugging",
      description:
        "Developed debugging tool for roboticists to ingest ROS bag files, replay sensor data at variable speeds, inspect topics, and visualize recorded paths. Implemented efficient file parsing and indexed playback for large datasets (100MB+).",
      technologies: [
        "React.js",
        "Node.js",
        "ROS Bag Parser",
        "Timeline UI",
        "Data Visualization",
      ],
      impact: "Reduced debugging time by enabling offline sensor analysis",
      architecture: {
        title: "Playback System",
        layers: [
          { name: "Bag File Parser", description: "ROS bag format ingestion" },
          {
            name: "Timeline Engine",
            description: "Indexed playback and seek operations",
          },
          {
            name: "Topic Inspector",
            description: "Drill-down into specific message streams",
          },
          { name: "Visualization", description: "Path replay and sensor overlay" },
        ],
        keyPoints: [
          "Indexed parsing for O(1) temporal seeks on large files",
          "Efficient serialization to avoid memory bloat",
          "Variable playback speed and frame-by-frame stepping",
        ],
      },
    },
    {
      title: "GPS & IMU Live Telemetry Dashboard",
      company: "Eric Robotics",
      year: "2025",
      category: "Full Stack & Real-Time Analytics",
      overview:
        "Real-time GPS/IMU fusion dashboard with live maps, charts, orientation gauges, and alerts over WebSocket",
      description:
        "Built production telemetry dashboard fusing GPS and IMU sensor streams in real-time. Implemented server-side alert thresholds to keep UI lean while ensuring all safety events fire reliably. Designed broadcast cadence for stable update patterns.",
      technologies: [
        "React.js",
        "Node.js",
        "WebSockets",
        "Sensor Fusion",
        "Chart.js/D3",
      ],
      impact: "Sub-second telemetry updates with reliable alert delivery",
      architecture: {
        title: "GPS + IMU Telemetry Pipeline",
        layers: [
          {
            name: "GPS Module",
            description: "GNSS receiver with raw position + covariance",
          },
          { name: "IMU Sensor", description: "Accelerometer, gyro, magnetometer" },
          {
            name: "Fusion Service",
            description: "Extended Kalman Filter blending GPS + IMU",
          },
          {
            name: "WebSocket Server",
            description: "Sub-second broadcast of fused state vectors",
          },
          {
            name: "Telemetry Dashboard",
            description: "Live position, velocity, orientation display",
          },
          {
            name: "Alerts Engine",
            description:
              "Server-side thresholds for geofence, speed, and orientation",
          },
        ],
        keyPoints: [
          "Fused payloads reduce frontend state complexity and drift",
          "Alert thresholds run server-side so UI stays lean",
          "Broadcast design favors stable update cadence over bursty spikes",
        ],
      },
    },
    {
      title: "Frontend Performance Optimization",
      company: "Zest India IT Services",
      year: "2025",
      category: "Performance & Optimization",
      overview: "Reduced page load time by 20% via targeted frontend improvements and REST integration",
      description:
        "Analyzed and optimized rendering pipeline, implemented lazy loading, code splitting, and efficient data fetching patterns. Integrated REST APIs with optimized request batching and caching strategies.",
      technologies: [
        "React.js",
        "Webpack",
        "REST APIs",
        "Performance Profiling",
        "Caching",
      ],
      impact: "20% page load time reduction, improved Lighthouse scores",
      architecture: {
        title: "Performance Pipeline",
        layers: [
          { name: "Code Splitting", description: "Route-based chunking" },
          { name: "Lazy Loading", description: "Component virtualization" },
          {
            name: "Data Fetching",
            description: "Request batching + optimistic updates",
          },
          {
            name: "Caching Layer",
            description: "Browser + service worker caching",
          },
          {
            name: "Monitoring",
            description: "Performance metrics and error tracking",
          },
        ],
        keyPoints: [
          "Bundled size reduced by 40% through strategic code splitting",
          "Network requests optimized via request batching and deduplication",
          "Smooth animations maintained via RAF throttling and worklet offloading",
        ],
      },
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container section-container">
        <div className="projects-header">
          <h2>How I Build Systems</h2>
          <p className="projects-subtitle">
            Production-oriented full-stack engineering with focus on reliability, performance, and clean architecture.
          </p>
          <div className="projects-intro">
            <p>
              I design every system to feel intuitive, perform consistently, and stay robust under pressure. From planning data flow to refining user journeys,
              the result is software that looks sharp and behaves reliably in production.
            </p>
            <div className="build-pillars">
              <span className="pillar">Reliable architecture</span>
              <span className="pillar">Fast experiences</span>
              <span className="pillar">Production-ready code</span>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${expandedProject === index ? "expanded" : ""}`}
            >
              <div className="project-header">
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <div className="project-info">
                    <span className="company">{project.company}</span>
                    <span className="year">{project.year}</span>
                    <span className="category">{project.category}</span>
                  </div>
                </div>
                <button
                  className="expand-btn"
                  onClick={() =>
                    setExpandedProject(expandedProject === index ? null : index)
                  }
                >
                  {expandedProject === index ? "−" : "+"}
                </button>
              </div>

              <p className="project-overview">{project.overview}</p>

              {expandedProject === index && (
                <div className="project-details">
                  <div className="detail-section">
                    <h4>About</h4>
                    <p>{project.description}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Impact</h4>
                    <p className="impact-text">{project.impact}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>{project.architecture.title}</h4>
                    <div className="architecture">
                      <div className="architecture-flow">
                        {project.architecture.layers.map((layer, i) => (
                          <div key={i} className="architecture-layer">
                            <div className="layer-name">{layer.name}</div>
                            <div className="layer-desc">
                              {layer.description}
                            </div>
                            {i < project.architecture.layers.length - 1 && (
                              <div className="layer-arrow">↓</div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="architecture-principles">
                        <h5>Key Design Principles</h5>
                        <ul>
                          {project.architecture.keyPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="engineering-principles">
          <h3>Engineering Philosophy</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>01. Design & Engineering Together</h4>
              <p>
                Design and engineering should move together, not in silos. APIs inform UI constraints, and UX feedback shapes architecture.
              </p>
            </div>
            <div className="principle">
              <h4>02. Production-Ready by Default</h4>
              <p>
                Ship systems with measurable performance outcomes. Every feature includes monitoring, error handling, and deployment strategy.
              </p>
            </div>
            <div className="principle">
              <h4>03. Full-Stack Ownership</h4>
              <p>
                Own delivery end to end: problem framing, design, implementation, testing, and deployment. No handoffs.
              </p>
            </div>
            <div className="principle">
              <h4>04. Reliability First</h4>
              <p>
                Prioritize reliability and clarity in real-time systems. Graceful degradation, circuit breakers, and transparent error states.
              </p>
            </div>
            <div className="principle">
              <h4>05. Clean Architecture</h4>
              <p>
                Build with separation of concerns and clear boundaries. Easy to test, easy to scale, easy to understand.
              </p>
            </div>
            <div className="principle">
              <h4>06. Measurable Impact</h4>
              <p>
                Prioritize features that deliver quantifiable user value. Performance metrics, analytics, and user feedback guide decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
