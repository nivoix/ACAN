import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import ecophyto from "../assets/ecophyto.png";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(!visible);
  };
  return (
    <>
      <header className={` navbar ${visible ? "active" : ""} `}>
        <NavLink className="navTags" to="/">
          Accueil
        </NavLink>
        <NavLink className="navTags" to="/About">
          About
        </NavLink>
        <div className="navCollapse">
          <NavLink className="navTags" to="/Nuisibles">
            Nuisibles
          </NavLink>
          <div className="collapsTags">
            <NavLink to="/Nuisible/Deratisation">Dératisation</NavLink>
            <NavLink to="/Nuisible/Depigeonnage">Dépigeonnage</NavLink>
            <NavLink to="/Nuisible/Insectes">Insectes</NavLink>
          </div>
        </div>
        <div className="navCollapse">
          <NavLink className="navTags" to="/Nettoyage">
            Nettoyage
          </NavLink>
          <div className="collapsTags">
            <NavLink to="/Nettoyages/Industriel">Industriel</NavLink>
            <NavLink to="/Nettoyages/Particulier">Particulier</NavLink>
            <NavLink to="/Nettoyages/Desinfection">Désinfection</NavLink>
          </div>
        </div>
        <div className="navCollapse">
          <NavLink className="navTags" to="/Travaux">
            Travaux
          </NavLink>
          <div className="collapsTags">
            <NavLink to="/Travail/EnHauteur">en hauteur</NavLink>
            <NavLink to="/Travail/Amenagements">Aménagements</NavLink>
            <NavLink to="/Travail/Isolation">Isolations</NavLink>
            <NavLink to="/Travail/RenoExterieure">
              Rénovation Extérieure
            </NavLink>
          </div>
        </div>
        <NavLink className="navTags" to="/Contact">
          Contact
        </NavLink>
        <span
          className={` btnClose ${visible ? "active" : ""} `}
          onClick={show}
        >
          X
        </span>
      </header>
      <div className={`openBurger ${visible ? "hide" : ""}`} onClick={show}>
        <span className="burgerIcon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className={`bannerLogo ${visible ? "" : "center"}`}>
        <img src={logo} alt="logo ACAN" className="logo"></img>
        <div className={` bannerTitle ${visible ? "left" : ""}`}>
          <h1>Nuisibles & Propreté</h1>
          <img src={ecophyto} alt="label écophyto 2018" className="ecophyto" />
        </div>
      </div>
      <div className="bannerSlogan">
        <h2 className="slogan">
          La solution nettoyage & régulation de nuisibles dans les Ardennes
        </h2>
        <div
          className="phone"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <span className="phoneNumber" itemProp="telephone">
            <a href="tel:+33324375814">03.24.37.58.14</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
