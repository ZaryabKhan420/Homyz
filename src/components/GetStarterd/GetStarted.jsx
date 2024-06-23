import React from "react";
import { PrimaryButton } from "../Index";
const GetStarted = () => {
  return (
    <div
      id="started"
      className="py-10 px-5 my-12 bg-blue rounded-md flex flex-col justify-center items-center gap-6 border-8 border-lightBlue "
    >
      <h1 className="text-4xl text-center text-white font-bold">
        Get starsted with Homyz
      </h1>
      <p className="text-center text-white/50">
        Subscribe and find super attractive price quotes from us. <br /> Find
        your residence soon
      </p>
      <PrimaryButton
        children="Get Started"
        classes="border-2 border-white rounded-xl bg-white"
      />
    </div>
  );
};

export default GetStarted;
