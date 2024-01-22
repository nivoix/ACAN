import "./Footer.scss";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContact">
        <div className="footerAdress">
          <p>ACAN</p>
          <p> 21 rue des Charrons 08090 AIGLEMONT</p>
          <p> contact@acan-08.fr</p>
        </div>
        <div className="footerLink">
          <NavLink className="btnEmail" href="mailto:contact@acan-08.fr">
            ENVOYER UN MAIL
          </NavLink>
          <div className="cardIcons">
            <NavLink className="iconLink" to="https://twitter.com">
              <IoLogoTwitter />
            </NavLink>
            <NavLink className="iconLink" to="https://www.facebook.com/">
              <IoLogoFacebook />
            </NavLink>
            <NavLink className="iconLink" to="https://news.google.com/">
              <IoLogoGoogle />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          © 2024 SARL ACAN au capital de 7700 € - 21, rue des Charrons - 08090
          AIGLEMONT
        </span>
        <span>{`SIRET 45165072500018 Activité (Code NAF ou APE) 8121Z`}</span>
      </div>
    </footer>
  );
};

export default Footer;
