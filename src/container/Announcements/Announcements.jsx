import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Announcements.scss";

function Announcements() {
  const announcements = [
    {
      id: 1,
      date: "12 Nisan 2022",
      works: [
        {
          id: 11,
          desc: "Colins ile partnerlik kuruldu.",
        },
      ],
    },
    {
      id: 2,
      date: "20 Mayıs 2022",
      works: [
        {
          id: 12,
          desc: "Eğitim sponsoru olarak Patika.dev ile partnerlik sağlandı.",
        },
      ],
    },
    {
      id: 3,
      date: "11 Eylül 2022 ",
      works: [
        {
          id: 13,
          desc: "Codefiction ile eğitim ve mentörlük için partnerlik sağlandı.",
        },
      ],
    },
    {
      id: 4,
      date: "11 Eylül 2022",
      works: [
        {
          id: 14,
          desc: "Medya sponsoru olarak FullSepple anlaşıldı.",
        },
      ],
    },
    {
      id: 5,
      date: "27 Ekim 2022",
      works: [
        {
          id: 15,
          desc: "Akbank Refi Hackathonuna katılım sağlandı.",
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
          {announcements.map((announcement) => (
            <motion.div
              className="app__announcements-exp-item"
              key={announcement.id}
            >
              <div className="app__announcements-exp-year">
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
                      <h4 className="bold-text bordered">{work.desc}</h4>
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
          <button className="app_announcements-button">TÜM DUYURULARI GÖRÜNTÜLE</button>
        </div>
      </div>
    </>
  );
}

export default AppWrap(Announcements, "announcements");
