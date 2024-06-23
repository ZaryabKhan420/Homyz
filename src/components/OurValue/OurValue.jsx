import React from "react";
import valueImg from "../../assets/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdCancel } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
const OurValue = () => {
  const accordianDetails = [
    {
      id: 1,
      title: "Best interest rates on the market",
      description:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: <AiFillSafetyCertificate className="text-[18px] text-blue" />,
    },
    {
      id: 2,
      title: "Prevent unstable prices",
      description:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: <MdCancel className="text-[18px] text-blue" />,
    },
    {
      id: 3,
      title: "Best price on the market",
      description:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: <IoPricetag className="text-[18px] text-blue" />,
    },
  ];

  return (
    <section
      id="value"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center"
    >
      <div className="overflow-hidden rounded-t-[100rem] h-[25rem] sm:h-[30rem] lg:h-[35rem] w-[20rem ] xs:w-[25rem] sm:w-[30rem] lg:place-self-start ">
        <img src={valueImg} alt="value" loading="lazy" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="text-2xl text-[#FFA500] font-semibold">Our Value</h2>
          <h1 className="text-4xl text-[#1F3E72]  font-bold">
            Value We Give To You
          </h1>
          <p className="text-secondary">
            We always ready to help by providing the best services for you.{" "}
            <br /> We Beleive a good place to live can make your life better.
          </p>
        </div>

        <Accordion
          className="mt-5"
          allowMultipleExpanded={false}
          preExpanded={[1]}
        >
          {accordianDetails.map((value) => {
            return (
              <AccordionItem key={value.id} className="my-10" uuid={value.id}>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-xl text-[#1F3E72] font-bold flex justify-between items-center gap-5">
                    {value.icon}
                    <h2 className="text-xl font-bold"> {value.title}</h2>

                    <MdArrowDropDown className="text-blue text-[20px]" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-secondary">{value.description}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default OurValue;
