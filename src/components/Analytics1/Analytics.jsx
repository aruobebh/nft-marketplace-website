import React from 'react';
import analytic1 from '../../assets/analytic1.png';
import './analytics.css';

const Analytics = () => {
  return (
    <div className='app__analytics section__padding'>
      <div className="app__analytics-img">
        <img src={analytic1} alt="analytic1" />
      </div>

      <div className="app__analytics-content">
        <h4>ANALYTICS</h4>
        <h1>Built-in Analytics to track your NFTs</h1>
        <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
        <a href="#">view our pricing</a>
      </div>
    </div>
  )
}

export default Analytics