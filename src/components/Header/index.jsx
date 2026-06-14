import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const handleRequestClick = () => {
    navigate('/training');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>

        <Link to="/">
          <img className={classes.logo} src="./img/logo.svg" alt="logo" />
        </Link>

        <nav>
          <Link 
            to="/" 
            className={`${classes.link} ${location.pathname === '/' ? classes.active : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/professions" 
            className={`${classes.link} ${location.pathname === '/professions' ? classes.active : ''}`}
          >
            Профессии
          </Link>
          <Link 
            to="/training" 
            className={`${classes.link} ${location.pathname === '/training' ? classes.active : ''}`}
          >
            Обучение и контакты
          </Link>
        </nav>

        {/* Кнопка "Оставить заявку" */}
        <button className={classes.btn} onClick={handleRequestClick}>Оставить заявку</button>

        {/* Кнопка бургер-меню */}
        <img 
          onClick={toggleMenu} 
          className={classes.burgerButton} 
          src={isMenuOpen ? './img/menu_burger_close.svg' : './img/menu_burger.svg'} 
          alt="menu"
        />

      </div>

      {/* Мобильное меню (появляется при клике) */}
      {isMenuOpen && (
        <div className={classes.mobileMenu}>
          <Link 
            to="/" 
            onClick={toggleMenu}
            className={`${classes.link} ${location.pathname === '/' ? classes.active : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/professions" 
            onClick={toggleMenu}
            className={`${classes.link} ${location.pathname === '/' ? classes.active : ''}`}
          >
            Профессии
          </Link>
          <Link 
            to="/training" 
            onClick={toggleMenu}
            className={`${classes.link} ${location.pathname === '/' ? classes.active : ''}`}
          >
            Обучение и контакты
          </Link>
          <button 
            className={classes.mobileBtn}
            onClick={toggleMenu, handleRequestClick}
          >
            Оставить заявку
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;