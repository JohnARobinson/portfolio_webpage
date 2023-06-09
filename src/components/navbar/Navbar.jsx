import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__navbar">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/Skills">
          Skills
        </NavLink>
        <NavLink className="nav-link" to="/Contact">
          Contact Me
        </NavLink>
        <a href="JohnRobinson2023Resume.docx" download>
          Resume
        </a>
        <div class="Project-Dropdown">
          <NavLink className="nav-link" to="/Projects">
            Project Portfolio's
          </NavLink>
          <div class="Project-Content">
            <NavLink className="nav-link" to="/Frontend">
              Web Development
            </NavLink>
            <NavLink className="nav-link" to="/Softwaredev">
              Software Development
            </NavLink>
            <NavLink className="nav-link" to="/Database">
              Database Development
            </NavLink>
            <NavLink className="nav-link" to="/Datascience">
              Data Science
            </NavLink>
            <NavLink className="nav-link" to="/ML">
              Machine Learning Projects
            </NavLink>
            <NavLink className="nav-link" to="/Gamedev">
              Game Development
            </NavLink>
            <NavLink className="nav-link" to="/Threedmodel">
              3D Modeling
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
