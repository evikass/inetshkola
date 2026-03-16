'use client';
import React, { useState } from 'react';

// ====================== ПРОСТАЯ АНИМИРОВАННАЯ МОДЕЛЬ АТОМА ======================
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
        <text x="60" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
          {symbol}
        </text>
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
                  <circle key={j} cx={x} cy={y} r="4" fill={color} className="animate-[spin_3s_linear_infinite]" style={{ animationDelay: `-${j * 0.2}s` }} />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ====================== ОСНОВНАЯ КОМПОНЕНТА ======================
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
    atomicNumber: 84, symbol: 'Po', name: 'Полоний', mass: '(209)', period: 6, group: 16, block: 'p',
    discoveredBy: 'Мария и Пьер Кюри', yearDiscovered: '1898',
    applications: ['Источники тепла', 'Антистатические щётки', 'Нейтронные источники'],
    funFacts: ['Назван в честь Польши', 'Открыт Марии Кюри', 'Очень радиоактивен']
  },
  { 
    atomicNumber: 85, symbol: 'At', name: 'Астат', mass: '(210)', period: 6, group: 17, block: 'p',
    discoveredBy: 'Дейл Корсон, Кеннет Маккензи', yearDiscovered: '1940',
    applications: ['Медицина (потенциал)', 'Исследования'],
    funFacts: ['Название от греческого "нестабильный"', 'Самый редкий элемент на Земле', 'Всего ~30 грамм в земной коре']
  },
  { 
    atomicNumber: 86, symbol: 'Rn', name: 'Радон', mass: '(222)', period: 6, group: 18, block: 'p',
    discoveredBy: 'Фридрих Дорн', yearDiscovered: '1900',
    applications: ['Лечение рака (ранее)', 'Обнаружение землетрясений'],
    funFacts: ['Название от радия', 'Радиоактивный газ', 'Может накапливаться в подвалах']
  },
  { 
    atomicNumber: 87, symbol: 'Fr', name: 'Франций', mass: '(223)', period: 7, group: 1, block: 's',
    discoveredBy: 'Маргерит Перей', yearDiscovered: '1939',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Франции', 'Самый нестабильный из первых 101 элементов', 'Открыт женщиной-учёным']
  },
  { 
    atomicNumber: 88, symbol: 'Ra', name: 'Радий', mass: '(226)', period: 7, group: 2, block: 's',
    discoveredBy: 'Мария и Пьер Кюри', yearDiscovered: '1898',
    applications: ['Лечение рака (ранее)', 'Светящиеся краски (ранее)'],
    funFacts: ['Светится в темноте', 'Открыт Кюри', 'Название от латинского "луч"']
  },
  { 
    atomicNumber: 89, symbol: 'Ac', name: 'Актиний', mass: '(227)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Фридрих Гизель', yearDiscovered: '1899',
    applications: ['Нейтронные источники', 'Исследования'],
    funFacts: ['Название от греческого "луч"', 'Даёт название актинидам', 'В 150 раз радиоактивнее радия']
  },
  { 
    atomicNumber: 104, symbol: 'Rf', name: 'Резерфордий', mass: '(267)', period: 7, group: 4, block: 'd',
    discoveredBy: 'Объединённый институт ядерных исследований', yearDiscovered: '1969',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Эрнеста Резерфорда', 'Искусственный элемент', 'Спор об открытии СССР/США']
  },
  { 
    atomicNumber: 105, symbol: 'Db', name: 'Дубний', mass: '(270)', period: 7, group: 5, block: 'd',
    discoveredBy: 'Объединённый институт ядерных исследований', yearDiscovered: '1970',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь города Дубна', 'Искусственный элемент', 'Ранее назывался ганий']
  },
  { 
    atomicNumber: 106, symbol: 'Sg', name: 'Сиборгий', mass: '(269)', period: 7, group: 6, block: 'd',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1974',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Гленна Сиборга', 'Единственный элемент названный при жизни учёного', 'Искусственный элемент']
  },
  { 
    atomicNumber: 107, symbol: 'Bh', name: 'Борий', mass: '(270)', period: 7, group: 7, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1981',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Нильса Бора', 'Искусственный элемент', 'Всего несколько атомов создано']
  },
  { 
    atomicNumber: 108, symbol: 'Hs', name: 'Хассий', mass: '(270)', period: 7, group: 8, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1984',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь немецкой земли Гессен', 'Искусственный элемент', 'GSI — институт в Дармштадте']
  },
  { 
    atomicNumber: 109, symbol: 'Mt', name: 'Мейтнерий', mass: '(278)', period: 7, group: 9, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1982',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Лизы Мейтнер', 'Искусственный элемент', 'Мейтнер не получила Нобелевскую премию']
  },
  { 
    atomicNumber: 110, symbol: 'Ds', name: 'Дармштадтий', mass: '(281)', period: 7, group: 10, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1994',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь города Дармштадт', 'Искусственный элемент', 'Создано всего несколько атомов']
  },
  { 
    atomicNumber: 111, symbol: 'Rg', name: 'Рентгений', mass: '(282)', period: 7, group: 11, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1994',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Вильгельма Рентгена', 'Искусственный элемент', 'Открыватель рентгеновских лучей']
  },
  { 
    atomicNumber: 112, symbol: 'Cn', name: 'Коперниций', mass: '(285)', period: 7, group: 12, block: 'd',
    discoveredBy: 'GSI, Дармштадт', yearDiscovered: '1996',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Николая Коперника', 'Искусственный элемент', 'Может быть газом']
  },
  { 
    atomicNumber: 113, symbol: 'Nh', name: 'Нихоний', mass: '(286)', period: 7, group: 13, block: 'p',
    discoveredBy: 'RIKEN, Япония', yearDiscovered: '2003',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Японии (Nihon)', 'Первый элемент открытый в Азии', 'Искусственный элемент']
  },
  { 
    atomicNumber: 114, symbol: 'Fl', name: 'Флеровий', mass: '(289)', period: 7, group: 14, block: 'p',
    discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '1998',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Георгия Флёрова', 'Искусственный элемент', 'Может быть инертным газом']
  },
  { 
    atomicNumber: 115, symbol: 'Mc', name: 'Московий', mass: '(290)', period: 7, group: 15, block: 'p',
    discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '2003',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Москвы', 'Искусственный элемент', 'Совместно с США']
  },
  { 
    atomicNumber: 116, symbol: 'Lv', name: 'Ливерморий', mass: '(293)', period: 7, group: 16, block: 'p',
    discoveredBy: 'ОИЯИ, Дубна + LLNL', yearDiscovered: '2000',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Ливерморской лаборатории', 'Искусственный элемент', 'Калифорния, США']
  },
  { 
    atomicNumber: 117, symbol: 'Ts', name: 'Теннессин', mass: '(294)', period: 7, group: 17, block: 'p',
    discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '2010',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь штата Теннесси', 'Искусственный элемент', 'Самый тяжёлый галоген']
  },
  { 
    atomicNumber: 118, symbol: 'Og', name: 'Оганесон', mass: '(294)', period: 7, group: 18, block: 'p',
    discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '2002',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Юрия Оганесяна', 'Самый тяжёлый известный элемент', 'Может не быть благородным газом']
  },
  // Лантаноиды (Ce–Lu)
  { 
    atomicNumber: 58, symbol: 'Ce', name: 'Церий', mass: '140.12', period: 6, group: 3, block: 'f',
    discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1803',
    applications: ['Самоподжигающиеся сплавы', 'Стекло', 'Катализаторы', 'Газовые лампы'],
    funFacts: ['Назван в честь астероида Церера', 'Самый распространённый редкоземельный элемент', 'Используется в зажигалках']
  },
  { 
    atomicNumber: 59, symbol: 'Pr', name: 'Празеодим', mass: '140.91', period: 6, group: 3, block: 'f',
    discoveredBy: 'Карл Ауэр фон Вельсбах', yearDiscovered: '1885',
    applications: ['Магниты', 'Стекло', 'Керамика', 'Сварочные маски'],
    funFacts: ['Название от греческого "зелёный близнец"', 'Зелёный цвет стекла', 'Вместе с неодимом назывался дидим']
  },
  { 
    atomicNumber: 60, symbol: 'Nd', name: 'Неодим', mass: '144.24', period: 6, group: 3, block: 'f',
    discoveredBy: 'Карл Ауэр фон Вельсбах', yearDiscovered: '1885',
    applications: ['Мощные магниты', 'Лазеры', 'Наушники', 'Электромобили'],
    funFacts: ['Название от греческого "новый близнец"', 'В самых сильных магнитах', 'В ветрогенераторах']
  },
  { 
    atomicNumber: 61, symbol: 'Pm', name: 'Прометий', mass: '(145)', period: 6, group: 3, block: 'f',
    discoveredBy: 'Чиен Шиунг Ву', yearDiscovered: '1945',
    applications: ['Светящиеся краски', 'Батарейки', 'Толщиномеры'],
    funFacts: ['Назван в честь Прометея', 'Все изотопы радиоактивны', 'Нет стабильных изотопов']
  },
  { 
    atomicNumber: 62, symbol: 'Sm', name: 'Самарий', mass: '150.36', period: 6, group: 3, block: 'f',
    discoveredBy: 'Поль Эмиль Лекок де Буабодран', yearDiscovered: '1879',
    applications: ['Магниты', 'Ракеты', 'Лазеры', 'Медицина'],
    funFacts: ['Назван в честь минерала самарскита', 'В магните SmCo', 'Первый редкоземельный элемент полученный чистым']
  },
  { 
    atomicNumber: 63, symbol: 'Eu', name: 'Европий', mass: '151.96', period: 6, group: 3, block: 'f',
    discoveredBy: 'Эжен Анатоль Демарсе', yearDiscovered: '1901',
    applications: ['Евробанкноты (защита)', 'Светодиоды', 'ТВ экраны', 'Лазеры'],
    funFacts: ['Назван в честь Европы', 'Самый реактивный редкоземельный элемент', 'Красный и синий люминофор']
  },
  { 
    atomicNumber: 64, symbol: 'Gd', name: 'Гадолиний', mass: '157.25', period: 6, group: 3, block: 'f',
    discoveredBy: 'Жан де Мариньяк', yearDiscovered: '1880',
    applications: ['МРТ-контраст', 'Магниты', 'Реакторы', 'Микроволновые печи'],
    funFacts: ['Назван в честь Йохана Гадолина', 'Используется в МРТ', 'Поглощает нейтроны']
  },
  { 
    atomicNumber: 65, symbol: 'Tb', name: 'Тербий', mass: '158.93', period: 6, group: 3, block: 'f',
    discoveredBy: 'Карл Мосандер', yearDiscovered: '1843',
    applications: ['Зелёные люминофоры', 'ТВ экраны', 'Магниты', 'Термостаты'],
    funFacts: ['Назван в честь деревни Иттербю', 'Зелёный цвет в телевизорах', 'Один из 4 элементов из Иттербю']
  },
  { 
    atomicNumber: 66, symbol: 'Dy', name: 'Диспрозий', mass: '162.50', period: 6, group: 3, block: 'f',
    discoveredBy: 'Поль Эмиль Лекок де Буабодран', yearDiscovered: '1886',
    applications: ['Магниты', 'Реакторы', 'Лазеры', 'Жёсткие диски'],
    funFacts: ['Название от греческого "труднодоступный"', 'В неодимовых магнитах', 'Поглощает нейтроны']
  },
  { 
    atomicNumber: 67, symbol: 'Ho', name: 'Гольмий', mass: '164.93', period: 6, group: 3, block: 'f',
    discoveredBy: 'Марк Делафонтен, Жак-Луи Соре', yearDiscovered: '1878',
    applications: ['Лазеры', 'Магниты', 'Медицина', 'Ядерные реакторы'],
    funFacts: ['Назван в честь Стокгольма (Holmia)', 'Самый магнитный элемент', 'Используется в медицинских лазерах']
  },
  { 
    atomicNumber: 68, symbol: 'Er', name: 'Эрбий', mass: '167.26', period: 6, group: 3, block: 'f',
    discoveredBy: 'Карл Мосандер', yearDiscovered: '1843',
    applications: ['Волокно', 'Лазеры', 'Стекло', 'Металлургия'],
    funFacts: ['Назван в честь деревни Иттербю', 'Розовое стекло', 'В оптоволоконном интернете']
  },
  { 
    atomicNumber: 69, symbol: 'Tm', name: 'Тулий', mass: '168.93', period: 6, group: 3, block: 'f',
    discoveredBy: 'Пер Теодор Клеве', yearDiscovered: '1879',
    applications: ['Лазеры', 'Рентген', 'Евробанкноты'],
    funFacts: ['Назван в честь легендарной страны Туле', 'Самый редкий лантаноид', 'В портативных рентгенах']
  },
  { 
    atomicNumber: 70, symbol: 'Yb', name: 'Иттербий', mass: '173.05', period: 6, group: 3, block: 'f',
    discoveredBy: 'Жан де Мариньяк', yearDiscovered: '1878',
    applications: ['Лазеры', 'Стальные сплавы', 'Атомные часы', 'Сейсмометры'],
    funFacts: ['Назван в честь деревни Иттербю', '4-й элемент из этой деревни', 'Используется в геологии']
  },
  { 
    atomicNumber: 71, symbol: 'Lu', name: 'Лютеций', mass: '174.97', period: 6, group: 3, block: 'f',
    discoveredBy: 'Жорж Урбен', yearDiscovered: '1907',
    applications: ['Катализаторы', 'ПЭТ-сканеры', 'Светодиоды'],
    funFacts: ['Назван в честь Парижа (Lutetia)', 'Последний лантаноид', 'Спор об открытии']
  },
  // Актиноиды (Th–Lr)
  { 
    atomicNumber: 90, symbol: 'Th', name: 'Торий', mass: '232.04', period: 7, group: 3, block: 'f',
    discoveredBy: 'Йёнс Якоб Берцелиус', yearDiscovered: '1829',
    applications: ['Газовые мантии', 'Ядерное топливо', 'Сварка', 'Стекло'],
    funFacts: ['Назван в честь Тора', '3-4 раза распространённее урана', 'Потенциальное ядерное топливо']
  },
  { 
    atomicNumber: 91, symbol: 'Pa', name: 'Протактиний', mass: '231.04', period: 7, group: 3, block: 'f',
    discoveredBy: 'Касимир Фаянс, Отто Гёринг', yearDiscovered: '1913',
    applications: ['Только исследования'],
    funFacts: ['Название от греческого "родитель актиния"', 'Очень редкий', 'Высокорадиоактивный']
  },
  { 
    atomicNumber: 92, symbol: 'U', name: 'Уран', mass: '238.03', period: 7, group: 3, block: 'f',
    discoveredBy: 'Мартин Клапрот', yearDiscovered: '1789',
    applications: ['Ядерное топливо', 'Ядерное оружие', 'Бронепробивающие снаряды', 'Радиометрия'],
    funFacts: ['Назван в честь планеты Уран', 'Открыт раньше самой планеты', 'В природе 99.3% U-238']
  },
  { 
    atomicNumber: 93, symbol: 'Np', name: 'Нептуний', mass: '(237)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Эдвин Макмиллан, Филип Абельсон', yearDiscovered: '1940',
    applications: ['Нейтронные детекторы', 'Исследования'],
    funFacts: ['Назван в честь планеты Нептун', 'Первый трансурановый элемент', 'В природе в следовых количествах']
  },
  { 
    atomicNumber: 94, symbol: 'Pu', name: 'Плутоний', mass: '(244)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Гленн Сиборг', yearDiscovered: '1940',
    applications: ['Ядерное оружие', 'Ядерные реакторы', 'Термостаты', 'Космические аппараты'],
    funFacts: ['Назван в честь планеты Плутон', 'В атомной бомбе над Нагасаки', 'Самоподдерживающаяся цепная реакция']
  },
  { 
    atomicNumber: 95, symbol: 'Am', name: 'Америций', mass: '(243)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Гленн Сиборг', yearDiscovered: '1944',
    applications: ['Дымовые детекторы', 'Нейтронные источники', 'Радиография'],
    funFacts: ['Назван в честь Америки', 'В бытовых датчиках дыма', 'Самый распространённый трансуран в мире']
  },
  { 
    atomicNumber: 96, symbol: 'Cm', name: 'Кюрий', mass: '(247)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Гленн Сиборг', yearDiscovered: '1944',
    applications: ['Термогенераторы', 'Рентген', 'Марсоходы'],
    funFacts: ['Назван в честь Марии и Пьера Кюри', 'Испускает много тепла', 'В энергосистемах космических аппаратов']
  },
  { 
    atomicNumber: 97, symbol: 'Bk', name: 'Берклий', mass: '(247)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1949',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Беркли', 'Искусственный элемент', 'Создан в циклотроне']
  },
  { 
    atomicNumber: 98, symbol: 'Cf', name: 'Калифорний', mass: '(251)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1950',
    applications: ['Нейтронные источники', 'Поиск золота/серебра', 'Медицина'],
    funFacts: ['Назван в честь Калифорнии', 'Сильный нейтронный излучатель', 'Используется для поиска руд']
  },
  { 
    atomicNumber: 99, symbol: 'Es', name: 'Эйнштейний', mass: '(252)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1952',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Альберта Эйнштейна', 'Обнаружен в остатках водородной бомбы', 'Всего миллиграммы в год']
  },
  { 
    atomicNumber: 100, symbol: 'Fm', name: 'Фермий', mass: '(257)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1952',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Энрико Ферми', 'Обнаружен в остатках водородной бомбы', 'Нет практического применения']
  },
  { 
    atomicNumber: 101, symbol: 'Md', name: 'Менделевий', mass: '(258)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1955',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Дмитрия Менделеева', 'Создан всего несколько тысяч атомов', 'В честь создателя таблицы']
  },
  { 
    atomicNumber: 102, symbol: 'No', name: 'Нобелий', mass: '(259)', period: 7, group: 3, block: 'f',
    discoveredBy: 'ОИЯИ, Дубна', yearDiscovered: '1966',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Альфреда Нобеля', 'Спор об открытии СССР/США', 'Очень нестабилен']
  },
  { 
    atomicNumber: 103, symbol: 'Lr', name: 'Лоуренсий', mass: '(266)', period: 7, group: 3, block: 'f',
    discoveredBy: 'Лоуренс Беркли Лаборатория', yearDiscovered: '1961',
    applications: ['Только исследования'],
    funFacts: ['Назван в честь Эрнеста Лоуренса', 'Последний актиноид', 'Изобретатель циклотрона']
  },
];

