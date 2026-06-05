import { FaBriefcase, FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BiBookReader, BiMessageAltDetail } from "react-icons/bi";

const navData = {
  navLinks: [
    {
      id: "home",
      href: "#home",
      icon: FaHome,
    },
    {
      id: "about",
      href: "#about",
      icon: SiAboutdotme,
    },
    {
      id: "experience",
      href: "#experience",
      icon: BiBookReader,
    },
    {
      id: "portfolio",
      href: "#portfolio",
      icon: FaBriefcase,
    },
    {
      id: "contact",
      href: "#contact",
      icon: BiMessageAltDetail,
    },
  ],
};

export default navData;
