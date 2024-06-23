import React from "react";
import "./App.css";
import {
  Header,
  Footer,
  Hero,
  Partners,
  Residencies,
  OurValue,
  Contact,
  GetStarted,
} from "./components/Index";
function App() {
  return (
    <>
      <div className="white-gradient absolute w-[20rem] h-[20rem] bg-[rgba(255,255,255,.522)] blur-[100px]"></div>
      <div className="bg-black">
        <div className="container font-Poppins">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="container font-Poppins transition-all duration-1000">
        <Partners />
        <Residencies />
        <OurValue />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
