import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Partners from './Components/Partners/Partners';
import Features from './Components/Features/Features';
import Stats from './Components/Stats/Stats';
import Intro from './Components/Intro/Intro';
import BgImage from './assets/fallingfire.webp';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import Cta from './Components/CTA/cta';
import AOS from 'aos';
import 'aos/dist/aos.css';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

  const App = () => {

 useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
      AOS.refresh();
    }, []);
    
return (
  <div className="overflow-x-hidden">
  <div className='min-h-screen backdrop-blur-2xl'>
<div className='w-full flex flex-col'>
  <div style = {bgStyle}>
 <Navbar />
  <Hero />
  </div>
  <Features />
  <Intro />
  <Stats />
  <Testimonial />
  <FAQ />
  <Cta />
  <Footer />
  </div>
  </div>
  </div>
);
  };


export default App;
