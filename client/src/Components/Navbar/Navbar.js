import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar({ user, setUser }) {
  let navigate = useNavigate();

  function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((resp) => {
          if (resp.ok) {
              setUser(null);
              navigate("/home");
              console.log('logout success')
          alert (`See you Soon!`)
          }
      });
  };

    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src="/l.png" alt="logo" id="logo"/>
        </div>
        <div className= "navbar-links">
            <NavLink activeClassName="active" to='/home'>Home</NavLink>
            <NavLink activeClassName="active" to='/artists'>Artists</NavLink>
            <NavLink activeClassName="active" to='/explore'>Explore</NavLink>
            <NavLink activeClassName="active" to={user ? '/mypage' : '/login'}>{user ? "My Page" : "Login"}</NavLink>
            {user ? <button className="logout-button" onClick={handleLogoutClick}>Logout</button> : null}
        </div>
      </nav>
    );
  }
  
  export default Navbar;