import React from "react";
import { Link } from "react-router-dom";
import "./h.css";
import p4Image from "../photos/p4.jpg";
import p3Image from "../photos/p2.jpg";
import Footer from "../compo/footer";

const H = () => {
  return (
    <div>
      <div className="premier">
        <h1>Nous allons faire de l'art...et vous aussi!</h1>
        <p>Ecole d'enseignement artistique et d'activites culutrelles</p>
        <Link to="/cours">
          <button>Commencer</button>
        </Link>
      </div>

      <div id="apropos" className="deuxieme">
        <img src={p4Image} alt="" className="p4image" />

        <div className="presentation">
          <h2>Qui sommes-nous?</h2>
          <p>
            Winner-Art, la première école d'art de la ville d'Oran, est un lieu
            d'innovation et de passion pour l'art. Nous sommes dédiés à
            l'éducation artistique, offrant une variété de cours et d'ateliers
            dans divers domaines artistiques, allant de la peinture et de la
            sculpture à la musique et au théâtre. Notre mission est de créer un
            environnement où chaque élève peut se sentir inspiré et soutenu pour
            explorer et réaliser son potentiel artistique. Nous célébrons la
            diversité et l'expression personnelle, en créant un espace où chaque
            élève peut se sentir libre de s'exprimer et de créer. Nous sommes
            convaincus que l'art est un moyen puissant de communication et de
            compréhension, et nous nous efforçons de promouvoir cette idée à
            travers nos programmes. Avec Winner-Art, l'art devient une aventure
            accessible à tous, où chaque jour est une nouvelle occasion de créer
            et de découvrir
          </p>
        </div>
      </div>

      <div className="troisieme">
        <div className="presentation">
          <h2>Achetez votre instrument chez nous</h2>
          <p>
            Ne vous fatiguez pas à chercher ailleurs, achetez votre instrument
            chez nous ! Chez Winner-Art, nous ne nous contentons pas de vendre
            des instruments de musique. Nous vous offrons une expérience
            complète qui va au-delà de la simple transaction. Notre sélection
            d'instruments est soigneusement choisie pour répondre à tous les
            goûts et niveaux, de la guitare électrique aux claviers numériques,
            en passant par les batteries et les violons. Nous nous engageons à
            fournir des instruments de haute qualité, à des prix compétitifs,
            tout en offrant un excellent service client. Que vous soyez un
            musicien professionnel en quête de l'instrument parfait pour votre
            prochain album, ou simplement un passionné de musique à la recherche
            de votre premier instrument, vous trouverez ici tout ce dont vous
            avez besoin pour commencer votre aventure musicale. Visitez-nous
            aujourd'hui et découvrez pourquoi Winner-Art est le meilleur choix
            pour tous vos besoins en matière d'instruments de musique
          </p>
          <Link to="/vente">
            <button>Acheter</button>
          </Link>
        </div>
        <img src={p3Image} alt="" className="p4image" />
      </div>

      <div className="equipes">
        {/* <h2>Notre equipe</h2> */}
        <div class="cardequipe">
          <div class="contentequipe">
            <p className="para">YACINE BENGHELLAM</p>
            <p className="para2">CEO AND FOUNDER</p>
            <img src={p4Image} alt="" className="heading" />
          </div>
        </div>

        <div class="cardequipe">
          <div class="contentequipe">
            <p className="para">HICHEM BOUREGHBA</p>
            <p className="para2">CEO AND FOUNDER</p>
            <img src={p4Image} alt="" className="heading" />
          </div>
        </div>

        <div class="cardequipe">
          <div class="contentequipe">
            <p className="para">MEHDI KETTAF</p>
            <p className="para2">CEO AND FOUNDER</p>
            <img src={p4Image} alt="" className="heading" />
          </div>
        </div>

        <div class="cardequipe">
          <div class="contentequipe">
            <p className="para">ALAE HOUTI</p>
            <p className="para2">PROFESSEUR DE VIOLON</p>
            <img src={p4Image} alt="" className="heading" />
          </div>
        </div>

        <div class="cardequipe">
          <div class="contentequipe">
            <p className="para">HICHEM RAMZI</p>
            <p className="para2">PROFESSEUR DE DESSIN</p>
            <img src={p4Image} alt="" className="heading" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default H;
