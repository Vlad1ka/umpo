import React from 'react';
import classes from './ProfessionsHero.module.scss'

const ProfessionsHero = () => {

  return (
    <div className={classes.container}>
        <p className={classes.title}>Выбери свою профессию</p>
        <p className={classes.description}>8 направлений подготовки — от станка до конструкторского бюро</p>
    </div>
  )
}

export default ProfessionsHero