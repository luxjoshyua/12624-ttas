import { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "./components/blocks/Hero/Hero.tsx";
import SectionTwo from "./components/blocks/SectionTwo/index.tsx";
import SectionThree from "./components/blocks/SectionThree/index.tsx";
import Header from "./components/Header";
// import CustomLink from "./components/blocks/CustomLink";

import LocomotiveParallax from "./js/parallax/index.tsx";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const locoScrollRef = useRef(null);

  // useLayoutEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     speed: 0.8,
  //   });
  // }, []);

  useLayoutEffect(() => {
    const headings = document.querySelectorAll(".scroll-trigger");
    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          heading,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: heading,
              scrub: 1,
            },
          }
        );
      }, heading);
      return () => ctx.revert();
    });
  }, []);

  return (
    <>
      <div>
        <main className="elative" id="smooth-content">
          <Header />
          <article>
            <LocomotiveParallax locoScrollRef={locoScrollRef}>
              <Hero />
              <SectionTwo />
              <SectionThree />
            </LocomotiveParallax>
          </article>
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
};

export default App;
