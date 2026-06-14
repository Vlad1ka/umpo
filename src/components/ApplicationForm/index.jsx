import React, { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import classes from './ApplicationForm.module.scss';

const ApplicationForm = ({ selectedProfession = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    profession: selectedProfession
  });

  useEffect(() => {
    if (selectedProfession) {
      setFormData(prev => ({ ...prev, profession: selectedProfession }));
    }
  }, [selectedProfession]);

  const professions = [
    'Оператор станков с ЧПУ',
    'Токарь-фрезеровщик',
    'Слесарь МСР',
    'Инженер-конструктор',
    'Инженер-технолог',
    'Инженер-программист ЧПУ',
    'Шлифовщик',
    'Сверловщик',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Пожалуйста, введите ваше имя');
      return;
    }
    if (!formData.phone || formData.phone.length < 18) {
      alert('Пожалуйста, введите полный номер телефона');
      return;
    }
    if (!formData.profession) {
      alert('Пожалуйста, выберите профессию');
      return;
    }
    
    console.log('Отправлена заявка:', formData);
    alert(`Заявка отправлена!\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПрофессия: ${formData.profession}`);
    
    setFormData({
      name: '',
      phone: '',
      profession: ''
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.title}>Оставить заявку на обучение</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Ваше имя" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <IMaskInput
            mask="+7 (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onAccept={(value) => handlePhoneChange(value)}
            className={classes.input}
          />
          
          <select 
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            <option value="">Выберите профессию</option>
            {professions.map((prof, index) => (
              <option key={index} value={prof}>
                {prof}
              </option>
            ))}
          </select>
          
          <button type="submit" className={classes.btn}>
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;