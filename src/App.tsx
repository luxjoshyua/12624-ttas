import { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "./components/blocks/Hero/Hero.tsx";
import SectionTwo from "./components/blocks/SectionTwo/index.tsx";
import SectionThree from "./components/blocks/SectionThree/index.tsx";
import Header from "./components/Header";

import LocomotiveParallax from "./js/parallax/index.tsx";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const locoScrollRef = useRef(null);

  return (
    <>
      <div>
        <main className="relative">
          <Header />
          <article>
            <LocomotiveParallax locoScrollRef={locoScrollRef}>
              <Hero />
              <SectionTwo />
              <SectionThree />
            </LocomotiveParallax>
          </article>
        </main>
      </div>
    </>
  );
};

export default App;
