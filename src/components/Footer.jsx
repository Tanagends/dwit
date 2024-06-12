import React from 'react';
import './../index.css'

//nice footer
export default function Footer() {
  return (
    <>    
    <footer>
      <div>
        <h3>Dwit Web and Graphics</h3>
        <p>Offering Modern web and graphic design services.</p>
      </div>
      <div>
        <h4>Connect with us</h4>
        <ul>
          <li><a href="https://wa.me/263771975597">WhatsApp</a></li>
	  <li><a href="https://www.facebook.com/profile.php?id=61559720938207">Facebook</a></li>
          <li><a href="mailto:dwitmediadwt@gmail.com">Email</a></li>
          <li><a href="https://www.instagram.com/dwt_webandgraphic">Instagram</a></li>
	  <li><a href="tel:+263771975597">Phone</a></li>
        </ul>
      </div>
      <div>
        <h4>Location</h4>
        <p>Harare, Zimbabwe</p>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Dwit Web and Graphics</p>
      </div>
    </footer>
    </>
  );
}
