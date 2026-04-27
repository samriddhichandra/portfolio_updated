import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "Dynamic Dashboard Builder",
      category: "Full Stack",
      tools: "React, Node.js, Express, MySQL, Drag-Drop UI",
      description: "Scalable dashboard platform with widget creation and real-time layout management"
    },
    {
      title: "Real-Time Control System",
      category: "Full Stack & Real-Time",
      tools: "React, Node.js, WebSockets, APIs",
      description: "Low-latency bidirectional communication for device monitoring and control"
    },
    {
      title: "Task Management System",
      category: "Full Stack",
      tools: "React, Node.js, MongoDB, RBAC",
      description: "Full-stack app with drag-and-drop workflow and role-based access control"
    },
    {
      title: "Real-Time Chat Application",
      category: "Full Stack & Real-Time",
      tools: "Socket.io, Node.js, React",
      description: "Scalable chat app with WebSocket communication and concurrent user support"
    },
    {
      title: "UI/UX Design System",
      category: "Product Design",
      tools: "Figma, Design Systems, Accessibility",
      description: "Comprehensive design system with components, patterns, and brand guidelines"
    },
    {
      title: "Data Dashboard & Analytics",
      category: "AI & Data",
      tools: "Python, Power BI, SQL, Data Visualization",
      description: "Interactive analytics dashboard with real-time insights and ML-driven recommendations"
    }
  ];

  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
