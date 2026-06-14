// src/data/professionsData.js

export const professionsData = [
  {
    id: 1,
    title: "Оператор станков с ЧПУ",
    category: "working",
    salary: "85 000 - 120 000 ₽",
    icon: "./img/chpu.svg", // Уникальная иконка для этой профессии
    description: "Управление российскими и немецкими станками. Создание деталей для авиадвигателей.",
    features: [
      { icon: "./img/clock.svg", text: "Обучение: 4 месяца" },
      { icon: "./img/graduate.svg", text: "Аттестат 9/11 классов" },
      { icon: "./img/chart-line.svg", text: "Рост: Наладчик → Мастер участка" }
    ]
  },
  {
    id: 2,
    title: "Токарь-фрезеровщик",
    category: "working",
    salary: "80 000 - 110 000 ₽",
    icon: "./img/tokar.svg",
    description: "Обработка сложных корпусных и комбинированных деталей на токарных и фрезерных станках.",
    features: [
      { icon: "./img/clock.svg", text: "Обучение: 4 месяцев" },
      { icon: "./img/graduate.svg", text: "Аттестат 9/11 классов" },
      { icon: "./img/chart-line.svg", text: "Рост: Оператор → Технолог" }
    ]
  },
  {
    id: 3,
    title: "Слесарь МСР",
    category: "working",
    salary: "75 000 - 95 000 ₽",
    icon: "./img/slesar.svg", 
    description: "Сборка и регулировка узлов авиационных двигателей. Контроль зазоров и посадок.",
    features: [
      { icon: "./img/clock.svg", text: "Обучение: 4 месяца" },
      { icon: "./img/graduate.svg", text: "Аттестат 9/11 классов" },
      { icon: "./img/chart-line.svg", text: "Рост: Сборщик → Бригадир" }
    ]
  },
  {
    id: 4,
    title: "Инженер-конструктор",
    category: "engineering",
    salary: "90 000 - 150 000 ₽",
    icon: "./img/engineer.svg", 
    description: "Проектирование деталей авиадвигателей в КОМПАС-3D и SolidWorks.",
    features: [
      { icon: "./img/clock.svg", text: "Программа «Крылья Ростеха»" },
      { icon: "./img/graduate.svg", text: "Высшее образование" },
      { icon: "./img/chart-line.svg", text: "Рост: Ведущий конструктор" }
    ]
  },
  {
    id: 5,
    title: "Инженер-технолог",
    category: "engineering",
    salary: "85 000 - 130 000 ₽",
    icon: "./img/engineer_technolog.svg",
    description: "Разработка технологических процессов изготовления деталей двигателей.",
    features: [
      { icon: "./img/clock.svg", text: "Программа «Крылья Ростеха»" },
      { icon: "./img/graduate.svg", text: "Высшее/Среднее проф." },
      { icon: "./img/chart-line.svg", text: "Рост: Главный технолог" }
    ]
  },
  {
    id: 6,
    title: "Инженер-программист ЧПУ",
    category: "engineering",
    salary: "100 000 - 160 000 ₽",
    icon: "./img/engineer_programmist.svg",
    description: "Написание управляющих программ для станков с ЧПУ (G-коды, CAD/CAM системы).",
    features: [
      { icon: "./img/clock.svg", text: "Программа «Крылья Ростеха»" },
      { icon: "./img/graduate.svg", text: "Высшее образование" },
      { icon: "./img/chart-line.svg", text: "Рост: Ведущий программист" }
    ]
  },
  {
    id: 7,
    title: "Шлифовщик",
    category: "working",
    salary: "70 000 - 90 000 ₽",
    icon: "./img/grinder.svg",
    description: "Финишная обработка деталей на плоскошлифовальных и круглошлифовальных станках.",
    features: [
      { icon: "./img/clock.svg", text: "Обучение: 4 месяца" },
      { icon: "./img/graduate.svg", text: "Аттестат 9/11 классов" },
      { icon: "./img/chart-line.svg", text: "Рост: Шлифовщик → Мастер участка" }
    ]
  },
  {
    id: 8,
    title: "Сверловщик",
    category: "working",
    salary: "65 000 - 85 000 ₽",
    icon: "./img/driller.svg",
    description: "Сверление, зенкерование, развёртывание отверстий в корпусных деталях двигателей.",
    features: [
      { icon: "./img/clock.svg", text: "Обучение: 4 месяца" },
      { icon: "./img/graduate.svg", text: "Аттестат 9/11 классов" },
      { icon: "./img/chart-line.svg", text: "Рост: Сверловщик → Мастер участка" }
    ]
  }
];