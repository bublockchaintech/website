import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper';

import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

  };

  return (
    <>
      <h2 className="head-text">Aramiza <span>Katil</span></h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:blokchaintech@info.com" className="p-text">blokchaintech@info.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:444 1 997" className="p-text">444 1 997</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Yazi
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg");