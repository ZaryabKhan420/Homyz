import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PrimaryButton } from "../Index";
import heroImg from "../../assets/hero-image.png";
import { MdAdd } from "react-icons/md";
import CountUp from "react-countup";
const Hero = () => {
  const details = [
    {
      id: 1,
      title: "Premium Product",
      value: "9000",
    },
    {
      id: 2,
      title: "Happy Customer",
      value: "2000",
    },
    {
      id: 3,
      title: "Awards Winning",
      value: "28",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-10 gap-10">
      <div className="flex flex-col items-start justify-center gap-14 text-white w-fit ">
        <div>
          <h1 className="text-6xl font-bold relative w-fit z-20">
            <div
              className="absolute right-[-10%] top-[-30%] w-[4rem] h-[4rem] rounded-full z-[-1]"
              style={{
                background: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
              }}
            ></div>
            Discover{" "}
          </h1>
          <h1 className="text-6xl font-bold">Most Suitable</h1>
          <h1 className="text-6xl font-bold">Property</h1>
        </div>
        <p className="text-secondary">
          Find a variety of properties that suit you very easily. <br /> Forget
          all difficulties in finding a residence for you.
        </p>

        <div className="flex justify-between items-center gap-2 sm:gap-5 px-2 sm:px-5 py-3 w-[100%] sm:w-[90%] bg-white rounded-md">
          <FaLocationDot size={20} color={"#4066ff"} />
          <input type="text" className="border-none outline-none text-black" />
          <PrimaryButton children={"Search"} />
        </div>
        <div className="flex flex-wrap justify-start items-between gap-10">
          {details.map((detail) => {
            return (
              <div className="flex flex-col gap-2" key={detail.id}>
                <div className="flex justify-start items-center gap-2">
                  <CountUp
                    className="text-4xl font-semibold"
                    start={0}
                    end={detail.value}
                    duration={3}
                  />
                  <MdAdd size={30} color="#FFA500" />
                </div>
                <p className="text-secondary">{detail.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:p-10">
        <div className="border-solid border-8 border-[#302E2D] rounded-t-[50rem] overflow-hidden">
          <img src={heroImg} alt="Homyz" loading="lazy" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
