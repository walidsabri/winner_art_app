import React, { useTransition } from "react";
import { Link, useActionData } from "react-router-dom";
import "./nav.css";
import logo from "../photos/WinArtLOGO.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsClipboard2CheckFill } from "react-icons/bs";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      {
        <span className="logo">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="logoName">Winner Art</span>
        </span>
      }
      {/* use your logo here */}
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          {" "}
          <li>Acceuil</li>
        </Link>
        <Link to="/cours">
          {" "}
          <li>Ateliers</li>
        </Link>
        <Link to="/vente">
          {" "}
          <li> Instruments</li>
        </Link>
        <Link to="/inscriptions">
          <li>S'inscrire</li>
        </Link>
        <Link to="/login">
          <li className="lglg">Login</li>
        </Link>
      </ul>
      <button className="mobile-meni-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
export default Navbar;
