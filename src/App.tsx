import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiperCustom from "./components/SwiperCustom";
import slides from "./js/data/slider.ts";
import hero from "./assets/images/hero.jpg";
import img1 from "./assets/images/desktop/image-1.jpg";

const App = () => {
  let slides1 = slides.slides1;

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      speed: 0.8,
    });
  }, []);

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
        <main className="mx-auto relative max-w-[1920px]">
          <Header />
          <article>
            <header className="hero flex flex-col items-center justify-center p-0 text-center h-auto">
              <img
                src={img1}
                alt="hero"
                className="w-full h-full z-[-1] absolute left-0 object-cover"
              />
              <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="text-100 text-white z-10 scroll-trigger">
                  Hello World
                </h1>
              </div>
            </header>
            <section className="chapter chapter-1 h-screen bg-orange-600"></section>
            <section className="chapter chapter-2">
              <SwiperCustom slidesData={slides1} keyProp="swiper-10" />
            </section>
          </article>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
