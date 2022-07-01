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
        <Link to={'#'} className="cat-link">Мъже</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Жени</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Деца</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Обувки</Link>
      </div>
      <div className="categorie">
        <FaRandom className="categ-icon"></FaRandom>
        <Link to={'#'} className="cat-link">Аксесоари</Link>
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
