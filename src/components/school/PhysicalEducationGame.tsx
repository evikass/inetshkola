'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Dumbbell, Trophy, Medal, Timer, Heart, Activity,
  Zap, Clock, Target, Check, X, Sparkles, Users, Flame
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface PhysicalEducationGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type PECategory = 'sports' | 'olympics' | 'health' | 'rules' | 'fitness' | 'russia'

interface PEQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: PECategory
  difficulty: 1 | 2 | 3
  explanation?: string
  funFact?: string
}

// База вопросов по физкультуре
const questions: PEQuestion[] = [
  // === ВИДЫ СПОРТА (sports) - Лёгкий уровень ===
  {
    question: 'Какой спорт называют "королём спорта"?',
    correctAnswer: 'Футбол',
    options: ['Футбол', 'Баскетбол', 'Теннис', 'Хоккей'],
    category: 'sports',
    difficulty: 1,
    explanation: 'Футбол — самый популярный вид спорта в мире, более 4 миллиардов фанатов.',
    funFact: 'Первый матч по футболу состоялся в Англии в 1863 году.'
  },
  {
    question: 'Сколько игроков в команде на поле в футболе?',
    correctAnswer: '11',
    options: ['11', '10', '12', '9'],
    category: 'sports',
    difficulty: 1,
    explanation: 'В футбольной команде на поле 11 игроков: 10 полевых и 1 вратарь.',
    funFact: 'Вратарь — единственный игрок, который может трогать мяч руками.'
  },
  {
    question: 'В каком спорте забивают мяч в корзину?',
    correctAnswer: 'Баскетбол',
    options: ['Баскетбол', 'Волейбол', 'Футбол', 'Теннис'],
    category: 'sports',
    difficulty: 1,
    explanation: 'В баскетболе нужно забрасывать мяч в корзину соперника.',
    funFact: 'Баскетбол придумал Джеймс Нейсмит в 1891 году.'
  },
  {
    question: 'Какой спорт играют ракеткой и мячом через сетку?',
    correctAnswer: 'Теннис',
    options: ['Теннис', 'Бадминтон', 'Волейбол', 'Пинг-понг'],
    category: 'sports',
    difficulty: 1,
    explanation: 'В теннисе игроки перебивают мяч ракетками через сетку.',
    funFact: 'Теннисные мячики изначально были белыми, а стали жёлтыми для телевидения.'
  },
  {
    question: 'Сколько периодов в хоккейном матче?',
    correctAnswer: '3',
    options: ['3', '2', '4', '5'],
    category: 'sports',
    difficulty: 1,
    explanation: 'Хоккейный матч состоит из 3 периодов по 20 минут.',
    funFact: 'Хоккей — один из самых быстрых и контактных видов спорта.'
  },
  {
    question: 'Какой спорт называют "игрой миллионов"?',
    correctAnswer: 'Футбол',
    options: ['Футбол', 'Хоккей', 'Баскетбол', 'Бейсбол'],
    category: 'sports',
    difficulty: 1,
    explanation: 'Футбол — самый массовый вид спорта в мире.',
    funFact: 'Чемпионат мира по футболу смотрят более 3 миллиардов человек!'
  },
  
  // === ВИДЫ СПОРТА - Средний уровень ===
  {
    question: 'Какова длина марафонской дистанции?',
    correctAnswer: '42 км 195 м',
    options: ['42 км 195 м', '40 км', '45 км', '50 км'],
    category: 'sports',
    difficulty: 2,
    explanation: 'Марафон — это бег на дистанцию 42 км 195 метров.',
    funFact: 'Дистанция установлена на Олимпиаде 1908 года в Лондоне.'
  },
  {
    question: 'В каком виде спорта выступали братья Кличко?',
    correctAnswer: 'Бокс',
    options: ['Бокс', 'Борьба', 'Дзюдо', 'Карате'],
    category: 'sports',
    difficulty: 2,
    explanation: 'Виталий и Владимир Кличко — знаменитые украинские боксёры-тяжеловесы.',
    funFact: 'Братья Кличко владели всеми основными чемпионскими поясами!'
  },
  {
    question: 'Что такое гандикап в спорте?',
    correctAnswer: 'Фора сопернику',
    options: ['Фора сопернику', 'Травма', 'Штраф', 'Дисквалификация'],
    category: 'sports',
    difficulty: 2,
    explanation: 'Гандикап — это преимущество, которое даётся более слабому сопернику.',
    funFact: 'В гольфе гандикап позволяет игрокам разного уровня соревноваться.'
  },
  {
    question: 'Какой спорт происходит в бассейне?',
    correctAnswer: 'Плавание',
    options: ['Плавание', 'Дайвинг', 'Сёрфинг', 'Гребля'],
    category: 'sports',
    difficulty: 2,
    explanation: 'Плавание — спортивная дисциплина в бассейне или открытой воде.',
    funFact: 'Плавание тренирует почти все мышцы тела!'
  },
  {
    question: 'Сколько игроков в команде волейбола на площадке?',
    correctAnswer: '6',
    options: ['6', '5', '7', '4'],
    category: 'sports',
    difficulty: 2,
    explanation: 'В волейбольной команде на площадке 6 игроков.',
    funFact: 'Волейбол изобрёл Уильям Морган в 1895 году.'
  },
  
  // === ВИДЫ СПОРТА - Сложный уровень ===
  {
    question: 'Что такое хет-трик в футболе?',
    correctAnswer: '3 гола в одном матче',
    options: ['3 гола в одном матче', '3 победы подряд', '3 жёлтые карточки', '3 замены'],
    category: 'sports',
    difficulty: 3,
    explanation: 'Хет-трик — когда игрок забивает 3 гола в одном матче.',
    funFact: 'Криштиану Роналду сделал более 60 хет-триков за карьеру!'
  },
  {
    question: 'Что такое овертайм в спорте?',
    correctAnswer: 'Дополнительное время',
    options: ['Дополнительное время', 'Перерыв', 'Штрафной бросок', 'Замена игрока'],
    category: 'sports',
    difficulty: 3,
    explanation: 'Овертайм — дополнительное время для определения победителя при ничьей.',
    funFact: 'В хоккее овертайм длится 5 минут, в футболе — два тайма по 15 минут.'
  },
  {
    question: 'Что такое эстафета?',
    correctAnswer: 'Командное соревнование с передачей',
    options: ['Командное соревнование с передачей', 'Индивидуальный забег', 'Турнир', 'Финал'],
    category: 'sports',
    difficulty: 3,
    explanation: 'Эстафета — командное соревнование, где спортсмены передают эстафетную палочку.',
    funFact: 'Олимпийская эстафета по бегу — 4×100 метров.'
  },
  
  // === ОЛИМПИЙСКИЕ ИГРЫ (olympics) - Лёгкий уровень ===
  {
    question: 'Где проводились первые Олимпийские игры древности?',
    correctAnswer: 'Греция',
    options: ['Греция', 'Рим', 'Египет', 'Персия'],
    category: 'olympics',
    difficulty: 1,
    explanation: 'Древние Олимпийские игры проводились в Греции, в городе Олимпия.',
    funFact: 'Первые Олимпийские игры состоялись в 776 году до нашей эры!'
  },
  {
    question: 'Как часто проводятся Олимпийские игры?',
    correctAnswer: 'Раз в 4 года',
    options: ['Раз в 4 года', 'Раз в 2 года', 'Ежегодно', 'Раз в 5 лет'],
    category: 'olympics',
    difficulty: 1,
    explanation: 'Олимпийские игры проводятся раз в 4 года.',
    funFact: 'Зимние и летние Олимпиады чередуются каждые 2 года.'
  },
  {
    question: 'Какого цвета кольца на олимпийском флаге?',
    correctAnswer: '5 разных цветов',
    options: ['5 разных цветов', 'Только синие', 'Только золотые', 'Только красные'],
    category: 'olympics',
    difficulty: 1,
    explanation: 'Пять колец — синее, жёлтое, чёрное, зелёное, красное — символизируют пять континентов.',
    funFact: 'Хотя колец 5, хотя бы один цвет есть на флаге каждой страны!'
  },
  {
    question: 'Что зажигают на открытии Олимпиады?',
    correctAnswer: 'Олимпийский огонь',
    options: ['Олимпийский огонь', 'Фейерверк', 'Свечи', 'Костёр'],
    category: 'olympics',
    difficulty: 1,
    explanation: 'Олимпийский огонь зажигают от лучей солнца в Греции и несут эстафетой.',
    funFact: 'Факел олимпийского огня пролетает тысячи километров!'
  },
  {
    question: 'Какая страна принимала Олимпиаду-2014?',
    correctAnswer: 'Россия',
    options: ['Россия', 'Китай', 'Великобритания', 'Бразилия'],
    category: 'olympics',
    difficulty: 1,
    explanation: 'Зимние Олимпийские игры 2014 года прошли в Сочи, Россия.',
    funFact: 'Сочи-2014 стали самыми тёплыми зимними Олимпийскими играми!'
  },
  
  // === ОЛИМПИЙСКИЕ ИГРЫ - Средний уровень ===
  {
    question: 'Кто основал современные Олимпийские игры?',
    correctAnswer: 'Пьер де Кубертен',
    options: ['Пьер де Кубертен', 'Аристотель', 'Платон', 'Гомер'],
    category: 'olympics',
    difficulty: 2,
    explanation: 'Пьер де Кубертен — французский общественный деятель, возродивший Олимпийские игры.',
    funFact: 'Первые современные Олимпийские игры прошли в 1896 году в Афинах.'
  },
  {
    question: 'Где прошли Олимпийские игры 2020?',
    correctAnswer: 'Токио',
    options: ['Токио', 'Париж', 'Лондон', 'Пекин'],
    category: 'olympics',
    difficulty: 2,
    explanation: 'Олимпийские игры 2020 прошли в Токио, Япония (в 2021 году из-за пандемии).',
    funFact: 'Это вторые Олимпийские игры в Токио после 1964 года.'
  },
  {
    question: 'Что такое Паралимпийские игры?',
    correctAnswer: 'Игры для людей с инвалидностью',
    options: ['Игры для людей с инвалидностью', 'Детские игры', 'Игры для ветеранов', 'Командные игры'],
    category: 'olympics',
    difficulty: 2,
    explanation: 'Паралимпийские игры — соревнования для атлетов с инвалидностью.',
    funFact: 'Паралимпийские игры основал Людвиг Гуттман в 1948 году.'
  },
  {
    question: 'Какое место заняла Россия на Олимпиаде в Сочи по медалям?',
    correctAnswer: '1 место',
    options: ['1 место', '2 место', '3 место', '4 место'],
    category: 'olympics',
    difficulty: 2,
    explanation: 'На домашней Олимпиаде в Сочи Россия заняла первое место по медалям.',
    funFact: 'Российские спортсмены выиграли 33 медали: 13 золотых, 11 серебряных, 9 бронзовых.'
  },
  {
    question: 'Когда Россия впервые приняла Олимпиаду?',
    correctAnswer: '1980',
    options: ['1980', '2014', '2000', '1990'],
    category: 'olympics',
    difficulty: 2,
    explanation: 'Летние Олимпийские игры 1980 года прошли в Москве, СССР.',
    funFact: 'Талисманом Олимпиады-80 был медвежонок Миша.'
  },
  
  // === ОЛИМПИЙСКИЕ ИГРЫ - Сложный уровень ===
  {
    question: 'Сколько золотых медалей выиграл Михаил Фелпс?',
    correctAnswer: '23',
    options: ['23', '15', '20', '18'],
    category: 'olympics',
    difficulty: 3,
    explanation: 'Майкл Фелпс — самый титулованный олимпиец, 23 золотые медали по плаванию.',
    funFact: 'Всего у Фелпса 28 олимпийских медалей — рекорд всех времён!'
  },
  {
    question: 'В каком году Олимпиаду бойкотировали США?',
    correctAnswer: '1980',
    options: ['1980', '1984', '1976', '1972'],
    category: 'olympics',
    difficulty: 3,
    explanation: 'США бойкотировали Олимпиаду-1980 в Москве из-за ввода советских войск в Афганистан.',
    funFact: 'В ответ СССР бойкотировал Олимпиаду-1984 в Лос-Анджелесе.'
  },
  {
    question: 'Где пройдут летние Олимпийские игры 2024?',
    correctAnswer: 'Париж',
    options: ['Париж', 'Лондон', 'Рим', 'Берлин'],
    category: 'olympics',
    difficulty: 3,
    explanation: 'Летние Олимпийские игры 2024 года пройдут в Париже, Франция.',
    funFact: 'Париж принимал Олимпиаду ранее в 1900 и 1924 годах.'
  },
  
  // === ЗДОРОВЬЕ (health) - Лёгкий уровень ===
  {
    question: 'Сколько часов сна нужно школьнику?',
    correctAnswer: '9-10 часов',
    options: ['9-10 часов', '5-6 часов', '12 часов', '4 часа'],
    category: 'health',
    difficulty: 1,
    explanation: 'Детям и подросткам нужно 9-10 часов сна для нормального развития.',
    funFact: 'Во сне растёт организм и обрабатывается информация.'
  },
  {
    question: 'Сколько воды нужно выпивать в день?',
    correctAnswer: '1.5-2 литра',
    options: ['1.5-2 литра', '0.5 литра', '5 литров', '1 стакан'],
    category: 'health',
    difficulty: 1,
    explanation: 'Взрослому человеку нужно около 1.5-2 литров воды в день.',
    funFact: 'Человек на 60-70% состоит из воды!'
  },
  {
    question: 'Какая еда полезна для здоровья?',
    correctAnswer: 'Овощи и фрукты',
    options: ['Овощи и фрукты', 'Только сладости', 'Только фастфуд', 'Только чипсы'],
    category: 'health',
    difficulty: 1,
    explanation: 'Овощи и фрукты содержат витамины, необходимые для здоровья.',
    funFact: 'Рекомендуется есть 5 порций овощей и фруктов в день.'
  },
  {
    question: 'Зачем нужна разминка перед спортом?',
    correctAnswer: 'Разогреть мышцы',
    options: ['Разогреть мышцы', 'Показать умения', 'Отдохнуть', 'Пообщаться'],
    category: 'health',
    difficulty: 1,
    explanation: 'Разминка подготавливает мышцы и суставы к нагрузке, предотвращает травмы.',
    funFact: 'Без разминки риск травм увеличивается в 3 раза!'
  },
  {
    question: 'Что вредно для здоровья?',
    correctAnswer: 'Курение',
    options: ['Курение', 'Спорт', 'Сон', 'Прогулки'],
    category: 'health',
    difficulty: 1,
    explanation: 'Курение вредит лёгким, сердцу и вызывает множество болезней.',
    funFact: 'Курение сокращает жизнь в среднем на 10-15 лет.'
  },
  
  // === ЗДОРОВЬЕ - Средний уровень ===
  {
    question: 'Что такое пульс?',
    correctAnswer: 'Сокращения сердца',
    options: ['Сокращения сердца', 'Давление', 'Температура', 'Дыхание'],
    category: 'health',
    difficulty: 2,
    explanation: 'Пульс — это ритмичные колебания стенок сосудов от сокращений сердца.',
    funFact: 'Нормальный пульс в покое — 60-80 ударов в минуту.'
  },
  {
    question: 'Какая частота пульса при нагрузке?',
    correctAnswer: 'Учащается',
    options: ['Учащается', 'Замедляется', 'Не меняется', 'Пропадает'],
    category: 'health',
    difficulty: 2,
    explanation: 'При физической нагрузке пульс учащается для лучшего кровоснабжения мышц.',
    funFact: 'У спортсменов пульс в покое может быть 40-50 ударов в минуту.'
  },
  {
    question: 'Зачем нужны витамины?',
    correctAnswer: 'Для иммунитета',
    options: ['Для иммунитета', 'Для сна', 'Для красоты', 'Для роста волос'],
    category: 'health',
    difficulty: 2,
    explanation: 'Витамины необходимы для нормальной работы организма и укрепления иммунитета.',
    funFact: 'Витамин C помогает бороться с простудой, витамин D — для костей.'
  },
  {
    question: 'Что такое правильная осанка?',
    correctAnswer: 'Прямая спина',
    options: ['Прямая спина', 'Сгорбленная спина', 'Наклон вперёд', 'Любая поза'],
    category: 'health',
    difficulty: 2,
    explanation: 'Правильная осанка — прямая спина, расправленные плечи, поднятая голова.',
    funFact: 'Правильная осанка предотвращает боли в спине и проблемы с позвоночником.'
  },
  {
    question: 'Что такое гибкость?',
    correctAnswer: 'Способность к движениям',
    options: ['Способность к движениям', 'Сила мышц', 'Быстрота', 'Выносливость'],
    category: 'health',
    difficulty: 2,
    explanation: 'Гибкость — это способность суставов выполнять движения с большой амплитудой.',
    funFact: 'Гибкость можно развивать растяжкой в любом возрасте!'
  },
  
  // === ЗДОРОВЬЕ - Сложный уровень ===
  {
    question: 'Что такое ЧСС?',
    correctAnswer: 'Частота сердечных сокращений',
    options: ['Частота сердечных сокращений', 'Частота снижения силы', 'Час спорта и сна', 'Чистота сердца и сосудов'],
    category: 'health',
    difficulty: 3,
    explanation: 'ЧСС — частота сердечных сокращений, или пульс в ударах в минуту.',
    funFact: 'Максимальная ЧСС примерно равна 220 минус возраст.'
  },
  {
    question: 'Что такое ИМТ?',
    correctAnswer: 'Индекс массы тела',
    options: ['Индекс массы тела', 'Индекс мышечного тонуса', 'Иммунитет и метаболизм', 'Индекс минералов тела'],
    category: 'health',
    difficulty: 3,
    explanation: 'ИМТ — индекс массы тела, показатель соотношения веса и роста.',
    funFact: 'Нормальный ИМТ — от 18.5 до 25.'
  },
  {
    question: 'Что такое анаболизм?',
    correctAnswer: 'Процесс построения тканей',
    options: ['Процесс построения тканей', 'Процесс разрушения тканей', 'Процесс похудения', 'Процесс старения'],
    category: 'health',
    difficulty: 3,
    explanation: 'Анаболизм — процесс создания и восстановления тканей организма.',
    funFact: 'Силовые тренировки стимулируют анаболизм — рост мышц!'
  },
  
  // === ПРАВИЛА СПОРТА (rules) - Лёгкий уровень ===
  {
    question: 'Что означает жёлтая карточка в футболе?',
    correctAnswer: 'Предупреждение',
    options: ['Предупреждение', 'Удаление', 'Гол', 'Штрафной'],
    category: 'rules',
    difficulty: 1,
    explanation: 'Жёлтая карточка — предупреждение игроку за нарушение правил.',
    funFact: 'Две жёлтые карточки за матч = красная карточка и удаление.'
  },
  {
    question: 'Что означает красная карточка?',
    correctAnswer: 'Удаление с поля',
    options: ['Удаление с поля', 'Предупреждение', 'Гол', 'Перерыв'],
    category: 'rules',
    difficulty: 1,
    explanation: 'Красная карточка означает удаление игрока с поля до конца матча.',
    funFact: 'После красной карточки команда играет в меньшинстве.'
  },
  {
    question: 'Как называется штрафной бросок в баскетболе?',
    correctAnswer: 'Фол',
    options: ['Фол', 'Пенальти', 'Штраф', 'Аут'],
    category: 'rules',
    difficulty: 1,
    explanation: 'Фол — нарушение правил в баскетболе, за которое назначаются штрафные броски.',
    funFact: 'При 5 фолах игрок удаляется с площадки.'
  },
  {
    question: 'Что такое офсайд в футболе?',
    correctAnswer: 'Положение вне игры',
    options: ['Положение вне игры', 'Гол', 'Угловой', 'Штрафной'],
    category: 'rules',
    difficulty: 1,
    explanation: 'Офсайд — положение, когда игрок находится ближе к воротам, чем мяч и предпоследний защитник.',
    funFact: 'Правило офсайда делает игру более интересной!'
  },
  
  // === ПРАВИЛА СПОРТА - Средний уровень ===
  {
    question: 'Что такое пенальти в футболе?',
    correctAnswer: 'Штрафной удар с 11 метров',
    options: ['Штрафной удар с 11 метров', 'Угловой удар', 'Штрафной удар', 'Свободный удар'],
    category: 'rules',
    difficulty: 2,
    explanation: 'Пенальти — штрафной удар с расстояния 11 метров от ворот.',
    funFact: 'Пенальти пробивается только вратарем против бьющего игрока.'
  },
  {
    question: 'Сколько таймов в футбольном матче?',
    correctAnswer: '2',
    options: ['2', '3', '4', '1'],
    category: 'rules',
    difficulty: 2,
    explanation: 'Футбольный матч состоит из двух таймов по 45 минут.',
    funFact: 'Между таймами — перерыв 15 минут.'
  },
  {
    question: 'Что такое нокаут в боксе?',
    correctAnswer: 'Неспособность продолжать бой',
    options: ['Неспособность продолжать бой', 'Победа по очкам', 'Ничья', 'Дисквалификация'],
    category: 'rules',
    difficulty: 2,
    explanation: 'Нокаут — состояние, когда боксёр не может продолжать бой после удара.',
    funFact: 'Судья считает до 10 — если боксёр не встал, он нокаутирован.'
  },
  {
    question: 'Что такое технический нокаут?',
    correctAnswer: 'Прекращение боя судьёй',
    options: ['Прекращение боя судьёй', 'Нокаут от удара', 'Дисквалификация', 'Ничья'],
    category: 'rules',
    difficulty: 2,
    explanation: 'Технический нокаут — когда судья прекращает бой из-за явного преимущества соперника.',
    funFact: 'Технический нокаут может быть объявлен, если боксёр травмирован.'
  },
  
  // === ПРАВИЛА СПОРТА - Сложный уровень ===
  {
    question: 'Что такое VAR в футболе?',
    correctAnswer: 'Видео-помощник судьи',
    options: ['Видео-помощник судьи', 'Новая команда', 'Тип мяча', 'Размер поля'],
    category: 'rules',
    difficulty: 3,
    explanation: 'VAR (Video Assistant Referee) — система видеоповторов для помощи судьям.',
    funFact: 'VAR используется на Чемпионатах мира с 2018 года.'
  },
  {
    question: 'Что такое гол в собственные ворота?',
    correctAnswer: 'Мяч в свои ворота',
    options: ['Мяч в свои ворота', 'Гол с центра поля', 'Гол головой', 'Гол с пенальти'],
    category: 'rules',
    difficulty: 3,
    explanation: 'Автогол — когда игрок забивает мяч в свои собственные ворота.',
    funFact: 'Автогол засчитывается как гол команды соперника.'
  },
  
  // === ФИТНЕС (fitness) - Лёгкий уровень ===
  {
    question: 'Что такое фитнес?',
    correctAnswer: 'Физические упражнения',
    options: ['Физические упражнения', 'Компьютерная игра', 'Диета', 'Медитация'],
    category: 'fitness',
    difficulty: 1,
    explanation: 'Фитнес — это физические упражнения для поддержания формы и здоровья.',
    funFact: 'Слово "фитнес" происходит от английского "fit" — здоровый.'
  },
  {
    question: 'Какое упражнение развивает руки?',
    correctAnswer: 'Отжимания',
    options: ['Отжимания', 'Приседания', 'Бег', 'Прыжки'],
    category: 'fitness',
    difficulty: 1,
    explanation: 'Отжимания отлично развивают мышцы рук, груди и плеч.',
    funFact: 'Мировой рекорд — более 10 000 отжиманий подряд!'
  },
  {
    question: 'Какое упражнение развивает ноги?',
    correctAnswer: 'Приседания',
    options: ['Приседания', 'Отжимания', 'Подтягивания', 'Планка'],
    category: 'fitness',
    difficulty: 1,
    explanation: 'Приседания развивают мышцы ног и ягодиц.',
    funFact: 'Приседания также укрепляют мышцы спины и пресса.'
  },
  {
    question: 'Что такое разминка?',
    correctAnswer: 'Подготовка к тренировке',
    options: ['Подготовка к тренировке', 'Отдых', 'Конец тренировки', 'Соревнование'],
    category: 'fitness',
    difficulty: 1,
    explanation: 'Разминка — лёгкие упражнения для подготовки организма к нагрузке.',
    funFact: 'Разминка должна длиться 5-10 минут.'
  },
  
  // === ФИТНЕС - Средний уровень ===
  {
    question: 'Что такое кардиотренировка?',
    correctAnswer: 'Упражнения для сердца',
    options: ['Упражнения для сердца', 'Силовые упражнения', 'Растяжка', 'Йога'],
    category: 'fitness',
    difficulty: 2,
    explanation: 'Кардиотренировка — упражнения, укрепляющие сердце и сжигающие калории.',
    funFact: 'Бег, плавание, велосипед — примеры кардиотренировок.'
  },
  {
    question: 'Что такое силовая тренировка?',
    correctAnswer: 'Упражнения с отягощением',
    options: ['Упражнения с отягощением', 'Бег', 'Растяжка', 'Плавание'],
    category: 'fitness',
    difficulty: 2,
    explanation: 'Силовая тренировка направлена на развитие силы и мышечной массы.',
    funFact: 'Для роста мышц нужны регулярные тренировки и белок в питании.'
  },
  {
    question: 'Что такое растяжка?',
    correctAnswer: 'Упражнения для гибкости',
    options: ['Упражнения для гибкости', 'Силовые упражнения', 'Бег', 'Прыжки'],
    category: 'fitness',
    difficulty: 2,
    explanation: 'Растяжка (стретчинг) — упражнения для развития гибкости мышц и суставов.',
    funFact: 'Растяжку лучше делать после разминки или тренировки.'
  },
  {
    question: 'Сколько раз в неделю нужно тренироваться?',
    correctAnswer: '3-4 раза',
    options: ['3-4 раза', '1 раз', 'Каждый день', 'Раз в месяц'],
    category: 'fitness',
    difficulty: 2,
    explanation: 'Для поддержания формы достаточно 3-4 тренировок в неделю.',
    funFact: 'Мышцам нужен отдых — поэтому не стоит тренироваться каждый день.'
  },
  
  // === ФИТНЕС - Сложный уровень ===
  {
    question: 'Что такое плиометрика?',
    correctAnswer: 'Прыжковые упражнения',
    options: ['Прыжковые упражнения', 'Статические упражнения', 'Растяжка', 'Йога'],
    category: 'fitness',
    difficulty: 3,
    explanation: 'Плиометрика — упражнения с быстрыми прыжками для развития взрывной силы.',
    funFact: 'Плиометрику используют легкоатлеты и баскетболисты.'
  },
  {
    question: 'Что такое кроссфит?',
    correctAnswer: 'Функциональные тренировки',
    options: ['Функциональные тренировки', 'Только бег', 'Только штанга', 'Только йога'],
    category: 'fitness',
    difficulty: 3,
    explanation: 'Кроссфит — система функциональных тренировок высокой интенсивности.',
    funFact: 'Кроссфит включает элементы из тяжёлой атлетики, гимнастики и бега.'
  },
  
  // === РОССИЙСКИЙ СПОРТ (russia) - Лёгкий уровень ===
  {
    question: 'Какой спорт популярен в России?',
    correctAnswer: 'Хоккей',
    options: ['Хоккей', 'Крикет', 'Бейсбол', 'Регби'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Хоккей — один из самых популярных видов спорта в России.',
    funFact: 'Сборная России по хоккею — многократный чемпион мира!'
  },
  {
    question: 'Кто такой Александр Овечкин?',
    correctAnswer: 'Хоккеист',
    options: ['Хоккеист', 'Футболист', 'Баскетболист', 'Теннисист'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Александр Овечкин — знаменитый российский хоккеист, капитан Вашингтона.',
    funFact: 'Овечкин — один из лучших бомбардиров в истории НХЛ!'
  },
  {
    question: 'Кто такая Мария Шарапова?',
    correctAnswer: 'Теннисистка',
    options: ['Теннисистка', 'Гимнастка', 'Фигуристка', 'Пловчиха'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Мария Шарапова — знаменитая российская теннисистка, победительница турниров Большого шлема.',
    funFact: 'Шарапова выиграла Уимблдон в 17 лет!'
  },
  {
    question: 'Какой город принял Олимпиаду 2014?',
    correctAnswer: 'Сочи',
    options: ['Сочи', 'Москва', 'Санкт-Петербург', 'Казань'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Зимние Олимпийские игры 2014 года прошли в Сочи.',
    funFact: 'Сочи — самый тёплый город, принимавший зимнюю Олимпиаду.'
  },
  
  // === РОССИЙСКИЙ СПОРТ - Средний уровень ===
  {
    question: 'Кто завоевал золото Олимпиады в Сочи по фигурному катанию?',
    correctAnswer: 'Аделина Сотникова',
    options: ['Аделина Сотникова', 'Евгения Медведева', 'Алина Загитова', 'Юлия Липницкая'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Аделина Сотникова выиграла золото в женском одиночном катании в Сочи.',
    funFact: 'Это была первая олимпийская золотая медаль России в женском одиночном катании!'
  },
  {
    question: 'Какой российский клуб выигрывал Кубок Гагарина?',
    correctAnswer: 'Ак Барс, СКА, ЦСКА',
    options: ['Ак Барс, СКА, ЦСКА', 'Спартак', 'Динамо Москва', 'Локомотив'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Ак Барс, СКА и ЦСКА — многократные победители Кубка Гагарина в КХЛ.',
    funFact: 'Кубок Гагарина — главный трофей Континентальной хоккейной лиги.'
  },
  {
    question: 'Кто такой Лев Яшин?',
    correctAnswer: 'Футболист',
    options: ['Футболист', 'Хоккеист', 'Баскетболист', 'Теннисист'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Лев Яшин — легендарный советский футбольный вратарь, единственный вратарь с Золотым мячом.',
    funFact: 'Яшина называют "Чёрной пантерой" за его игру на линии ворот.'
  },
  {
    question: 'Сколько золотых медалей Россия выиграла в Сочи?',
    correctAnswer: '13',
    options: ['13', '10', '15', '11'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Российские спортсмены выиграли 13 золотых медалей на Олимпиаде в Сочи.',
    funFact: 'Это лучший результат России на зимних Олимпиадах!'
  },
  
  // === РОССИЙСКИЙ СПОРТ - Сложный уровень ===
  {
    question: 'Кто такой Александр Карелин?',
    correctAnswer: 'Борец',
    options: ['Борец', 'Боксёр', 'Дзюдоист', 'Тяжелоатлет'],
    category: 'russia',
    difficulty: 3,
    explanation: 'Александр Карелин — легендарный советский и российский борец греко-римского стиля.',
    funFact: 'Карелин не проиграл ни одного матча на международном уровне 13 лет!'
  },
  {
    question: 'Кто такая Алина Загитова?',
    correctAnswer: 'Фигуристка',
    options: ['Фигуристка', 'Гимнастка', 'Лыжница', 'Бегунья'],
    category: 'russia',
    difficulty: 3,
    explanation: 'Алина Загитова — олимпийская чемпионка 2018 года по фигурному катанию.',
    funFact: 'Загитова выиграла золото в 15 лет!'
  }
]

// Категории с иконками и цветами
const categoryConfig: Record<PECategory, { name: string; icon: React.ElementType; color: string }> = {
  sports: { name: 'Виды спорта', icon: Dumbbell, color: 'from-blue-400 to-cyan-500' },
  olympics: { name: 'Олимпийские игры', icon: Medal, color: 'from-yellow-400 to-orange-500' },
  health: { name: 'Здоровье', icon: Heart, color: 'from-red-400 to-pink-500' },
  rules: { name: 'Правила спорта', icon: Target, color: 'from-green-400 to-emerald-500' },
  fitness: { name: 'Фитнес', icon: Activity, color: 'from-purple-400 to-violet-500' },
  russia: { name: 'Спорт России', icon: Trophy, color: 'from-red-400 to-amber-500' }
}

// Настройки уровней сложности
const difficultySettings = {
  1: { questionsCount: 8, timeLimit: 0, xp: 80, name: 'Лёгкий (1-4 класс)' },
  2: { questionsCount: 12, timeLimit: 30, xp: 100, name: 'Средний (5-8 класс)' },
  3: { questionsCount: 15, timeLimit: 25, xp: 130, name: 'Сложный (9-11 класс)' }
}

export default function PhysicalEducationGame({ gradeId = 5, onExperience }: PhysicalEducationGameProps) {
  const { playSound } = useSound()
  
  const [gameState, setGameState] = useState<'menu' | 'category' | 'playing' | 'result'>('menu')
  const [selectedCategory, setSelectedCategory] = useState<PECategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState<1 | 2 | 3>(1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [lives, setLives] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [gameQuestions, setGameQuestions] = useState<PEQuestion[]>([])
  
  // Фильтрация и выборка вопросов
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return questions
    return questions.filter(q => q.category === selectedCategory)
  }, [selectedCategory])
  
  const startGame = useCallback((diff: 1 | 2 | 3, category: PECategory | 'all') => {
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
    let selectedQuestions: PEQuestion[] = []
    
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
            <Dumbbell className="w-8 h-8 text-orange-400" />
            Физкультура и спорт
          </h2>
          <p className="text-gray-400">Проверь знания по спорту и здоровому образу жизни!</p>
        </motion.div>
        
        <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" />
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
              <Flame className="w-5 h-5 text-red-400" />
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
                    onClick={() => startGame(difficulty, key as PECategory)}
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
            className="h-full bg-gradient-to-r from-orange-400 to-red-500"
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
            className="py-6 bg-gradient-to-r from-orange-500 to-red-500"
          >
            Играть снова
          </Button>
        </div>
      </div>
    )
  }
  
  return null
}
