import { useState } from "react";
import { artistData } from "../../miscellaneous/data";
import { Image } from "../../miscellaneous";
import {
  ArtistBlockImages,
  ArtistBlockBioImage,
  ArtistBlockText,
} from "./ArtistBlock";
import joshFoley from "../../../assets/images/desktop/artist-bio-pic/josh-foley.png";
import alanYoung from "../../../assets/images/desktop/artist-bio-pic/alan-young.png";
import calebNicholsMansell from "../../../assets/images/desktop/artist-bio-pic/caleb-nichols-mansell.png";
import eloiseLark from "../../../assets/images/desktop/artist-bio-pic/eloise-lark.png";
import samLyne from "../../../assets/images/desktop/artist-bio-pic/sam-lyne.png";
import christopherDownes from "../../../assets/images/desktop/artist-bio-pic/christopher-downes.png";
import steffiKoppelwell from "../../../assets/images/desktop/artist-bio-pic/steffi-koppelwell.png";
import jamin from "../../../assets/images/desktop/artist-bio-pic/jamin.png";
import wayneLooyen from "../../../assets/images/desktop/artist-bio-pic/wayne-looyen.png";
import arrowNext from "../../../assets/common/arrow-next.svg";

const SectionTwo: React.FC = () => {
  const [activeArtist, setActiveArtist] = useState<string>("Josh Foley");
  const activeArtistIndex = artistData.findIndex(
    (artist) => artist.name === activeArtist
  );
  const matchedArtist = artistData.find(
    (artist) => artist.name === activeArtist
  );
  if (!matchedArtist) return null;
  const isJoshFoley = activeArtist === "Josh Foley";

  return (
    <section className="bg-cream w-full relative z-20 pb-[5rem]">
      <div className="max-w-[192rem] mx-auto">
        <div className="block-heading bg-black text-white py-[10rem] text-center">
          <div className="block-inner max-w-[85rem] mx-auto">
            <h2 className="itc-reg text-[7.7rem] leading-none mb-[2rem]">
              The genius behind the AI
            </h2>
            <p className="text-[2rem] pb-0">
              Here are the flesh-and-blood Tasmanian artists who responded to
              prompts from the public with real artworks such as paintings,
              illustrations and drawings for the TasmanAi project.
            </p>
          </div>
        </div>
        <ArtistBlockImages matchedArtist={matchedArtist} />

        <div className="text-block max-w-[103rem] mx-auto ">
          <div className="artist-selection-block grid grid-cols-9 gap-4 grid-flow-col mb-[6rem]">
            <div
              className="artist artist--1"
              onClick={() => setActiveArtist("Josh Foley")}
            >
              <ArtistBlockBioImage
                artistImage={joshFoley}
                activeArtist={activeArtist}
                name="Josh Foley"
              />
            </div>
            <div
              className="artist artist--2"
              onClick={() => setActiveArtist("Alan Young")}
            >
              <ArtistBlockBioImage
                artistImage={alanYoung}
                activeArtist={activeArtist}
                name="Alan Young"
              />
            </div>
            <div
              className="artist artist--3"
              onClick={() => setActiveArtist("Caleb Nichols-Mansell")}
            >
              <ArtistBlockBioImage
                artistImage={calebNicholsMansell}
                activeArtist={activeArtist}
                name="Caleb Nichols-Mansell"
              />
            </div>
            <div
              className="artist artist--4"
              onClick={() => setActiveArtist("Eloise Lark")}
            >
              <ArtistBlockBioImage
                artistImage={eloiseLark}
                activeArtist={activeArtist}
                name="Eloise Lark"
              />
            </div>
            <div
              className="artist artist--5"
              onClick={() => setActiveArtist("Sam Lyne")}
            >
              <ArtistBlockBioImage
                artistImage={samLyne}
                activeArtist={activeArtist}
                name="Sam Lyne"
              />
            </div>
            <div
              className="artist artist--6"
              onClick={() => setActiveArtist("Christopher Downes")}
            >
              <ArtistBlockBioImage
                artistImage={christopherDownes}
                activeArtist={activeArtist}
                name="Christopher Downes"
              />
            </div>
            <div
              className="artist artist--7"
              onClick={() => setActiveArtist("Steffi Koppelwell")}
            >
              <ArtistBlockBioImage
                artistImage={steffiKoppelwell}
                activeArtist={activeArtist}
                name="Steffi Koppelwell"
              />
            </div>
            <div
              className="artist artist--8"
              onClick={() => setActiveArtist("Jamin")}
            >
              <ArtistBlockBioImage
                artistImage={jamin}
                activeArtist={activeArtist}
                name="Jamin"
              />
            </div>
            <div
              className="artist artist--9"
              onClick={() => setActiveArtist("Wayne Looyen")}
            >
              <ArtistBlockBioImage
                artistImage={wayneLooyen}
                activeArtist={activeArtist}
                name="Wayne Looyen"
              />
            </div>
          </div>
          <ArtistBlockText
            matchedArtist={matchedArtist}
            activeArtist={activeArtist}
          />
          <div className="block-navigation w-full flex items-start justify-between itc-bold text-[2rem]">
            <div className="block-navigation__prev">
              <button
                className={`button button--secondary cursor-pointer flex items-start ${
                  isJoshFoley ? "opacity-40" : "opacity-100"
                }`}
                onClick={() => {
                  const newIndex =
                    (activeArtistIndex - 1 + artistData.length) %
                    artistData.length;
                  setActiveArtist(artistData[newIndex].name);
                }}
              >
                <Image
                  src={arrowNext}
                  alt="Arrow Previous"
                  className={`scale-x-[-1] mr-[1rem]`}
                />
                Previous
              </button>
            </div>
            <div className="block-navigation__next">
              <button
                className="button button--secondary cursor-pointer  flex items-start"
                onClick={() => {
                  const newIndex = (activeArtistIndex + 1) % artistData.length;
                  setActiveArtist(artistData[newIndex].name);
                }}
              >
                Next
                <Image
                  src={arrowNext}
                  alt="Arrow Next"
                  className="ml-[1rem] "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
