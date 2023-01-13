import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <a className='logo' href="3">KRYPTO</a>

      <div className="app__footer-item">
        <h4>KRYPTO</h4>
        <ul>
          <li><a href="#">Home</a></li>

          <li><a href="#">About</a></li>

          <li><a href="#">Buy NFTs</a></li>

          <li><a href="#">Sell NFTs</a></li>
        </ul>
      </div>

      <div className="app__footer-item">
        <h4>MARKET</h4>
        <ul>
          <li><a href="#">Browse NFTs</a></li>

          <li><a href="#">Buy NFTs</a></li>

          <li><a href="#">Sell NFTs</a></li>
        </ul>
      </div>

      <div className="app__footer-item">
        <h4>CONTACT</h4>
        <ul>
          <li><a href="#">Email</a></li>

          <li><a href="#">LinkedIn</a></li>

          <li><a href="#">Instagram</a></li>

          <li><a href="#">Twitter</a></li>
        </ul>
      </div>

      <div className="app__footer-join">
        <h3>Join Our Newsletter</h3>
        <form action="">
          <input type="text" placeholder='Email Address' />
          <a>SUBMIT</a>
        </form>
      </div>

    </div>
  )
}

export default Footer