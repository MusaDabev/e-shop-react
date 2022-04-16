import React from 'react';
import '../Styles/style.css';
import footerLogo from '../pictures/Drop_White.png';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import './footer.css';



function Footer() {

  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
    <div className='footer'>
       <div className="inforamtion">
        <h3 className='footerHeadings'>ИНФОРМАЦИЯ</h3>
        <ul className="sidebar-items">
          <li><Link to=''>За нас</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><Link to=''>Магазини</Link></li>
          <li><Link to=''>Общи условия</Link></li>
          <li><Link to=''>Поверителност и лични данни</Link></li>
          <li><Link to=''>Мнения</Link></li>
        </ul>
      </div>
      <div className="menu">
        <h3 className='footerHeadings'>МЕНЮ</h3>
        <ul className="menu-footer">
          <li><Link to=''>Нови продукти</Link></li>
          <li><Link to=''>Промоции</Link></li>
          <li><Link to=''>Категория 1</Link></li>
          <li><Link to=''>Категория 2</Link></li>
        </ul>
      </div>
      <div className="social-networks">
        <h3 className='footerHeadings'>СОЦИАЛНИ МРЕЖИ</h3>
        <div className='icons'>
          <BsFacebook style={{color: "white", cursor: "pointer"}} />
          <BsInstagram style={{color: "white", cursor: "pointer"}} />
          <BsTwitter style={{color: "white", cursor: "pointer"}} />
        </div>
      </div>
      <div className="contacts">
        <h3 className='footerHeadings'>КОНТАКТИ</h3>
        <p>Tel: +359 87 777 8888</p>
        <p>E-mail: example@ex.com</p>
        <p>Адрес: ул. Цар Борис 3</p>
        <p>
         Copyright © {year} 
          <img className="footer-logo" src={footerLogo} alt="logo" />
        </p>
      </div>
    </div>
    </>
  )
}

export default Footer
