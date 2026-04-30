import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
<<<<<<< HEAD
=======
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
>>>>>>> origin/main
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
<<<<<<< HEAD
    smoother?.kill();
=======
>>>>>>> origin/main
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

<<<<<<< HEAD
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".header ul a")
    );
    const onLinkClick = (e: Event) => {
      if (window.innerWidth <= 1024) return;
      e.preventDefault();
      const elem = e.currentTarget as HTMLAnchorElement;
      const section = elem.getAttribute("data-href");
      if (!section) return;
      if (smoother?.paused()) smoother.paused(false);
      smoother?.scrollTo(section, true, "top top");
    };

    links.forEach((element) => element.addEventListener("click", onLinkClick));

    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((element) =>
        element.removeEventListener("click", onLinkClick)
      );
      window.removeEventListener("resize", onResize);
      smoother?.kill();
    };
=======
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
>>>>>>> origin/main
  }, []);
  return (
    <>
      <div className="header">
        {/* <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a> */}
        <a href="mailto:samriddhic62@gmail.com" className="navbar-connect"
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
<<<<<<< HEAD
            <a data-href="#aiml" href="#aiml">
              <HoverLinks text="AI/ML" />
            </a>
          </li>
          <li>
=======
>>>>>>> origin/main
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
