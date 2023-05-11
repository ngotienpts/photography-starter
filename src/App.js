import React, { useContext } from "react";
// impport motion
import { motion } from "framer-motion";
// import react route
import { BrowserRouter as Router } from "react-router-dom";
// import conponents
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// import cursor context
import { CursorContext } from "./context/CursorContext";
// component
const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-8 h-8 bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
};

export default App;
