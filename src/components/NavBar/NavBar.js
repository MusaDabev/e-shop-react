import React, {useContext,} from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import * as AiIcons  from "react-icons/ai"
import { Context } from "../Context";


 function NavBar() {

  const { sidebar, setSidebar } = useContext(Context);

  function showSideBar () {
      setSidebar(!sidebar)
  }

  function hideNav () {
    setSidebar(!sidebar)
  }

  function RenderSideNav () {

        return (
          <nav className='side-menu'>
          <ul className="nav-items">
            <li>
              <Link to='#' onClick={hideNav} className='close-icon'> <AiIcons.AiOutlineClose/></Link>
            </li>
              <li>
                <Link to='/' className="nav-item">НАЧАЛО</Link>
              </li>
              <li>
                <Link to='/products' className="nav-item"> ПРОДУКТИ</Link>
              </li>
              <li>
                <Link to='#' className="nav-item"> КАТЕГОРИИ</Link>
              </li>
          </ul>
        </nav>
        )
    
  }

  return (
    <>
     <div className="nav-bar">
    <Link to={'#'} onClick={showSideBar} className='open-icon'>
       <AiIcons.AiOutlineMenu />
    </Link>
    </div>
    
    <> { sidebar ? <RenderSideNav/>: null}</>
    </>
  );
}

export default NavBar;
