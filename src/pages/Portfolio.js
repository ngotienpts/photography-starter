import React from "react";
// import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

// component
const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto relative h-full">
        {/* text & image wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-start h-full text-center lg:text-left gap-x-24 pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Et dolores amet ipsum gubergren duo nonumy et.{" "}
              <b>Duo est ut sed lorem</b> sit amet et sed eos, erat lorem dolor
              magna et sed dolor amet. Sit aliquyam eirmod sea.
              <br />
              <br />
              Et dolores amet ipsum gubergren duo nonumy et. Duo est ut sed
              lorem sit amet et sed eos, erat lorem dolor magna et sed dolor
              amet. Sit aliquyam eirmod sea.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* image grid*/}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={Image1}
                alt=""
              />
            </div>
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={Image2}
                alt=""
              />
            </div>
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={Image3}
                alt=""
              />
            </div>
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
