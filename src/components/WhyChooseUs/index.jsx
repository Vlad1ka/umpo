import React from 'react';
import classes from './WhyChooseUs.module.scss'

const WhyChooseUs = () => {

  return (
    <div className={classes.container}>
        <p className={classes.title}>Почему выбирают нас</p>
        <hr />
        <div className={classes.cards}>

            <div className={classes.card}>
                <img src="./img/education.svg" alt="img" />
                <p className={classes.text}>Бесплатное обучение</p>
                <p className={classes.description}>Дуальная система: 30% теории, 70% практики.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/microchip.svg" alt="img" />
                <p className={classes.text}>Новейшее оборудование</p>
                <p className={classes.description}>Станки с ЧПУ, роботизированные линии.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/codementor.svg" alt="img" />
                <p className={classes.text}>Наставничество</p>
                <p className={classes.description}>Опытные наставники закреплены за каждым учеником.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/home.svg" alt="img" />
                <p className={classes.text}>Поддержка жильем</p>
                <p className={classes.description}>Арендный дом для иногородних, спецодежда.</p>
            </div>
        </div>

    </div>
  )
}

export default WhyChooseUs