import Swiper from "./SwiperCustom.tsx";
import slides from "../js/data/slider.ts";

const Chapter3 = () => {
  return (
    <section className="chapter chapter-3 mb-[30rem]">
      <div className="flex flex-col items-center justify-center h-screen">
        <h3 className="text-center text-white text-78 reader-only">
          Chapter 3
        </h3>
        <div className="w-3/5">{/* <Swiper slidesData={slides} /> */}</div>
      </div>
    </section>
  );
};

export default Chapter3;
