import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/caleb-ford13/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/impr3ssionist" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/caleb.p.ford.1" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
