import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import phoneOne from "/phone_1.png";
import phoneTwo from "/phone_2.png";
import phoneThree from "/phone_3.png";

const phoneData = [
  {
    image: phoneOne,
  },
  {
    image: phoneThree,
  },
  {
    image: phoneTwo,
  },
];

export default function Preview() {
  return (
    <div className="my-10 xl:my-16">
      <h2 className="text-6xl max-md:hidden font-bold mx-auto leading-[110%] text-center text-white mb-4 xl:mb-9">
        Preview of <span className="text-primary">Click To Food</span> App
      </h2>
      <h2 className="text-[32px] md:hidden font-bold mx-auto leading-[110%] text-center text-white mb-9">
        Insider Preview of <span className="text-primary">App</span>
      </h2>
      <div className="desktop_view px-10 relative overflow-hidden py-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Autoplay]}
          loop={true}
          slidesPerGroup={3} // Scroll 3 items at a time
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2, // Scroll 2 items at a time for tablet
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3, // Scroll 3 items at a time for desktop
            },
          }}
        >
          {phoneData?.map((phone, index) => (
            <SwiperSlide key={index} className={`swiper-slide-custom`}>
              <img src={phone.image} alt="phone" className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
