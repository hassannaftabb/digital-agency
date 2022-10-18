import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import Cta from '../../components/UI/CTA';
import Header from '../../components/UI/Header';
import Stats from '../../components/UI/Stats';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      {user && <Header />}
      <HeroSection />
      <Cta />
      <Stats />
    </div>
  );
};

export default Home;
