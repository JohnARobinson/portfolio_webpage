import React from 'react';
import './footer.css';
    {/*https://herotofu.com/solutions/guides/how-to-build-html-form-that-sends-email*/}
const Footer = () => {
  return (

    <div class="footerdiv">
      <div class="footer-mandiv">
        <br></br>
      </div>
      <div class = "footer_contact">
        <p class = "footer_email">I would love to hear from you.</p>
        <p class = "footer_email">Email Me:</p>
        <form action="mailto:jrobinson843@gmail.com" method="GET">
          <div>
            <input type="text" placeholder="Subject" name="subject" class="subject" required />
          </div>
          <div>
            <textarea placeholder="Your message" name="body" class="message"required></textarea>
          </div>
          <div>
          <button class="email_button" type="submit">Send Email</button>
          </div>
        </form>
      </div>
      <div>
      </div>
      <p class = "footer_extra_text">Webpage of John Robinson</p>
    </div>
  )
}

export default Footer