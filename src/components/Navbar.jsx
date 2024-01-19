import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
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
      </header>
      <div className="bannerLogo">
        <img src={logo} alt="logo ACAN" className="logo"></img>
        <h1>Nuisibles & Propreté</h1>
      </div>
    </>
  );
};

export default Navbar;
