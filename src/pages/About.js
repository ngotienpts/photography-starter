import React, { useContext } from "react";
// import images
import WomanImg from "../img/about/woman.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

// conponent
const About = () => {
  //
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-x-24 text-center lg:text-left lg:pt-16">
          {/* img */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="flex-1 flex flex-col items-center justify-center lg:items-start z-10 pt-36 pb-14 lg:pt-0 lg:w-auto"
          >
            <h1 className="h1">About me</h1>
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
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
