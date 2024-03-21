import SwiperCustom from "../SwiperCustom";
import {
  slidesJosh,
  slidesAlan,
  slidesCaleb,
  slidesEloise,
  slidesSam,
  slidesChristopher,
  slidesSteffi,
  slidesJamin,
  slidesWayne,
} from "../../js/data/slider";

export const artistData = [
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesJosh} keyProp="Gallery Josh" />
    ),
    name: "Josh Foley",
    aiOutput: "To figure out how to upend his AI prompt.",
    medium: "Oil and acrylic",
    bio: "Foley likes to play with viewers’ experiences of reality by playing around with the traditional styles of landscape and still life, in textured pieces that make you question their two dimensions. “This trompe l’oeil that I work with is not to deceive but to confuse the haptic expectations and bodily position of the audience,” explains Foley, whose work is collected both in Australia and overseas, including Tasmania’s cultural cathedral Mona.",
    instagram: "https://www.instagram.com/joshfoleystudio/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesAlan} keyProp="Gallery Alan" />
    ),
    name: "Alan Young",
    medium: "Acrylic",
    bio: "Alan Young’s abstract expressionist paintings often use bright hues and unique points of view to give a fresh perspective on the everyday. There’s something inherently joyful in his creations. “Young is a fearless colourist… more is never enough,” enthuses arts writer Dr Jane Deeth. “The sense of delight and fun that rolls across the panoply of vibrant canvases is infectious.”",
    aiOutput: "To find the liveliness from within any prompt.",
    instagram: "https://www.instagram.com/alanhenryyoung/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesCaleb} keyProp="Gallery Caleb" />
    ),
    name: "Caleb Nichols-Mansell",
    medium: "Mixed media",
    bio: "Caleb Nichols-Mansell doesn’t like to remain within one discipline for too long — he jumps between photography, graphic design and large-scale public artworks. But there is a through line. “All of my work relates back to or is inspired by my connections to country, culture or community,” he explains. “As a Tasmanian Aboriginal artist, I represent and connect with a long line of creatives.”",
    aiOutput: "To translate his prompt into something profound and personal.",
    instagram: "https://www.instagram.com/calebnm_art/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesEloise} keyProp="Gallery Eloise" />
    ),
    name: "Eloise Lark",
    medium: "Various",
    bio: "Eloise Lark embraces work of any size, from extremely large-scale art pieces to greeting-card dimensions. Her style is both whimsical and thoughtful, often taking glimpses of the natural world, and using collage and colour to grab viewers’ attention. Through her works she expresses that she’s “intrigued and impressed with the idea that what we see has an effect on how we feel and the way we interpret the world around us”.",
    aiOutput: "To engage with a prompt that lets her vision run free.",
    instagram: "https://www.instagram.com/eloiselark/",
  },
  {
    heroGallery: <SwiperCustom slidesData={slidesSam} keyProp="Gallery Sam" />,
    name: "Sam Lyne",
    medium: "Illustration and design",
    bio: "For Sam Lyne, the (artistic) devil is in the details, as he captures minuscule features in his illustrations. His works consist of quite a layered process across various media that brings them all to fruition. “I almost always start out in pencil, primarily mechanical pencils so I can get as much detail as possible into my drawings,” he says. From there he may add watercolours to punctuate some elements, before then transferring to computer “for additional digital colouring and painting”.",
    aiOutput: "To add another layer to his complex process.",
    instagram: "https://www.instagram.com/samlyne/",
  },
  {
    heroGallery: (
      <SwiperCustom
        slidesData={slidesChristopher}
        keyProp="Gallery Christopher"
      />
    ),
    name: "Christopher Downes",
    medium: "Cartoons and illustrations",
    bio: "Tasmanians will be very familiar with the work of Christopher Downes, who hails originally from the US but now proudly calls Hobart home. Downes regularly contributes his cartoons to the Hobart Mercury, offering his wry takes on the political landscape and has won a Stanley Award (given out by the Australian Cartoonists Association) in recognition of his work, and has also translated his art form into a popular children’s book.",
    aiOutput: "To raise plenty of smiles… and some eyebrows.",
    instagram: "https://www.instagram.com/sirwdchosen/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesSteffi} keyProp="Gallery Steffi" />
    ),
    name: "Steffi Koppelwell",
    medium: "Acrylic",
    bio: "A rising star on the art scene, Steffi Koppelwell views the internal workings of our minds as an architectural space that requires navigating. The press notes for her Mindscapes exhibition recently in Hobart summed up how cleverly Koppelwell “entwines the complexities of human cognition and experience into captivating visual metaphors”.",
    aiOutput:
      "To respond to a prompt that would allow her room (literally) to move.",
    instagram: "https://www.instagram.com/steffikoppelwellartist/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesJamin} keyProp="Gallery Jamin" />
    ),
    name: "Jamin",
    medium: "Murals and street art",
    bio: "Jamin (Dr Benjamin Kluss) is a genius at creating murals that delight the eye, as well as eye-popping installations that have popped up in galleries, universities and elsewhere. To date, he’s created more than 70 murals in Tasmania and beyond, and has had his work appear at the Gallery of Modern Art in Brisbane; he also is one of the artists who has received the prestigious Rosamond McCulloch Studio Residency in Paris",
    aiOutput: "Bringing his larger-than-life thinking to smaller formats.",
    instagram: "https://www.instagram.com/jamin.artist/",
  },
  {
    heroGallery: (
      <SwiperCustom slidesData={slidesWayne} keyProp="Gallery Wayne" />
    ),
    name: "Wayne Looyen",
    medium: "Ceramics",
    bio: "The only of the TasmanAi creatives who works in the field of ceramics, Wayne Looyen likes to add his unique eye to the everyday and capture it in this medium. “[I like] allowing the clay to speak,” he says. “Bringing a different view of what we see around us.” He sometimes uses found objects and has most recently started using gold accents in the work he creates and taking inspiration from the rock pools found along the Tasmanian shoreline.",
    aiOutput: "A 3D result that will be something to behold.",
    instagram: "https://www.instagram.com/emergeceramics/",
  },
];