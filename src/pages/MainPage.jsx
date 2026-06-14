import React, { useRef } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import SoughtAfterProfessions from '../components/SoughtAfterProfessions';
import News from '../components/News';

const MainPage = () => {
  // Создаём реф для блока профессий (как в ТЗ стр. 35)
  const professionsRef = useRef(null);

  return (
    <div>
      {/* Передаём реф в Hero, чтобы кнопка могла прокрутить к профессиям */}
      <Hero professionsRef={professionsRef} />
      
      <WhyChooseUs />
      
      {/* Блок профессий с рефом - сюда будет прокрутка */}
      <div ref={professionsRef}>
        <SoughtAfterProfessions />
      </div>
      
      <News />
    </div>
  );
};

export default MainPage;