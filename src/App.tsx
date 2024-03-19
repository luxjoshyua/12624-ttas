import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Hero from './components/blocks/Hero/Hero.tsx'
import Header from './components/Header'
import Footer from './components/Footer'
import SwiperCustom from './components/SwiperCustom'
// import CustomLink from "./components/blocks/CustomLink";
import Button from './components/blocks/Button'
import slides from './js/data/slider.ts'
import img1 from './assets/images/desktop/image-1.jpg'
import img2 from './assets/images/desktop/image-2.jpg'
import img3 from './assets/images/desktop/image-3.jpg'

const App = () => {
  let slides1 = slides.slides1

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  // useLayoutEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     speed: 0.8,
  //   });
  // }, []);

  useLayoutEffect(() => {
    const headings = document.querySelectorAll('.scroll-trigger')
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
        )
      }, heading)
      return () => ctx.revert()
    })
  }, [])

  return (
    <>
      <div>
        <main className="mx-auto relative max-w-[1920px]" id="smooth-content">
          <Header />
          <article>
            <Hero />
          </article>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
