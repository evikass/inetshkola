'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// ==================== АТОМНАЯ МОДЕЛЬ ====================
interface AtomModelProps {
  atomicNumber: number;
  symbol: string;
  color?: string;
}

const AtomModel: React.FC<AtomModelProps> = ({ atomicNumber, symbol, color = '#8b5cf6' }) => {
  const electrons = Math.min(Math.max(atomicNumber, 1), 20);
  const shells = Math.ceil(Math.sqrt(electrons));

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg width="192" height="192" viewBox="0 0 120 120" className="drop-shadow-2xl">
        <circle cx="60" cy="60" r="14" fill="#1e2937" />
        <text x="60" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{symbol}</text>
        {Array.from({ length: shells }, (_, i) => {
          const radius = 24 + i * 14;
          return (
            <g key={i}>
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 3" />
              {Array.from({ length: Math.min(electrons - i * 4, 8) }, (_, j) => {
                const angle = (j * 360) / Math.min(electrons - i * 4, 8) + i * 30;
                const x = 60 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 60 + radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <circle
                    key={j}
                    cx={x}
                    cy={y}
                    r="4"
                    fill={color}
                    className="animate-[spin_3s_linear_infinite]"
                    style={{ animationDelay: `-${j * 0.2}s` }}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ==================== ДАННЫЕ ЭЛЕМЕНТОВ ====================
interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
}

const elementsData: Element[] = [
  { atomicNumber: 1, symbol: 'H', name: 'Водород', mass: '1.008', period: 1, group: 1, block: 's' },
  { atomicNumber: 2, symbol: 'He', name: 'Гелий', mass: '4.0026', period: 1, group: 18, block: 'p' },
  { atomicNumber: 3, symbol: 'Li', name: 'Литий', mass: '6.94', period: 2, group: 1, block: 's' },
  { atomicNumber: 4, symbol: 'Be', name: 'Бериллий', mass: '9.0122', period: 2, group: 2, block: 's' },
  { atomicNumber: 5, symbol: 'B', name: 'Бор', mass: '10.81', period: 2, group: 13, block: 'p' },
  { atomicNumber: 6, symbol: 'C', name: 'Углерод', mass: '12.011', period: 2, group: 14, block: 'p' },
  { atomicNumber: 7, symbol: 'N', name: 'Азот', mass: '14.007', period: 2, group: 15, block: 'p' },
  { atomicNumber: 8, symbol: 'O', name: 'Кислород', mass: '15.999', period: 2, group: 16, block: 'p' },
  { atomicNumber: 9, symbol: 'F', name: 'Фтор', mass: '18.998', period: 2, group: 17, block: 'p' },
  { atomicNumber: 10, symbol: 'Ne', name: 'Неон', mass: '20.180', period: 2, group: 18, block: 'p' },
  { atomicNumber: 11, symbol: 'Na', name: 'Натрий', mass: '22.990', period: 3, group: 1, block: 's' },
  { atomicNumber: 12, symbol: 'Mg', name: 'Магний', mass: '24.305', period: 3, group: 2, block: 's' },
  { atomicNumber: 13, symbol: 'Al', name: 'Алюминий', mass: '26.982', period: 3, group: 13, block: 'p' },
  { atomicNumber: 14, symbol: 'Si', name: 'Кремний', mass: '28.085', period: 3, group: 14, block: 'p' },
  { atomicNumber: 15, symbol: 'P', name: 'Фосфор', mass: '30.974', period: 3, group: 15, block: 'p' },
  { atomicNumber: 16, symbol: 'S', name: 'Сера', mass: '32.06', period: 3, group: 16, block: 'p' },
  { atomicNumber: 17, symbol: 'Cl', name: 'Хлор', mass: '35.45', period: 3, group: 17, block: 'p' },
  { atomicNumber: 18, symbol: 'Ar', name: 'Аргон', mass: '39.948', period: 3, group: 18, block: 'p' },
  { atomicNumber: 19, symbol: 'K', name: 'Калий', mass: '39.098', period: 4, group: 1, block: 's' },
  { atomicNumber: 20, symbol: 'Ca', name: 'Кальций', mass: '40.078', period: 4, group: 2, block: 's' },
  { atomicNumber: 21, symbol: 'Sc', name: 'Скандий', mass: '44.956', period: 4, group: 3, block: 'd' },
  { atomicNumber: 22, symbol: 'Ti', name: 'Титан', mass: '47.867', period: 4, group: 4, block: 'd' },
  { atomicNumber: 23, symbol: 'V', name: 'Ванадий', mass: '50.942', period: 4, group: 5, block: 'd' },
  { atomicNumber: 24, symbol: 'Cr', name: 'Хром', mass: '51.996', period: 4, group: 6, block: 'd' },
  { atomicNumber: 25, symbol: 'Mn', name: 'Марганец', mass: '54.938', period: 4, group: 7, block: 'd' },
  { atomicNumber: 26, symbol: 'Fe', name: 'Железо', mass: '55.845', period: 4, group: 8, block: 'd' },
  { atomicNumber: 27, symbol: 'Co', name: 'Кобальт', mass: '58.933', period: 4, group: 9, block: 'd' },
  { atomicNumber: 28, symbol: 'Ni', name: 'Никель', mass: '58.693', period: 4, group: 10, block: 'd' },
  { atomicNumber: 29, symbol: 'Cu', name: 'Медь', mass: '63.546', period: 4, group: 11, block: 'd' },
  { atomicNumber: 30, symbol: 'Zn', name: 'Цинк', mass: '65.38', period: 4, group: 12, block: 'd' },
  { atomicNumber: 31, symbol: 'Ga', name: 'Галлий', mass: '69.723', period: 4, group: 13, block: 'p' },
  { atomicNumber: 32, symbol: 'Ge', name: 'Германий', mass: '72.630', period: 4, group: 14, block: 'p' },
  { atomicNumber: 33, symbol: 'As', name: 'Мышьяк', mass: '74.922', period: 4, group: 15, block: 'p' },
  { atomicNumber: 34, symbol: 'Se', name: 'Селен', mass: '78.971', period: 4, group: 16, block: 'p' },
  { atomicNumber: 35, symbol: 'Br', name: 'Бром', mass: '79.904', period: 4, group: 17, block: 'p' },
  { atomicNumber: 36, symbol: 'Kr', name: 'Криптон', mass: '83.798', period: 4, group: 18, block: 'p' },
  { atomicNumber: 37, symbol: 'Rb', name: 'Рубидий', mass: '85.468', period: 5, group: 1, block: 's' },
  { atomicNumber: 38, symbol: 'Sr', name: 'Стронций', mass: '87.62', period: 5, group: 2, block: 's' },
  { atomicNumber: 39, symbol: 'Y', name: 'Иттрий', mass: '88.906', period: 5, group: 3, block: 'd' },
  { atomicNumber: 40, symbol: 'Zr', name: 'Цирконий', mass: '91.224', period: 5, group: 4, block: 'd' },
  { atomicNumber: 41, symbol: 'Nb', name: 'Ниобий', mass: '92.906', period: 5, group: 5, block: 'd' },
  { atomicNumber: 42, symbol: 'Mo', name: 'Молибден', mass: '95.95', period: 5, group: 6, block: 'd' },
  { atomicNumber: 43, symbol: 'Tc', name: 'Технеций', mass: '(98)', period: 5, group: 7, block: 'd' },
  { atomicNumber: 44, symbol: 'Ru', name: 'Рутений', mass: '101.07', period: 5, group: 8, block: 'd' },
  { atomicNumber: 45, symbol: 'Rh', name: 'Родий', mass: '102.91', period: 5, group: 9, block: 'd' },
  { atomicNumber: 46, symbol: 'Pd', name: 'Палладий', mass: '106.42', period: 5, group: 10, block: 'd' },
  { atomicNumber: 47, symbol: 'Ag', name: 'Серебро', mass: '107.87', period: 5, group: 11, block: 'd' },
  { atomicNumber: 48, symbol: 'Cd', name: 'Кадмий', mass: '112.41', period: 5, group: 12, block: 'd' },
  { atomicNumber: 49, symbol: 'In', name: 'Индий', mass: '114.82', period: 5, group: 13, block: 'p' },
  { atomicNumber: 50, symbol: 'Sn', name: 'Олово', mass: '118.71', period: 5, group: 14, block: 'p' },
  { atomicNumber: 51, symbol: 'Sb', name: 'Сурьма', mass: '121.76', period: 5, group: 15, block: 'p' },
  { atomicNumber: 52, symbol: 'Te', name: 'Теллур', mass: '127.60', period: 5, group: 16, block: 'p' },
  { atomicNumber: 53, symbol: 'I', name: 'Йод', mass: '126.90', period: 5, group: 17, block: 'p' },
  { atomicNumber: 54, symbol: 'Xe', name: 'Ксенон', mass: '131.29', period: 5, group: 18, block: 'p' },
  { atomicNumber: 55, symbol: 'Cs', name: 'Цезий', mass: '132.91', period: 6, group: 1, block: 's' },
  { atomicNumber: 56, symbol: 'Ba', name: 'Барий', mass: '137.33', period: 6, group: 2, block: 's' },
  { atomicNumber: 57, symbol: 'La', name: 'Лантан', mass: '138.91', period: 6, group: 3, block: 'f' },
  { atomicNumber: 58, symbol: 'Ce', name: 'Церий', mass: '140.12', period: 6, group: 3, block: 'f' },
  { atomicNumber: 59, symbol: 'Pr', name: 'Празеодим', mass: '140.91', period: 6, group: 3, block: 'f' },
  { atomicNumber: 60, symbol: 'Nd', name: 'Неодим', mass: '144.24', period: 6, group: 3, block: 'f' },
  { atomicNumber: 61, symbol: 'Pm', name: 'Прометий', mass: '(145)', period: 6, group: 3, block: 'f' },
  { atomicNumber: 62, symbol: 'Sm', name: 'Самарий', mass: '150.36', period: 6, group: 3, block: 'f' },
  { atomicNumber: 63, symbol: 'Eu', name: 'Европий', mass: '151.96', period: 6, group: 3, block: 'f' },
  { atomicNumber: 64, symbol: 'Gd', name: 'Гадолиний', mass: '157.25', period: 6, group: 3, block: 'f' },
  { atomicNumber: 65, symbol: 'Tb', name: 'Тербий', mass: '158.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 66, symbol: 'Dy', name: 'Диспрозий', mass: '162.50', period: 6, group: 3, block: 'f' },
  { atomicNumber: 67, symbol: 'Ho', name: 'Гольмий', mass: '164.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 68, symbol: 'Er', name: 'Эрбий', mass: '167.26', period: 6, group: 3, block: 'f' },
  { atomicNumber: 69, symbol: 'Tm', name: 'Тулий', mass: '168.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 70, symbol: 'Yb', name: 'Иттербий', mass: '173.05', period: 6, group: 3, block: 'f' },
  { atomicNumber: 71, symbol: 'Lu', name: 'Лютеций', mass: '174.97', period: 6, group: 3, block: 'd' },
  { atomicNumber: 72, symbol: 'Hf', name: 'Гафний', mass: '178.49', period: 6, group: 4, block: 'd' },
  { atomicNumber: 73, symbol: 'Ta', name: 'Тантал', mass: '180.95', period: 6, group: 5, block: 'd' },
  { atomicNumber: 74, symbol: 'W', name: 'Вольфрам', mass: '183.84', period: 6, group: 6, block: 'd' },
  { atomicNumber: 75, symbol: 'Re', name: 'Рений', mass: '186.21', period: 6, group: 7, block: 'd' },
  { atomicNumber: 76, symbol: 'Os', name: 'Осмий', mass: '190.23', period: 6, group: 8, block: 'd' },
  { atomicNumber: 77, symbol: 'Ir', name: 'Иридий', mass: '192.22', period: 6, group: 9, block: 'd' },
  { atomicNumber: 78, symbol: 'Pt', name: 'Платина', mass: '195.08', period: 6, group: 10, block: 'd' },
  { atomicNumber: 79, symbol: 'Au', name: 'Золото', mass: '196.97', period: 6, group: 11, block: 'd' },
  { atomicNumber: 80, symbol: 'Hg', name: 'Ртуть', mass: '200.59', period: 6, group: 12, block: 'd' },
  { atomicNumber: 81, symbol: 'Tl', name: 'Таллий', mass: '204.38', period: 6, group: 13, block: 'p' },
  { atomicNumber: 82, symbol: 'Pb', name: 'Свинец', mass: '207.2', period: 6, group: 14, block: 'p' },
  { atomicNumber: 83, symbol: 'Bi', name: 'Висмут', mass: '208.98', period: 6, group: 15, block: 'p' },
  { atomicNumber: 84, symbol: 'Po', name: 'Полоний', mass: '(209)', period: 6, group: 16, block: 'p' },
  { atomicNumber: 85, symbol: 'At', name: 'Астат', mass: '(210)', period: 6, group: 17, block: 'p' },
  { atomicNumber: 86, symbol: 'Rn', name: 'Радон', mass: '(222)', period: 6, group: 18, block: 'p' },
  { atomicNumber: 87, symbol: 'Fr', name: 'Франций', mass: '(223)', period: 7, group: 1, block: 's' },
  { atomicNumber: 88, symbol: 'Ra', name: 'Радий', mass: '(226)', period: 7, group: 2, block: 's' },
  { atomicNumber: 89, symbol: 'Ac', name: 'Актиний', mass: '(227)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 90, symbol: 'Th', name: 'Торий', mass: '232.04', period: 7, group: 3, block: 'f' },
  { atomicNumber: 91, symbol: 'Pa', name: 'Протактиний', mass: '231.04', period: 7, group: 3, block: 'f' },
  { atomicNumber: 92, symbol: 'U', name: 'Уран', mass: '238.03', period: 7, group: 3, block: 'f' },
  { atomicNumber: 93, symbol: 'Np', name: 'Нептуний', mass: '(237)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 94, symbol: 'Pu', name: 'Плутоний', mass: '(244)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 95, symbol: 'Am', name: 'Америций', mass: '(243)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 96, symbol: 'Cm', name: 'Кюрий', mass: '(247)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 97, symbol: 'Bk', name: 'Берклий', mass: '(247)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 98, symbol: 'Cf', name: 'Калифорний', mass: '(251)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 99, symbol: 'Es', name: 'Эйнштейний', mass: '(252)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 100, symbol: 'Fm', name: 'Фермий', mass: '(257)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 101, symbol: 'Md', name: 'Менделеевий', mass: '(258)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 102, symbol: 'No', name: 'Нобелий', mass: '(259)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 103, symbol: 'Lr', name: 'Лоуренсий', mass: '(266)', period: 7, group: 3, block: 'd' },
  { atomicNumber: 104, symbol: 'Rf', name: 'Резерфордий', mass: '(267)', period: 7, group: 4, block: 'd' },
  { atomicNumber: 105, symbol: 'Db', name: 'Дубний', mass: '(270)', period: 7, group: 5, block: 'd' },
  { atomicNumber: 106, symbol: 'Sg', name: 'Сиборгий', mass: '(269)', period: 7, group: 6, block: 'd' },
  { atomicNumber: 107, symbol: 'Bh', name: 'Борий', mass: '(270)', period: 7, group: 7, block: 'd' },
  { atomicNumber: 108, symbol: 'Hs', name: 'Хассий', mass: '(270)', period: 7, group: 8, block: 'd' },
  { atomicNumber: 109, symbol: 'Mt', name: 'Мейтнерий', mass: '(278)', period: 7, group: 9, block: 'd' },
  { atomicNumber: 110, symbol: 'Ds', name: 'Дармштадтий', mass: '(281)', period: 7, group: 10, block: 'd' },
  { atomicNumber: 111, symbol: 'Rg', name: 'Рентгений', mass: '(282)', period: 7, group: 11, block: 'd' },
  { atomicNumber: 112, symbol: 'Cn', name: 'Коперниций', mass: '(285)', period: 7, group: 12, block: 'd' },
  { atomicNumber: 113, symbol: 'Nh', name: 'Нихоний', mass: '(286)', period: 7, group: 13, block: 'p' },
  { atomicNumber: 114, symbol: 'Fl', name: 'Флеровий', mass: '(289)', period: 7, group: 14, block: 'p' },
  { atomicNumber: 115, symbol: 'Mc', name: 'Московий', mass: '(290)', period: 7, group: 15, block: 'p' },
  { atomicNumber: 116, symbol: 'Lv', name: 'Ливерморий', mass: '(293)', period: 7, group: 16, block: 'p' },
  { atomicNumber: 117, symbol: 'Ts', name: 'Теннессин', mass: '(294)', period: 7, group: 17, block: 'p' },
  { atomicNumber: 118, symbol: 'Og', name: 'Оганесон', mass: '(294)', period: 7, group: 18, block: 'p' },
];

// ==================== ВОПРОСЫ ====================
interface Question {
  atomicNumber: number;
  symbol: string;
  name: string;
  properties: string[];
  options: { atomicNumber: number; symbol: string; name: string }[];
  fact: string;
}

const questionsPool: Question[] = [
  {
    atomicNumber: 1, symbol: 'H', name: 'Водород',
    properties: [
      "Самый лёгкий элемент во Вселенной",
      "Атомный номер 1",
      "Период 1, группа 1",
      "Основной компонент звёзд и Солнца"
    ],
    options: [
      { atomicNumber: 1, symbol: 'H', name: 'Водород' },
      { atomicNumber: 2, symbol: 'He', name: 'Гелий' },
      { atomicNumber: 6, symbol: 'C', name: 'Углерод' },
      { atomicNumber: 8, symbol: 'O', name: 'Кислород' }
    ],
    fact: "Водород — самый распространённый элемент во Вселенной (около 75% массы)!"
  },
  {
    atomicNumber: 6, symbol: 'C', name: 'Углерод',
    properties: [
      "Основа всех органических веществ и жизни",
      "Встречается в виде алмаза и графита",
      "Атомный номер 6",
      "Период 2, группа 14"
    ],
    options: [
      { atomicNumber: 6, symbol: 'C', name: 'Углерод' },
      { atomicNumber: 8, symbol: 'O', name: 'Кислород' },
      { atomicNumber: 14, symbol: 'Si', name: 'Кремний' },
      { atomicNumber: 7, symbol: 'N', name: 'Азот' }
    ],
    fact: "Углерод — основа всей органической химии и жизни на Земле!"
  },
  {
    atomicNumber: 8, symbol: 'O', name: 'Кислород',
    properties: [
      "Составляет 21% атмосферы Земли",
      "Необходим для дыхания всех животных",
      "Атомный номер 8",
      "Самый распространённый элемент в земной коре"
    ],
    options: [
      { atomicNumber: 8, symbol: 'O', name: 'Кислород' },
      { atomicNumber: 7, symbol: 'N', name: 'Азот' },
      { atomicNumber: 1, symbol: 'H', name: 'Водород' },
      { atomicNumber: 16, symbol: 'S', name: 'Сера' }
    ],
    fact: "Кислород — самый важный элемент для жизни!"
  },
  {
    atomicNumber: 26, symbol: 'Fe', name: 'Железо',
    properties: [
      "Входит в состав гемоглобина крови",
      "Самый распространённый металл в ядре Земли",
      "Атомный номер 26",
      "Используется в производстве стали"
    ],
    options: [
      { atomicNumber: 26, symbol: 'Fe', name: 'Железо' },
      { atomicNumber: 29, symbol: 'Cu', name: 'Медь' },
      { atomicNumber: 79, symbol: 'Au', name: 'Золото' },
      { atomicNumber: 13, symbol: 'Al', name: 'Алюминий' }
    ],
    fact: "Железо — самый важный металл цивилизации!"
  },
  {
    atomicNumber: 79, symbol: 'Au', name: 'Золото',
    properties: [
      "Благородный металл жёлтого цвета",
      "Один из самых ковких металлов",
      "Атомный номер 79",
      "Не окисляется на воздухе"
    ],
    options: [
      { atomicNumber: 79, symbol: 'Au', name: 'Золото' },
      { atomicNumber: 47, symbol: 'Ag', name: 'Серебро' },
      { atomicNumber: 78, symbol: 'Pt', name: 'Платина' },
      { atomicNumber: 80, symbol: 'Hg', name: 'Ртуть' }
    ],
    fact: "Золото — один из самых древних металлов, известных человеку!"
  },
  {
    atomicNumber: 11, symbol: 'Na', name: 'Натрий',
    properties: ["Взрывается в воде", "Входит в состав поваренной соли", "Атомный номер 11", "Щелочной металл"],
    options: [
      { atomicNumber: 11, symbol: 'Na', name: 'Натрий' },
      { atomicNumber: 19, symbol: 'K', name: 'Калий' },
      { atomicNumber: 3, symbol: 'Li', name: 'Литий' },
      { atomicNumber: 37, symbol: 'Rb', name: 'Рубидий' }
    ],
    fact: "Натрий + хлор = обычная поваренная соль!"
  },
  {
    atomicNumber: 92, symbol: 'U', name: 'Уран',
    properties: ["Используется как ядерное топливо", "Самый тяжёлый природный элемент", "Атомный номер 92", "Радиоактивен"],
    options: [
      { atomicNumber: 92, symbol: 'U', name: 'Уран' },
      { atomicNumber: 94, symbol: 'Pu', name: 'Плутоний' },
      { atomicNumber: 90, symbol: 'Th', name: 'Торий' },
      { atomicNumber: 88, symbol: 'Ra', name: 'Радий' }
    ],
    fact: "Уран — основа атомной энергетики!"
  },
  {
    atomicNumber: 13, symbol: 'Al', name: 'Алюминий', 
    properties: ["Самый распространённый металл в земной коре", "Лёгкий и прочный", "Атомный номер 13", "Используется в самолётах"], 
    options: [
      { atomicNumber: 13, symbol: 'Al', name: 'Алюминий' }, 
      { atomicNumber: 26, symbol: 'Fe', name: 'Железо' }, 
      { atomicNumber: 29, symbol: 'Cu', name: 'Медь' }, 
      { atomicNumber: 30, symbol: 'Zn', name: 'Цинк' }
    ], 
    fact: "Алюминий — металл будущего!"
  },
  {
    atomicNumber: 17, symbol: 'Cl', name: 'Хлор', 
    properties: ["Зелёно-жёлтый газ с резким запахом", "Используется для обеззараживания воды", "Атомный номер 17", "Галоген"], 
    options: [
      { atomicNumber: 17, symbol: 'Cl', name: 'Хлор' }, 
      { atomicNumber: 9, symbol: 'F', name: 'Фтор' }, 
      { atomicNumber: 35, symbol: 'Br', name: 'Бром' }, 
      { atomicNumber: 53, symbol: 'I', name: 'Йод' }
    ], 
    fact: "Хлор спасает миллионы жизней в воде!"
  },
  {
    atomicNumber: 47, symbol: 'Ag', name: 'Серебро', 
    properties: ["Лучший проводник электричества", "Используется в зеркалах и фото", "Атомный номер 47", "Благородный металл"], 
    options: [
      { atomicNumber: 47, symbol: 'Ag', name: 'Серебро' }, 
      { atomicNumber: 79, symbol: 'Au', name: 'Золото' }, 
      { atomicNumber: 29, symbol: 'Cu', name: 'Медь' }, 
      { atomicNumber: 78, symbol: 'Pt', name: 'Платина' }
    ], 
    fact: "Серебро убивает бактерии!"
  },
  {
    atomicNumber: 74, symbol: 'W', name: 'Вольфрам', 
    properties: ["Самая высокая температура плавления", "В нитях лампочек", "Атомный номер 74", "Тугоплавкий металл"], 
    options: [
      { atomicNumber: 74, symbol: 'W', name: 'Вольфрам' }, 
      { atomicNumber: 42, symbol: 'Mo', name: 'Молибден' }, 
      { atomicNumber: 73, symbol: 'Ta', name: 'Тантал' }, 
      { atomicNumber: 41, symbol: 'Nb', name: 'Ниобий' }
    ], 
    fact: "Вольфрам — чемпион по жаростойкости!"
  },
  {
    atomicNumber: 82, symbol: 'Pb', name: 'Свинец', 
    properties: ["Очень тяжёлый металл", "Защищает от радиации", "Атомный номер 82", "Используется в аккумуляторах"], 
    options: [
      { atomicNumber: 82, symbol: 'Pb', name: 'Свинец' }, 
      { atomicNumber: 50, symbol: 'Sn', name: 'Олово' }, 
      { atomicNumber: 83, symbol: 'Bi', name: 'Висмут' }, 
      { atomicNumber: 81, symbol: 'Tl', name: 'Таллий' }
    ], 
    fact: "Свинец — защита от радиации!"
  }
];

// ==================== ИГРА: «УГАДАЙ ЭЛЕМЕНТ ПО СВОЙСТВАМ» ====================
interface PeriodicTableGuessGameProps {
  onBack?: () => void;
  onComplete?: (stars: number) => void;
}

export function PeriodicTableGuessGame({ onBack, onComplete }: PeriodicTableGuessGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showStart, setShowStart] = useState(true);

  // Перемешиваем вопросы при старте
  const [questions, setQuestions] = useState<Question[]>(() => 
    [...questionsPool].sort(() => Math.random() - 0.5).slice(0, 10)
  );

  const current = questions[currentIndex];
  const progress = Math.round(((currentIndex + (feedback === 'correct' ? 1 : 0)) / questions.length) * 100);

  const handleAnswer = (chosenAtomic: number) => {
    setSelectedOption(chosenAtomic);

    if (chosenAtomic === current.atomicNumber) {
      setFeedback('correct');
      setScore(score + 1);

      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setFeedback(null);
          setSelectedOption(null);
        } else {
          setGameOver(true);
          const stars = score + 1 >= 9 ? 3 : score + 1 >= 6 ? 2 : 1;
          onComplete?.(stars);
        }
      }, 1600);
    } else {
      setFeedback('wrong');
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setFeedback(null);
          setSelectedOption(null);
        } else {
          setGameOver(true);
          const stars = score >= 9 ? 3 : score >= 6 ? 2 : 1;
          onComplete?.(stars);
        }
      }, 900);
    }
  };

  const restart = () => {
    setQuestions([...questionsPool].sort(() => Math.random() - 0.5).slice(0, 10));
    setCurrentIndex(0);
    setScore(0);
    setGameOver(false);
    setFeedback(null);
    setSelectedOption(null);
    setShowStart(true);
  };

  // Стартовый экран
  if (showStart) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl shadow-2xl text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Угадай элемент по свойствам
        </h2>
        <p className="text-slate-600 mb-6">
          Читай подсказки и выбирай правильный элемент!<br/>
          10 раундов, 4 варианта ответа.
        </p>
        
        <div className="bg-white/60 rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-bold text-lg mb-3">📋 Правила:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>• Читай 4 подсказки о свойствах элемента</li>
            <li>• Выбери правильный ответ из 4 вариантов</li>
            <li>• 9-10 правильных = ⭐⭐⭐</li>
            <li>• 6-8 правильных = ⭐⭐</li>
            <li>• 0-5 правильных = ⭐</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button
              onClick={onBack}
              className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300"
            >
              ← Назад
            </Button>
          )}
          <button
            onClick={() => setShowStart(false)}
            className="px-10 py-4 bg-amber-600 text-white text-xl rounded-2xl hover:bg-amber-700 active:scale-95"
          >
            🎮 Начать игру
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const stars = score >= 9 ? 3 : score >= 6 ? 2 : 1;
    return (
      <div className="text-center py-12 bg-gradient-to-br from-amber-50 to-white rounded-3xl border-4 border-amber-300">
        <div className="text-8xl mb-6">🧐</div>
        <h2 className="text-4xl font-bold text-amber-700">Гений таблицы!</h2>
        <p className="text-2xl mt-4">Правильно: {score} из {questions.length}</p>
        
        <div className="flex justify-center gap-6 text-8xl my-8">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={i < stars ? 'text-yellow-400 drop-shadow-lg' : 'text-gray-200'}>⭐</span>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button onClick={onBack} className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300">
              ← К инструментам
            </Button>
          )}
          <button
            onClick={restart}
            className="px-12 py-5 bg-amber-600 hover:bg-amber-700 text-white text-2xl rounded-3xl transition-all active:scale-95"
          >
            Играть снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">🔍 Угадай элемент по свойствам</h2>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-mono font-bold text-amber-600">⭐ {score}/{questions.length}</div>
          {onBack && (
            <Button onClick={onBack} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 text-sm">
              ← Выход
            </Button>
          )}
        </div>
      </div>

      {/* Прогресс */}
      <div className="h-3 bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all" style={{ width: `${progress}%` }} />
      </div>

      {/* ВОПРОС (свойства) */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-50 border border-amber-300 rounded-3xl p-8 mb-10">
        <div className="uppercase text-xs text-amber-600 tracking-widest mb-3">ЧТО ЗА ЭЛЕМЕНТ?</div>
        <ul className="space-y-4 text-xl font-medium text-slate-800">
          {current.properties.map((prop, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-2xl">•</span> {prop}
            </li>
          ))}
        </ul>
      </div>

      {/* ВАРИАНТЫ ОТВЕТОВ */}
      <div className="grid grid-cols-2 gap-4">
        {current.options.map((opt, idx) => {
          const isCorrect = opt.atomicNumber === current.atomicNumber;
          const isSelected = selectedOption === opt.atomicNumber;
          const showCorrect = feedback === 'correct' && isCorrect;
          const showWrong = feedback === 'wrong' && isSelected;

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.atomicNumber)}
              disabled={!!feedback}
              className={`group relative flex flex-col items-center justify-center border-4 rounded-3xl py-8 transition-all active:scale-95
                ${showCorrect ? 'border-emerald-500 bg-emerald-50' : ''}
                ${showWrong ? 'border-red-500 bg-red-50' : ''}
                ${!feedback ? 'border-slate-300 hover:border-amber-400 hover:shadow-xl' : 'cursor-default'}
              `}
            >
              <div className="text-6xl font-black mb-2" style={{ color: isCorrect && feedback ? '#10b981' : '#1e2937' }}>
                {opt.symbol}
              </div>
              <div className="text-xl font-semibold text-center">{opt.name}</div>
              {showCorrect && <div className="absolute -top-3 -right-3 text-5xl">🎉</div>}
            </button>
          );
        })}
      </div>

      {/* ПОСЛЕ ПРАВИЛЬНОГО ОТВЕТА — АТОМ + ФАКТ */}
      {feedback === 'correct' && (
        <div className="mt-10 bg-white border border-emerald-200 rounded-3xl p-8 text-center">
          <AtomModel atomicNumber={current.atomicNumber} symbol={current.symbol} color="#f59e0b" />
          <div className="mt-6 text-3xl font-bold">{current.name}</div>
          <div className="text-emerald-600 text-xl">№ {current.atomicNumber}</div>
          <p className="mt-6 text-lg italic text-slate-700">«{current.fact}»</p>
        </div>
      )}

      <div className="mt-12 text-center text-xs text-slate-400">
        8–11 класс • Химия • 10 раундов • 9+ правильных = 3 звезды!
      </div>
    </div>
  );
}

export default PeriodicTableGuessGame;
