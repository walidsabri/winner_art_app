import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to login API endpoint
      const response = await fetch(
        "https://winnerartart.000webhostapp.com/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        // Handle authentication failure
        setError("Invalid username or password");
        return;
      }

      // Login successful, redirect to admin panel
      window.location.href = "https://winnerartart.000webhostapp.com/admin.php";
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="login-container">
      <img
        src={require("../photos/winnercoloresvg.svg").default}
        alt="Description de l'image"
        className="login-img"
      />
      <div className="form-container">
        <h2>Connexion Administrateur</h2>
        <form onSubmit={handleSubmit} className="logf">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username :"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password :"
          />
          <button type="submit" name="submit">
            Se connecter
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
