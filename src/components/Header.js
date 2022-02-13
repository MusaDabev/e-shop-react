import React from "react";

function Header() {
    return (
        <div>
            <header>
                <img src=""></img>
                <div className="wrapper">
        <div className="search-box">
          <input type="text" className="input-search" placeholder="Търсене" />

          <button className="search-btn">
            <img src="/pictures/search-solid.svg" alt="" />
          </button>
        </div>
      </div>
            </header>
        </div>
    )
}

export default Header