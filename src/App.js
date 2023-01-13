import React from 'react'

import { CTA, Footer, Navbar, Featured, Header, Analytics1, Analytics2, Testimonial,  } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Navbar />      
        <Header />      
        <Featured />
        <Analytics1 />
        <Analytics2 />
        <Testimonial />
        <CTA />
        <Footer />
    </div>
  )
}

export default App