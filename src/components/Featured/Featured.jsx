import React from 'react';
import featured1 from '../../assets/featured-tc.png';
import featured2 from '../../assets/featured-fast.png';
import featured3 from '../../assets/featured-plir.png';
import featured4 from '../../assets/featured-forbes.png';
import './featured.css';

const Featured = () => {
  return (
    <div className='app__featured section__padding'>
      <h4>FEATURED ON</h4>
      <div className="app__featured-logos">
        <img src={featured1} alt="featured1" />
        <img src={featured2} alt="featured2" />
        <img src={featured3} alt="featured3" />
        <img src={featured4} alt="featured4" />
      </div>
    </div>
  )
}

export default Featured