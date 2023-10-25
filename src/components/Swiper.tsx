import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from '../js/data/slider.js'
import back from '../../public/assets/images/back-arrow.svg';
import forward from '../../public/assets/images/forward-arrow.svg';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // import the coverflow effect CSS

export default () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]} // add EffectCoverflow to the modules prop
        spaceBetween={50}
        loop
        slidesPerView={1}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        pagination={{ clickable: true }}
        effect="coverflow" // set the effect prop to "coverflow"
        coverflowEffect={{ // set the coverflowEffect prop with the desired options
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log('slide change')}
        
        
      >
        {slides.map((slide: { title: string; content: string, id: number }) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center p-20 m-10 rounded-3xl text-center h-[30rem] bg-black">
              <div className="w-[33px] h-[33px] mb-10 bg-custom-purple text-19 rounded-full text-white text-center leading-large bold border py-4 px-4 font-black">{slide.id}</div>
              <p className="text-white lg:text-40 text-30">{slide.title}</p>
              <p className="text-white text-20">{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button image-swiper-button-next text-white absolute top-[45%] right-0 z-10">
        <img src={forward} alt="forward button" />
      </div>
      <div className="swiper-button image-swiper-button-prev text-white absolute top-[45%] left-0 z-[10]">
        <img src={back} alt="back button" />
      </div>
    </div>
  );
};
