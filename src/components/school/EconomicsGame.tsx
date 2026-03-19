'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, DollarSign, PiggyBank, BarChart3, Briefcase, Coins,
  Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface EconomicsGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type EconomicsCategory = 'basics' | 'money' | 'business' | 'market' | 'finance' | 'banking'

interface EconomicsQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: EconomicsCategory
  difficulty: 1 | 2 | 3
  explanation?: string
  funFact?: string
}

// База вопросов по экономике
const questions: EconomicsQuestion[] = [
  // === ОСНОВЫ ЭКОНОМИКИ (basics) - Лёгкий уровень ===
  {
    question: 'Что такое экономика?',
    correctAnswer: 'Наука о хозяйстве',
    options: ['Наука о хозяйстве', 'Наука о природе', 'Наука о космосе', 'Наука о языке'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Экономика — наука о том, как люди и общества используют ограниченные ресурсы.',
    funFact: 'Слово "экономика" происходит от греческого "oikos" — дом и "nomos" — закон.'
  },
  {
    question: 'Что такое товар?',
    correctAnswer: 'Продукт для продажи',
    options: ['Продукт для продажи', 'Любая вещь', 'Подарок', 'Услуга'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Товар — это продукт труда, созданный для обмена или продажи.',
    funFact: 'Первые товары обменивались без денег — это называлось бартер.'
  },
  {
    question: 'Что такое услуга?',
    correctAnswer: 'Полезная деятельность',
    options: ['Полезная деятельность', 'Вещь для продажи', 'Денежный перевод', 'Налог'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Услуга — это полезная деятельность, результат которой не имеет вещественной формы.',
    funFact: 'Стрижка, ремонт, обучение — всё это услуги!'
  },
  {
    question: 'Кто такой потребитель?',
    correctAnswer: 'Человек, покупающий товары',
    options: ['Человек, покупающий товары', 'Человек, производящий товары', 'Продавец', 'Банкир'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Потребитель — это человек, который покупает и использует товары и услуги.',
    funFact: 'Каждый из нас — потребитель, когда покупаем еду, одежду или услуги.'
  },
  {
    question: 'Что такое производитель?',
    correctAnswer: 'Тот, кто создаёт товары',
    options: ['Тот, кто создаёт товары', 'Тот, кто покупает', 'Тот, кто продаёт', 'Тот, кто потребляет'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Производитель — это человек или предприятие, создающее товары или услуги.',
    funFact: 'Фабрики, заводы, фермы — всё это производители.'
  },
  {
    question: 'Что такое бюджет?',
    correctAnswer: 'План доходов и расходов',
    options: ['План доходов и расходов', 'Только доходы', 'Только расходы', 'Долг'],
    category: 'basics',
    difficulty: 1,
    explanation: 'Бюджет — это план доходов и расходов за определённый период.',
    funFact: 'Бюджет может быть у семьи, города, страны и даже у вас!'
  },
  
  // === ОСНОВЫ ЭКОНОМИКИ - Средний уровень ===
  {
    question: 'Что такое ограниченность ресурсов?',
    correctAnswer: 'Недостаток ресурсов для всех потребностей',
    options: ['Недостаток ресурсов для всех потребностей', 'Полное отсутствие ресурсов', 'Избыток ресурсов', 'Бесплатные ресурсы'],
    category: 'basics',
    difficulty: 2,
    explanation: 'Ресурсы ограничены, а потребности людей безграничны — основная проблема экономики.',
    funFact: 'Даже самые богатые страны мира имеют ограниченные ресурсы!'
  },
  {
    question: 'Что такое ВВП?',
    correctAnswer: 'Стоимость всех товаров и услуг страны',
    options: ['Стоимость всех товаров и услуг страны', 'Государственный бюджет', 'Национальный долг', 'Инфляция'],
    category: 'basics',
    difficulty: 2,
    explanation: 'ВВП (Валовой внутренний продукт) — общая стоимость всех товаров и услуг, произведённых в стране.',
    funFact: 'Самый большой ВВП в мире у США и Китая.'
  },
  {
    question: 'Что такое инфляция?',
    correctAnswer: 'Рост цен на товары',
    options: ['Рост цен на товары', 'Снижение цен', 'Рост зарплат', 'Увеличение производства'],
    category: 'basics',
    difficulty: 2,
    explanation: 'Инфляция — это процесс обесценивания денег, когда цены растут.',
    funFact: 'Небольшая инфляция (2-3% в год) считается нормальной для экономики.'
  },
  {
    question: 'Что такое дефицит?',
    correctAnswer: 'Нехватка товаров',
    options: ['Нехватка товаров', 'Избыток товаров', 'Снижение цен', 'Рост производства'],
    category: 'basics',
    difficulty: 2,
    explanation: 'Дефицит — это нехватка товаров и услуг по сравнению со спросом.',
    funFact: 'В СССР был дефицит многих товаров — люди стояли в очередях.'
  },
  {
    question: 'Что такое экономический рост?',
    correctAnswer: 'Увеличение ВВП страны',
    options: ['Увеличение ВВП страны', 'Рост населения', 'Рост цен', 'Увеличение налогов'],
    category: 'basics',
    difficulty: 2,
    explanation: 'Экономический рост — это увеличение производства товаров и услуг в стране.',
    funFact: 'Экономический рост создаёт новые рабочие места и повышает уровень жизни.'
  },
  
  // === ОСНОВЫ ЭКОНОМИКИ - Сложный уровень ===
  {
    question: 'Что такое альтернативные издержки?',
    correctAnswer: 'Цена упущенных возможностей',
    options: ['Цена упущенных возможностей', 'Затраты на производство', 'Налоговые отчисления', 'Транспортные расходы'],
    category: 'basics',
    difficulty: 3,
    explanation: 'Альтернативные издержки — это то, от чего приходится отказаться, выбирая один вариант.',
    funFact: 'Выбирая учиться или работать, вы теряете возможность заработать или получить знания.'
  },
  {
    question: 'Что такое экономический цикл?',
    correctAnswer: 'Периодические подъёмы и спады экономики',
    options: ['Периодические подъёмы и спады экономики', 'Годовой отчёт предприятия', 'Налоговый период', 'Срок действия лицензии'],
    category: 'basics',
    difficulty: 3,
    explanation: 'Экономический цикл — это колебания экономики от роста к спаду и обратно.',
    funFact: 'Экономические кризисы происходят примерно каждые 10-15 лет.'
  },
  {
    question: 'Что такое разделение труда?',
    correctAnswer: 'Специализация работников',
    options: ['Специализация работников', 'Разделение прибыли', 'Распределение налогов', 'Разделение бюджета'],
    category: 'basics',
    difficulty: 3,
    explanation: 'Разделение труда — это специализация работников на определённых операциях.',
    funFact: 'Благодаря разделению труда производство стало намного эффективнее!'
  },
  
  // === ДЕНЬГИ (money) - Лёгкий уровень ===
  {
    question: 'Какие деньги используются в России?',
    correctAnswer: 'Рубли',
    options: ['Рубли', 'Доллары', 'Евро', 'Гривны'],
    category: 'money',
    difficulty: 1,
    explanation: 'Официальная валюта Российской Федерации — российский рубль.',
    funFact: 'Рубль — одна из старейших валют мира, ей более 700 лет!'
  },
  {
    question: 'Для чего нужны деньги?',
    correctAnswer: 'Для обмена товаров',
    options: ['Для обмена товаров', 'Для украшения', 'Для коллекционирования', 'Для отопления'],
    category: 'money',
    difficulty: 1,
    explanation: 'Деньги — это всеобщий эквивалент, позволяющий обменивать товары и услуги.',
    funFact: 'Раньше вместо денег использовали ракушки, шкуры, соль и даже шоколад!'
  },
  {
    question: 'Что изображено на монете 1 рубль?',
    correctAnswer: 'Двуглавый орёл',
    options: ['Двуглавый орёл', 'Президент', 'Карта России', 'Кремль'],
    category: 'money',
    difficulty: 1,
    explanation: 'На российских монетах изображён двуглавый орёл — герб России.',
    funFact: 'Двуглавый орёл символизирует единство Европы и Азии в России.'
  },
  {
    question: 'Какая валюта используется в странах Евросоюза?',
    correctAnswer: 'Евро',
    options: ['Евро', 'Доллар', 'Рубль', 'Фунт'],
    category: 'money',
    difficulty: 1,
    explanation: 'Евро — официальная валюта большинства стран Европейского союза.',
    funFact: 'Евро используют более 340 миллионов человек ежедневно!'
  },
  {
    question: 'Какая валюта США?',
    correctAnswer: 'Доллар',
    options: ['Доллар', 'Евро', 'Фунт', 'Йена'],
    category: 'money',
    difficulty: 1,
    explanation: 'Доллар США — национальная валюта Соединённых Штатов Америки.',
    funFact: 'Доллар — самая распространённая валюта в мире!'
  },
  {
    question: 'Что такое копейка?',
    correctAnswer: '1/100 рубля',
    options: ['1/100 рубля', '1/10 рубля', '1/50 рубля', '1 рубль'],
    category: 'money',
    difficulty: 1,
    explanation: 'Копейка — это сотая часть рубля. 100 копеек = 1 рубль.',
    funFact: 'Копейка получила название от копья всадника на монете.'
  },
  
  // === ДЕНЬГИ - Средний уровень ===
  {
    question: 'Что такое курс валют?',
    correctAnswer: 'Соотношение валют разных стран',
    options: ['Соотношение валют разных стран', 'Цена золота', 'Ставка налога', 'Размер зарплаты'],
    category: 'money',
    difficulty: 2,
    explanation: 'Курс валют — это цена одной валюты, выраженная в другой валюте.',
    funFact: 'Курсы валют постоянно меняются из-за спроса и предложения.'
  },
  {
    question: 'Что такое электронные деньги?',
    correctAnswer: 'Деньги в цифровом виде',
    options: ['Деньги в цифровом виде', 'Монеты из электрона', 'Банковские карты', 'Кредиты'],
    category: 'money',
    difficulty: 2,
    explanation: 'Электронные деньги — это цифровой аналог наличных, хранящийся на устройстве.',
    funFact: 'Примеры: Яндекс.Деньги, Qiwi, PayPal, криптовалюты.'
  },
  {
    question: 'Что такое биткоин?',
    correctAnswer: 'Криптовалюта',
    options: ['Криптовалюта', 'Новая монета', 'Компьютерная игра', 'Название банка'],
    category: 'money',
    difficulty: 2,
    explanation: 'Биткоин — первая и самая известная криптовалюта, созданная в 2009 году.',
    funFact: 'Биткоин создал неизвестный программист под псевдонимом Сатоши Накамото.'
  },
  {
    question: 'Что такое зарплата?',
    correctAnswer: 'Оплата за труд',
    options: ['Оплата за труд', 'Подарок', 'Налог', 'Кредит'],
    category: 'money',
    difficulty: 2,
    explanation: 'Зарплата — это вознаграждение за выполненную работу.',
    funFact: 'В России минимальный размер оплаты труда (МРОТ) установлен законом.'
  },
  {
    question: 'Что такое валютный резерв?',
    correctAnswer: 'Запас иностранной валюты',
    options: ['Запас иностранной валюты', 'Запас продовольствия', 'Золотой запас', 'Резерв рабочих мест'],
    category: 'money',
    difficulty: 2,
    explanation: 'Валютные резервы — запасы иностранной валюты у государства.',
    funFact: 'Россия имеет одни из крупнейших золотых резервов в мире!'
  },
  
  // === ДЕНЬГИ - Сложный уровень ===
  {
    question: 'Что такое денежная масса?',
    correctAnswer: 'Все деньги в обращении',
    options: ['Все деньги в обращении', 'Только наличные', 'Только безнал', 'Золотовалютные резервы'],
    category: 'money',
    difficulty: 3,
    explanation: 'Денежная масса — это совокупность всех денег в экономике страны.',
    funFact: 'Центральный банк управляет денежной массой для контроля инфляции.'
  },
  {
    question: 'Что такое девальвация?',
    correctAnswer: 'Снижение курса национальной валюты',
    options: ['Снижение курса национальной валюты', 'Рост курса валюты', 'Отмена валюты', 'Введение новой валюты'],
    category: 'money',
    difficulty: 3,
    explanation: 'Девальвация — официальное снижение курса национальной валюты.',
    funFact: 'Девальвация делает импорт дороже, а экспорт дешевле.'
  },
  {
    question: 'Что такое деноминация?',
    correctAnswer: 'Укрупнение национальной валюты',
    options: ['Укрупнение национальной валюты', 'Отмена денег', 'Замена валюты', 'Печать новых денег'],
    category: 'money',
    difficulty: 3,
    explanation: 'Деноминация — это уменьшение номинала денежных знаков.',
    funFact: 'В России деноминация была в 1998 году: 1000 старых рублей = 1 новый.'
  },
  
  // === БИЗНЕС (business) - Лёгкий уровень ===
  {
    question: 'Что такое бизнес?',
    correctAnswer: 'Деятельность для получения прибыли',
    options: ['Деятельность для получения прибыли', 'Работа на заводе', 'Государственная служба', 'Хобби'],
    category: 'business',
    difficulty: 1,
    explanation: 'Бизнес — это деятельность, направленная на получение прибыли.',
    funFact: 'Самый молодой миллиардер в мире начал бизнес в 19 лет!'
  },
  {
    question: 'Кто такой предприниматель?',
    correctAnswer: 'Человек, начинающий своё дело',
    options: ['Человек, начинающий своё дело', 'Наемный работник', 'Чиновник', 'Военный'],
    category: 'business',
    difficulty: 1,
    explanation: 'Предприниматель — это человек, который организует и ведёт свой бизнес.',
    funFact: 'Илон Маск, Билл Гейтс, Марк Цукерберг — известные предприниматели.'
  },
  {
    question: 'Что такое прибыль?',
    correctAnswer: 'Доход минус расходы',
    options: ['Доход минус расходы', 'Все деньги компании', 'Зарплата работников', 'Налоги'],
    category: 'business',
    difficulty: 1,
    explanation: 'Прибыль — это разница между доходами и расходами бизнеса.',
    funFact: 'Если расходы больше доходов — это убыток.'
  },
  {
    question: 'Что такое реклама?',
    correctAnswer: 'Информация о товарах',
    options: ['Информация о товарах', 'Скидки', 'Налог', 'Кредит'],
    category: 'business',
    difficulty: 1,
    explanation: 'Реклама — это информация о товарах и услугах для привлечения покупателей.',
    funFact: 'Самая дорогая реклама в мире стоила 33 миллиона долларов!'
  },
  {
    question: 'Что такое магазин?',
    correctAnswer: 'Место продажи товаров',
    options: ['Место продажи товаров', 'Склад', 'Производство', 'Офис'],
    category: 'business',
    difficulty: 1,
    explanation: 'Магазин — это помещение для розничной продажи товаров покупателям.',
    funFact: 'Первый супермаркет открылся в США в 1916 году.'
  },
  
  // === БИЗНЕС - Средний уровень ===
  {
    question: 'Что такое стартап?',
    correctAnswer: 'Новый бизнес-проект',
    options: ['Новый бизнес-проект', 'Старая компания', 'Филиал банка', 'Государственное предприятие'],
    category: 'business',
    difficulty: 2,
    explanation: 'Стартап — это недавно созданная компания с инновационной идеей.',
    funFact: 'Google, Apple, Amazon — все начинались как стартапы!'
  },
  {
    question: 'Что такое конкурент?',
    correctAnswer: 'Соперник в бизнесе',
    options: ['Соперник в бизнесе', 'Партнёр', 'Клиент', 'Поставщик'],
    category: 'business',
    difficulty: 2,
    explanation: 'Конкурент — это компания, работающая в той же сфере и соперничающая за клиентов.',
    funFact: 'Конкуренция заставляет компании улучшать качество и снижать цены.'
  },
  {
    question: 'Что такое франшиза?',
    correctAnswer: 'Право использовать бренд',
    options: ['Право использовать бренд', 'Налог на бизнес', 'Лицензия на продажу', 'Банковский кредит'],
    category: 'business',
    difficulty: 2,
    explanation: 'Франшиза — это право использовать известный бренд и бизнес-модель за плату.',
    funFact: 'Макдоналдс, Subway, Пятёрочка — примеры франшиз.'
  },
  {
    question: 'Что такое логотип?',
    correctAnswer: 'Знак компании',
    options: ['Знак компании', 'Девиз компании', 'Адрес компании', 'Налоговый номер'],
    category: 'business',
    difficulty: 2,
    explanation: 'Логотип — это графический знак, символ компании или бренда.',
    funFact: 'Логотип Apple (надкусанное яблоко) знают во всём мире!'
  },
  {
    question: 'Что такое бренд?',
    correctAnswer: 'Торговая марка',
    options: ['Торговая марка', 'Вид налога', 'Тип контракта', 'Банковский счёт'],
    category: 'business',
    difficulty: 2,
    explanation: 'Бренд — это торговая марка с уникальным имиджем и репутацией.',
    funFact: 'Самый дорогой бренд в мире — Apple, стоимостью около 500 млрд долларов!'
  },
  
  // === БИЗНЕС - Сложный уровень ===
  {
    question: 'Что такое банкротство?',
    correctAnswer: 'Неспособность платить по долгам',
    options: ['Неспособность платить по долгам', 'Закрытие бизнеса', 'Продажа компании', 'Слияние компаний'],
    category: 'business',
    difficulty: 3,
    explanation: 'Банкротство — это признанная судом неспособность должника погасить долги.',
    funFact: 'В некоторых странах банкротство даёт шанс начать всё сначала.'
  },
  {
    question: 'Что такое акция?',
    correctAnswer: 'Доля в компании',
    options: ['Доля в компании', 'Кредит', 'Налог', 'Скидка'],
    category: 'business',
    difficulty: 3,
    explanation: 'Акция — это ценная бумага, подтверждающая владение частью компании.',
    funFact: 'Владельцы акций получают дивиденды — часть прибыли компании.'
  },
  {
    question: 'Что такое дивиденды?',
    correctAnswer: 'Часть прибыли компании',
    options: ['Часть прибыли компании', 'Зарплата работников', 'Налоги', 'Кредиты'],
    category: 'business',
    difficulty: 3,
    explanation: 'Дивиденды — это выплаты владельцам акций из прибыли компании.',
    funFact: 'Не все компании платят дивиденды — некоторые реинвестируют прибыль.'
  },
  
  // === РЫНОК (market) - Лёгкий уровень ===
  {
    question: 'Что такое рынок?',
    correctAnswer: 'Место купли-продажи',
    options: ['Место купли-продажи', 'Место производства', 'Место хранения', 'Место отдыха'],
    category: 'market',
    difficulty: 1,
    explanation: 'Рынок — это место или система, где совершаются сделки купли-продажи.',
    funFact: 'Раньше рынки были только физическими местами, теперь есть онлайн-рынки.'
  },
  {
    question: 'Что такое спрос?',
    correctAnswer: 'Желание купить товар',
    options: ['Желание купить товар', 'Количество товара', 'Цена товара', 'Качество товара'],
    category: 'market',
    difficulty: 1,
    explanation: 'Спрос — это желание и возможность покупателей купить товар по определённой цене.',
    funFact: 'Чем ниже цена — тем выше спрос на товар!'
  },
  {
    question: 'Что такое предложение?',
    correctAnswer: 'Количество товара для продажи',
    options: ['Количество товара для продажи', 'Количество покупателей', 'Скидки', 'Реклама'],
    category: 'market',
    difficulty: 1,
    explanation: 'Предложение — это количество товаров, которое продавцы готовы продать.',
    funFact: 'Чем выше цена — тем больше предложение товара.'
  },
  {
    question: 'Что такое цена?',
    correctAnswer: 'Стоимость товара',
    options: ['Стоимость товара', 'Вес товара', 'Размер товара', 'Цвет товара'],
    category: 'market',
    difficulty: 1,
    explanation: 'Цена — это денежное выражение стоимости товара.',
    funFact: 'Цены определяются соотношением спроса и предложения.'
  },
  {
    question: 'Что такое скидка?',
    correctAnswer: 'Снижение цены',
    options: ['Снижение цены', 'Повышение цены', 'Подарок', 'Налог'],
    category: 'market',
    difficulty: 1,
    explanation: 'Скидка — это временное снижение цены на товар для привлечения покупателей.',
    funFact: 'Чёрная пятница — день самых больших скидок в году!'
  },
  
  // === РЫНОК - Средний уровень ===
  {
    question: 'Что такое равновесная цена?',
    correctAnswer: 'Цена, где спрос равен предложению',
    options: ['Цена, где спрос равен предложению', 'Максимальная цена', 'Минимальная цена', 'Средняя цена'],
    category: 'market',
    difficulty: 2,
    explanation: 'Равновесная цена — цена, при которой спрос равен предложению.',
    funFact: 'На рынке достигается равновесие, когда все товары проданы.'
  },
  {
    question: 'Что такое монополия?',
    correctAnswer: 'Один продавец на рынке',
    options: ['Один продавец на рынке', 'Много продавцов', 'Много покупателей', 'Отсутствие цен'],
    category: 'market',
    difficulty: 2,
    explanation: 'Монополия — ситуация, когда на рынке есть только один продавец товара.',
    funFact: 'Монополии часто устанавливают высокие цены из-за отсутствия конкуренции.'
  },
  {
    question: 'Что такое олигополия?',
    correctAnswer: 'Несколько крупных продавцов',
    options: ['Несколько крупных продавцов', 'Один продавец', 'Много мелких продавцов', 'Отсутствие продавцов'],
    category: 'market',
    difficulty: 2,
    explanation: 'Олигополия — рынок, где доминирует несколько крупных компаний.',
    funFact: 'Примеры: автомобильный рынок, рынок смартфонов, авиаперевозки.'
  },
  {
    question: 'Что такое маркетинг?',
    correctAnswer: 'Продвижение товаров',
    options: ['Продвижение товаров', 'Производство товаров', 'Хранение товаров', 'Доставка товаров'],
    category: 'market',
    difficulty: 2,
    explanation: 'Маркетинг — это деятельность по продвижению и продаже товаров.',
    funFact: 'Маркетологи изучают потребности покупателей для создания успешных продуктов.'
  },
  {
    question: 'Что такое целевая аудитория?',
    correctAnswer: 'Потенциальные покупатели',
    options: ['Потенциальные покупатели', 'Все люди', 'Сотрудники компании', 'Конкуренты'],
    category: 'market',
    difficulty: 2,
    explanation: 'Целевая аудитория — группа людей, которым предназначен товар.',
    funFact: 'Детские игрушки рекламируют родителям, а не детям!'
  },
  
  // === РЫНОК - Сложный уровень ===
  {
    question: 'Что такое эластичность спроса?',
    correctAnswer: 'Реакция спроса на изменение цены',
    options: ['Реакция спроса на изменение цены', 'Гибкость товара', 'Качество товара', 'Срок годности'],
    category: 'market',
    difficulty: 3,
    explanation: 'Эластичность показывает, как сильно меняется спрос при изменении цены.',
    funFact: 'На лекарства спрос неэластичен — люди покупают независимо от цены.'
  },
  {
    question: 'Что такое рыночная экономика?',
    correctAnswer: 'Экономика свободного рынка',
    options: ['Экономика свободного рынка', 'Плановая экономика', 'Натуральное хозяйство', 'Командная экономика'],
    category: 'market',
    difficulty: 3,
    explanation: 'Рыночная экономика — система, где цены и производство регулируются рынком.',
    funFact: 'В рыночной экономике решения принимают миллионы независимых людей.'
  },
  
  // === ФИНАНСЫ (finance) - Лёгкий уровень ===
  {
    question: 'Что такое финансы?',
    correctAnswer: 'Денежные средства',
    options: ['Денежные средства', 'Товары', 'Услуги', 'Оборудование'],
    category: 'finance',
    difficulty: 1,
    explanation: 'Финансы — это денежные средства и их движение.',
    funFact: 'Слово "финансы" происходит от французского "financer" — оплачивать.'
  },
  {
    question: 'Что такое кредит?',
    correctAnswer: 'Денежный займ',
    options: ['Денежный займ', 'Подарок', 'Зарплата', 'Налог'],
    category: 'finance',
    difficulty: 1,
    explanation: 'Кредит — это деньги, которые банк даёт в долг под проценты.',
    funFact: 'За кредит нужно платить проценты — это цена займа.'
  },
  {
    question: 'Что такое вклад?',
    correctAnswer: 'Деньги на хранении в банке',
    options: ['Деньги на хранении в банке', 'Кредит', 'Налог', 'Зарплата'],
    category: 'finance',
    difficulty: 1,
    explanation: 'Вклад — это деньги, которые вы храните в банке под проценты.',
    funFact: 'Банк платит вам проценты за то, что храните у него деньги!'
  },
  {
    question: 'Что такое налог?',
    correctAnswer: 'Платёж государству',
    options: ['Платёж государству', 'Платёж магазину', 'Платёж банку', 'Подарок'],
    category: 'finance',
    difficulty: 1,
    explanation: 'Налог — это обязательный платёж в пользу государства.',
    funFact: 'Налоги идут на школы, больницы, дороги и армию.'
  },
  {
    question: 'Что такое пенсия?',
    correctAnswer: 'Выплаты пожилым людям',
    options: ['Выплаты пожилым людям', 'Зарплата', 'Пособие по безработице', 'Стипендия'],
    category: 'finance',
    difficulty: 1,
    explanation: 'Пенсия — это ежемесячные выплаты людям после выхода на пенсию.',
    funFact: 'Пенсионный возраст в России: 60 лет для женщин, 65 для мужчин.'
  },
  
  // === ФИНАНСЫ - Средний уровень ===
  {
    question: 'Что такое инвестиции?',
    correctAnswer: 'Вложение денег для прибыли',
    options: ['Вложение денег для прибыли', 'Потраты денег', 'Хранение денег', 'Кредит'],
    category: 'finance',
    difficulty: 2,
    explanation: 'Инвестиции — это вложение денег с целью получения дохода.',
    funFact: 'Инвестировать можно в акции, недвижимость, бизнес, золото.'
  },
  {
    question: 'Что такое страхование?',
    correctAnswer: 'Защита от финансовых рисков',
    options: ['Защита от финансовых рисков', 'Налог', 'Кредит', 'Вклад'],
    category: 'finance',
    difficulty: 2,
    explanation: 'Страхование — это защита от возможных убытков за плату.',
    funFact: 'Страховка может быть на автомобиль, квартиру, здоровье, жизнь.'
  },
  {
    question: 'Что такое ипотека?',
    correctAnswer: 'Кредит на покупку жилья',
    options: ['Кредит на покупку жилья', 'Налог на жильё', 'Аренда жилья', 'Страховка жилья'],
    category: 'finance',
    difficulty: 2,
    explanation: 'Ипотека — это кредит на покупку недвижимости под залог этой недвижимости.',
    funFact: 'Ипотека — один из самых долгих кредитов, до 30 лет!'
  },
  {
    question: 'Что такое брокер?',
    correctAnswer: 'Посредник при сделках',
    options: ['Посредник при сделках', 'Банкир', 'Налоговый инспектор', 'Страховой агент'],
    category: 'finance',
    difficulty: 2,
    explanation: 'Брокер — это посредник между покупателем и продавцом на бирже.',
    funFact: 'Брокеры помогают покупать и продавать акции и другие ценные бумаги.'
  },
  {
    question: 'Что такое ценные бумаги?',
    correctAnswer: 'Документы, подтверждающие права',
    options: ['Документы, подтверждающие права', 'Бумажные деньги', 'Чеки', 'Квитанции'],
    category: 'finance',
    difficulty: 2,
    explanation: 'Ценные бумаги — документы, подтверждающие право на имущество или доход.',
    funFact: 'Акции, облигации, векселя — всё это ценные бумаги.'
  },
  
  // === ФИНАНСЫ - Сложный уровень ===
  {
    question: 'Что такое портфельные инвестиции?',
    correctAnswer: 'Инвестиции в разные активы',
    options: ['Инвестиции в разные активы', 'Покупка одного актива', 'Банковский вклад', 'Недвижимость'],
    category: 'finance',
    difficulty: 3,
    explanation: 'Портфельные инвестиции — вложения в несколько разных активов для снижения риска.',
    funFact: 'Не кладите все яйца в одну корзину — принцип портфельных инвестиций.'
  },
  {
    question: 'Что такое капитализация процентов?',
    correctAnswer: 'Начисление процентов на проценты',
    options: ['Начисление процентов на проценты', 'Удвоение вклада', 'Снятие процентов', 'Налог на проценты'],
    category: 'finance',
    difficulty: 3,
    explanation: 'Капитализация — когда проценты прибавляются к вкладу и тоже приносят доход.',
    funFact: 'Капитализация позволяет вкладу расти быстрее!'
  },
  
  // === БАНКОВСКОЕ ДЕЛО (banking) - Лёгкий уровень ===
  {
    question: 'Что такое банк?',
    correctAnswer: 'Финансовая организация',
    options: ['Финансовая организация', 'Магазин', 'Школа', 'Больница'],
    category: 'banking',
    difficulty: 1,
    explanation: 'Банк — это финансовая организация, которая принимает вклады и выдаёт кредиты.',
    funFact: 'Первые банки появились в Италии в средние века.'
  },
  {
    question: 'Что такое банковская карта?',
    correctAnswer: 'Платёжный инструмент',
    options: ['Платёжный инструмент', 'Кредитная карта', 'Дисконтная карта', 'Библиотечная карта'],
    category: 'banking',
    difficulty: 1,
    explanation: 'Банковская карта — это инструмент для безналичной оплаты товаров и услуг.',
    funFact: 'Первая банковская карта была бумажной, а не пластиковой!'
  },
  {
    question: 'Что такое банкомат?',
    correctAnswer: 'Устройство для снятия денег',
    options: ['Устройство для снятия денег', 'Автомат для газировки', 'Торговый автомат', 'Касса'],
    category: 'banking',
    difficulty: 1,
    explanation: 'Банкомат — это устройство для снятия наличных с банковской карты.',
    funFact: 'Первый банкомат установлен в Лондоне в 1967 году.'
  },
  {
    question: 'Что такое PIN-код?',
    correctAnswer: 'Пароль для карты',
    options: ['Пароль для карты', 'Номер карты', 'Название банка', 'Тип карты'],
    category: 'banking',
    difficulty: 1,
    explanation: 'PIN-код — это секретный код из 4 цифр для доступа к банковской карте.',
    funFact: 'PIN означает Personal Identification Number — личный идентификационный номер.'
  },
  
  // === БАНКОВСКОЕ ДЕЛО - Средний уровень ===
  {
    question: 'Что такое Центральный банк?',
    correctAnswer: 'Главный банк страны',
    options: ['Главный банк страны', 'Самый большой банк', 'Банк для бедных', 'Банк для богатых'],
    category: 'banking',
    difficulty: 2,
    explanation: 'Центральный банк — главный банк страны, регулирующий всю банковскую систему.',
    funFact: 'В России это Банк России (Центробанк).'
  },
  {
    question: 'Что такое процентная ставка?',
    correctAnswer: 'Цена кредита или вклада',
    options: ['Цена кредита или вклада', 'Количество клиентов', 'Размер банка', 'Количество филиалов'],
    category: 'banking',
    difficulty: 2,
    explanation: 'Процентная ставка — это плата за кредит или доход по вкладу в процентах.',
    funFact: 'Ключевая ставка ЦБ влияет на все ставки в экономике.'
  },
  {
    question: 'Что такое дебетовая карта?',
    correctAnswer: 'Карта с собственными деньгами',
    options: ['Карта с собственными деньгами', 'Кредитная карта', 'Зарплатная карта', 'Подарочная карта'],
    category: 'banking',
    difficulty: 2,
    explanation: 'Дебетовая карта — карта, с которой можно тратить только свои деньги.',
    funFact: 'Дебетовые карты безопаснее кредитных — невозможно уйти в долг.'
  },
  {
    question: 'Что такое кредитная карта?',
    correctAnswer: 'Карта с деньгами банка',
    options: ['Карта с деньгами банка', 'Карта с зарплатой', 'Скидочная карта', 'Транспортная карта'],
    category: 'banking',
    difficulty: 2,
    explanation: 'Кредитная карта позволяет тратить деньги банка в долг под проценты.',
    funFact: 'У кредитных карт есть льготный период, когда проценты не начисляются.'
  },
  {
    question: 'Что такое банковский перевод?',
    correctAnswer: 'Перемещение денег между счетами',
    options: ['Перемещение денег между счетами', 'Доставка наличных', 'Обмен валюты', 'Снятие денег'],
    category: 'banking',
    difficulty: 2,
    explanation: 'Банковский перевод — это безналичное перемещение денег между счетами.',
    funFact: 'Современные переводы доходят за секунды!'
  },
  
  // === БАНКОВСКОЕ ДЕЛО - Сложный уровень ===
  {
    question: 'Что такое ключевая ставка?',
    correctAnswer: 'Ставка Центрального банка',
    options: ['Ставка Центрального банка', 'Самая низкая ставка', 'Самая высокая ставка', 'Средняя ставка'],
    category: 'banking',
    difficulty: 3,
    explanation: 'Ключевая ставка — это ставка, по которой ЦБ даёт кредиты коммерческим банкам.',
    funFact: 'Ключевая ставка — главный инструмент борьбы с инфляцией.'
  },
  {
    question: 'Что такое депозит?',
    correctAnswer: 'Банковский вклад',
    options: ['Банковский вклад', 'Кредит', 'Налог', 'Штраф'],
    category: 'banking',
    difficulty: 3,
    explanation: 'Депозит — это деньги, размещённые в банке на определённый срок под проценты.',
    funFact: 'Депозиты застрахованы государством на сумму до 1,4 млн рублей.'
  },
  {
    question: 'Что такое SWIFT-перевод?',
    correctAnswer: 'Международный банковский перевод',
    options: ['Международный банковский перевод', 'Мгновенный перевод', 'Бесплатный перевод', 'Наличный перевод'],
    category: 'banking',
    difficulty: 3,
    explanation: 'SWIFT — система международных банковских переводов между странами.',
    funFact: 'SWIFT объединяет более 11 000 банков в 200 странах мира.'
  }
]

// Категории с иконками и цветами
const categoryConfig: Record<EconomicsCategory, { name: string; icon: React.ElementType; color: string }> = {
  basics: { name: 'Основы экономики', icon: TrendingUp, color: 'from-blue-400 to-cyan-500' },
  money: { name: 'Деньги', icon: Coins, color: 'from-yellow-400 to-orange-500' },
  business: { name: 'Бизнес', icon: Briefcase, color: 'from-purple-400 to-violet-500' },
  market: { name: 'Рынок', icon: BarChart3, color: 'from-green-400 to-emerald-500' },
  finance: { name: 'Финансы', icon: DollarSign, color: 'from-emerald-400 to-teal-500' },
  banking: { name: 'Банковское дело', icon: PiggyBank, color: 'from-indigo-400 to-purple-500' }
}

// Настройки уровней сложности
const difficultySettings = {
  1: { questionsCount: 8, timeLimit: 0, xp: 90, name: 'Лёгкий (6-7 класс)' },
  2: { questionsCount: 12, timeLimit: 30, xp: 120, name: 'Средний (8-9 класс + ОГЭ)' },
  3: { questionsCount: 15, timeLimit: 25, xp: 150, name: 'Сложный (10-11 класс + ЕГЭ)' }
}

export default function EconomicsGame({ gradeId = 7, onExperience }: EconomicsGameProps) {
  const { playSound } = useSound()
  
  const [gameState, setGameState] = useState<'menu' | 'category' | 'playing' | 'result'>('menu')
  const [selectedCategory, setSelectedCategory] = useState<EconomicsCategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState<1 | 2 | 3>(1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [lives, setLives] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [gameQuestions, setGameQuestions] = useState<EconomicsQuestion[]>([])
  
  // Фильтрация и выборка вопросов
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return questions
    return questions.filter(q => q.category === selectedCategory)
  }, [selectedCategory])
  
  const startGame = useCallback((diff: 1 | 2 | 3, category: EconomicsCategory | 'all') => {
    const settings = difficultySettings[diff]
    setSelectedCategory(category)
    setDifficulty(diff)
    
    // Фильтруем вопросы по категории и сложности
    let availableQuestions = category === 'all' 
      ? questions 
      : questions.filter(q => q.category === category)
    
    // Для каждого уровня сложности берём соответствующие вопросы
    const easyQuestions = availableQuestions.filter(q => q.difficulty === 1)
    const mediumQuestions = availableQuestions.filter(q => q.difficulty === 2)
    const hardQuestions = availableQuestions.filter(q => q.difficulty === 3)
    
    // Смешиваем вопросы в зависимости от сложности
    let selectedQuestions: EconomicsQuestion[] = []
    
    if (diff === 1) {
      selectedQuestions = [...easyQuestions]
    } else if (diff === 2) {
      selectedQuestions = [...easyQuestions.slice(0, 4), ...mediumQuestions]
    } else {
      selectedQuestions = [...easyQuestions.slice(0, 3), ...mediumQuestions.slice(0, 4), ...hardQuestions]
    }
    
    // Перемешиваем и берём нужное количество
    const shuffled = selectedQuestions.sort(() => Math.random() - 0.5)
    setGameQuestions(shuffled.slice(0, settings.questionsCount))
    
    setCurrentQuestionIndex(0)
    setScore(0)
    setCorrectAnswers(0)
    setLives(3)
    setStreak(0)
    setTimeLeft(settings.timeLimit)
    setGameState('playing')
    setSelectedAnswer(null)
    setShowResult(false)
  }, [])
  
  // Таймер
  useEffect(() => {
    if (gameState !== 'playing' || difficultySettings[difficulty].timeLimit === 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null)
          return difficultySettings[difficulty].timeLimit
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameState, currentQuestionIndex, difficulty])
  
  const endGame = useCallback(() => {
    const settings = difficultySettings[difficulty]
    const percentage = correctAnswers / gameQuestions.length
    const earnedXp = Math.round(settings.xp * percentage)
    
    onExperience?.(earnedXp)
    playSound('win')
    setGameState('result')
  }, [difficulty, correctAnswers, gameQuestions.length, onExperience, playSound])
  
  const handleAnswer = useCallback((answer: string | null) => {
    if (showResult || selectedAnswer) return
    
    setSelectedAnswer(answer)
    setShowResult(true)
    
    const currentQuestion = gameQuestions[currentQuestionIndex]
    const isCorrect = answer === currentQuestion.correctAnswer
    
    if (isCorrect) {
      playSound('success')
      setCorrectAnswers(prev => prev + 1)
      setStreak(prev => prev + 1)
      const bonus = streak >= 3 ? 10 : 0
      setScore(prev => prev + 10 + bonus)
      playSound('levelUp')
    } else {
      playSound('error')
      setStreak(0)
      setLives(prev => prev - 1)
      if (lives <= 1) {
        setTimeout(() => endGame(), 1500)
        return
      }
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < gameQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(difficultySettings[difficulty].timeLimit)
      } else {
        endGame()
      }
    }, 2000)
  }, [showResult, selectedAnswer, gameQuestions, currentQuestionIndex, streak, lives, difficulty, playSound, endGame])
  
  // Рендер меню выбора категории
  if (gameState === 'menu') {
    return (
      <div className="space-y-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-green-400" />
            Экономика
          </h2>
          <p className="text-gray-400">Проверь знания по экономике и финансам!</p>
        </motion.div>
        
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              Выбери уровень сложности
            </h3>
            <div className="grid gap-3">
              {[1, 2, 3].map((diff) => (
                <motion.div
                  key={diff}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => startGame(diff as 1 | 2 | 3, 'all')}
                    className={`w-full justify-between py-6 ${
                      diff === 1 ? 'bg-green-500 hover:bg-green-600' :
                      diff === 2 ? 'bg-yellow-500 hover:bg-yellow-600' :
                      'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    <span className="font-bold">{difficultySettings[diff as 1|2|3].name}</span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {difficultySettings[diff as 1|2|3].xp} XP
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Или выбери категорию
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setGameState('category')}
                    className={`w-full py-4 bg-gradient-to-r ${config.color}`}
                  >
                    <config.icon className="w-5 h-5 mr-2" />
                    {config.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  // Рендер выбора категории
  if (gameState === 'category') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setGameState('menu')}>
          ← Назад
        </Button>
        
        <h2 className="text-xl font-bold text-center">Выбери категорию</h2>
        
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => startGame(difficulty, 'all')}
              className="w-full py-8 bg-gradient-to-r from-gray-500 to-gray-600 text-lg"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Все категории
            </Button>
          </motion.div>
          
          {Object.entries(categoryConfig).map(([key, config]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => startGame(difficulty, key as EconomicsCategory)}
                className={`w-full py-6 bg-gradient-to-r ${config.color}`}
              >
                <config.icon className="w-5 h-5 mr-3" />
                {config.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
  
  // Рендер игрового процесса
  if (gameState === 'playing') {
    const currentQuestion = gameQuestions[currentQuestionIndex]
    if (!currentQuestion) return null
    
    const config = categoryConfig[currentQuestion.category]
    
    return (
      <div className="space-y-4">
        {/* Статистика */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  className={`w-6 h-6 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">{score}</span>
            </div>
            {streak >= 2 && (
              <motion.div 
                className="flex items-center gap-1 text-orange-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <Zap className="w-5 h-5" />
                {streak}x
              </motion.div>
            )}
          </div>
          
          {difficultySettings[difficulty].timeLimit > 0 && (
            <div className={`flex items-center gap-1 ${timeLeft <= 10 ? 'text-red-400' : 'text-gray-400'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-bold">{timeLeft}</span>
            </div>
          )}
        </div>
        
        {/* Прогресс */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / gameQuestions.length) * 100}%` }}
          />
        </div>
        
        {/* Категория */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${config.color}`}>
          <config.icon className="w-4 h-4" />
          <span className="text-sm font-medium">{config.name}</span>
        </div>
        
        {/* Вопрос */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-center">
              {currentQuestion.question}
            </h3>
            
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option
                const isCorrect = option === currentQuestion.correctAnswer
                let buttonClass = 'bg-white/10 hover:bg-white/20 border-white/20'
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass = 'bg-green-500 border-green-400'
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'bg-red-500 border-red-400'
                  }
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => handleAnswer(option)}
                      disabled={showResult}
                      className={`w-full py-4 justify-start text-left ${buttonClass}`}
                    >
                      <span className="mr-3 font-bold">{['А', 'Б', 'В', 'Г'][index]}.</span>
                      {option}
                      {showResult && isCorrect && <Check className="w-5 h-5 ml-auto" />}
                      {showResult && isSelected && !isCorrect && <X className="w-5 h-5 ml-auto" />}
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Объяснение */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className={`${
              selectedAnswer === currentQuestion.correctAnswer 
                ? 'bg-green-500/20 border-green-500/30' 
                : 'bg-red-500/20 border-red-500/30'
            }`}>
              <CardContent className="p-4">
                <p className="text-sm mb-2">{currentQuestion.explanation}</p>
                {currentQuestion.funFact && (
                  <p className="text-xs text-gray-400 italic">
                    💡 {currentQuestion.funFact}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const percentage = Math.round((correctAnswers / gameQuestions.length) * 100)
    const earnedXp = Math.round(difficultySettings[difficulty].xp * (correctAnswers / gameQuestions.length))
    
    return (
      <div className="space-y-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Игра окончена!</h2>
          <p className="text-gray-400">Твой результат</p>
        </motion.div>
        
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{percentage}%</div>
            <p className="text-gray-400">правильных ответов</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4 text-center">
              <Check className="w-8 h-8 mx-auto text-green-400 mb-2" />
              <div className="text-2xl font-bold">{correctAnswers}</div>
              <p className="text-sm text-gray-400">Правильно</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
              <div className="text-2xl font-bold">+{earnedXp} XP</div>
              <p className="text-sm text-gray-400">Заработано</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-3">
          <Button
            onClick={() => setGameState('menu')}
            className="py-6 bg-gradient-to-r from-green-500 to-emerald-500"
          >
            Играть снова
          </Button>
        </div>
      </div>
    )
  }
  
  return null
}
