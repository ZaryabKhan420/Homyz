import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import R1 from "../../assets/r1.png";
import R2 from "../../assets/r2.png";
import R3 from "../../assets/r3.png";
const Residencies = () => {
  const residenciesDetails = [
    {
      id: 1,
      img: R1,
      price: 47043,
      title: "Aliva Priva Jardin",
      description:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    },
    {
      id: 2,
      img: R2,
      price: 66353,
      title: "Asatti Garden City",
      description:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    },
    {
      id: 3,
      img: R3,
      price: 35853,
      title: "Citralan Puri Serang",
      description:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    },
    {
      id: 4,
      img: R1,
      price: 47043,
      title: "Aliva Priva Jardin",
      description:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta.",
    },
    {
      id: 5,
      img: R2,
      price: 66353,
      title: "Asatti Garden City",
      description:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    },
    {
      id: 6,
      img: R3,
      price: 35853,
      title: "Citralan Puri Serang",
      description:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    },
  ];

  return (
    <div id="residencies" className="my-16">
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="text-2xl text-[#FFA500] font-semibold">Best Choices</h2>
        <h1 className="text-4xl text-[#1F3E72]  font-bold">
          Popular Residencies
        </h1>
      </div>
      <div>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1180: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {residenciesDetails.map((item) => {
            return (
              <SwiperSlide className="hover:scale-105 cursor-pointer transition-all duration-300">
                <div
                  className="flex flex-col justify-center items-start gap-3 p-5 my-10"
                  key={item.id}
                >
                  <img src={item.img} alt="Residency" loading="lazy" />
                  <h3 className="text-xl text-secondary font-bold">
                    <span className="text-[#FFA500] mr-1">$</span>
                    {item.price}
                  </h3>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h2 className="text-2xl text-[#1F3E72] font-bold">
                      {item.title}
                    </h2>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
