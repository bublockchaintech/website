import React, { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Team.scss";

function Team() {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [teams, setTeams] = useState([
    {
      name: "Selçuk Şen",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Selçuk Şen",
      tags: ["Co-Founder", "Mentör"],
      description: "",
    },
    {
      name: "Alpcan Yüksel",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Alpcan Yüksel",
      tags: ["Co-Founder"],
      description: "",
    },
    {
      name: "Fidan Çapkan",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Fidan Çapkan",
      tags: ["Co-Founder"],
      description: "",
    },
    {
      name: "Aybüke Dikkatli",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Aybüke Dikkatli",
      tags: ["Co-Founder"],
      description: "",
    },
    {
      name: "Beyza Karaarslan",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Beyza Karaarslan",
      tags: ["Management Team Member"],
      description: "",
    },
    {
      name: "Gökşen Ayar",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Gökşen Ayar",
      tags: ["Management Team Member"],
      description: "",
    },
    {
      name: "Özmen Evgincan",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Özmen Evgincan",
      tags: ["Management Team Member"],
      description: "",
    },
    {
      name: "Mehmet Fatih Arslantürk",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Mehmet Fatih Arslantürk",
      tags: ["Developer"],
      description: "",
    },
    {
      name: "Eyüphan Kaya",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Eyüphan Kaya",
      tags: ["Developer"],
      description: "",
    },
    {
      name: "Eren Yusuf Duran",
      imgUrl: images.about01,
      socialLink: "https://www.linkedin.com/in/mfarslanturk/",
      title: "Eren Yusuf Duran",
      tags: ["Developer"],
      description: "",
    },
  ]);
  const [filterTeam, setFilterTeam] = useState(teams);

  const handleTeamFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Tümü") {
        setFilterTeam(teams);
      } else {
        setFilterTeam(teams.filter((team) => team.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Ekibimiz</span>
      </h2>

      <div className="app__team-filter">
        {[
          "Co-Founder",
          "Management Team Member",
          "Developer",
          "Mentör",
          "Tümü",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleTeamFilter(item)}
            className={`app__team-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__team-portfolio"
      >
        {filterTeam.map((team, index) => (
          <div className="app__team-item app__flex" key={index}>
            <div className="app__team-img app__flex">
              <img src={team.imgUrl} alt={team.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__team-hover app__flex"
              >
                <a href={team.socialLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <FaLinkedinIn />
                  </motion.div>
                </a>
                <a href={team.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__team-content app__flex">
              <h4 className="bold-text">{team.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {team.description}
              </p>

              <div className="app__team-tag app__flex">
                <p className="p-text">{team.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(Team, "team");
