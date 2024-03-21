import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "./components/blocks/Hero/Hero.tsx";
import SectionTwo from "./components/blocks/SectionTwo/index.tsx";
import SectionThree from "./components/blocks/SectionThree/index.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import CustomLink from "./components/blocks/CustomLink";
import Button from "./components/blocks/Button";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
        <main className="mx-auto relative max-w-[1920px]" id="smooth-content">
          <Header />
          <article>
            <Hero />
            <SectionTwo />
            <SectionThree />
          </article>
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
};

export default App;
