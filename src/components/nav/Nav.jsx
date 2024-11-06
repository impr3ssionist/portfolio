import { useState } from "react";
import "./Nav.css";
import navData from "./navData";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {navData.navLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          onClick={() => setActiveNav(link.href)}
          className={activeNav === link.href ? "active" : ""}
        >
          <link.icon />
        </a>
      ))}
    </nav>
  );
};

export default Nav;
