import React from 'react';
import classes from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <p className={classes.title}>Контакты отдела кадров</p>
            <div className={classes.text}>
                <p>8 (347) 239-56-95</p>
                <p>8 (347) 238-75-54</p>
                <p>8 (919) 600-28-14</p>
                <p>450039, г. Уфа, ул. Ферина, д. 2</p>
                <p>umporabota.ru (карьерный портал)</p>

            </div>
        </div>
    </div>
  )
}

export default Contacts