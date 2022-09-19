import { React, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { images } from "../../constants";
import linkHelper from "../../helper/helper";

function Nabvar({ from }) {
  const [toogle, setToogle] = useState(false);

  let linksArr = [];
  if (from === "app") {
    linksArr = [
      { display: "anasayfa", link: "home" },
      { display: "hakkimizda", link: "about" },
      { display: "ekibimiz", link: "team" },
      { display: "hedeflerimiz", link: "roadmap" },
      { display: "partnerliklerimiz", link: "sponsors" },
      { display: "iletisim", link: "contact" },
    ];
  } else {
    linksArr = [{ display: "anasayfa", link: "home" }];
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.logosvg} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {linksArr.map((item) => (
          <li className="app__flex p-text" key={`link-${item.link}`}>
            <div />
            <Link to="/">
              <button
                onClick={() => {
                  linkHelper.linkHelperForNavigationBar(item);
                }}
              >
                {item.display}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />

        {toogle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToogle(false)} />
            <ul>
              {linksArr.map((item) => (
                <li key={item.link}>
                  <Link to="/">
                    <button
                      onClick={() => {
                        setToogle(false);
                        linkHelper.linkHelperForNavigationBar(item);
                      }}
                    >
                      {item.display}
                    </button>
                  </Link>
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
