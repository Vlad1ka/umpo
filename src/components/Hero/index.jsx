import React from 'react';
import classes from './Hero.module.scss';

const Hero = ({ professionsRef }) => {

  const scrollToProfessions = () => {
    if (professionsRef && professionsRef.current) {
      professionsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.title}>Стань мультиспециалистом ОДК-УМПО</p>
        <p className={classes.description}>
          Обучим самой востребованной профессии с нуля. 
          Гарантированное трудоустройство на заводе Ростеха.
        </p>
        <button 
          className={classes.btn} 
          onClick={scrollToProfessions}
          aria-label="Перейти к списку профессий"
        >
          Смотреть профессии
        </button>
        
        <div className={classes.benefits}>
          <div className={classes.benefit}>
            <p className={classes.digit}>2 МРОТ</p>
            <p className={classes.text}>стипендия во время обучения</p>
          </div>
          <div className={classes.benefit}>
            <p className={classes.digit}>От 80 000 руб</p>
            <p className={classes.text}>зарплата после трудоустройства</p>
          </div>
          <div className={classes.benefit}>
            <p className={classes.digit}>220+</p>
            <p className={classes.text}>единиц современного оборудования</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;