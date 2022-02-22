import React from 'react'
import '../Styles/style.css';
import footerLogo from '../pictures/Drop_White.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
       <div className="inforamtion">
        <h3 className='footerHeadings'>ИНФОРМАЦИЯ</h3>
        <ul className="sidebar-items">
          <li><a href="">За нас</a></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><a href="">Магазини</a></li>
          <li><a href="">Общи условия</a></li>
          <li><a href="">Поверителност и лични данни</a></li>
          <li><a href="">Мнения</a></li>
        </ul>
      </div>
      <div className="menu">
        <h3 className='footerHeadings'>МЕНЮ</h3>
        <ul className="menu-footer">
          <li><a href="">Нови продукти</a></li>
          <li><a href="">Промоции</a></li>
          <li><a href="">Категория 1</a></li>
          <li><a href="">Категория 2</a></li>
        </ul>
      </div>
      <div className="social-networks">
        <h3 className='footerHeadings'>СОЦИАЛНИ МРЕЖИ</h3>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <div className="contacts">
        <h3 className='footerHeadings'>КОНТАКТИ</h3>
        <p>Tel: +359 87 777 8888</p>
        <p>E-mail: example@ex.com</p>
        <p>Адрес: ул. Цар Борис 3</p>
        <p>
          Copyright © 2021
          <img className="footer-logo" src={footerLogo} alt="" />
        </p>
      </div>
    </div>
  )
}

export default Footer
