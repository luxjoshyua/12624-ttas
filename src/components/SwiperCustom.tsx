import { Navigation, Mousewheel, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import back from "../assets/images/back-arrow.svg";
import forward from "../assets/images/forward-arrow.svg";

interface SlidesProps {
  id: number;
  image: any;
}

const SwiperCustom: React.FC<{
  slidesData: SlidesProps[];
  keyProp: string;
}> = ({ slidesData, keyProp }) => {
  const [swiperInstance, setSwiperInstance] = useState({});

  useEffect(() => {}, [swiperInstance]);

  return (
    <div className="relative">
      <Swiper
        key={keyProp}
        spaceBetween={0}
        modules={[Navigation, Mousewheel, EffectFade, Autoplay]}
        direction="horizontal"
        slidesPerView={"auto"}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        {slidesData.map((slide: { image: any; id: number }) => (
          <SwiperSlide key={slide.id}>
            <div>
              <img src={slide.image} alt={slide.image} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button image-swiper-button-next text-white absolute top-[45%] right-20 z-10">
        <img src={forward} alt="forward button" />
      </div>
      <div className="swiper-button image-swiper-button-prev text-white absolute top-[45%] left-20 z-[10]">
        <img src={back} alt="back button" />
      </div>
    </div>
  );
};

export default SwiperCustom;
