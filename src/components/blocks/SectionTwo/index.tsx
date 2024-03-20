import { useState } from "react";
import { artistData } from "../../miscellaneous/data";
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

const SectionTwo: React.FC = () => {
  const [activeArtist, setActiveArtist] = useState<string>("Josh Foley");
  const matchedArtist = artistData.find(
    (artist) => artist.name === activeArtist
  );
  if (!matchedArtist) return null;

  return (
    <section className="bg-cream w-full relative z-20">
      <div className="max-w-[192rem] mx-auto">
        <ArtistBlockImages matchedArtist={matchedArtist} />

        <div className="text-block max-w-[103rem] mx-auto">
          <div className="artist-selection-block grid grid-cols-9 gap-4 grid-flow-col mb-[6rem]">
            <div
              className="artist artist--1"
              onClick={() => setActiveArtist("Josh Foley")}
            >
              <ArtistBlockBioImage
                artistImage={joshFoley}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--2"
              onClick={() => setActiveArtist("Alan Young")}
            >
              <ArtistBlockBioImage
                artistImage={alanYoung}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--3"
              onClick={() => setActiveArtist("Caleb Nichols-Mansell")}
            >
              <ArtistBlockBioImage
                artistImage={calebNicholsMansell}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--4"
              onClick={() => setActiveArtist("Eloise Lark")}
            >
              <ArtistBlockBioImage
                artistImage={eloiseLark}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--5"
              onClick={() => setActiveArtist("Sam Lyne")}
            >
              <ArtistBlockBioImage artistImage={samLyne} name={activeArtist} />
            </div>
            <div
              className="artist artist--6"
              onClick={() => setActiveArtist("Christopher Downes")}
            >
              <ArtistBlockBioImage
                artistImage={christopherDownes}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--7"
              onClick={() => setActiveArtist("Steffi Koppelwell")}
            >
              <ArtistBlockBioImage
                artistImage={steffiKoppelwell}
                name={activeArtist}
              />
            </div>
            <div
              className="artist artist--8"
              onClick={() => setActiveArtist("Jamin")}
            >
              <ArtistBlockBioImage artistImage={jamin} name={activeArtist} />
            </div>
            <div
              className="artist artist--9"
              onClick={() => setActiveArtist("Wayne Looyen")}
            >
              <ArtistBlockBioImage
                artistImage={wayneLooyen}
                name={activeArtist}
              />
            </div>
          </div>
          <ArtistBlockText matchedArtist={matchedArtist} />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
