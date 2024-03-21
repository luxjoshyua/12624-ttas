import { motion } from "framer-motion";
import { Image } from "../../miscellaneous";

import { ArtistBlockImagesType, ArtistBlockTextType } from "../../../types";
import instagramIcon from "../../../assets/common/instagram-icon.svg";

export const ArtistBlockImages: React.FC<ArtistBlockImagesType> = ({
  matchedArtist,
}) => {
  if (!matchedArtist) return null;
  const { heroGallery, aiOutput } = matchedArtist;

  return (
    <div className="mb-[6rem] relative">
      <div
        className="block-ai-output absolute left-[10%] bottom-[4rem] z-10"
        data-scroll
        data-scroll-speed=".05"
      >
        <p
          className="text-white text-[2.3rem] pb-0 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <span className="uppercase block pb-[.5rem]">prompt:</span>
          {aiOutput}
        </p>
      </div>
      <div className="h-[63rem] overflow-hidden">{heroGallery}</div>
    </div>
  );
};

export const ArtistBlockBioImage: React.FC<{
  artistImage: string;
  name: string;
  activeArtist: string;
}> = ({ artistImage, name, activeArtist }) => {
  const isActiveArtist = name === activeArtist;

  return (
    <div
      className={`w-[10rem] h-[10rem] rounded-full cursor-pointer hover:opacity-100 transition-opacity ease-linear duration-300 ${
        isActiveArtist ? "opacity-100" : "opacity-40"
      }`}
    >
      <Image src={artistImage} alt={name} />
    </div>
  );
};

export const ArtistBlockText: React.FC<ArtistBlockTextType> = ({
  matchedArtist,
}) => {
  if (!matchedArtist) return null;
  const { name, medium, bio, aiOutput, instagram } = matchedArtist;

  return (
    <motion.div className="flex items-start justify-between mb-[19rem]">
      <div className={`block-artist-bio max-w-[47rem] mr-[5rem]`}>
        <h2 className="itc-reg leading-none uppercase text-[5.5rem] mb-[3rem]">
          {name}
        </h2>
        <p className="text-mustard pb-[3rem]">
          <strong>Medium: </strong>
          {medium}
        </p>
        <p>{bio}</p>
        <p className="text-mustard pb-[3rem]">
          <strong>Expected TasmanAi output:</strong>
          <br />
          {aiOutput}
        </p>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-block hover:scale-110 transition-transform ease-linear duration-150 w-fit-content"
        >
          <Image src={instagramIcon} alt="Instagram icon" />
        </a>
      </div>
      <div className="block-general-info max-w-[52.5rem] bg-mustard text-white w-full">
        <div className="block-inner max-w-[43rem] mx-auto py-[5rem]">
          <p className="itc-reg text-[2rem] leading-none pb-[2rem]">
            On TasmanAi
          </p>
          <p className="pb-[4rem]">
            It has given me an opportunity to explore the subject of AI more
            thoroughly. I enjoy the conceptual implications. I’m not concerned
            about this phenomena, as our own intelligence is also partially
            coded, algorithmic, artificial. We can understand ourselves further
            by observing this manufactured reflection of us, and how that
            manipulates and interacts with our digital universe.{" "}
          </p>
          <span className="block bg-white w-full h-[.1rem] mb-[4rem]"></span>
          <p className="itc-reg text-[2rem] leading-none pb-[2rem]">
            What makes Tassie artists so unique?{" "}
          </p>
          <p className="pb-[4rem]">
            Creativity, like scent, can be drowned out by too many competing
            ideas… aromas. One is able to distil the essence of their thought,
            most profoundly, in isolation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
