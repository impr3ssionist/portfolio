import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/caleb-ford13/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/impr3ssionist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Github profile"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/caleb.p.ford.1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook profile"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
