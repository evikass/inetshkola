'use client';
import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Atom, FlaskConical, Lightbulb, Calendar, User } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ====================== ТИПЫ ======================
interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
  discoveredBy?: string;
  yearDiscovered?: string;
  applications?: string[];
  funFacts?: string[];
}

// ====================== ДАННЫЕ ЭЛЕМЕНТОВ ======================
const elementsData: Element[] = [
  { 
    atomicNumber: 1, symbol: 'H', name: 'Водород', mass: '1.008', period: 1, group: 1, block: 's',
    discoveredBy: 'Генри Кавендиш', yearDiscovered: '1766',
    applications: ['Ракетное топливо', 'Производство аммиака', 'Сварка металлов', 'Водородные автомобили'],
    funFacts: ['Самый лёгкий элемент во Вселенной', 'Составляет 75% массы Вселенной', 'Водород + кислород = вода']
  },
  { 
    atomicNumber: 2, symbol: 'He', name: 'Гелий', mass: '4.0026', period: 1, group: 18, block: 'p',
    discoveredBy: 'Пьер Жансен', yearDiscovered: '1868',
    applications: ['Воздушные шары', 'Охлаждение МРТ-сканеров', 'Глубоководные погружения', 'Лазеры'],
    funFacts: ['Второй самый лёгкий элемент', 'Не горит и не взрывается', 'Открыт на Солнце раньше чем на Земле']
  },
  { 
    atomicNumber: 3, symbol: 'Li', name: 'Литий', mass: '6.94', period: 2, group: 1, block: 's',
    discoveredBy: 'Йохан Арфведсон', yearDiscovered: '1817',
    applications: ['Литиевые батарейки', 'Лекарство от маниакальной депрессии', 'Керамика', 'Сплавы для авиации'],
    funFacts: ['Самый лёгкий металл', 'Плавает в воде', 'Используется в электромобилях Tesla']
  },
  { 
    atomicNumber: 4, symbol: 'Be', name: 'Бериллий', mass: '9.0122', period: 2, group: 2, block: 's',
    discoveredBy: 'Луи Николя Воклен', yearDiscovered: '1798',
    applications: ['Аэрокосмические сплавы', 'Рентгеновские окна', 'Ядерные реакторы', 'Динамики'],
    funFacts: ['Очень токсичен', 'В 6 раз прочнее стали', 'Прозрачен для рентгеновских лучей']
  },
  { 
    atomicNumber: 5, symbol: 'B', name: 'Бор', mass: '10.81', period: 2, group: 13, block: 'p',
    discoveredBy: 'Жозеф Луи Гей-Люссак', yearDiscovered: '1808',
    applications: ['Стекловолокно', 'Детекторы нейтронов', 'Удобрения', 'Антисептики'],
    funFacts: ['Название от минерала буры', 'Полуметалл', 'Твёрдость близка к алмазу']
  },
  { 
    atomicNumber: 6, symbol: 'C', name: 'Углерод', mass: '12.011', period: 2, group: 14, block: 'p',
    discoveredBy: 'Известен с древности', yearDiscovered: '—',
    applications: ['Графитовые карандаши', 'Алмазы', 'Пластмассы', 'Активированный уголь'],
    funFacts: ['Основа всей жизни на Земле', 'Может образовывать нанотрубки', 'Графен — самый прочный материал']
  },
  { 
    atomicNumber: 7, symbol: 'N', name: 'Азот', mass: '14.007', period: 2, group: 15, block: 'p',
    discoveredBy: 'Даниэль Резерфорд', yearDiscovered: '1772',
    applications: ['Удобрения', 'Взрывчатые вещества', 'Хранение продуктов', 'Шины автомобилей'],
    funFacts: ['78% атмосферы Земли', 'Жидкий азот: -196°C', 'От греческого "безжизненный"']
  },
  { 
    atomicNumber: 8, symbol: 'O', name: 'Кислород', mass: '15.999', period: 2, group: 16, block: 'p',
    discoveredBy: 'Карл Шееле, Джозеф Пристли', yearDiscovered: '1774',
    applications: ['Дыхание', 'Сварка', 'Медицина', 'Ракетное топливо'],
    funFacts: ['21% атмосферы Земли', 'Без него не было бы огня', 'Открыт независимо двумя учёными']
  },
  { 
    atomicNumber: 9, symbol: 'F', name: 'Фтор', mass: '18.998', period: 2, group: 17, block: 'p',
    discoveredBy: 'Анри Муассан', yearDiscovered: '1886',
    applications: ['Зубная паста', 'Тефлоновые покрытия', 'Холодильники', 'Урановое обогащение'],
    funFacts: ['Самый реакционноспособный элемент', 'Очень ядовит', 'Название от латинского "течь"']
  },
  { 
    atomicNumber: 10, symbol: 'Ne', name: 'Неон', mass: '20.180', period: 2, group: 18, block: 'p',
    discoveredBy: 'Уильям Рамзай, Морис Траверс', yearDiscovered: '1898',
    applications: ['Неоновые вывески', 'Лазеры', 'Индикаторы высокого напряжения', 'Криогеника'],
    funFacts: ['Даёт красно-оранжевое свечение', 'В 65 раз реже гелия', 'Название от греческого "новый"']
  },
  { 
    atomicNumber: 11, symbol: 'Na', name: 'Натрий', mass: '22.990', period: 3, group: 1, block: 's',
    discoveredBy: 'Хамфри Дэви', yearDiscovered: '1807',
    applications: ['Пищевая соль', 'Уличные фонари', 'Производство стекла', 'Обезвоживание органических жидкостей'],
    funFacts: ['Взрывается в воде', 'В теле человека ~100 г', 'Даёт жёлтый цвет пламени']
  },
  { 
    atomicNumber: 12, symbol: 'Mg', name: 'Магний', mass: '24.305', period: 3, group: 2, block: 's',
    discoveredBy: 'Джозеф Блэк', yearDiscovered: '1755',
    applications: ['Лёгкие сплавы', 'Фейерверки', 'Лекарства от изжоги', 'Автозапчасти'],
    funFacts: ['Горит ярким белым пламенем', '4-й по распространённости на Земле', 'Входит в хлорофилл']
  },
  { 
    atomicNumber: 13, symbol: 'Al', name: 'Алюминий', mass: '26.982', period: 3, group: 13, block: 'p',
    discoveredBy: 'Ханс Кристиан Эрстед', yearDiscovered: '1825',
    applications: ['Банки для напитков', 'Фольга', 'Самолёты', 'Провода'],
    funFacts: ['Самый распространённый металл на Земле', 'Дороже золота в XIX веке', '100% перерабатывается']
  },
  { 
    atomicNumber: 14, symbol: 'Si', name: 'Кремний', mass: '28.085', period: 3, group: 14, block: 'p',
    discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1824',
    applications: ['Компьютерные чипы', 'Солнечные батареи', 'Стекло', 'Силиконовые импланты'],
    funFacts: ['2-й по распространённости на Земле', 'Основа всей электроники', 'Кремниевая долина названа в честь него']
  },
  { 
    atomicNumber: 15, symbol: 'P', name: 'Фосфор', mass: '30.974', period: 3, group: 15, block: 'p',
    discoveredBy: 'Хенниг Бранд', yearDiscovered: '1669',
    applications: ['Спички', 'Удобрения', 'Моющие средства', 'ДНК и РНК'],
    funFacts: ['Первый открытый элемент заново', 'Светится в темноте', 'Название от греческого "несущий свет"']
  },
  { 
    atomicNumber: 16, symbol: 'S', name: 'Сера', mass: '32.06', period: 3, group: 16, block: 'p',
    discoveredBy: 'Известна с древности', yearDiscovered: '—',
    applications: ['Серная кислота', 'Резина', 'Спички', 'Порошок от насекомых'],
    funFacts: ['Запах тухлых яиц', 'Жёлтый цвет', 'Вулканические газы']
  },
  { 
    atomicNumber: 17, symbol: 'Cl', name: 'Хлор', mass: '35.45', period: 3, group: 17, block: 'p',
    discoveredBy: 'Карл Шееле', yearDiscovered: '1774',
    applications: ['Дезинфекция воды', 'Отбеливание', 'ПВХ трубы', 'Производство лекарств'],
    funFacts: ['Был использован как химическое оружие в WWI', 'Зеленовато-жёлтый газ', 'Убивает бактерии']
  },
  { 
    atomicNumber: 18, symbol: 'Ar', name: 'Аргон', mass: '39.948', period: 3, group: 18, block: 'p',
    discoveredBy: 'Лорд Рэлей, Уильям Рамзай', yearDiscovered: '1894',
    applications: ['Лампы накаливания', 'Сварка', 'Окна с двойным остеклением', 'Лазеры'],
    funFacts: ['0.93% атмосферы', 'Название от греческого "ленивый"', 'Не реагирует ни с чем']
  },
  { 
    atomicNumber: 19, symbol: 'K', name: 'Калий', mass: '39.098', period: 4, group: 1, block: 's',
    discoveredBy: 'Хамфри Дэви', yearDiscovered: '1807',
    applications: ['Удобрения', 'Мыло', 'Пищевая соль (хлорид калия)', 'Стекло'],
    funFacts: ['Взрывается в воде', 'Необходим для сердца', 'Бананы богаты калием']
  },
  { 
    atomicNumber: 20, symbol: 'Ca', name: 'Кальций', mass: '40.078', period: 4, group: 2, block: 's',
    discoveredBy: 'Хамфри Дэви', yearDiscovered: '1808',
    applications: ['Цемент', 'Известь', 'Кости и зубы', 'Мел'],
    funFacts: ['5-й по распространённости в организме', 'Даёт крепость костям', 'В молоке и сыре']
  },
  { 
    atomicNumber: 21, symbol: 'Sc', name: 'Скандий', mass: '44.956', period: 4, group: 3, block: 'd',
    discoveredBy: 'Ларс Фредерик Нильсон', yearDiscovered: '1879',
    applications: ['Алюминиевые сплавы', 'Спортивное оборудование', 'Лампы высокого давления'],
    funFacts: ['Назван в честь Скандинавии', 'Очень редкий', 'Даёт прочность велосипедам']
  },
  { 
    atomicNumber: 22, symbol: 'Ti', name: 'Титан', mass: '47.867', period: 4, group: 4, block: 'd',
    discoveredBy: 'Уильям Грегор', yearDiscovered: '1791',
    applications: ['Авиадвигатели', 'Импланты', 'Ювелирные изделия', 'Спортивные товары'],
    funFacts: ['Назван в честь титанов', 'Прочнее стали, но легче', 'Устойчив к коррозии']
  },
  { 
    atomicNumber: 23, symbol: 'V', name: 'Ванадий', mass: '50.942', period: 4, group: 5, block: 'd',
    discoveredBy: 'Андрес Мануэль дель Рио', yearDiscovered: '1801',
    applications: ['Инструментальные стали', 'Пружины', 'Суперсплавы'],
    funFacts: ['Назван в честь богини Ванадис', 'Даёт красивый цвет солям', 'Встречается в нефти']
  },
  { 
    atomicNumber: 24, symbol: 'Cr', name: 'Хром', mass: '51.996', period: 4, group: 6, block: 'd',
    discoveredBy: 'Луи Николя Воклен', yearDiscovered: '1797',
    applications: ['Хромирование', 'Нержавеющая сталь', 'Краски', 'Кожевенное производство'],
    funFacts: ['Название от греческого "цвет"', 'Рубины — это хром + корунд', 'Блестящий серебристый металл']
  },
  { 
    atomicNumber: 25, symbol: 'Mn', name: 'Марганец', mass: '54.938', period: 4, group: 7, block: 'd',
    discoveredBy: 'Йохан Готлиб Ган', yearDiscovered: '1774',
    applications: ['Сталеплавильное производство', 'Батарейки', 'Удобрения', 'Стекло'],
    funFacts: ['Удаляет кислород из стали', 'Необходим для костей', 'Древние использовали в стекле']
  },
  { 
    atomicNumber: 26, symbol: 'Fe', name: 'Железо', mass: '55.845', period: 4, group: 8, block: 'd',
    discoveredBy: 'Известно с древности', yearDiscovered: '—',
    applications: ['Строительство', 'Транспорт', 'Кровь (гемоглобин)', 'Инструменты'],
    funFacts: ['Самый распространённый металл на Земле по массе', 'Ядро Земли из железа', 'Железный век начался ~1200 до н.э.']
  },
  { 
    atomicNumber: 27, symbol: 'Co', name: 'Кобальт', mass: '58.933', period: 4, group: 9, block: 'd',
    discoveredBy: 'Георг Брандт', yearDiscovered: '1735',
    applications: ['Литий-ионные батареи', 'Суперсплавы', 'Синий пигмент', 'Медицина'],
    funFacts: ['Название от немецкого "гном"', 'Синий цвет стекла', 'Радиоактивный кобальт-60']
  },
  { 
    atomicNumber: 28, symbol: 'Ni', name: 'Никель', mass: '58.693', period: 4, group: 10, block: 'd',
    discoveredBy: 'Аксель Фредерик Кронштедт', yearDiscovered: '1751',
    applications: ['Монеты', 'Нержавеющая сталь', 'Батарейки', 'Покрытия'],
    funFacts: ['Название от немецкого "медный бес"', 'В метеоритах', '5-рублёвая монета содержит никель']
  },
  { 
    atomicNumber: 29, symbol: 'Cu', name: 'Медь', mass: '63.546', period: 4, group: 11, block: 'd',
    discoveredBy: 'Известна с древности', yearDiscovered: '—',
    applications: ['Провода', 'Трубы', 'Монеты', 'Кровля'],
    funFacts: ['Первый металл, обработанный человеком', 'Бактерицидные свойства', 'Зелёный купол — окисленная медь']
  },
  { 
    atomicNumber: 30, symbol: 'Zn', name: 'Цинк', mass: '65.38', period: 4, group: 12, block: 'd',
    discoveredBy: 'Андреас Сигизмунд Маргграф', yearDiscovered: '1746',
    applications: ['Гальванизация', 'Батарейки', 'Латунь', 'Солнцезащитные кремы'],
    funFacts: ['В организме ~2-3 грамма', 'Предотвращает ржавчину', 'Белый налёт на монетах']
  },
  { 
    atomicNumber: 31, symbol: 'Ga', name: 'Галлий', mass: '69.723', period: 4, group: 13, block: 'p',
    discoveredBy: 'Поль Эмиль Лекок де Буабодран', yearDiscovered: '1875',
    applications: ['Полупроводники', 'Светодиоды', 'Термометры', 'Солнечные батареи'],
    funFacts: ['Тает в руках (29.76°C)', 'Назван в честь Франции (Gallia)', 'Предсказан Менделеевым']
  },
  { 
    atomicNumber: 32, symbol: 'Ge', name: 'Германий', mass: '72.630', period: 4, group: 14, block: 'p',
    discoveredBy: 'Клеменс Винклер', yearDiscovered: '1886',
    applications: ['Полупроводники', 'Инфракрасная оптика', 'Волокно', 'Солнечные батареи'],
    funFacts: ['Предсказан Менделеевым как "экасилиций"', 'Назван в честь Германии', 'Первые транзисторы были из германия']
  },
  { 
    atomicNumber: 33, symbol: 'As', name: 'Мышьяк', mass: '74.922', period: 4, group: 15, block: 'p',
    discoveredBy: 'Альберт Великий', yearDiscovered: '~1250',
    applications: ['Полупроводники', 'Консервант дерева', 'Пестициды (ранее)'],
    funFacts: ['Известный яд', 'В малых дозах лекарство', '"Наследство мышьяка" в детективах']
  },
  { 
    atomicNumber: 34, symbol: 'Se', name: 'Селен', mass: '78.971', period: 4, group: 16, block: 'p',
    discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1817',
    applications: ['Стекло', 'Копиры', 'Солнечные батареи', 'Шампунь от перхоти'],
    funFacts: ['Назван в честь Луны (Selene)', 'Необходим в малых дозах', 'Даёт красный цвет стеклу']
  },
  { 
    atomicNumber: 35, symbol: 'Br', name: 'Бром', mass: '79.904', period: 4, group: 17, block: 'p',
    discoveredBy: 'Антуан Жером Балар', yearDiscovered: '1826',
    applications: ['Противопожарные средства', 'Фотография (ранее)', 'Лекарства', 'Нефтяная промышленность'],
    funFacts: ['Единственный жидкий неметалл при комнатной температуре', 'Резкий запах', 'Название от греческого "зловоние"']
  },
  { 
    atomicNumber: 36, symbol: 'Kr', name: 'Криптон', mass: '83.798', period: 4, group: 18, block: 'p',
    discoveredBy: 'Уильям Рамзай, Морис Траверс', yearDiscovered: '1898',
    applications: ['Лампы', 'Лазеры', 'Изоляция окон', 'Метр (ранее)'],
    funFacts: ['Название от греческого "скрытый"', 'Раньше метр определялся через криптон', 'В Superman криптонит']
  },
  { 
    atomicNumber: 37, symbol: 'Rb', name: 'Рубидий', mass: '85.468', period: 5, group: 1, block: 's',
    discoveredBy: 'Роберт Бунзен, Густав Кирхгоф', yearDiscovered: '1861',
    applications: ['Атомные часы', 'Фейерверки', 'Лазеры', 'GPS'],
    funFacts: ['Назван по красному цвету спектра', 'Очень мягкий', 'Самовоспламеняется на воздухе']
  },
  { 
    atomicNumber: 38, symbol: 'Sr', name: 'Стронций', mass: '87.62', period: 5, group: 2, block: 's',
    discoveredBy: 'Уильям Крюйкшенк', yearDiscovered: '1790',
    applications: ['Фейерверки (красный цвет)', 'Электронно-лучевые трубки', 'Зубная паста'],
    funFacts: ['Назван по шотландской деревне Строншиан', 'Красный огонь в фейерверках', 'В костях человека']
  },
  { 
    atomicNumber: 39, symbol: 'Y', name: 'Иттрий', mass: '88.906', period: 5, group: 3, block: 'd',
    discoveredBy: 'Йохан Гадолин', yearDiscovered: '1794',
    applications: ['Светодиоды', 'Лазеры', 'Сверхпроводники', 'Радары'],
    funFacts: ['Назван по шведской деревне Иттербю', 'Даёт красный цвет в телевизорах', 'Вместе с 3 другими элементами из той же деревни']
  },
  { 
    atomicNumber: 40, symbol: 'Zr', name: 'Цирконий', mass: '91.224', period: 5, group: 4, block: 'd',
    discoveredBy: 'Мартин Клапрот', yearDiscovered: '1789',
    applications: ['Ядерные реакторы', 'Керамика', 'Ювелирные изделия (циркон)', 'Зубные импланты'],
    funFacts: ['Не поглощает нейтроны', 'Циркон — имитация алмаза', 'Название от персидского "золотистый"']
  },
  { 
    atomicNumber: 41, symbol: 'Nb', name: 'Ниобий', mass: '92.906', period: 5, group: 5, block: 'd',
    discoveredBy: 'Чарльз Хатчетт', yearDiscovered: '1801',
    applications: ['Суперсплавы', 'МРТ-сканеры', 'Ювелирные изделия', 'Ракетные сопла'],
    funFacts: ['Назван в честь Ниобы из греческой мифологии', 'Сверхпроводник при низких температурах', 'Был назван колумбий']
  },
  { 
    atomicNumber: 42, symbol: 'Mo', name: 'Молибден', mass: '95.95', period: 5, group: 6, block: 'd',
    discoveredBy: 'Карл Шееле', yearDiscovered: '1778',
    applications: ['Легирование сталей', 'Катализаторы', 'Смазки', 'Электроды'],
    funFacts: ['Название от греческого "свинец"', 'Очень высокая температура плавления', 'В ферментах живых организмов']
  },
  { 
    atomicNumber: 43, symbol: 'Tc', name: 'Технеций', mass: '(98)', period: 5, group: 7, block: 'd',
    discoveredBy: 'Карло Перрье, Эмилио Сегре', yearDiscovered: '1937',
    applications: ['Медицинская диагностика', 'Калибровка инструментов'],
    funFacts: ['Первый искусственно созданный элемент', 'Название от греческого "искусственный"', 'Все изотопы радиоактивны']
  },
  { 
    atomicNumber: 44, symbol: 'Ru', name: 'Рутений', mass: '101.07', period: 5, group: 8, block: 'd',
    discoveredBy: 'Карл Эрнст Клаус', yearDiscovered: '1844',
    applications: ['Катализаторы', 'Электрические контакты', 'Покрытия', 'Солнечные батареи'],
    funFacts: ['Назван в честь России (Ruthenia)', 'В платиновых рудах', 'Редкий платиноид']
  },
  { 
    atomicNumber: 45, symbol: 'Rh', name: 'Родий', mass: '102.91', period: 5, group: 9, block: 'd',
    discoveredBy: 'Уильям Волластон', yearDiscovered: '1803',
    applications: ['Каталитические конвертеры', 'Ювелирные изделия', 'Зеркала', 'Электрические контакты'],
    funFacts: ['Название от греческого "роза"', 'Самый дорогой металл', 'Белый отражающий металл']
  },
  { 
    atomicNumber: 46, symbol: 'Pd', name: 'Палладий', mass: '106.42', period: 5, group: 10, block: 'd',
    discoveredBy: 'Уильям Волластон', yearDiscovered: '1803',
    applications: ['Каталитические конвертеры', 'Ювелирные изделия', 'Стоматология', 'Электроника'],
    funFacts: ['Назван в честь астероида Паллада', 'Поглощает водород', 'Белый металл похожий на платину']
  },
  { 
    atomicNumber: 47, symbol: 'Ag', name: 'Серебро', mass: '107.87', period: 5, group: 11, block: 'd',
    discoveredBy: 'Известно с древности', yearDiscovered: '—',
    applications: ['Ювелирные изделия', 'Провода', 'Зеркала', 'Фотография (ранее)'],
    funFacts: ['Лучшая электропроводность', 'Бактерицидные свойства', 'В Древнем Египте ценнее золота']
  },
  { 
    atomicNumber: 48, symbol: 'Cd', name: 'Кадмий', mass: '112.41', period: 5, group: 12, block: 'd',
    discoveredBy: 'Карл Шееле', yearDiscovered: '1817',
    applications: ['Батарейки', 'Пигменты', 'Покрытия', 'Ядерные реакторы'],
    funFacts: ['Очень токсичен', 'Назван по минералу каламин', 'Заменяет цинк в организме с плохими последствиями']
  },
  { 
    atomicNumber: 49, symbol: 'In', name: 'Индий', mass: '114.82', period: 5, group: 13, block: 'p',
    discoveredBy: 'Фердинанд Райх, Иероним Рихтер', yearDiscovered: '1863',
    applications: ['Жидкокристаллические дисплеи', 'Полупроводники', 'Низкоплавкие сплавы'],
    funFacts: ['Назван по индиго-синей линии спектра', 'Очень мягкий', 'Добывается как побочный продукт цинка']
  },
  { 
    atomicNumber: 50, symbol: 'Sn', name: 'Олово', mass: '118.71', period: 5, group: 14, block: 'p',
    discoveredBy: 'Известно с древности', yearDiscovered: '—',
    applications: ['Банка для консервов', 'Припой', 'Бронза (с медью)', 'Покрытия'],
    funFacts: ['Бронзовый век', 'Оловянные солдатики', 'Не ржавеет']
  },
  { 
    atomicNumber: 51, symbol: 'Sb', name: 'Сурьма', mass: '121.76', period: 5, group: 15, block: 'p',
    discoveredBy: 'Известна с древности', yearDiscovered: '—',
    applications: ['Батарейки', 'Пули', 'Пигменты', 'Огнеупоры'],
    funFacts: ['Косметика в Древнем Египте', 'Средневековая медицина', 'Название от греческого "не в одиночестве"']
  },
  { 
    atomicNumber: 52, symbol: 'Te', name: 'Теллур', mass: '127.60', period: 5, group: 16, block: 'p',
    discoveredBy: 'Франц-Йозеф Мюллер', yearDiscovered: '1782',
    applications: ['Солнечные батареи', 'Термопары', 'Резина', 'Стекло'],
    funFacts: ['Назван от латинского "Земля"', 'Редкий полуметалл', 'Токсичен']
  },
  { 
    atomicNumber: 53, symbol: 'I', name: 'Йод', mass: '126.90', period: 5, group: 17, block: 'p',
    discoveredBy: 'Бернар Куртуа', yearDiscovered: '1811',
    applications: ['Антисептики', 'Соль (йодированная)', 'Рентгеноконтрастные вещества', 'Фотография'],
    funFacts: ['Название от греческого "фиолетовый"', 'Необходим для щитовидной железы', 'Фиолетовые пары']
  },
  { 
    atomicNumber: 54, symbol: 'Xe', name: 'Ксенон', mass: '131.29', period: 5, group: 18, block: 'p',
    discoveredBy: 'Уильям Рамзай, Морис Траверс', yearDiscovered: '1898',
    applications: ['Лампы', 'Анестезия', 'Ионные двигатели', 'МРТ'],
    funFacts: ['Название от греческого "чужой"', 'Самый тяжёлый благородный газ в атмосфере', 'Может образовывать соединения']
  },
  { 
    atomicNumber: 55, symbol: 'Cs', name: 'Цезий', mass: '132.91', period: 6, group: 1, block: 's',
    discoveredBy: 'Роберт Бунзен, Густав Кирхгоф', yearDiscovered: '1860',
    applications: ['Атомные часы', 'Бурение нефтяных скважин', 'Фотоэлементы'],
    funFacts: ['Самый активный металл', 'Название от латинского "небесно-голубой"', 'Жидкий при комнатной температуре']
  },
  { 
    atomicNumber: 56, symbol: 'Ba', name: 'Барий', mass: '137.33', period: 6, group: 2, block: 's',
    discoveredBy: 'Карл Шееле', yearDiscovered: '1772',
    applications: ['Рентген ЖКТ', 'Бариевые стекла', 'Пиротехника', 'Масла'],
    funFacts: ['Название от греческого "тяжёлый"', 'Бариевая каша для рентгена', 'Фейерверки (зелёный цвет)']
  },
  { 
    atomicNumber: 57, symbol: 'La', name: 'Лантан', mass: '138.91', period: 6, group: 3, block: 'f',
    discoveredBy: 'Карл Мосандер', yearDiscovered: '1839',
    applications: ['Зажигалки', 'Катализаторы', 'Стекла', 'Батарейки'],
    funFacts: ['Название от греческого "скрываться"', 'Первый лантаноид', 'Даёт название всей группе']
  },
  { 
    atomicNumber: 72, symbol: 'Hf', name: 'Гафний', mass: '178.49', period: 6, group: 4, block: 'd',
    discoveredBy: 'Дирк Костер, Дьёрдь де Хевеши', yearDiscovered: '1923',
    applications: ['Ядерные реакторы', 'Процессоры', 'Сплавы', 'Керамика'],
    funFacts: ['Назван в честь Копенгагена (Hafnia)', 'Очень похож на цирконий', 'Последний открытый стабильный элемент']
  },
  { 
    atomicNumber: 73, symbol: 'Ta', name: 'Тантал', mass: '180.95', period: 6, group: 5, block: 'd',
    discoveredBy: 'Андерс Густав Экеберг', yearDiscovered: '1802',
    applications: ['Конденсаторы', 'Хирургические инструменты', 'Ювелирные изделия', 'Химическая аппаратура'],
    funFacts: ['Назван в честь Тантала из мифов', 'Очень устойчив к коррозии', 'В мобильных телефонах']
  },
  { 
    atomicNumber: 74, symbol: 'W', name: 'Вольфрам', mass: '183.84', period: 6, group: 6, block: 'd',
    discoveredBy: 'Карл Шееле', yearDiscovered: '1781',
    applications: ['Нити накаливания', 'Сверла', 'Броня', 'Ракеты'],
    funFacts: ['Самая высокая температура плавления среди металлов', 'Название от шведского "тяжёлый камень"', 'Вольфрамовый бетон']
  },
  { 
    atomicNumber: 75, symbol: 'Re', name: 'Рений', mass: '186.21', period: 6, group: 7, block: 'd',
    discoveredBy: 'Масатакэ Огава', yearDiscovered: '1925',
    applications: ['Реактивные двигатели', 'Катализаторы', 'Термопары'],
    funFacts: ['Назван в честь реки Рейн', 'Один из редчайших элементов', 'Последний открытый стабильный металл']
  },
  { 
    atomicNumber: 76, symbol: 'Os', name: 'Осмий', mass: '190.23', period: 6, group: 8, block: 'd',
    discoveredBy: 'Смитсон Теннант', yearDiscovered: '1803',
    applications: ['Перья ручек', 'Импланты', 'Катализаторы', 'Отпечатки пальцев'],
    funFacts: ['Самый плотный элемент', 'Название от греческого "запах"', 'Очень твёрдый и хрупкий']
  },
  { 
    atomicNumber: 77, symbol: 'Ir', name: 'Иридий', mass: '192.22', period: 6, group: 9, block: 'd',
    discoveredBy: 'Смитсон Теннант', yearDiscovered: '1803',
    applications: ['Свечи зажигания', 'Тигли', 'Контакты', 'Международный эталон килограмма'],
    funFacts: ['Название от греческого "радуга"', 'Самый коррозионностойкий металл', 'В метеоритах (вымирание динозавров)']
  },
  { 
    atomicNumber: 78, symbol: 'Pt', name: 'Платина', mass: '195.08', period: 6, group: 10, block: 'd',
    discoveredBy: 'Антонио де Ульоа', yearDiscovered: '1735',
    applications: ['Ювелирные изделия', 'Каталитические конвертеры', 'Химиотерапия', 'Электроды'],
    funFacts: ['Название от испанского "серебришко"', 'Не окисляется', 'Дороже золота']
  },
  { 
    atomicNumber: 79, symbol: 'Au', name: 'Золото', mass: '196.97', period: 6, group: 11, block: 'd',
    discoveredBy: 'Известно с древности', yearDiscovered: '—',
    applications: ['Ювелирные изделия', 'Электроника', 'Стоматология', 'Инвестиции'],
    funFacts: ['Не ржавеет', 'Можно расковать в тончайшую фольгу', 'В океанах 20 млн тонн золота']
  },
  { 
    atomicNumber: 80, symbol: 'Hg', name: 'Ртуть', mass: '200.59', period: 6, group: 12, block: 'd',
    discoveredBy: 'Известна с древности', yearDiscovered: '—',
    applications: ['Термометры (ранее)', 'Люминесцентные лампы', 'Зубные пломбы (ранее)'],
    funFacts: ['Единственный жидкий металл', 'Очень токсична', 'Название от планеты Меркурий']
  },
  { 
    atomicNumber: 81, symbol: 'Tl', name: 'Таллий', mass: '204.38', period: 6, group: 13, block: 'p',
    discoveredBy: 'Уильям Крукс', yearDiscovered: '1861',
    applications: ['Электроника', 'Стекло', 'Медицина', 'Инфракрасная оптика'],
    funFacts: ['Название от греческого "молодая ветка"', 'Очень токсичен', 'Зелёная линия спектра']
  },
  { 
    atomicNumber: 82, symbol: 'Pb', name: 'Свинец', mass: '207.2', period: 6, group: 14, block: 'p',
    discoveredBy: 'Известен с древности', yearDiscovered: '—',
    applications: ['Батарейки', 'Радиация защита', 'Пули', 'Припой'],
    funFacts: ['Очень токсичен', 'Римляне делали трубы из свинца', 'Самый тяжёлый стабильный элемент']
  },
  { 
    atomicNumber: 83, symbol: 'Bi', name: 'Висмут', mass: '208.98', period: 6, group: 15, block: 'p',
    discoveredBy: 'Известен с древности', yearDiscovered: '—',
    applications: ['Лекарства', 'Косметика', 'Сплавы', 'Ядерное топливо'],
    funFacts: ['Радужные кристаллы', 'Самый диамагнитный металл', 'Радиоактивен с периодом полураспада в миллиарды лет']
  },
  { 
    atomicNumber: 86, symbol: 'Rn', name: 'Радон', mass: '(222)', period: 6, group: 18, block: 'p',
    discoveredBy: 'Фридрих Дорн', yearDiscovered: '1900',
    applications: ['Лечение рака (ранее)', 'Обнаружение землетрясений'],
    funFacts: ['Название от радия', 'Радиоактивный газ', 'Может накапливаться в подвалах']
  },
  { 
    atomicNumber: 88, symbol: 'Ra', name: 'Радий', mass: '(226)', period: 7, group: 2, block: 's',
    discoveredBy: 'Мария и Пьер Кюри', yearDiscovered: '1898',
    applications: ['Лечение рака (ранее)', 'Светящиеся краски (ранее)'],
    funFacts: ['Светится в темноте', 'Открыт Кюри', 'Название от латинского "луч"']
  },
  // Лантаноиды
  { atomicNumber: 58, symbol: 'Ce', name: 'Церий', mass: '140.12', period: 6, group: 3, block: 'f', discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1803', applications: ['Зажигалки', 'Стекло', 'Катализаторы'], funFacts: ['Самый редкий элемент среди лантаноидов'] },
  { atomicNumber: 59, symbol: 'Pr', name: 'Празеодим', mass: '140.91', period: 6, group: 3, block: 'f', discoveredBy: 'Карл Ауэр фон Вельсбах', yearDiscovered: '1885', applications: ['Магниты', 'Стекло'], funFacts: ['Даёт зелёный цвет стеклу'] },
  { atomicNumber: 60, symbol: 'Nd', name: 'Неодим', mass: '144.24', period: 6, group: 3, block: 'f', discoveredBy: 'Карл Ауэр фон Вельсбах', yearDiscovered: '1885', applications: ['Мощные магниты', 'Лазеры', 'Наушники'], funFacts: ['Используется в жестких дисках'] },
  { atomicNumber: 61, symbol: 'Pm', name: 'Прометий', mass: '(145)', period: 6, group: 3, block: 'f', discoveredBy: 'Чиен Шиунг Ву', yearDiscovered: '1945', applications: ['Светящиеся краски', 'Батарейки'], funFacts: ['Радиоактивен', 'Назван в честь Прометея'] },
  { atomicNumber: 62, symbol: 'Sm', name: 'Самарий', mass: '150.36', period: 6, group: 3, block: 'f', discoveredBy: 'Поль Эмиль Лекок де Буабодран', yearDiscovered: '1879', applications: ['Магниты', 'Рак лечение'], funFacts: ['Назван в честь минерала самарскита'] },
  { atomicNumber: 63, symbol: 'Eu', name: 'Европий', mass: '151.96', period: 6, group: 3, block: 'f', discoveredBy: 'Эжен Демарсе', yearDiscovered: '1901', applications: ['Евро банкноты', 'ТВ экраны'], funFacts: ['Защита от подделок'] },
  { atomicNumber: 64, symbol: 'Gd', name: 'Гадолиний', mass: '157.25', period: 6, group: 3, block: 'f', discoveredBy: 'Жан Шарль Галиссар де Мариньяк', yearDiscovered: '1880', applications: ['МРТ контраст', 'Реакторы'], funFacts: ['Назван в честь Йохана Гадолина'] },
  { atomicNumber: 65, symbol: 'Tb', name: 'Тербий', mass: '158.93', period: 6, group: 3, block: 'f', discoveredBy: 'Карл Густав Мосандер', yearDiscovered: '1843', applications: ['ТВ экраны', 'Магниты'], funFacts: ['Назван по шведской деревне Иттербю'] },
  { atomicNumber: 66, symbol: 'Dy', name: 'Диспрозий', mass: '162.50', period: 6, group: 3, block: 'f', discoveredBy: 'Поль Эмиль Лекок де Буабодран', yearDiscovered: '1886', applications: ['Магниты', 'Реакторы'], funFacts: ['Название от греческого "труднодоступный"'] },
  { atomicNumber: 67, symbol: 'Ho', name: 'Гольмий', mass: '164.93', period: 6, group: 3, block: 'f', discoveredBy: 'Марк Делафонтен', yearDiscovered: '1878', applications: ['Магниты', 'Лазеры'], funFacts: ['Назван в честь Стокгольма'] },
  { atomicNumber: 68, symbol: 'Er', name: 'Эрбий', mass: '167.26', period: 6, group: 3, block: 'f', discoveredBy: 'Карл Густав Мосандер', yearDiscovered: '1843', applications: ['Лазеры', 'Оптика'], funFacts: ['Назван по шведской деревне Иттербю'] },
  { atomicNumber: 69, symbol: 'Tm', name: 'Тулий', mass: '168.93', period: 6, group: 3, block: 'f', discoveredBy: 'Пер Теодор Клеве', yearDiscovered: '1879', applications: ['Лазеры', 'Рентген'], funFacts: ['Назван в честь Скандинавии'] },
  { atomicNumber: 70, symbol: 'Yb', name: 'Иттербий', mass: '173.05', period: 6, group: 3, block: 'f', discoveredBy: 'Жан Шарль Галиссар де Мариньяк', yearDiscovered: '1878', applications: ['Лазеры', 'Металлургия'], funFacts: ['Назван по шведской деревне Иттербю'] },
  { atomicNumber: 71, symbol: 'Lu', name: 'Лютеций', mass: '174.97', period: 6, group: 3, block: 'f', discoveredBy: 'Жорж Урбен', yearDiscovered: '1907', applications: ['Катализаторы', 'Петрология'], funFacts: ['Назван в честь Парижа'] },
  // Актиноиды
  { atomicNumber: 89, symbol: 'Ac', name: 'Актиний', mass: '(227)', period: 7, group: 3, block: 'f', discoveredBy: 'Фридрих Гизель', yearDiscovered: '1899', applications: ['Нейтронные источники'], funFacts: ['Светится в темноте'] },
  { atomicNumber: 90, symbol: 'Th', name: 'Торий', mass: '232.04', period: 7, group: 3, block: 'f', discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1829', applications: ['Ядерное топливо', 'Газовые лампы'], funFacts: ['Назван в честь Тора'] },
  { atomicNumber: 91, symbol: 'Pa', name: 'Протактиний', mass: '231.04', period: 7, group: 3, block: 'f', discoveredBy: 'Касимир Фаянс', yearDiscovered: '1913', applications: ['Исследования'], funFacts: ['Очень редкий и токсичный'] },
  { atomicNumber: 92, symbol: 'U', name: 'Уран', mass: '238.03', period: 7, group: 3, block: 'f', discoveredBy: 'Мартин Клапрот', yearDiscovered: '1789', applications: ['Ядерное топливо', 'Оружие'], funFacts: ['Назван в честь планеты Уран'] },
  { atomicNumber: 93, symbol: 'Np', name: 'Нептуний', mass: '(237)', period: 7, group: 3, block: 'f', discoveredBy: 'Эдвин Макмиллан', yearDiscovered: '1940', applications: ['Детекторы нейтронов'], funFacts: ['Назван в честь Нептуна'] },
  { atomicNumber: 94, symbol: 'Pu', name: 'Плутоний', mass: '(244)', period: 7, group: 3, block: 'f', discoveredBy: 'Гленн Сиборг', yearDiscovered: '1940', applications: ['Ядерное оружие', 'Топливо'], funFacts: ['Назван в честь Плутона'] },
  { atomicNumber: 95, symbol: 'Am', name: 'Америций', mass: '(243)', period: 7, group: 3, block: 'f', discoveredBy: 'Гленн Сиборг', yearDiscovered: '1944', applications: ['Датчики дыма'], funFacts: ['Назван в честь Америки'] },
  { atomicNumber: 96, symbol: 'Cm', name: 'Кюрий', mass: '(247)', period: 7, group: 3, block: 'f', discoveredBy: 'Гленн Сиборг', yearDiscovered: '1944', applications: ['Космические аппараты'], funFacts: ['Назван в честь Кюри'] },
  { atomicNumber: 97, symbol: 'Bk', name: 'Берклий', mass: '(247)', period: 7, group: 3, block: 'f', discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1949', applications: ['Исследования'], funFacts: ['Назван в честь Беркли'] },
  { atomicNumber: 98, symbol: 'Cf', name: 'Калифорний', mass: '(251)', period: 7, group: 3, block: 'f', discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1950', applications: ['Скважины', 'Медицина'], funFacts: ['Назван в честь Калифорнии'] },
  { atomicNumber: 99, symbol: 'Es', name: 'Эйнштейний', mass: '(252)', period: 7, group: 3, block: 'f', discoveredBy: 'Альберт Гиорсо', yearDiscovered: '1952', applications: ['Исследования'], funFacts: ['Назван в честь Эйнштейна'] },
  { atomicNumber: 100, symbol: 'Fm', name: 'Фермий', mass: '(257)', period: 7, group: 3, block: 'f', discoveredBy: 'Альберт Гиорсо', yearDiscovered: '1952', applications: ['Исследования'], funFacts: ['Назван в честь Ферми'] },
  { atomicNumber: 101, symbol: 'Md', name: 'Менделевий', mass: '(258)', period: 7, group: 3, block: 'f', discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1955', applications: ['Исследования'], funFacts: ['Назван в честь Менделеева'] },
  { atomicNumber: 102, symbol: 'No', name: 'Нобелий', mass: '(259)', period: 7, group: 3, block: 'f', discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '1966', applications: ['Исследования'], funFacts: ['Назван в честь Нобеля'] },
  { atomicNumber: 103, symbol: 'Lr', name: 'Лоуренсий', mass: '(266)', period: 7, group: 3, block: 'f', discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1961', applications: ['Исследования'], funFacts: ['Назван в честь Лоуренса'] },
];

// ====================== ЦВЕТА ДЛЯ БЛОКОВ ======================
const getBlockColor = (block: Element['block']) => {
  switch (block) {
    case 's': return 'from-blue-500/30 to-cyan-500/30 border-blue-400/50 hover:from-blue-500/50 hover:to-cyan-500/50';
    case 'p': return 'from-emerald-500/30 to-green-500/30 border-emerald-400/50 hover:from-emerald-500/50 hover:to-green-500/50';
    case 'd': return 'from-violet-500/30 to-purple-500/30 border-violet-400/50 hover:from-violet-500/50 hover:to-purple-500/50';
    case 'f': return 'from-amber-500/30 to-orange-500/30 border-amber-400/50 hover:from-amber-500/50 hover:to-orange-500/50';
  }
};

// ====================== 3D МОДЕЛЬ АТОМА ======================
// Распределение электронов по оболочкам
const getElectronShells = (atomicNumber: number): number[] => {
  const shells: number[] = [];
  const maxElectrons = [2, 8, 18, 32, 32, 18, 8]; // Максимальное количество электронов на каждой оболочке
  let remaining = atomicNumber;
  
  for (let i = 0; i < maxElectrons.length && remaining > 0; i++) {
    const electrons = Math.min(remaining, maxElectrons[i]);
    shells.push(electrons);
    remaining -= electrons;
  }
  
  return shells;
};

// Названия оболочек
const shellNames = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];

// Цвета для оболочек
const shellColors = [
  '#FF6B6B', // красный
  '#4ECDC4', // бирюзовый
  '#45B7D1', // голубой
  '#96CEB4', // зелёный
  '#FFEAA7', // жёлтый
  '#DDA0DD', // сливовый
  '#98D8C8', // мятный
];

// Компонент электрона - внутри Canvas
const Electron: React.FC<{ orbit: number; angle: number; speed: number; color: string; index: number }> = ({ orbit, angle, speed, color, index }) => {
  const ref = useRef<THREE.Mesh>(null);
  const orbitRadius = orbit * 0.8 + 1.2;
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + angle + (index * Math.PI * 2 / 8);
      ref.current.position.x = Math.cos(t) * orbitRadius;
      ref.current.position.z = Math.sin(t) * orbitRadius;
      ref.current.position.y = Math.sin(t * 2 + orbit) * 0.3;
    }
  });
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

// Компонент орбиты - внутри Canvas
const OrbitRing: React.FC<{ radius: number; color: string }> = ({ radius, color }) => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
};

// Функция создания позиций частиц в ядре (упаковка в сферу)
const generateNucleusPositions = (protonCount: number, neutronCount: number, nucleusSize: number) => {
  const positions: { pos: [number, number, number]; type: 'proton' | 'neutron' }[] = [];
  const totalParticles = Math.min(protonCount + neutronCount, 20); // Визуально ограничиваем для производительности
  const particleRadius = nucleusSize * 0.25;
  
  // Алгоритм упаковки частиц в сферу
  for (let i = 0; i < totalParticles; i++) {
    const phi = Math.acos(-1 + (2 * i + 1) / totalParticles);
    const theta = Math.sqrt(totalParticles * Math.PI) * phi;
    const r = nucleusSize * 0.6 * Math.cbrt((i + 1) / totalParticles);
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    positions.push({
      pos: [x, y, z],
      type: i < protonCount ? 'proton' : 'neutron'
    });
  }
  
  return positions;
};

// Ядро атома - внутри Canvas
const Nucleus: React.FC<{ protons: number; neutrons: number }> = ({ protons, neutrons }) => {
  const groupRef = useRef<THREE.Group>(null);
  const totalNucleons = protons + neutrons;
  const nucleusSize = 0.25 + Math.min(totalNucleons * 0.008, 0.4);
  
  const particles = useMemo(() => 
    generateNucleusPositions(protons, neutrons, nucleusSize),
    [protons, neutrons, nucleusSize]
  );
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Полупрозрачное ядро-основа */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[nucleusSize, 32, 32]} />
        <meshStandardMaterial 
          color="#FF6B6B" 
          transparent 
          opacity={0.3}
          roughness={0.5}
        />
      </mesh>
      
      {/* Протоны (красные) и нейтроны (синие) */}
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.pos}>
          <sphereGeometry args={[nucleusSize * 0.2, 12, 12]} />
          <meshStandardMaterial 
            color={particle.type === 'proton' ? '#FF4444' : '#4444FF'} 
            emissive={particle.type === 'proton' ? '#FF4444' : '#4444FF'}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

// Сцена атома - рендерится внутри Canvas
const AtomScene: React.FC<{ atomicNumber: number }> = ({ atomicNumber }) => {
  const shells = useMemo(() => getElectronShells(atomicNumber), [atomicNumber]);
  
  // Создаём электроны
  const electrons = useMemo(() => {
    const result: JSX.Element[] = [];
    shells.forEach((count, shellIndex) => {
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 1 + (shellIndex * 0.2);
        const color = shellColors[shellIndex % shellColors.length];
        result.push(
          <Electron 
            key={`${shellIndex}-${i}`} 
            orbit={shellIndex} 
            angle={angle} 
            speed={speed} 
            color={color}
            index={i}
          />
        );
      }
    });
    return result;
  }, [shells]);
  
  // Создаём орбиты
  const orbits = useMemo(() => {
    return shells.map((_, index) => (
      <OrbitRing 
        key={index} 
        radius={index * 0.8 + 1.2} 
        color={shellColors[index % shellColors.length]} 
      />
    ));
  }, [shells]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ECDC4" />
      
      <Nucleus protons={atomicNumber} neutrons={Math.round(atomicNumber * 1.35)} />
      
      {orbits}
      {electrons}
      
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#FF6B6B" distance={3} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 3 / 4}
      />
    </>
  );
};

