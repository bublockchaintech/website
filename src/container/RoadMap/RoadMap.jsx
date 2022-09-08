import React from "react";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./RoadMap.scss";

function RoadMap() {
  // const skills = [
  //   { name: "NFT", icon: images.about04 },
  //   { name: "Blokchain", icon: images.about03 },
  //   { name: "Web3", icon: images.about04 },
  // ];

  const experiences = [
    {
      id: 1,
      works: [
        {
          id: 11,
          name: "Kuruluş",
          company:
            "Beykent Üniversitesi bünyesi içerisinde 2022 yılında kurulduk.",
          desc: ".",
        },
      ],
    },
    {
      id: 2,
      works: [
        {
          id: 12,
          name: "Birlikte Gelişmek",
          company:
            "Proje ekipleri oluşturarak kendi iç eğitimlerimize ağırlık verirken, sektördeki profesyoneller ile topluluk üyelerimizi bir araya getirerek birlikte büyümeyi amaçlıyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      id: 3,
      works: [
        {
          id: 13,
          name: "Blockchain Alanında Çeşitli Projeler",
          company:
            "Blockchain alanında çeşitli projeler yaparak topluluğumuza bu projeleri kazandırmayı hedefliyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      id: 4,
      works: [
        {
          id: 14,
          name: "Merkeziyetsiz Bir Yapıya Ulaşmak",
          company:
            "Yönetim biçimimiz ve projelerimizle topluluğumuza hazır olduğunda DAO yapısını entegre etmek ve bir DAO’ya dönüşmeyi amaçlıyoruz.",
          desc: "blabla",
        },
      ],
    },
    {
      id: 5,
      works: [
        {
          id: 15,
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
        <span>Hedeflerimiz</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <img src={images.nftWebSaydam} alt="profile_bg" />

          {/* {skills.map((skill) => (
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
          ))} */}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.id}</p>
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
                      key={work.id}
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
