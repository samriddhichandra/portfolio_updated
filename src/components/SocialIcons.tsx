import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";

const SocialIcons = () => {
  const publicFileHref = (fileName: string) =>
    `${import.meta.env.BASE_URL}${fileName}`;

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const handlers: Array<(e: MouseEvent) => void> = [];
    const spans = Array.from(social.querySelectorAll("span"));

    spans.forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      handlers.push(onMouseMove);

      updatePosition();
    });

    return () => {
      handlers.forEach((handler) =>
        document.removeEventListener("mousemove", handler)
      );
    };
  }, []);

  return (
    <>
      <div className="resume-buttons">
        <a
          className="resume-pill"
          href={publicFileHref("resume-fullstack-uiux.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <span className="resume-pill__text">FULLSTACK / UI&amp;UX</span>
          <span className="resume-pill__icon">
            <TbNotes />
          </span>
        </a>
        <a
          className="resume-pill"
          href={publicFileHref("resume-da-ds.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <span className="resume-pill__text">DA / DS</span>
          <span className="resume-pill__icon">
            <TbNotes />
          </span>
        </a>
        <a
          className="resume-pill"
          href={publicFileHref("resume-ml-ai.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <span className="resume-pill__text">ML / AI</span>
          <span className="resume-pill__icon">
            <TbNotes />
          </span>
        </a>
      </div>

      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a
              href="https://github.com/samriddhichandra"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href="https://linkedin.com/in/samriddhi-chandra"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
