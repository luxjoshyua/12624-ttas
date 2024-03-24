import { Navigation, Mousewheel, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

import back from "../assets/images/back-arrow.svg";
import forward from "../assets/images/forward-arrow.svg";

type SlidesProps = {
  id: number;
  image: string;
};

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
        modules={[Navigation, Mousewheel, EffectFade, Autoplay]}
        direction="horizontal"
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        {slidesData.map((slide: { image: string; id: number }) => {
          return (
            <SwiperSlide key={slide.id}>
              <div>
                <img
                  src={slide.image}
                  alt={slide.image}
                  className="object-cover object-top lg:object-center w-full h-[60vh] lg:h-[63rem]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCustom;
