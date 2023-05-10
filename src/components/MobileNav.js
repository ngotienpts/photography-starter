import React, { useState } from "react";

// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

// import link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

// component
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div
        className="text-3xl cursor-pointer"
        onClick={() => setOpenMenu(true)}
      >
        <CgMenuRight />
      </div>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full h-screen max-w-xs z-20 absolute top-0 right-0"
      >
        {/* icon */}
        <div
          className="text-4xl absolute top-14 left-4 z-30 text-primary cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <IoMdClose />
        </div>

        {/* menu list */}
        <ul className="h-full flex flex-col items-center justify-center gap-y-8 text-primary font-bold font-primary text-3xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
