import React, { useState } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([
    { title: "NFT", descripton: "Lorem10 Lorem10", imgUrl: images.about01 },
    { title: "WEB3", descripton: "Lorem10 Lorem10", imgUrl: images.about02 },
    {
      title: "ETKINLIK",
      descripton: "Lorem10 Lorem10",
      imgUrl: images.about03,
    },
    { title: "SEMINER", descripton: "Lorem10 Lorem10", imgUrl: images.about04 },
  ]);
  return (
    <>
      <h2 className="head-text">
        Blokchain Tech Club <span>Hakkinda </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.descripton}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
