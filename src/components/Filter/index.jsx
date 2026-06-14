import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Filter.module.scss';
import { professionsData } from '../../data/professionsData';

const Filter = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const getFilteredProfessions = () => {
    if (activeCategory === 'all') {
      return professionsData;
    }
    return professionsData.filter(prof => prof.category === activeCategory);
  };

  const filteredProfessions = getFilteredProfessions();

  // Функция для перехода на страницу обучения с передачей профессии
  const handleEducationClick = (professionTitle) => {
    navigate('/training', { 
      state: { selectedProfession: professionTitle } 
    });
  };

  // Функция для кнопки "Хочу эту профессию"
  const handleApplyClick = (professionTitle) => {
    navigate('/training', { 
      state: { selectedProfession: professionTitle } 
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        
        {/* Кнопки фильтрации */}
        <div className={classes.buttons}>
          <button 
            className={`${classes.filterBtn} ${activeCategory === 'working' ? classes.active : ''}`}
            onClick={() => setActiveCategory('working')}
          >
            <img 
              src={activeCategory === 'working' ? "./img/helmet-safety-active.svg" : "./img/helmet-safety-unactive.svg"} 
              alt="working"
            />
            Рабочие профессии
          </button>
          <button 
            className={`${classes.filterBtn} ${activeCategory === 'engineering' ? classes.active : ''}`}
            onClick={() => setActiveCategory('engineering')}
          >
            <img 
              src={activeCategory === 'engineering' ? "./img/education-filled-active.svg" : "./img/education-filled-unactive.svg"} 
              alt="engineering"
            />
            Инженерные программы
          </button>
        </div>

        {/* Сетка карточек */}
        <div className={classes.cards}>
          {filteredProfessions.map((profession) => (
            <div key={profession.id} className={classes.card}>
              
              {/* ИКОНКА ПРОФЕССИИ */}
              <div className={classes.cardIcon}>
                <img src={profession.icon} alt={profession.title} />
              </div>
              
              <p className={classes.title}>{profession.title}</p>
              
              <div className={classes.money}>
                <p>{profession.salary}</p>
                <p>после обучения</p>
              </div>
              
              <p className={classes.description}>{profession.description}</p>
              
              <hr />
              
              <div className={classes.elements}>
                {profession.features.map((feature, index) => (
                  <div key={index} className={classes.element}>
                    <img src={feature.icon} alt="feature" />
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
              
              <hr />
              
              {/* Кнопка "Обучение бесплатно" - передаём профессию */}
              <button 
                className={classes.education}
                onClick={() => handleEducationClick(profession.title)}
              >
                Обучение бесплатно + стипендия 2 МРОТ
              </button>
              
              {/* Кнопка "Хочу эту профессию" - передаём профессию */}
              <button 
                className={classes.professions}
                onClick={() => handleApplyClick(profession.title)}
              >
                Хочу эту профессию
              </button>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Filter;