// Компонент информации о частицах
const ParticleInfo: React.FC<{ element: Element }> = ({ element }) => {
  const shells = getElectronShells(element.atomicNumber);
  // Нейтроны ≈ масса - протоны (округляем массу)
  const massNumber = Math.round(parseFloat(element.mass.replace(/[()]/g, '')) || element.atomicNumber);
  const neutrons = massNumber - element.atomicNumber;
  const protons = element.atomicNumber;
  const electrons = element.atomicNumber;
  
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-800/50">
      {/* Ядро */}
      <div className="col-span-2 grid grid-cols-2 gap-3">
        {/* Протоны */}
        <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: Math.min(protons, 10) }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
            ))}
            {protons > 10 && <span className="text-xs text-red-400">+{protons - 10}</span>}
          </div>
          <div>
            <div className="text-xs text-red-300">Протоны (p⁺)</div>
            <div className="text-xl font-bold text-red-400">{protons}</div>
          </div>
        </div>
        
        {/* Нейтроны */}
        <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: Math.min(neutrons, 10) }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            ))}
            {neutrons > 10 && <span className="text-xs text-blue-400">+{neutrons - 10}</span>}
          </div>
          <div>
            <div className="text-xs text-blue-300">Нейтроны (n⁰)</div>
            <div className="text-xl font-bold text-blue-400">{neutrons}</div>
          </div>
        </div>
      </div>
      
      {/* Электроны по оболочкам */}
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
          <span className="text-sm text-gray-300">Электроны (e⁻): {electrons}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {shells.map((count, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border"
              style={{ 
                backgroundColor: `${shellColors[index]}20`,
                borderColor: `${shellColors[index]}50`
              }}
            >
              <span 
                className="text-sm font-medium"
                style={{ color: shellColors[index] }}
              >
                {shellNames[index]}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: Math.min(count, 8) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: shellColors[index] }}
                  />
                ))}
                {count > 8 && (
                  <span className="text-xs" style={{ color: shellColors[index] }}>
                    +{count - 8}
                  </span>
                )}
              </div>
              <span 
                className="text-sm font-bold"
                style={{ color: shellColors[index] }}
              >
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Главный компонент - обёртка с Canvas
const AtomModel3D: React.FC<{ atomicNumber: number }> = ({ atomicNumber }) => {
  return (
    <Canvas camera={{ position: [0, 3, 6], fov: 50 }}>
      <AtomScene atomicNumber={atomicNumber} />
    </Canvas>
  );
};

