import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import withRouter higher-order component
import "./regist.css";
import image from "../photos/3d-casual-life-man-plays-guitar.png";
const Regist = () => {
  // Destructure history from props
  const navigate = useNavigate(); // Use navigate hook to redirect to another page

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [typeAtelier, setTypeAtelier] = useState(""); // Default value
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("type_atelier", typeAtelier);
      formData.append("email", email);
      formData.append("tel", tel);

      const response = await fetch(
        "http://localhost/winner1/insert_registration.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      // Display success message
      navigate("/welcome"); // Redirect to the welcome page
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("Registration failed"); // Display error message
    }
  };

  return (
    <div className="registrationForm">
      <div className="description-form">
        <h1>Formulaire d'inscription</h1>
        <p>
          Inscrivez-vous dès maintenant à nos cours d'art et de musique en
          remplissant le formulaire ci-dessous.
        </p>
        <img src={image} alt="" />
      </div>

      <div className="formulairee">
        <form onSubmit={handleSubmit}>
          <h2>Inscrivez-vous à nos ateliers</h2>
          <input
            type="text"
            name="nom"
            placeholder="Nom :"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prenom :"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <select
            name="typeAtelier"
            required
            value={typeAtelier}
            onChange={(e) => setTypeAtelier(e.target.value)}
          >
            <option value="" selected disabled hidden>
              Type atelier :
            </option>
            <option value="drawing">Dessin</option>
            <option value="violin">Violon</option>
            <option value="guitar">Guitare</option>
            <option value="theater">Théâtre</option>
            <option value="crochet">Crochet</option>
            <option value="piano">Piano</option>
            <option value="photo">Photographie</option>
            <option value="stylisme">Stylisme</option>
            <option value="Andalous">Andalous</option>
            <option value="Couture">Couture</option>
            <option value="broderie">Broderie</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email :"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="tel"
            placeholder="Téléphone :"
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input className="bttn" type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Regist;
