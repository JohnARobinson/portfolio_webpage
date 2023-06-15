import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div class="contact_body">
      <p class="contact_Title">Contact Me</p>
      <div class="contact_info">
      <img class="contact_img1" src="contactme.png"></img>
        <p>Telephone: 240-812-2370</p>
        <p>Email: jrobinson843@gmail.com</p>
        <a href="https://www.linkedin.com/in/john-robinson-357186125"><img class="linkedIn_img" src="linkedIn.png"></img></a>
        <a href="https://www.linkedin.com/in/john-robinson-357186125">LinkedIn</a>
      </div>
      <div class="contact_body_sub">
        <img class="network1_img" src="network1.jpg"></img>
      </div>
    </div>
  )
}

export default Contact