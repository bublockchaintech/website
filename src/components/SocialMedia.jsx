import React from "react";
import { BsTwitter, BsInstagram, BsDiscord, BsSpotify } from "react-icons/bs";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/BU_blockchain"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://medium.com/@bublockchaintech"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMediumSquare />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/bublockchaintechclub/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/channel/UCwpkjFDdDyRrWTTFazY9ZGA"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube />
        </a>
      </div>
      <div>
        <a
          href="https://discord.com/invite/DuYpGATPtq"
          target="_blank"
          rel="noreferrer"
        >
          <BsDiscord />
        </a>
      </div>
      <div>
        <a
          href="https://open.spotify.com/show/3ArfhgRL6mRuk9WSm80tDF?si=5cd88fff35a14658&nd=1"
          target="_blank"
          rel="noreferrer"
        >
          <BsSpotify />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/beykent-%C3%BCniversitesi-blockchain-tech-club/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
