import { React, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
import linkHelper from "../../helper/helper";

function Nabvar() {
  const [toogle, setToogle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logosvg} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          { display: "anasayfa", link: "home" },
          { display: "hakkimizda", link: "about" },
          { display: "ekibimiz", link: "team" },
          { display: "hedeflerimiz", link: "roadmap" },
          { display: "iletisim", link: "contact" },
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item.link}`}>
            <div />
            <button
              onClick={() => {
                linkHelper.linkHelperForNavigationBar(item);
              }}
            >
              {item.display}
            </button>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />

        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul>
              {[
                { display: "anasayfa", link: "home" },
                { display: "hakkimizda", link: "about" },
                { display: "ekibimiz", link: "team" },
                { display: "hedeflerimiz", link: "roadmap" },
                { display: "iletisim", link: "contact" },
              ].map((item) => (
                <li key={item.link}>
                  <button
                    onClick={() => {
                      setToogle(false);
                      linkHelper.linkHelperForNavigationBar(item);
                    }}
                  >
                    {item.display}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Nabvar;
