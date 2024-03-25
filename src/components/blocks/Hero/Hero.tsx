import { motion } from "framer-motion";
import headline from "../../../assets/images/desktop/tasmanai-headline.svg";
import Video from "../../Video";
import { Image } from "../../miscellaneous";

const Hero: React.FC = () => (
  <section className="hero relative block h-auto w-full px-0 pb-[20rem] before:w-full before:bg-purple before:h-[41rem] before:absolute before:top-0 before:left-0 before:z-10 after:w-full after:bg-mustard after:absolute after:bottom-0 after:left-0 after:h-full top-[4.4rem]">
    <div className="absolute bg-heroSquigglesMb lg:bg-heroSquiggles bg-contain lg:bg-cover bg-no-repeat lg:bg-center bg-bottom z-10 inset-0" />
    <div className="block-video-outer 2xl:max-w-[128rem] mx-auto lg:max-w-[85vw] mb-[6rem] lg:mb-[20rem] relative z-10">
      <div className="block-heading w-full text-center lg:text-left px-[1rem] lg:px-0 absolute top-[19rem] left-1/2 -translate-x-1/2 lg:top-[28rem] z-[200]">
        <motion.h2
          className="text-[2rem] lg:text-[5.4rem] text-white itc-reg leading-normal text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "linear" }}
        >
          Tasmania flips AI back into place with{" "}
        </motion.h2>
        <h1 className="sr-only">tasman ai</h1>
        <motion.div
          className="text-[5.4rem] text-white itc-reg leading-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "linear" }}
        >
          <Image
            src={headline}
            alt="TasmanAI"
            className="sm:max-w-[60vw] lg:max-w-full 2xl:max-w-none mx-auto"
          />
        </motion.div>
      </div>
      <Video
        scriptUrl="https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js"
        playerId="wIpGq2Kd0p"
        videoId="6349211310112"
        className="z-100 h-full lg:h-auto"
        heroVid
      />
    </div>
    <div className="block-copy flex-col mb-[27rem] lg:mb-0 px-[2rem] lg:px-0 lg:flex-row lg:max-w-[84rem] mx-auto flex items-start justify-between z-20 relative">
      <div data-scroll data-scroll-speed=".1" className="mb-[4rem] lg:mb-0">
        <p className="text-[3rem] lg:text-[3.5rem] leading-[1.25em] lg:max-w-[32rem]">
          Tourism Tasmania showcases the real creativity natural to the island
          state
        </p>
      </div>
      <div
        className="block-copy lg:text-[2rem] lg:max-w-[46rem]"
        data-scroll
        data-scroll-speed=".05"
      >
        <p>
          With the use of AI image generators on the rise, Tourism Tasmania
          decided to flip the switch back to human creativity — by giving the
          sort of prompts used to whip up images on AI programs (like “create an
          Impressionist image of a cow singing opera”) to real artists instead.{" "}
        </p>
        <p>
          With the art made over time, not with the click of a mouse, TasmanAi
          shows the world that instant isn’t always better. There is joy in
          slowing down, taking time to think and celebrating craftsmanship — all
          of which are intrinsic to the Tasmanian way of life and keenly felt by
          anyone visiting the island.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
