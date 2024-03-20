import { Image } from "../../miscellaneous";
import { ArtistBlockImagesType, ArtistBlockTextType } from "../../../types";
import instagramIcon from "../../../assets/common/instagram-icon.svg";

export const ArtistBlockImages: React.FC<ArtistBlockImagesType> = ({
  matchedArtist,
}) => {
  return (
    <div className="mb-[6rem]">
      <div className="h-[63rem] bg-pink-300">
        <span>artist gallery here</span>
      </div>
    </div>
  );
};

export const ArtistBlockBioImage: React.FC<{
  artistImage: string;
  name: string;
}> = ({ artistImage, name }) => {
  return (
    <div className="w-[10rem] h-[10rem] rounded-full opacity-40 cursor-pointer hover:opacity-100 transition-opacity ease-linear duration-300">
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
    <div className="flex items-start justify-between">
      <div className="block-artist-bio max-w-[49.5rem]">
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
          rel="noreferrer"
          className="cursor-pointer hover:opacity-50 transition-opacity ease-linear duration-300 w-fit-content"
        >
          <Image src={instagramIcon} alt="Instagram icon" />
        </a>
      </div>
      <div className="block-general-info max-w-[52.5rem] bg-mustard"></div>
    </div>
  );
};
