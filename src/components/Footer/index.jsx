import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <p>© 2026 ПАО «ОДК-УМПО»</p>
            <p>Политика данных</p>
            <div className={classes.mail}>
                <img src="./img/mail.svg" alt="mail" />
                <p>ok_bpor@umpo.ru</p>
            </div>
        </div>
    </div>
  )
}

export default Footer