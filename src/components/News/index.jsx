import React from 'react';
import classes from './News.module.scss'

const News = () => {

  return (
    <div className={classes.container}>
        <p className={classes.title}>Новости</p>
        <hr />
        <div className={classes.cards}>
            <div className={classes.card}>
                <img src="./img/newspaper.svg" alt="img" />
                <p className={classes.text}>Август 2025</p>
                <p className={classes.description}>Выпущено более 500 мультиспециалистов рабочих профессий.</p>
            </div>
            <div className={classes.card}>
                <img src="./img/rocket.svg" alt="img" />
                <p className={classes.text}>Август 2025</p>
                <p className={classes.description}>«Крылья Ростеха»: квота 205 мест от УУНиТ выполнена.</p>
            </div>
        </div>

    </div>
  )
}

export default News