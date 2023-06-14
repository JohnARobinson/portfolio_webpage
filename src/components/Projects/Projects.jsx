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
            <div class="project_boxes">
              <a class="box_pj" href="">
              Portfolio Website
              </a>
              <a class="box_pj" href="">
              Login Page with Authentication
              </a>
              <a class="box_pj" href="">
              Survey Questionnaire Webpage
              </a>
              <a class="box_pj" href="">
              Resume Webpage 1
              </a>
              <a class="box_pj" href="">
              Resume Webpage 2
              </a>
              <a class="box_pj" href="">
              Multithreaded Compression Algorithm
              </a>
              <a class="box_pj" href="">
              Emulated Unix Shell
              </a>
              <a class="box_pj" href="">
              More
              </a>
              <a class="box_pj" href="">
              TBD
              </a>
              <a class="box_pj" href="">
              TBD
              </a>
            </div>
      
    </div>
  )
}

export default Projects