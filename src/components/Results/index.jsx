import React from 'react';
import classes from './Results.module.scss';
import { testimonialsData } from '../../data/testimonialsData';

const Results = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <p className={classes.title}>Результаты учеников</p>

            <div className={classes.cards}>
                {testimonialsData.map((item, index) => (
                    <div className={classes.card} key={item.id}>
                        <img src={item.photoUrl} alt="img" />
                        <p className={classes.name}>{item.name}, {item.age} лет</p>
                        <p className={classes.income}>{item.salary}</p>
                        <p className={classes.description}>{item.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Results