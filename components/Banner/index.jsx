import React from "react";
import Button from "../Buttons";
import DummyBtn from "../DummyBtn";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div className="px-10  lg:px-24 z-10 py-10 flex flex-col items-center justify-center space-y-8">
    <div className="flex text-center items-center justify-center flex-col space-y-5">
        <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="  text-xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold  heading"
      >
        CCIE, Cloud and Cyber{" "}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="  text-xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold  heading"
      >
        Security Programs
      </motion.h1>
    </div>

    
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="text-gray-700 text-base lg:text-xl font-medium text-center"
      >
        Lifetime access to Videos. CCIE Certified instructors. 100% Placement
        programs
      </motion.h2>
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.7 }}
      >
        <DummyBtn text={"Join Now"} />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
