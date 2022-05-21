import React, { useState } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([
    {
      title: "Vizyon",
      descripton:
        "Değişen teknoloji trendlerine uyum sağlamak, kendisini blockchain mühendisi olarak yetiştirebilmesine yardımcı teknik eğitim ve etkinlik düzenlemek, henüz öğrenciyken özel sektöre projeler yapabilen seviyeye erişmek ,proje bazlı çalışmalar yapmak ve kendi kendini yönetebilen DAO organizasyon yapısına dönüşmeyi istiyoruz.",
      imgUrl: images.about01,
    },
    {
      title: "Misyon",
      descripton:
        "Blockchain teknolojisinin yakın ve gelecek tarihlerde hayatımızı çoğu noktada değiştireceğine inanmaktayız. Bu inanç doğrultusunda isteyen her arkadaşımızın Yeni Dünya’da blockchain mühendisi olabilmesi için her türlü katkıyı sağlamayı hedeflemekteyiz.",
      imgUrl: images.about02,
    },
    {
      title: "Proje",
      descripton:
        "Kendi bünyemizde oluşturduğumuz proje ekipleri ile, blockchain ve nft alanında çeşitli projeler geliştiriyor ve proje ekiplerimizi sektöre danışman statüsünde kazandırmayı hedefliyoruz.",
      imgUrl: images.about03,
    },
    {
      title: "Etkinlik",
      descripton:
        "Etkinliklerimizde topluluk olarak kendimizi blockchain alanında geliştirmeyi ve ulaşabildiğimiz kadar çok insana bilgiyi yaymayı amaçlıyoruz. Bu amaç doğrultusunda, online ve yüzyüze tecrübe aktarımı, eğitim, zirve ve seminerler düzenliyoruz.",
      imgUrl: images.about04,
    },
  ]);
  return (
    <>
      <h2 className="head-text">
        <span>Hakkımızda </span>
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

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
