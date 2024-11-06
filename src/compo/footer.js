import React from "react";
import "./footer.css"; // Assurez-vous d'avoir un fichier CSS correspondant pour le style
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import facebookImage from "../photos/fb.svg";
import instaImage from "../photos/insta.svg";
import logo from "../photos/logologo.png";
import mapImage from "../photos/map.svg";
import tikImage from "../photos/tik.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <img id="logo" src={logo} alt="logo" />
        <div className="rs2">
          <ul>
            <h1>Explorer</h1>
            <li>
              <Link to="/cours">Nos Ateliers</Link>
            </li>
            <li>
              <Link to="/vente">Instruments</Link>
            </li>
            <li>
              <HashLink to="/#apropos">A Propos</HashLink>
            </li>
          </ul>
        </div>

        <div className="rs1">
          <h2>Rejoignez-nous</h2>
          <div>
            <span>
              <a
                href="https://www.facebook.com/ArtsWinners"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookImage} alt="facebook" />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/ecolewinnerart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaImage} alt="instagram" />
              </a>
            </span>
            <span>
              <a
                href="https://maps.app.goo.gl/W5v4dFrUq7PeA5Jy9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mapImage} alt="map" />
              </a>
            </span>
            <span>
              <a
                href="https://www.tiktok.com/@winnerart31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tikImage} alt="map" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="right">
        <hr></hr>
        <p>Winner Art 2024 &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
