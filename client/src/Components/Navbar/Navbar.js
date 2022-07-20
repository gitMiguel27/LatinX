import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
      <nav className="Navbar">
        <div className= "navbar-links">
            <NavLink activeClassName="active" to='/home'>Home</NavLink>
            {/* <NavLink activeClassName="active" to={user ? '/mypage' : '/login'}>{user ? "My Page" : "Login"}</NavLink> */}
            {/* {user ? <button className="logout-button" onClick={handleLogoutClick}>Logout</button> : null} */}
            {/* use state for to and content */}
        </div>
      </nav>
    );
  }
  
  export default Navbar;