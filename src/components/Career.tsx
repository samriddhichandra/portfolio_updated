import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & UI/UX Developer</h4>
                <h5>Eric Robotics (Premier Seals Pvt Ltd)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built 6+ real-time dashboards using React, Node.js, and MySQL. Developed a drag-and-drop dashboard builder reducing development time by 40%. Created real-time robotic control system with optimized low-latency data flow. Improved UI performance, reducing lag by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Trainee</h4>
                <h5>Zest India IT Services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive UI components using HTML, CSS, and JavaScript. Integrated REST APIs for frontend-backend communication. Reduced page load time by 20% through performance optimization and best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Intern</h4>
                <h5>Artiset</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed workflows and improved UI usability by 30%. Worked on interface design and user experience enhancement. Collaborated with cross-functional teams to deliver user-focused solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
