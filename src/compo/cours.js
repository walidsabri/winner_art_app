import React, { useState, useEffect } from "react";
import "./cours.css";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className="couRs">
      <h3>{course.titre}</h3>
      <p>{course.description}</p>
      <span className="prix">{course.prix}DA </span>
      <span className="date">{course.date}</span>
      <Link to="/inscriptions">
        {" "}
        <button className="btn">
          <span>S'inscrire</span>
        </button>
      </Link>
    </div>
  );
};

const Cours = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost/winner1/fetch_ateliers.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <section className="courses-container">
      {courses.length > 0 ? (
        courses.map((course, index) => <Course key={index} course={course} />)
      ) : (
        <h1 className="nop">Aucun cours disponible</h1>
      )}
    </section>
  );
};

export default Cours;
