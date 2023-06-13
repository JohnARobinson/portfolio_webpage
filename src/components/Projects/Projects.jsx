import React from 'react';
import './projects.css';
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div class="projects_main">
        <p class="project_title">Projects</p>
        <br></br>
        <br></br>
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
  )
}

export default Projects