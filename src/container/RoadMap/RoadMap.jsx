import React from "react";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./RoadMap.scss";

function RoadMap() {
  const skills = [
    { name: "NFT", icon: images.about04 },
    { name: "Blokchain", icon: images.about03 },
    { name: "Web3", icon: images.about04 },
  ];

  const experiences = [
    {
      year: "1",
      works: [
        {
          name: "Kuruluş",
          company:
            "Beykent Üniversitesi bünyesi içerisinde 2022 yılında kurulduk.",
          desc: ".",
        },
      ],
    },
    {
      year: "2",
      works: [
        {
          name: "Birlikte Gelişmek",
          company:
            "Proje ekipleri oluşturarak kendi iç eğitimlerimize ağırlık verirken, sektördeki profesyoneller ile topluluk üyelerimizi bir araya getirerek birlikte büyümeyi amaçlıyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      year: "3",
      works: [
        {
          name: "Blockchain Alanında Çeşitli Projeler",
          company:
            "Blockchain alanında çeşitli projeler yaparak topluluğumuza bu projeleri kazandırmayı hedefliyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      year: "4",
      works: [
        {
          name: "Merkeziyetsiz Bir Yapıya Ulaşmak",
          company:
            "Yönetim biçimimiz ve projelerimizle topluluğumuza hazır olduğunda DAO yapısını entegre etmek ve bir DAO’ya dönüşmeyi amaçlıyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      year: "5",
      works: [
        {
          name: "Sektöre Danışmanlık Sağlamak",
          company:
            "	Birlikte büyüyüp gelişerek zamanla topluluğumuzu sektöre danışman olarak kazandırmak istiyoruz",
          desc: "blabla",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="head-text">
        Yol <span>Haritasi</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
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
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(RoadMap, "app__roadmap"),
  "roadmap",
  "app__whitebg"
);
