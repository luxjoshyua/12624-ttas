import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Footer from "./components/Footer";

const App = () => {
  const lenis: Lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  useLayoutEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main className="mx-auto relative max-w-[1920px]">
        <Header />
        <article>
          <Hero />
          <Chapter2 />
          <Chapter3 />
        </article>
        <Footer />
      </main>
    </>
  );
};

export default App;
