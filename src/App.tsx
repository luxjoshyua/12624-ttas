import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiperCustom from "./components/SwiperCustom";
import CustomLink from "./components/blocks/CustomLink";
import Button from "./components/blocks/Button";
import slides from "./js/data/slider.ts";
import img1 from "./assets/images/desktop/image-1.jpg";
import img2 from "./assets/images/desktop/image-2.jpg";
import img3 from "./assets/images/desktop/image-3.jpg";

const App = () => {
  let slides1 = slides.slides1;

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      speed: 0.8,
      normalizeScroll: true,
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
            <header className="hero flex flex-col items-center justify-center p-0 text-center h-auto pb-[10rem]">
              <img
                src={img1}
                alt="hero"
                className="w-full h-full z-[-1] absolute left-0 object-cover"
              />
              <div className="flex flex-col h-screen justify-center items-center">
                <h1
                  className="text-100 text-white z-10 scroll-trigger"
                  data-speed="clamp(1.5)"
                >
                  Hero
                </h1>
              </div>
            </header>
            <section className="chapter chapter-2 relative pb-[10rem]">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/2">
                  <SwiperCustom slidesData={slides1} keyProp="1" />
                </div>
                <div className="sm:w-1/2" id="orange">
                  <div className="bg-blue-500 h-full flex items-center justify-center">
                    <h2 className="text-100 text-white text-center scroll-trigger">
                      Chapter 2
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="chapter chapter-3 pb-[10rem] ">
              <div className="max-w-[160rem] mx-auto">
                <div className="grid grid-cols-[50%_auto] gap-6 grid-rows-[50rem_auto]">
                  <div className="bg-green-100">
                    <img
                      src={img2}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-green-200"></div>
                  <div className="bg-green-500">
                    <SwiperCustom slidesData={slides1} keyProp="2" />
                  </div>
                  <div className="bg-green-600">
                    <img
                      src={img3}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="chapter chapter-4 bg-orange-600 relative">
              <div className="flex justify-center items-center h-screen">
                <Button
                  href="https://www.google.com"
                  text="Find out more"
                  bgColor="bg-blue-600"
                />
              </div>
            </section>
          </article>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
