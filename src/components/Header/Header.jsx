import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { PrimaryButton } from "../Index";
const Header = () => {
  const items = [
    {
      id: 1,
      title: "Residencies",
      link: "residencies",
    },
    {
      id: 2,
      title: "Our Value",
      link: "value",
    },
    {
      id: 3,
      title: "Contact Us",
      link: "contact",
    },
    {
      id: 4,
      title: "Get Started",
      link: "started",
    },
  ];

  return (
    <div className="header flex justify-between items-center py-5 relative top-0 left-0">
      <img src={Logo} alt="Homyz" loading="lazy" width={"100rem"} />
      <nav className="navbar w-full z-[999] md:w-fit md:flex justify-center items-center md:static absolute top-[100%] left-[120%] hidden translate-[-50%] bg-primary my-5 rounded-lg md:my-0">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 px-10 py-5 md:px-0 md:py-0">
          {items.map((item) => {
            return (
              <Link
                className="text-[16px] text-secondary font-semibold transition-all duration-1000 cursor-pointer"
                key={item.id}
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {item.title}
              </Link>
            );
          })}
          <PrimaryButton children="Contact" />
        </ul>
      </nav>
      <div class="block md:hidden menu-icon text-white">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            document.querySelector(".navbar").classList.toggle("mobile");
          }}
          className="transition-all duration-300"
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
