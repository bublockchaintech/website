import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Sponsors.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Sponsors = () => (
  <div>
    <div style={{ display: "block" }}>
      <h2 className="head-text">
        <span style={{ display: "block" }}>Partnerliklerimiz</span>
      </h2>
    </div>
      <div className="app__header__sponsors app__flex">
        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles-v2">
          {[images.codefictionPng, images.colinsPng].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles-v2">
          {[images.patikaDevPng, images.etkinkampusPng].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles-v2">
          {[images.fullseppPng, images.uniVeChainPng].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </div>
  </div>
);

export default AppWrap(MotionWrap(Sponsors, "app__header"), "sponsors", "app__whitebg");
