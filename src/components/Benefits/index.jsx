import React from 'react';
import classes from './Benefits.module.scss'

const Benefits = () => {

  return (
    <div className={classes.container}>
        <div className={classes.cards}>

            <div className={classes.card}>
                <img src="./img/education.svg" alt="img" />
                <p className={classes.text}>Стипендия 2 МРОТ</p>
                <p className={classes.description}>Во время всего срока обучения.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/profit.svg" alt="img" />
                <p className={classes.text}>Полный соцпакет</p>
                <p className={classes.description}>ДМС, путевки, льготные займы.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/codementor.svg" alt="img" />
                <p className={classes.text}>Наставник 24/7</p>
                <p className={classes.description}>Куратор с первого дня помогает в цеху.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/home.svg" alt="img" />
                <p className={classes.text}>Арендный дом</p>
                <p className={classes.description}>Для иногородних сотрудников.</p>
            </div>
        </div>

    </div>
  )
}

export default Benefits