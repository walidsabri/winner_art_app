import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compo/nav";
import Footer from "./compo/footer";

import Welcome from "./compo/welcome";

import H from "./compo/h";

import Cours from "./compo/cours";
import Vente from "./compo/vente";
import Regist from "./compo/registrations";
import "./App.css";
import Login from "./compo/login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<H />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/vente" element={<Vente />} />
        <Route path="/inscriptions" element={<Regist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};
export default App;
