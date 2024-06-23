import React from "react";
import Logo from "../../assets/logo2.png";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 mb-8 gap-16">
      <div className="flex flex-col justify-center items-start gap-3 place-self-start">
        <img src={Logo} alt="Homyz" loading="lazy" width={"100rem"} />
        <p className="text-secondary">
          Our vision is to make all people <br /> the best place to live for
          them
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-5 place-self-end">
        <div
          className="flex flex-col justify-center items-start 
        gap-3"
        >
          <h1 className="text-4xl text-[#1F3E72]  font-bold">Information</h1>
          <p className="text-secondary">145 New York, FL 5467, USA</p>
        </div>
        <div className="flex justify-start items-start gap-5 text-md font-semibold flex-wrap">
          <h3>Property</h3>
          <h3>Services</h3>
          <h3>Product</h3>
          <h3>About Us</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
