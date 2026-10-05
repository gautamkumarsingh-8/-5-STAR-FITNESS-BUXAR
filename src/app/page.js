import React from 'react';
import Services from './components/home-components/Services';
import Gallery from './components/home-components/Gallery';
import About from './components/home-components/About';
import Membership from './components/home-components/Membership';
import Contact from './components/home-components/Contact';

const page = () => {
  return (
    <div>
      <Services />
      <Gallery/>
      <About/>
      <Membership/>
      <Contact/>
    </div>
  )
}

export default page