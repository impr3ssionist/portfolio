import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const footerData = {
  footerLinks: [
    { id: "home", href: "#", text: "Home" },
    { id: "about", href: "#about", text: "About" },
    { id: "experience", href: "#experience", text: "Experience" },
    { id: "portfolio", href: "#portfolio", text: "Portfolio" },
    { id: "contact", href: "#Contact", text: "Contact" },
  ],

  footerSocials: [
    {
      id: "facebook",
      href: "https://www.facebook.com/caleb.p.ford.1",
      icon: BsFacebook,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/caleb-ford13/",
      icon: BsLinkedin,
    },
    {
      id: "github",
      href: "https://github.com/impr3ssionist",
      icon: BsGithub,
    },
  ],
};

export default footerData;