// ====================== МОДАЛЬНОЕ ОКНО ЭЛЕМЕНТА ======================
const ElementModal: React.FC<{ element: Element; onClose: () => void }> = ({ element, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Заголовок */}
        <div className="relative p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-2 left-1/2 -translate-x-1/2 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-slate-800/80 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-6 mt-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20">
              <span className="text-5xl font-black text-white">{element.symbol}</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{element.name}</h2>
              <p className="text-lg text-gray-400">№ {element.atomicNumber} • Атомная масса: {element.mass}</p>
              <div className="flex gap-3 mt-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                  Период {element.period}
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                  Группа {element.group}
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 font-mono">
                  {element.block}-блок
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Содержимое */}
        <div className="p-6 space-y-4">
          {/* Открытие */}
          {element.discoveredBy && (
            <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <User className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-300 mb-1">Открытие</h3>
                <p className="text-gray-300">
                  {element.discoveredBy}
                  {element.yearDiscovered && element.yearDiscovered !== '—' && (
                    <span className="text-gray-500">, {element.yearDiscovered}</span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Применение */}
          {element.applications && element.applications.length > 0 && (
            <div className="flex items-start gap-3 p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <FlaskConical className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-emerald-300 mb-2">Применение</h3>
                <div className="flex flex-wrap gap-2">
                  {element.applications.map((app, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Интересные факты */}
          {element.funFacts && element.funFacts.length > 0 && (
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <Lightbulb className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Интересные факты</h3>
                <ul className="space-y-2">
                  {element.funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 3D Модель атома и информация о частицах */}
        <div className="border-t border-white/10">
          <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <Atom className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">3D Модель атома {element.name}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {/* 3D Визуализация */}
            <div className="h-56 w-full bg-gradient-to-b from-slate-800 to-slate-900 border-r border-white/10">
              <AtomModel3D atomicNumber={element.atomicNumber} />
            </div>
            {/* Информация о частицах */}
            <ParticleInfo element={element} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ====================== ГЛАВНЫЙ КОМПОНЕНТ ======================
export const PeriodicTable: React.FC = () => {
  const [selected, setSelected] = useState<Element | null>(null);
  const [search, setSearch] = useState('');

  const filteredElements = elementsData.filter(
    el =>
      el.symbol.toLowerCase().includes(search.toLowerCase()) ||
      el.name.toLowerCase().includes(search.toLowerCase())
  );

  const mainElements = filteredElements.filter(
    el => !(el.atomicNumber >= 58 && el.atomicNumber <= 71) && !(el.atomicNumber >= 90 && el.atomicNumber <= 103)
  );

  const lanthanides = filteredElements.filter(el => el.atomicNumber >= 58 && el.atomicNumber <= 71);
  const actinides = filteredElements.filter(el => el.atomicNumber >= 90 && el.atomicNumber <= 103);

  return (
    <div className="w-full">
      {/* Заголовок */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Atom className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Периодическая таблица элементов</h2>
        </div>
        
        <input
          type="text"
          placeholder="Поиск элемента..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Легенда */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500/50 to-cyan-500/50 border border-blue-400/50"></div>
          <span className="text-sm text-gray-400">s-блок</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-emerald-500/50 to-green-500/50 border border-emerald-400/50"></div>
          <span className="text-sm text-gray-400">p-блок</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-violet-500/50 to-purple-500/50 border border-violet-400/50"></div>
          <span className="text-sm text-gray-400">d-блок</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-500/50 to-orange-500/50 border border-amber-400/50"></div>
          <span className="text-sm text-gray-400">f-блок</span>
        </div>
      </div>

      {/* Основная таблица */}
      <div className="relative overflow-x-auto pb-4">
        <div
          className="grid gap-1 text-center text-xs font-medium min-w-[900px]"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(44px, 1fr))',
            gridTemplateRows: 'repeat(7, 60px)',
          }}
        >
          {mainElements.map(el => (
            <motion.div
              key={el.atomicNumber}
              onClick={() => setSelected(el)}
              style={{
                gridColumn: el.group,
                gridRow: el.period,
              }}
              className={`group flex flex-col items-center justify-center border rounded-xl cursor-pointer transition-all bg-gradient-to-br ${getBlockColor(el.block)} ${
                selected?.atomicNumber === el.atomicNumber ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110 z-10' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-[9px] text-gray-400">{el.atomicNumber}</div>
              <div className="text-lg font-bold text-white mt-0.5">{el.symbol}</div>
              <div className="text-[9px] text-gray-400 mt-0.5 leading-tight truncate w-full px-1">{el.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Лантаноиды */}
      {lanthanides.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-amber-400 font-medium text-sm">Лантаноиды</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-1">
            {lanthanides.map(el => (
              <motion.div
                key={el.atomicNumber}
                onClick={() => setSelected(el)}
                className={`flex flex-col items-center justify-center h-14 border rounded-xl cursor-pointer transition-all bg-gradient-to-br ${getBlockColor(el.block)}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-[9px] text-gray-400">{el.atomicNumber}</div>
                <div className="text-base font-bold text-white">{el.symbol}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Актиноиды */}
      {actinides.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-amber-400 font-medium text-sm">Актиноиды</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-1">
            {actinides.map(el => (
              <motion.div
                key={el.atomicNumber}
                onClick={() => setSelected(el)}
                className={`flex flex-col items-center justify-center h-14 border rounded-xl cursor-pointer transition-all bg-gradient-to-br ${getBlockColor(el.block)}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-[9px] text-gray-400">{el.atomicNumber}</div>
                <div className="text-base font-bold text-white">{el.symbol}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Модальное окно */}
      <AnimatePresence>
        {selected && (
          <ElementModal element={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      <div className="mt-6 text-center text-xs text-gray-500">
        Кликните на элемент для подробной информации • Интерактивная таблица Менделеева
      </div>
    </div>
  );
};

export default PeriodicTable;
