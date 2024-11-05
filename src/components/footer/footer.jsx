import "./Footer.css";
import footerData from "./footerData.js";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Caleb Ford
      </a>
      <div className="permalinks">
        {footerData.footerLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </div>

      <div className="footer__socials">
        {footerData.footerSocials.map((social) => (
          <a key={social.id} href={social.href}>
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