const getBlockColor = (block: Element['block']) => {
  switch (block) {
    case 's': return 'bg-blue-100 border-blue-500 hover:bg-blue-200 text-blue-900';
    case 'p': return 'bg-emerald-100 border-emerald-500 hover:bg-emerald-200 text-emerald-900';
    case 'd': return 'bg-violet-100 border-violet-500 hover:bg-violet-200 text-violet-900';
    case 'f': return 'bg-amber-100 border-amber-500 hover:bg-amber-200 text-amber-900';
  }
};

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
    <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-3xl shadow-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Периодическая таблица элементов</h2>
        
        <input
          type="text"
          placeholder="Поиск по символу или названию..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-80 px-5 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-violet-500 text-lg"
        />
      </div>

      {/* Основная таблица */}
      <div className="relative overflow-x-auto pb-8">
        <div
          className="grid gap-1.5 text-center text-xs font-medium"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(48px, 1fr))',
            gridTemplateRows: 'repeat(7, 68px)',
          }}
        >
          {mainElements.map(el => (
            <div
              key={el.atomicNumber}
              onClick={() => setSelected(el)}
              style={{
                gridColumn: el.group,
                gridRow: el.period,
              }}
              className={`group flex flex-col items-center justify-center border-2 rounded-2xl cursor-pointer transition-all active:scale-95 ${getBlockColor(el.block)} ${
                selected?.atomicNumber === el.atomicNumber ? 'ring-4 ring-violet-500 ring-offset-4 scale-110' : ''
              }`}
            >
              <div className="text-[10px] opacity-70">{el.atomicNumber}</div>
              <div className="text-3xl font-bold mt-0.5 group-hover:scale-110 transition-transform">
                {el.symbol}
              </div>
              <div className="text-[10px] mt-1 leading-none">{el.name}</div>
              <div className="text-[9px] opacity-60 mt-0.5">{el.mass}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Лантаноиды */}
      {lanthanides.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="text-amber-600 font-semibold text-lg">Лантаноиды (Ce–Lu)</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <div className="grid grid-cols-14 gap-1.5">
            {lanthanides.map(el => (
              <div
                key={el.atomicNumber}
                onClick={() => setSelected(el)}
                className={`flex flex-col items-center justify-center border-2 rounded-2xl h-16 cursor-pointer transition-all active:scale-95 ${getBlockColor(el.block)} ${
                  selected?.atomicNumber === el.atomicNumber ? 'ring-4 ring-violet-500 ring-offset-4' : ''
                }`}
              >
                <div className="text-xs opacity-70">{el.atomicNumber}</div>
                <div className="text-2xl font-bold">{el.symbol}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Актиноиды */}
      {actinides.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="text-amber-600 font-semibold text-lg">Актиноиды (Th–Lr)</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <div className="grid grid-cols-14 gap-1.5">
            {actinides.map(el => (
              <div
                key={el.atomicNumber}
                onClick={() => setSelected(el)}
                className={`flex flex-col items-center justify-center border-2 rounded-2xl h-16 cursor-pointer transition-all active:scale-95 ${getBlockColor(el.block)} ${
                  selected?.atomicNumber === el.atomicNumber ? 'ring-4 ring-violet-500 ring-offset-4' : ''
                }`}
              >
                <div className="text-xs opacity-70">{el.atomicNumber}</div>
                <div className="text-2xl font-bold">{el.symbol}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ДЕТАЛЬНАЯ КАРТОЧКА + АНИМИРОВАННЫЙ АТОМ */}
      {selected && (
        <div className="mt-12 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 shadow-inner">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Инфо */}
            <div className="flex-1">
              <div className="flex items-center gap-6">
                <div className="text-8xl font-black text-slate-800 tracking-tighter">{selected.symbol}</div>
                <div>
                  <div className="text-4xl font-bold">{selected.name}</div>
                  <div className="text-2xl text-slate-500">№ {selected.atomicNumber}</div>
                  <div className="text-xl mt-2">Атомная масса: <span className="font-mono">{selected.mass}</span></div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="uppercase text-slate-400 text-xs mb-1">Период</div>
                  <div className="text-3xl font-semibold">{selected.period}</div>
                </div>
                <div>
                  <div className="uppercase text-slate-400 text-xs mb-1">Группа</div>
                  <div className="text-3xl font-semibold">{selected.group}</div>
                </div>
                <div>
                  <div className="uppercase text-slate-400 text-xs mb-1">Блок</div>
                  <div className="inline-block px-5 py-1 rounded-full bg-slate-200 text-slate-700 font-mono text-lg">
                    {selected.block}
                  </div>
                </div>
              </div>

              {/* Открытие элемента */}
              {selected.discoveredBy && (
                <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <span className="text-lg">🔬</span>
                    <span className="font-semibold">Открытие</span>
                  </div>
                  <p className="text-slate-700">
                    <strong>{selected.discoveredBy}</strong>
                    {selected.yearDiscovered && selected.yearDiscovered !== '—' && (
                      <span className="text-slate-500">, {selected.yearDiscovered}</span>
                    )}
                  </p>
                </div>
              )}

              {/* Применение */}
              {selected.applications && selected.applications.length > 0 && (
                <div className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <span className="text-lg">🏭</span>
                    <span className="font-semibold">Применение</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.applications.map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Интересные факты */}
              {selected.funFacts && selected.funFacts.length > 0 && (
                <div className="mt-4 p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-2 text-purple-700 mb-2">
                    <span className="text-lg">💡</span>
                    <span className="font-semibold">Интересные факты</span>
                  </div>
                  <ul className="space-y-2">
                    {selected.funFacts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Анимированный атом */}
            <div className="flex-shrink-0">
              <AtomModel atomicNumber={selected.atomicNumber} symbol={selected.symbol} />
              <div className="text-center text-xs text-slate-400 mt-3">Модель атома (электроны анимированы)</div>
            </div>
          </div>

          <button
            onClick={() => setSelected(null)}
            className="mt-8 w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-black transition-colors"
          >
            Закрыть карточку
          </button>
        </div>
      )}

      <div className="mt-10 text-center text-xs text-slate-400">
        Интерактивная периодическая таблица для ИНЕТШКОЛА • кликай на элементы • данные соответствуют ФГОС
      </div>
    </div>
  );
};

export default PeriodicTable;
