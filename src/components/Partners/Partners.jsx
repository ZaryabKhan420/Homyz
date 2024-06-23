import React from "react";
import partner1 from "../../assets/prologis.png";
import partner2 from "../../assets/tower.png";
import partner3 from "../../assets/equinix.png";
import partner4 from "../../assets/realty.png";
const Partners = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 sm:gap-0 sm:justify-between items-center my-10 ">
      <img src={partner1} alt="Partners" loading="lazy" width={"150rem"} />
      <img src={partner2} alt="Partners" loading="lazy" width={"150rem"} />
      <img src={partner3} alt="Partners" loading="lazy" width={"150rem"} />
      <img src={partner4} alt="Partners" loading="lazy" width={"150rem"} />
    </div>
  );
};

export default Partners;
