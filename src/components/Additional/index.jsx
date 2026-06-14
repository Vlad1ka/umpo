import React from 'react';
import classes from './Additional.module.scss';
import { useNavigate } from 'react-router-dom';

const Additional = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/training');
  };


  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <p className={classes.title}>Узнай подробнее об обучении и льготах</p>
            <p className={classes.description}>Стипендия 2 МРОТ, жильё для иногородних, гарантированное трудоустройство</p>
            <button className={classes.btn} onClick={handleButtonClick}>Перейти на страницу обучения</button>
        </div>
    </div>
  )
}

export default Additional