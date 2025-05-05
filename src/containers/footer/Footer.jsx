import React from 'react';
import './footer.css';
import linkedInImage from '../../assets/LinkedIn_Icon3.png';

const Footer = () => {
  return (

    <div class="footerdiv">
      <div class="footer-menu">
        <h1>Contact Me</h1>
        <ul>
          <li>240-812-2370</li>
          <li>jrobinson843@gmail.com</li>
        </ul>
        <a href="https://www.linkedin.com/in/john-robinson-357186125"><img class="linkedIn_img" src={linkedInImage} alt="https://www.linkedin.com"></img></a>
      </div> 
      <div class="footer_Owner">
        <p class = "footer_Owner_Text">Webpage of John Robinson</p>
      </div>
    </div>
    
  )
}

export default Footer