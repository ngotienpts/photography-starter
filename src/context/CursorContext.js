import React, { useState, useEffect, createContext } from "react";

// create context
export const CursorContext = createContext();
const CursorProvider = ({ children }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  // cursor bg state
  const [cursorBG, setCursorBG] = useState("default");

  // view mobile
  const viewMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!viewMobile) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);

      // clean up function
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  // cursor variant
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    },
  };

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  // mouse leaver handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
