import React from 'react';
import analytic2 from '../../assets/analytic2.png';
import './analytics.css';

const Analytics = () => {
  return (
    <div className='app__analytics2 section__padding'>
      <div className="app__analytics2-content">
        <h4>ANALYTICS</h4>
        <h1>Built-in Analytics to track your NFTs</h1>
        <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
        <a href="#">view our pricing</a>
      </div>

      <div className="app__analytics2-img">
        <img src={analytic2} alt="analytic1" />
      </div>

    </div>
  )
}

export default Analytics