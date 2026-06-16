import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// safer global reference
let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    // kill previous instance safely
    if (smoother) {
      smoother.kill();
      smoother = null;
    }

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".header ul a")
    );

    const onLinkClick = (e: Event) => {
      if (window.innerWidth <= 1024) return;

      e.preventDefault();

      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.getAttribute("data-href");

      if (!section || !smoother) return;

      if (smoother.paused()) smoother.paused(false);

      smoother.scrollTo(section, true, "top top");
    };

    links.forEach((link) =>
      link.addEventListener("click", onLinkClick as EventListener)
    );

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", onLinkClick as EventListener)
      );

      window.removeEventListener("resize", onResize);

      if (smoother) {
        smoother.kill();
        smoother = null;
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <a
          href="mailto:samriddhic62@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          samriddhic62@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#aiml" href="#aiml">
              <HoverLinks text="AI/ML" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
