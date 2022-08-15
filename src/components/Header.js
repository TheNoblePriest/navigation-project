import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img className="header_left_img" src="logo3.png" alt="" />
      </div>
      <div className="header__center">
        <ul className="header__lists">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <div className="header_centerMenu">
            <button>Project</button>
            <div className="dropdown__header">
              <a href="#">Menu1</a>
              <a href="#">Menu2</a>
              <a href="#">Menu3</a>
              <a href="#">Menu4</a>
              <a href="#">Menu5</a>
            </div>
          </div>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
