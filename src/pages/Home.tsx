import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Portfolio from '../components/home/Portfolio';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;