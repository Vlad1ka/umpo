import React from 'react';
import classes from './Stages.module.scss'

const Stages = () => {

  return (
    <div className={classes.container}>
        <p className={classes.title}>Как поступить и льготы</p>
        <hr />
        <div className={classes.cards}>

            <div className={classes.card}>
                <img src="./img/stages_1.svg" alt="img" />
                <p className={classes.text}>Оставить заявку</p>
                <p className={classes.description}>На сайте или по телефону</p>
            </div>

            <div className={classes.card}>
                <img src="./img/stages_2.svg" alt="img" />
                <p className={classes.text}>Собеседование</p>
                <p className={classes.description}>Приходите в отдел кадров: ул. Ферина, 2</p>
            </div>
            
            <div className={classes.card}>
                <img src="./img/stages_3.svg" alt="img" />
                <p className={classes.text}>Начать обучение</p>
                <p className={classes.description}>Заключаем договор, спецодежда + стипендия</p>
            </div>

        </div>

        

    </div>
  )
}

export default Stages