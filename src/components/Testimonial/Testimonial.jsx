import React from 'react';
import testimonial from '../../assets/testimonial-img.png';
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className='app__testimonial section__padding'>
      <div className="app__testimonial-content">
        <h4>TESTIMONIALS</h4>
        <h1>Read What Others <br/> Have To Say</h1>
      </div>

      <div className="app__testimonial-container">

        <div className="app__testimonial-testimony">
          <img src={testimonial} alt="testimonial" />
          <h4>olivia cole</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
        </div>

        <div className="app__testimonial-testimony">
          <img src={testimonial} alt="testimonial" />
          <h4>olivia cole</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
        </div>

        <div className="app__testimonial-testimony">
          <img src={testimonial} alt="testimonial" />
          <h4>olivia cole</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
        </div>

      </div>
    </div>
  )
}

export default Testimonial