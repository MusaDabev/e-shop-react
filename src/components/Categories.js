import React from "react";
import { FaRandom } from "react-icons/fa";
import { Link } from "react-router-dom";
import './categories.css'

function Categories() {
  return (
    <div className="categories">

        <h2>КАТЕГОРИИ</h2>

      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 1</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 2</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 3</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 4</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 5</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 6</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Опция 7</Link>
      </div>
    </div>
  );
}

export default Categories;
