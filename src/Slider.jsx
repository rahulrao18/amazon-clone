import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  "bg-yellow-400",
  "bg-blue-500",
  "bg-green-500",
];

function Carousel() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-top-offset": "20%",
        }}
        className="w-full h-170"
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index} className={`relative ${bg}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
