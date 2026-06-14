import React from 'react';
import classes from './SoughtAfterProfessions.module.scss';
import { useNavigate } from 'react-router-dom';

const SoughtAfterProfessions = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/professions');
    };

  return (
    <div className={classes.container}>
        <p className={classes.title}>Востребованные профессии</p>
        <hr />
        <div className={classes.cards}>

            <div className={classes.card}>
                <img src="./img/chpu.svg" alt="img" />
                <p className={classes.text}>Оператор ЧПУ</p>
                <p className={classes.description}>Управление станками с программным управлением.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/tokar.svg" alt="img" />
                <p className={classes.text}>Токарь-фрезеровщик</p>
                <p className={classes.description}>Обработка металла на высокоточном оборудовании.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/slesar.svg" alt="img" />
                <p className={classes.text}>Слесарь МСР</p>
                <p className={classes.description}>Сборка авиационных двигателей.</p>
            </div>

            <div className={classes.card}>
                <img src="./img/engineer.svg" alt="img" />
                <p className={classes.text}>Инженер-конструктор</p>
                <p className={classes.description}>Программа «Крылья Ростеха».</p>
            </div>
        </div>

        <button className={classes.btn} onClick={handleButtonClick}>Все профессии</button>

    </div>
  )
}

export default SoughtAfterProfessions