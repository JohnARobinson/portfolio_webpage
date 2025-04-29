import React from 'react';
import './footer.css';
    {/*https://herotofu.com/solutions/guides/how-to-build-html-form-that-sends-email*/}
const Footer = () => {
  return (

    <div class="footerdiv">
      
      <div class="footer-menu">
        <ul>
          <li>Contact Me</li>
          <li>240-812-2370</li>
          <li>jrobinson843@gmail.com</li>
        </ul>
      </div>

      <div class="footer-socials">
      <a href="https://www.linkedin.com/in/john-robinson-357186125"><img class="linkedIn_img" src="../../assets/LinkedIn_Icon2.png" alt="https://www.linkedin.com"></img></a>
      </div>

      <div class="footer_Owner">
        <p class = "footer_Owner_Text">Webpage of John Robinson</p>
      </div>
      
    </div>
  )
}

export default Footer