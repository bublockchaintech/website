import { send } from "emailjs-com";
import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrapV2, MotionWrap } from "../../wrapper";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blankField, setBlankField] = useState(false);

  const { username, email, message } = formData;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!(username === "" || email === "" || message === "")) {
      setLoading(true);

      send("service_es1y7ur", "template_hiw8xpr", formData, "XdAKsxFytxwHq0-oS")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ username: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("FAILED!", err);
        });
      setLoading(false);
      setBlankField(false);
    } else {
      console.error("FAILED! You must fill all the blank fields.");
      setBlankField(true);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   // const contact = {
  //   //   _type: 'contact',
  //   //   name: formData.username,
  //   //   email: formData.email,
  //   //   message: formData.message,
  //   // };
  // };

  return (
    <>
      <h2 className="head-text">
        Aramıza <span>Katıl</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:blokchaintech@info.com" className="p-text">
            bublockchaintech@gmail.com
          </a>
        </div>
        {/* <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:444 1 997" className="p-text">
            444 1 997
          </a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={sendEmail} className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Ad Soyad"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="E-Posta"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mesaj"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <p style={{ color: "red" }}>{blankField ? "Tüm alanları doldurun" : ""}</p>
          <button type="submit" className="p-text">
            {!loading ? "Bize Mesaj Gönderin" : "Gönderiliyor..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Yazi</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapV2(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg");
