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
      name: "Yazi",
      company: "Yazi",
      imgUrl: images.about01,
      feedback: "Yazilim ve Analiz Egitimleri",
    },
    {
      name: "Yazi",
      company: "Udemy",
      imgUrl: images.about01,
      feedback: "Smart Contract",
    },
    {
      name: "Yazi",
      company: "Udemy",
      imgUrl: images.about01,
      feedback: "Etkinlik ve Tecrube Aktarimi",
    },
    {
      name: "Yazi",
      company: "Udemy",
      imgUrl: images.about01,
      feedback: "Yenilikci Projeler",
    },
    {
      name: "Yazi",
      company: "Udemy",
      imgUrl: images.about01,
      feedback: "NFT Uretimi",
    },
  ]);
  const [brands, setBrands] = useState([
    {
      id:"1",
      name: "Yazi",
      imgUrl: images.nft,
    },
    {
      id:"3",
      name: "Yazi",
      imgUrl: images.blokchain,
    },
    {
      id:"2",
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
