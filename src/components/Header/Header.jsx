import React from 'react';
import headerimg from '../../assets/header-img.png';
import './header.css';

const Header = () => {
  return (
    <div className='app__header section__padding'>
      <div className="app__header-content">
        <h1>Discover And Collect Rare NFTs</h1>
        <p>The most secure marketplace for buying and selling unique crypto assets.</p>
        <div className="app__header-btn_container">
          <a href="#" className="header-btn1">BUY NFTS</a>
          <a href="#" className="header-btn2">SELL NFTS</a>
        </div>
      </div>

      <div className="app__header-img">
        <img src={headerimg} alt="" />
      </div>
    </div>
  )
}

export default Header