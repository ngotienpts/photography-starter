import React from "react";

// import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";

// import image
import Logo from "../img/header/logo.svg";

// import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center fixed w-full z-30 px-[30px] lg:px-[100px] h-[100px] lg:h-[140px]">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* image */}
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="max-w-[200px]" />
        </Link>
        {/* nav - initially hidden - show on desktop PC */}
        <nav className="hidden xl:flex items-center gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials  */}
      <Socials />

      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
