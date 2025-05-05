import React from 'react';
import './home.css';
import myImage from '../../assets/me.png';

//document.body.style.backgroundColor = "white";
const Home = () => {
  return (
      <div class="main">
        <div class="top_offset">
        </div>

        <div class="introduction_overlay">
        </div>
        <div class="introduction">
          <div class="intro_Image_div">
            <img class="MyImage" src={myImage}></img>
          </div>
          <div class="intro_Text">
            <h1>John Robinson</h1>
            <p>Web & Software Developer</p>
          </div>
        </div>

      </div>
  )
}

export default Home