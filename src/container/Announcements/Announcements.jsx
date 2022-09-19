import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AppWrap } from "../../wrapper";
import "./Announcements.scss";

function Announcements() {
  const { pathname } = useLocation();
  console.log(pathname);
  const announcements = [
    {
      id: 1,
      date: "21 Şubat",
      works: [
        {
          id: 15,
          desc: "Blockchain Tech Club kuruldu.",
        },
      ],
    },
    {
      id: 2,
      date: "11 Mayıs",
      works: [
        {
          id: 11,
          desc: "Yeni Partnerimiz | Colin's",
        },
      ],
    },
    {
      id: 3,
      date: "25 Mayıs",
      works: [
        {
          id: 11,
          desc: "Yeni Medya Partnerimiz | Etkin Kampüs",
        },
      ],
    },
    {
      id: 4,
      date: "30 Haziran",
      works: [
        {
          id: 12,
          desc: "Yeni Eğitim Partnerimiz | Patika.dev",
        },
      ],
    },
    {
      id: 5,
      date: "23 Temmuz",
      works: [
        {
          id: 14,
          desc: "Yeni Medya Partnerimiz | FullSepp",
        },
      ],
    },
    {
      id: 6,
      date: "8 Ağustos",
      works: [
        {
          id: 13,
          desc: "Yeni Partnerimiz | Codefiction",
        },
      ],
    },
    {
      id: 7,
      date: "15 Ağustos",
      works: [
        {
          id: 15,
          desc: "Yeni Partnerimiz | UniVeChain",
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="head-text">
        <span>Duyurular</span>
      </h2>

      <div className="app__announcements-container">
        <div className="app__announcements-exp">
          {pathname === "/"
            ? announcements
                .filter((announcement) => announcement.id > announcements.length - 5)
                .reverse()
                .map((announcement) => (
                  <motion.div className="app__announcements-exp-item" key={announcement.id}>
                    <div className="app__announcements-exp-year">
                      <p
                        className="bold-text"
                        style={pathname === "/duyurular" ? { color: "#ffffff" } : { color: "#313bac" }}
                      >
                        {announcement.date}
                      </p>
                    </div>
                    <motion.div className="app__announcements-exp-works">
                      {announcement.works.map((work) => (
                        <>
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__announcements-exp-work"
                            data-tip
                            data-for={work.desc}
                            key={work.id}
                          >
                            <h4 className="bold-text bordered" style={{fontSize: "1.15rem"}}>{work.desc}</h4>
                          </motion.div>
                          {/* <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip> */}
                        </>
                      ))}
                    </motion.div>
                  </motion.div>
                ))
            : announcements.reverse().map((announcement) => (
                <motion.div className="app__announcements-exp-item" key={announcement.id}>
                  <div
                    className="app__announcements-exp-year"
                    style={pathname === "/" ? { backgroundColor: "#ffffff" } : { backgroundColor: "#edf2f8" }}
                  >
                    <p className="bold-text">{announcement.date}</p>
                  </div>
                  <motion.div className="app__announcements-exp-works">
                    {announcement.works.map((work) => (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__announcements-exp-work"
                          data-tip
                          data-for={work.desc}
                          key={work.id}
                        >
                          <h4 style={pathname === "/" ? {} : { fontWeight: "bold" }} className="bold-text bordered">
                            {work.desc}
                          </h4>
                        </motion.div>
                        {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                      </>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
          {pathname === "/" ? (
            <Link to="duyurular" className="app_announcements-button">
              TÜM DUYURULARI GÖRÜNTÜLE
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default AppWrap(Announcements, "announcements");
