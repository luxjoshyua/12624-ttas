import headline from "../../../assets/images/desktop/tasmanai-headline.svg";
import Video from "../../Video";
import { Image } from "../../miscellaneous";

const Hero: React.FC = () => (
  <section className="hero relative block h-auto w-full px-0 pb-[20rem] before:w-full before:bg-purple before:h-[41rem] before:absolute before:top-0 before:left-0 before:z-10 after:w-full after:bg-mustard after:absolute after:bottom-0 after:left-0 after:h-full top-[4.4rem]">
    <div className="absolute bg-heroSquiggles bg-cover bg-no-repeat bg-center z-10 inset-0" />
    <div className="block-video-outer 2xl:max-w-[128rem] mx-auto lg:max-w-[85vw] mb-[14rem] relative z-10">
      <div className="block-heading absolute top-[28rem] left-[7rem] z-10">
        <h2 className="text-[5.4rem] text-white itc-reg leading-normal">
          Tasmania flips AI back into place with TasmanAi
        </h2>
        <h1 className="sr-only">tasman ai</h1>
        <Image src={headline} alt="TasmanAI" />
      </div>
      <Video
        scriptUrl="https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js"
        playerId="WkAEp4m5G"
        videoId="6349211310112"
      />
    </div>
    <div className="block-copy max-w-[84rem] mx-auto flex items-start justify-around z-20 relative">
      <div className="block-copy mr-[6rem]">
        <p className="text-[3.5rem] font-bold leading-none">
          Tourism Tasmania showcases the real creativity natural to the island
          state
        </p>
      </div>
      <div className="block-copy text-[2rem]">
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
