import CustomLink from "../../blocks/CustomLink";
import { BRAND_URL, BRAND_NAME } from "../../../js/global-variables";
import logoBlack from "../../../assets/common/logo-black.svg";
import Video from "../../Video";
import Button from "../Button";

const SectionThree: React.FC = () => (
  <section className="bg-purple pt-[11rem] pb-[9rem]">
    <div className="block-inner lg:max-w-[85vw] 2xl:max-w-[129rem] mx-auto flex flex-col items-center justify-center">
      <div
        className="block-video mb-[4rem] w-full"
        data-scroll
        data-scroll-speed=".05"
      >
        <Video
          scriptUrl="https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js"
          playerId="wIpGq2Kd0p"
          videoId="6349287066112"
        />
      </div>
      <p
        className="itc-bold text-[3.1rem] pb-[4rem]"
        data-scroll
        data-scroll-speed=".05"
      >
        See what human creativity can still do
      </p>
      <Button
        href="https://www.discovertasmania.com.au/tasmanai"
        text="Discover"
        bgColor="bg-black"
        textColor="text-white"
        className="mb-[13rem] hover:scale-110 transition-transform duration-200 linear"
        data-scroll
        data-scroll-speed=".5"
      />
      <div className="block-integration-message">
        <h3 className="integration-text text-black">
          Advertising feature{" "}
          <span className="reader-only">{`sponsored by ${BRAND_NAME}`}</span>
        </h3>
        <CustomLink href={BRAND_URL} className="integration-logo">
          <img src={logoBlack} alt={`${BRAND_NAME} logo`} />
        </CustomLink>
      </div>
    </div>
  </section>
);

export default SectionThree;
