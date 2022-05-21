import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Testimonial.scss";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Blockchain",
      company: "",
      imgUrl: images.about01,
      feedback:
        "Blok Zinciri teknolojisi özetle, ağa dahil olan tüm üreticiler tarafından ağda bulunan kayıtların şifreli olarak tutulduğu bir dağıtık defter teknolojisi olarak açıklanabilir. Web 3.0’ın sunduğu aracısız işlem yapabilme durumu blok zinciri teknolojisiyle mümkün olmaktadır. Blockchain kişi ya da kurumlar arasında aracı bulunmadan eşten eşe ‘‘değer’’ transferinin, aracısız olarak yapılabilmesini sağlayan teknolojidir.",
    },
    {
      name: "NFT",
      company: "",
      imgUrl: images.about01,
      feedback:
        "NFT (Non-fungible token), dijital bir varlığın benzersiz olduğunu ve bu nedenle birbirinin yerine geçemeyeceğini onaylayan, blockchainde depolanan veri birimidir.  NFT'ler, fotoğraflar, videolar ve ses gibi yeniden üretilebilir dijital dosyalarla ilişkilendirilebilir. Ancak, orijinal dosyanın herhangi bir kopyasına erişim, NFT'nin alıcısı ile sınırlı değildir. Bu dijital öğelerin kopyaları herkesin edinmesi için mevcutken, NFT'ler, sahibine telif hakkından ayrı bir sahiplik kanıtı sağlamak için blok zincirlerinde izlenir.",
    },
    {
      name: "Smart Contract",
      company: "",
      imgUrl: images.about01,
      feedback:
        "Smart Contract, anonim taraflar arasındaki işlemleri ve anlaşmaları güvenilir ve tutarlı bir şekilde yürütülebilen, geriye dönük değişimin mümkün olmadığı bilgisayar programlarıdır. Merkezi otoriteye, yasal sisteme veya harici icra mekanizmasına ihtiyaç duymamaktadır. Smart Contract aracı kurum ve kuruluşları ortadan kaldırdığı için hızlı ve düşük maliyetlidir. Yazılımsal algoritmalar ile şifrelenip dağıtık defterlerde tutulduğu için yüksek güvenliklidir. ",
    },
    {
      name: "Web3.0",
      company: "",
      imgUrl: images.about01,
      feedback:
        "Web 3.0 internetin Decentralized yani Merkeziyetsiz ve P2P (Eşten Eşe) olacak şekilde kullanılabilen, tamamen blok zincir destekli ve kişiselleştirilmiş halini ifade ediyor. Şu anda kullanılan internet hayattaki şeyleri hatırı sayılır derecede değiştirmiş olsa da merkezcilik, gözetlenme, istilacı reklamcılık gibi birçok dezavantajları vardır. Web 3.0 ile birlikte yeni internet dönemi açık, akıllı ve merkeziyetsizci bir internet olmayı hedeflemektedir. Bu sayede veri, birbirine bağlanmış olan yollardan merkeziyetsiz şekilde ulaştırılacaktır.",
    },
  ]);
  const [brands, setBrands] = useState([
    {
      id: "1",
      name: "Yazi",
      imgUrl: images.nft,
    },
    {
      id: "3",
      name: "Yazi",
      imgUrl: images.blokchain,
    },
    {
      id: "2",
      name: "Yazi",
      imgUrl: images.web3,
    },
  ]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {}, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(Testimonial);
