import React from "react";

const PrimaryButton = ({ children, classes = "" }) => {
  return (
    <div
      className={`${classes} py-2.5 px-6 text-white rounded-[5px] outline-none cursor-pointer font-semibold text-sm hover:scale-[1.08] transition-all duration-300`}
      style={{
        background: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
