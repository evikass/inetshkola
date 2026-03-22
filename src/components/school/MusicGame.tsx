'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Music, Mic, Headphones, Disc,
  Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles, Piano
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface MusicGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type MusicCategory = 'notes' | 'instruments' | 'composers' | 'genres' | 'folk' | 'terms'

interface MusicQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: MusicCategory
  difficulty: 1 | 2 | 3
  explanation?: string
  funFact?: string
}

// База вопросов по музыке
const questions: MusicQuestion[] = [
  // === НОТНАЯ ГРАМОТА (notes) - Лёгкий уровень ===
  {
    question: 'Сколько нот в музыкальной гамме?',
    correctAnswer: '7',
    options: ['7', '5', '8', '12'],
    category: 'notes',
    difficulty: 1,
    explanation: 'В гамме 7 нот: До, Ре, Ми, Фа, Соль, Ля, Си. Названия произошли от первых слогов молитвы.',
    funFact: 'Ноты назвал монах Гвидо д\'Ареццо в XI веке по первым слогам молитвы.'
  },
  {
    question: 'Какая нота идёт после "До"?',
    correctAnswer: 'Ре',
    options: ['Ре', 'Ми', 'Си', 'Ля'],
    category: 'notes',
    difficulty: 1,
    explanation: 'Порядок нот: До, Ре, Ми, Фа, Соль, Ля, Си. После До идёт Ре.',
    funFact: 'Название "Ре" происходит от латинского слова "resonare" — звучать.'
  },
  {
    question: 'Как называется самая длинная нота?',
    correctAnswer: 'Целая',
    options: ['Целая', 'Половинная', 'Четвертная', 'Восьмая'],
    category: 'notes',
    difficulty: 1,
    explanation: 'Целая нота — самая длинная, она длится 4 счёта (целый такт в размере 4/4).',
    funFact: 'Целая нота выглядит как пустой кружочек без штиля.'
  },
  {
    question: 'Какой знак обозначает паузу?',
    correctAnswer: 'Пауза',
    options: ['Пауза', 'Бемоль', 'Диез', 'Бекар'],
    category: 'notes',
    difficulty: 1,
    explanation: 'Пауза — знак молчания в музыке. Существуют разные паузы по длительности.',
    funFact: 'Пауза так же важна в музыке, как и звук — она создаёт ритм!'
  },
  {
    question: 'Как называется знак, повышающий ноту на полутон?',
    correctAnswer: 'Диез',
    options: ['Диез', 'Бемоль', 'Бекар', 'Ключ'],
    category: 'notes',
    difficulty: 1,
    explanation: 'Диез (#) повышает ноту на полутон. Например, Фа-диез выше Фа.',
    funFact: 'Знак диез выглядит как решётка #.'
  },
  {
    question: 'Какой ключ ставится в начале нотного стана?',
    correctAnswer: 'Скрипичный ключ',
    options: ['Скрипичный ключ', 'Басовый ключ', 'Альтовый ключ', 'Теноровый ключ'],
    category: 'notes',
    difficulty: 1,
    explanation: 'Скрипичный ключ — самый распространённый, определяет положение ноты Соль.',
    funFact: 'Скрипичный ключ рисуется как первая буква G (Соль) в старинном написании.'
  },
  
  // === НОТНАЯ ГРАМОТА - Средний уровень ===
  {
    question: 'Что означает "форте" в музыке?',
    correctAnswer: 'Громко',
    options: ['Громко', 'Тихо', 'Быстро', 'Медленно'],
    category: 'notes',
    difficulty: 2,
    explanation: 'Форте (f) — музыкальный термин, означающий громкое исполнение.',
    funFact: 'Слово "форте" происходит от итальянского "forte" — сильный.'
  },
  {
    question: 'Как называется половина от целой ноты?',
    correctAnswer: 'Половинная',
    options: ['Половинная', 'Четвертная', 'Восьмая', 'Шестнадцатая'],
    category: 'notes',
    difficulty: 2,
    explanation: 'Половинная нота длится 2 счёта — ровно половину от целой ноты.',
    funFact: 'Половинная нота выглядит как пустой кружочек со штилем.'
  },
  {
    question: 'Сколько линий в нотном стане?',
    correctAnswer: '5',
    options: ['5', '4', '6', '7'],
    category: 'notes',
    difficulty: 2,
    explanation: 'Нотный стан (нотоносец) состоит из 5 горизонтальных линий.',
    funFact: 'Ноты записываются как на линиях, так и между ними.'
  },
  {
    question: 'Как называется знак, понижающий ноту на полутон?',
    correctAnswer: 'Бемоль',
    options: ['Бемоль', 'Диез', 'Бекар', 'Ключ'],
    category: 'notes',
    difficulty: 2,
    explanation: 'Бемоль (♭) понижает ноту на полутон. Например, Си-бемоль ниже Си.',
    funFact: 'Знак бемоль выглядит как маленькая буква b.'
  },
  {
    question: 'Как называется размер музыкального произведения 4/4?',
    correctAnswer: 'Четыре четверти',
    options: ['Четыре четверти', 'Три четверти', 'Две четверти', 'Шесть восьмых'],
    category: 'notes',
    difficulty: 2,
    explanation: 'Размер 4/4 означает 4 четвертные ноты в такте — самый распространённый размер.',
    funFact: 'Размер 4/4 часто обозначается буквой C.'
  },
  
  // === НОТНАЯ ГРАМОТА - Сложный уровень ===
  {
    question: 'Что такое "легато"?',
    correctAnswer: 'Плавное исполнение',
    options: ['Плавное исполнение', 'Отрывистое исполнение', 'Громкое исполнение', 'Тихое исполнение'],
    category: 'notes',
    difficulty: 3,
    explanation: 'Легато — способ исполнения, при котором ноты звучат слитно, без пауз.',
    funFact: 'Легато обозначается дугообразной линией над нотами.'
  },
  {
    question: 'Как называется ансамбль из 4 музыкантов?',
    correctAnswer: 'Квартет',
    options: ['Квартет', 'Трио', 'Квинтет', 'Секстет'],
    category: 'notes',
    difficulty: 3,
    explanation: 'Квартет — ансамбль из 4 исполнителей. Название от латинского "quartus" — четвёртый.',
    funFact: 'Знаменитый "Квартет" И.А. Крылова — басня про четырёх музыкантов.'
  },
  {
    question: 'Что означает " Allegro"?',
    correctAnswer: 'Быстро',
    options: ['Быстро', 'Медленно', 'Умеренно', 'Очень быстро'],
    category: 'notes',
    difficulty: 3,
    explanation: 'Allegro — быстрый темп в музыке, означает "весело, скоро".',
    funFact: 'Allegro по-итальянски означает "весёлый".'
  },
  
  // === МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ (instruments) - Лёгкий уровень ===
  {
    question: 'Какой инструмент имеет 88 клавиш?',
    correctAnswer: 'Пианино',
    options: ['Пианино', 'Аккордеон', 'Орган', 'Баян'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Фортепиано (пианино, рояль) имеет 88 клавиш — 52 белые и 36 чёрных.',
    funFact: 'Пианино означает "тихо-громко" — инструмент может играть разную громкость.'
  },
  {
    question: 'Какой русский народный инструмент имеет три струны?',
    correctAnswer: 'Балалайка',
    options: ['Балалайка', 'Гитара', 'Гусли', 'Домра'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Балалайка — русский народный инструмент с треугольным корпусом и тремя струнами.',
    funFact: 'Название "балалайка" происходит от слова "балакать" — болтать.'
  },
  {
    question: 'Какой инструмент называют "королём инструментов"?',
    correctAnswer: 'Орган',
    options: ['Орган', 'Пианино', 'Скрипка', 'Арфа'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Орган — самый большой музыкальный инструмент, назван королём за мощь и величие.',
    funFact: 'Самый большой орган в мире имеет более 33 000 труб!'
  },
  {
    question: 'Сколько струн у классической гитары?',
    correctAnswer: '6',
    options: ['6', '4', '7', '5'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Классическая гитара имеет 6 струн. Бас-гитара — 4 струны.',
    funFact: 'Гитара — один из самых популярных инструментов в мире!'
  },
  {
    question: 'Какой инструмент играют смычком?',
    correctAnswer: 'Скрипка',
    options: ['Скрипка', 'Гитара', 'Арфа', 'Балалайка'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Скрипка — струнный смычковый инструмент. Смычок проводят по струнам.',
    funFact: 'Скрипку называют "голосом оркестра" за её певучий звук.'
  },
  {
    question: 'Какой духовой инструмент назван в честь изобретателя?',
    correctAnswer: 'Саксофон',
    options: ['Саксофон', 'Труба', 'Кларнет', 'Флейта'],
    category: 'instruments',
    difficulty: 1,
    explanation: 'Саксофон изобрёл Адольф Сакс в 1840 году. Инструмент назван его именем.',
    funFact: 'Саксофон — единственный инструмент, названный в честь изобретателя!'
  },
  
  // === МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ - Средний уровень ===
  {
    question: 'К какому семейству инструментов относится труба?',
    correctAnswer: 'Духовые',
    options: ['Духовые', 'Струнные', 'Ударные', 'Клавишные'],
    category: 'instruments',
    difficulty: 2,
    explanation: 'Труба — медный духовой инструмент. Звук извлекается вдуванием воздуха.',
    funFact: 'Труба — один из древнейших музыкальных инструментов!'
  },
  {
    question: 'Какой инструмент является главным в симфоническом оркестре?',
    correctAnswer: 'Скрипка',
    options: ['Скрипка', 'Пианино', 'Труба', 'Барабан'],
    category: 'instruments',
    difficulty: 2,
    explanation: 'Скрипка — ведущий инструмент симфонического оркестра, самый многочисленный.',
    funFact: 'В симфоническом оркестре может быть 30 и более скрипачей!'
  },
  {
    question: 'Как называется большой барабан?',
    correctAnswer: 'Большой барабан',
    options: ['Большой барабан', 'Малый барабан', 'Тамтам', 'Литавры'],
    category: 'instruments',
    difficulty: 2,
    explanation: 'Большой барабан (бас-бочка) — самый крупный ударный инструмент.',
    funFact: 'Большой барабан создаёт самые низкие звуки в оркестре.'
  },
  {
    question: 'Какой инструмент входит в группу ударных?',
    correctAnswer: 'Ксилофон',
    options: ['Ксилофон', 'Арфа', 'Виолончель', 'Гобой'],
    category: 'instruments',
    difficulty: 2,
    explanation: 'Ксилофон — ударный инструмент с деревянными пластинками.',
    funFact: 'Название "ксилофон" означает "деревянный звук" по-гречески.'
  },
  {
    question: 'Какой русский народный инструмент похож на арфу?',
    correctAnswer: 'Гусли',
    options: ['Гусли', 'Балалайка', 'Домра', 'Гармонь'],
    category: 'instruments',
    difficulty: 2,
    explanation: 'Гусли — древнерусский струнный инструмент, родственный арфе.',
    funFact: 'Гусли — один из старейших русских инструментов, упомянут в былинах.'
  },
  
  // === МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ - Сложный уровень ===
  {
    question: 'Сколько струн у виолончели?',
    correctAnswer: '4',
    options: ['4', '6', '5', '3'],
    category: 'instruments',
    difficulty: 3,
    explanation: 'Виолончель — струнный смычковый инструмент с 4 струнами, крупнее скрипки.',
    funFact: 'Виолончель держат между колен и играют сидя.'
  },
  {
    question: 'Какой инструмент имеет pedals для изменения высоты звука?',
    correctAnswer: 'Арфа',
    options: ['Арфа', 'Пианино', 'Орган', 'Аккордеон'],
    category: 'instruments',
    difficulty: 3,
    explanation: 'Арфа имеет 7 педалей для изменения высоты каждой ноты на полутон.',
    funFact: 'Арфа — один из древнейших инструментов, изображена на египетских фресках.'
  },
  {
    question: 'Как называется самая высокая по звучанию деревянная флейта?',
    correctAnswer: 'Флейта-пикколо',
    options: ['Флейта-пикколо', 'Блокфлейта', 'Альтовая флейта', 'Басовая флейта'],
    category: 'instruments',
    difficulty: 3,
    explanation: 'Флейта-пикколо — самая маленькая и высокая по звучанию флейта.',
    funFact: 'Пикколо звучит на октаву выше обычной флейты!'
  },
  
  // === КОМПОЗИТОРЫ (composers) - Лёгкий уровень ===
  {
    question: 'Кто написал балет "Лебединое озеро"?',
    correctAnswer: 'Пётр Чайковский',
    options: ['Пётр Чайковский', 'Николай Римский-Корсаков', 'Сергей Рахманинов', 'Михаил Глинка'],
    category: 'composers',
    difficulty: 1,
    explanation: 'Пётр Ильич Чайковский написал "Лебединое озеро" в 1876 году.',
    funFact: 'Чайковский — первый русский композитор, получивший мировую известность.'
  },
  {
    question: 'Какого композитора называют "королём вальса"?',
    correctAnswer: 'Иоганн Штраус',
    options: ['Иоганн Штраус', 'Моцарт', 'Бетховен', 'Бах'],
    category: 'composers',
    difficulty: 1,
    explanation: 'Иоганн Штраус-сын написал более 400 вальсов, самый известный — "На прекрасном голубом Дунае".',
    funFact: 'В Вене ежегодно проводится бал под музыку Штрауса!'
  },
  {
    question: 'Кто написал "Лунную сонату"?',
    correctAnswer: 'Бетховен',
    options: ['Бетховен', 'Моцарт', 'Шопен', 'Бах'],
    category: 'composers',
    difficulty: 1,
    explanation: 'Людвиг ван Бетховен написал "Лунную сонату" в 1801 году.',
    funFact: 'Бетховен писал музыку даже будучи глухим!'
  },
  {
    question: 'Кто написал "Реквием"?',
    correctAnswer: 'Моцарт',
    options: ['Моцарт', 'Бетховен', 'Бах', 'Вивальди'],
    category: 'composers',
    difficulty: 1,
    explanation: 'Вольфганг Амадей Моцарт работал над "Реквиемом" до самой смерти в 1791 году.',
    funFact: 'Моцарт начал сочинять музыку в 5 лет!'
  },
  {
    question: 'Кто является автором оперы "Иван Сусанин"?',
    correctAnswer: 'Михаил Глинка',
    options: ['Михаил Глинка', 'Модест Мусоргский', 'Александр Бородин', 'Николай Римский-Корсаков'],
    category: 'composers',
    difficulty: 1,
    explanation: 'Михаил Иванович Глинка написал оперу "Иван Сусанин" в 1836 году.',
    funFact: 'Глинку называют "отцом русской классической музыки".'
  },
  
  // === КОМПОЗИТОРЫ - Средний уровень ===
  {
    question: 'Кто написал цикл пьес "Времена года"?',
    correctAnswer: 'Антонио Вивальди',
    options: ['Антонио Вивальди', 'Йозеф Гайдн', 'Георг Гендель', 'Иоганн Себастьян Бах'],
    category: 'composers',
    difficulty: 2,
    explanation: 'Антонио Вивальди написал цикл из 4 скрипичных концертов "Времена года".',
    funFact: 'Вивальди был рыжеволосым, его называли "рыжим священником".'
  },
  {
    question: 'Какой русский композитор написал "Картинки с выставки"?',
    correctAnswer: 'Модест Мусоргский',
    options: ['Модест Мусоргский', 'Пётр Чайковский', 'Сергей Рахманинов', 'Александр Скрябин'],
    category: 'composers',
    difficulty: 2,
    explanation: 'Модест Петрович Мусоргский создал "Картинки с выставки" в 1874 году.',
    funFact: 'Вдохновением стали рисунки друга Мусоргского — архитектора Гартмана.'
  },
  {
    question: 'Кто написал "Танец с саблями"?',
    correctAnswer: 'Арам Хачатурян',
    options: ['Арам Хачатурян', 'Сергей Прокофьев', 'Дмитрий Шостакович', 'Александр Глазунов'],
    category: 'composers',
    difficulty: 2,
    explanation: 'Арам Ильич Хачатурян написал "Танец с саблями" для балета "Гаянэ".',
    funFact: 'Хачатурян — армянский композитор, народный артист СССР.'
  },
  {
    question: 'Кто написал оперу "Кармен"?',
    correctAnswer: 'Жорж Бизе',
    options: ['Жорж Бизе', 'Джузеппе Верди', 'Джакомо Пуччини', 'Рихард Вагнер'],
    category: 'composers',
    difficulty: 2,
    explanation: 'Жорж Бизе написал оперу "Кармен" в 1875 году на сюжет новеллы Проспера Мериме.',
    funFact: 'На премьере "Кармен" провалилась, но стала одной из самых популярных опер!'
  },
  {
    question: 'Какой композитор написал более 100 симфоний?',
    correctAnswer: 'Йозеф Гайдн',
    options: ['Йозеф Гайдн', 'Моцарт', 'Бетховен', 'Бах'],
    category: 'composers',
    difficulty: 2,
    explanation: 'Йозеф Гайдн написал 104 симфонии, его называют "отцом симфонии".',
    funFact: 'Гайдн сочинял музыку даже в старости, дожив до 77 лет.'
  },
  
  // === КОМПОЗИТОРЫ - Сложный уровень ===
  {
    question: 'Кто написал "Рапсодию в стиле блюз"?',
    correctAnswer: 'Джордж Гершвин',
    options: ['Джордж Гершвин', 'Леонард Бернстайн', 'Аарон Копленд', 'Дюк Эллингтон'],
    category: 'composers',
    difficulty: 3,
    explanation: 'Джордж Гершвин написал "Rhapsody in Blue" в 1924 году, соединив джаз и классику.',
    funFact: 'Гершвин — американский композитор, написавший знаменитую оперу "Порги и Бесс".'
  },
  {
    question: 'Какой композитор создал жанр программной увертюры?',
    correctAnswer: 'Гектор Берлиоз',
    options: ['Гектор Берлиоз', 'Ференц Лист', 'Фредерик Шопен', 'Роберт Шуман'],
    category: 'composers',
    difficulty: 3,
    explanation: 'Гектор Берлиоз — французский композитор, создатель программного симфонизма.',
    funFact: 'Берлиоз написал "Фантастическую симфонию" о любви к актрисе Гарриет Смитсон.'
  },
  {
    question: 'Кто написал "Полёт шмеля"?',
    correctAnswer: 'Николай Римский-Корсаков',
    options: ['Николай Римский-Корсаков', 'Пётр Чайковский', 'Александр Бородин', 'Цезарь Кюи'],
    category: 'composers',
    difficulty: 3,
    explanation: 'Николай Андреевич Римский-Корсаков написал музыку для оперы "Сказка о царе Салтане".',
    funFact: 'Римский-Корсаков был морским офицером и композитором!'
  },
  
  // === ЖАНРЫ МУЗЫКИ (genres) - Лёгкий уровень ===
  {
    question: 'Какой жанр музыки зародился в Новом Орлеане?',
    correctAnswer: 'Джаз',
    options: ['Джаз', 'Рок', 'Классика', 'Рэп'],
    category: 'genres',
    difficulty: 1,
    explanation: 'Джаз зародился в Новом Орлеане (США) в начале XX века на основе афроамериканской музыки.',
    funFact: 'Нов Орлеан считается родиной джаза, там проводят джазовые фестивали!'
  },
  {
    question: 'Как называется русская народная песня про "расцветшие яблони и груши"?',
    correctAnswer: 'Катюша',
    options: ['Катюша', 'Калинка', 'Ой, то не вечер', 'Подмосковные вечера'],
    category: 'genres',
    difficulty: 1,
    explanation: '"Катюша" — песня Матвея Блантера на стихи Михаила Исаковского, написана в 1938 году.',
    funFact: 'Во время войны "Катюшей" назвали легендарные реактивные миномёты!'
  },
  {
    question: 'Какой жанр музыки танцуют в балете?',
    correctAnswer: 'Классический танец',
    options: ['Классический танец', 'Народный танец', 'Современный танец', 'Бальный танец'],
    category: 'genres',
    difficulty: 1,
    explanation: 'Балет — вид театрального искусства, где классический танец соединяется с музыкой.',
    funFact: 'Первый балет был поставлен в Италии в XVI веке.'
  },
  {
    question: 'Как называется народная русская песня "Калинка, калинка..."?',
    correctAnswer: 'Калинка',
    options: ['Калинка', 'Катюша', 'Метелица', 'Ой, мороз, мороз'],
    category: 'genres',
    difficulty: 1,
    explanation: '"Калинка" — русская народная песня, ставшая символом России.',
    funFact: 'Мелодию "Калинки" знают во всём мире!'
  },
  {
    question: 'Какой жанр музыки появился в 1950-х годах?',
    correctAnswer: 'Рок-н-ролл',
    options: ['Рок-н-ролл', 'Хип-хоп', 'Техно', 'Регги'],
    category: 'genres',
    difficulty: 1,
    explanation: 'Рок-н-ролл появился в США в 1950-х, его король — Элвис Пресли.',
    funFact: 'Элвиса Пресли называют "королём рок-н-ролла"!'
  },
  
  // === ЖАНРЫ МУЗЫКИ - Средний уровень ===
  {
    question: 'Что такое опера?',
    correctAnswer: 'Музыкально-театральный жанр',
    options: ['Музыкально-театральный жанр', 'Танцевальный жанр', 'Инструментальный жанр', 'Народный жанр'],
    category: 'genres',
    difficulty: 2,
    explanation: 'Опера — жанр, где пение, музыка, драматургия и сценическое действие объединены.',
    funFact: 'Первая опера была поставлена в Италии в 1600 году.'
  },
  {
    question: 'Какой жанр афроамериканского происхождения выражает грусть?',
    correctAnswer: 'Блюз',
    options: ['Блюз', 'Джаз', 'Рок', 'Соул'],
    category: 'genres',
    difficulty: 2,
    explanation: 'Блюз (от blue — грустный) — жанр, выражающий печаль и жизненные трудности.',
    funFact: 'Блюз повлиял на развитие джаза, рока и поп-музыки.'
  },
  {
    question: 'Что такое симфония?',
    correctAnswer: 'Крупное произведение для оркестра',
    options: ['Крупное произведение для оркестра', 'Сольное произведение', 'Хоровое произведение', 'Танцевальная музыка'],
    category: 'genres',
    difficulty: 2,
    explanation: 'Симфония — крупное музыкальное произведение для симфонического оркестра.',
    funFact: 'Симфония обычно состоит из 4 частей.'
  },
  {
    question: 'Какой жанр музыки возник на Ямайке?',
    correctAnswer: 'Регги',
    options: ['Регги', 'Джаз', 'Самба', 'Танго'],
    category: 'genres',
    difficulty: 2,
    explanation: 'Регги — жанр, возникший на Ямайке в 1960-х годах. Знаменитый исполнитель — Боб Марли.',
    funFact: 'Боб Марли — самая известная звезда регги во всём мире!'
  },
  {
    question: 'Что такое концерт в классической музыке?',
    correctAnswer: 'Произведение для солиста с оркестром',
    options: ['Произведение для солиста с оркестром', 'Музыкальное выступление', 'Хоровое пение', 'Танцевальный номер'],
    category: 'genres',
    difficulty: 2,
    explanation: 'Концерт — произведение, где солист (инструмент) выступает с оркестром.',
    funFact: 'Пианист играет фортепианный концерт с оркестром.'
  },
  
  // === ЖАНРЫ МУЗЫКИ - Сложный уровень ===
  {
    question: 'Какой жанр возник в Вене в XVIII веке?',
    correctAnswer: 'Венская классическая школа',
    options: ['Венская классическая школа', 'Романтизм', 'Импрессионизм', 'Модернизм'],
    category: 'genres',
    difficulty: 3,
    explanation: 'Венская классическая школа — стиль Гайдна, Моцарта, Бетховена.',
    funFact: 'Вена — музыкальная столица Европы!'
  },
  {
    question: 'Что такое полифония?',
    correctAnswer: 'Многоголосие',
    options: ['Многоголосие', 'Одноголосие', 'Хоровое пение', 'Инструментальная музыка'],
    category: 'genres',
    difficulty: 3,
    explanation: 'Полифония — вид многоголосия, где несколько мелодий звучат одновременно.',
    funFact: 'Мастер полифонии — Иоганн Себастьян Бах.'
  },
  {
    question: 'Какой жанр музыки создал Клод Дебюсси?',
    correctAnswer: 'Импрессионизм',
    options: ['Импрессионизм', 'Экспрессионизм', 'Минимализм', 'Неоклассицизм'],
    category: 'genres',
    difficulty: 3,
    explanation: 'Клод Дебюсси — основатель музыкального импрессионизма.',
    funFact: 'Дебюсси написал знаменитую пьесу "Лунный свет".'
  },
  
  // === РУССКИЕ НАРОДНЫЕ ПЕСНИ (folk) - Лёгкий уровень ===
  {
    question: 'Кто написал музыку к песне "Катюша"?',
    correctAnswer: 'Матвей Блантер',
    options: ['Матвей Блантер', 'Дмитрий Шостакович', 'Исаак Дунаевский', 'Василий Соловьёв-Седой'],
    category: 'folk',
    difficulty: 1,
    explanation: 'Матвей Блантер написал музыку, Михаил Исаковский — стихи к песне "Катюша".',
    funFact: 'Блантер также написал "В лесу прифронтовом" и другие песни.'
  },
  {
    question: 'Как называется русский народный танец?',
    correctAnswer: 'Хоровод',
    options: ['Хоровод', 'Вальс', 'Танго', 'Полька'],
    category: 'folk',
    difficulty: 1,
    explanation: 'Хоровод — русский народный танец, где участники двигаются по кругу.',
    funFact: 'Хоровод — один из древнейших танцев, связан с языческими обрядами.'
  },
  {
    question: 'Какой инструмент сопровождает русские народные песни?',
    correctAnswer: 'Балалайка',
    options: ['Балалайка', 'Скрипка', 'Гитара', 'Гармонь'],
    category: 'folk',
    difficulty: 1,
    explanation: 'Балалайка — традиционный инструмент для аккомпанемента русским песням.',
    funFact: 'Балалайка символизирует русскую культуру во всём мире!'
  },
  {
    question: 'Что такое частушка?',
    correctAnswer: 'Короткая народная песенка',
    options: ['Короткая народная песенка', 'Длинная былина', 'Инструментальная пьеса', 'Хоровая песня'],
    category: 'folk',
    difficulty: 1,
    explanation: 'Частушка — короткая народная песенка юмористического содержания.',
    funFact: 'Частушки часто поют под гармонь или балалайку!'
  },
  {
    question: 'Кто написал песню "Подмосковные вечера"?',
    correctAnswer: 'Василий Соловьёв-Седой',
    options: ['Василий Соловьёв-Седой', 'Матвей Блантер', 'Исаак Дунаевский', 'Дмитрий Шостакович'],
    category: 'folk',
    difficulty: 1,
    explanation: 'Василий Соловьёв-Седой написал музыку, Михаил Матусовский — стихи.',
    funFact: 'Песня стала популярной после фильма "В дни спартакиады" в 1956 году.'
  },
  
  // === РУССКИЕ НАРОДНЫЕ ПЕСНИ - Средний уровень ===
  {
    question: 'Что такое былина?',
    correctAnswer: 'Русская эпическая песня',
    options: ['Русская эпическая песня', 'Свадебная песня', 'Плясовая песня', 'Колыбельная'],
    category: 'folk',
    difficulty: 2,
    explanation: 'Былины — русские народные эпические песни о богатырях и исторических событиях.',
    funFact: 'Илья Муромец, Добрыня Никитич — герои былин!'
  },
  {
    question: 'Как называется русская народная песня "Ой, мороз, мороз..."?',
    correctAnswer: 'Лирическая песня',
    options: ['Лирическая песня', 'Плясовая песня', 'Свадебная песня', 'Частушка'],
    category: 'folk',
    difficulty: 2,
    explanation: '"Ой, мороз, мороз" — русская народная лирическая песня о любви.',
    funFact: 'Эта песня передавалась из поколения в поколение!'
  },
  {
    question: 'Какой русский композитор собирал народные песни?',
    correctAnswer: 'Николай Римский-Корсаков',
    options: ['Николай Римский-Корсаков', 'Пётр Чайковский', 'Сергей Рахманинов', 'Александр Скрябин'],
    category: 'folk',
    difficulty: 2,
    explanation: 'Римский-Корсаков создал "Сборник русских народных песен" из 100 мелодий.',
    funFact: 'Народные мелодии вдохновляли многих русских композиторов!'
  },
  {
    question: 'Что такое обрядовая песня?',
    correctAnswer: 'Песня, исполняемая во время обрядов',
    options: ['Песня, исполняемая во время обрядов', 'Песня для концерта', 'Танцевальная музыка', 'Инструментальная пьеса'],
    category: 'folk',
    difficulty: 2,
    explanation: 'Обрядовые песни сопровождали свадьбы, календарные праздники, похороны.',
    funFact: 'Колядки — рождественские обрядовые песни.'
  },
  {
    question: 'Какая русская песня звучит в фильме "Весёлые ребята"?',
    correctAnswer: 'Марш весёлых ребят',
    options: ['Марш весёлых ребят', 'Катюша', 'Калинка', 'Подмосковные вечера'],
    category: 'folk',
    difficulty: 2,
    explanation: 'Исаак Дунаевский написал музыку к фильму "Весёлые ребята" (1934).',
    funFact: 'Леонид Утёсов стал первым исполнителем джаза в СССР!'
  },
  
  // === РУССКИЕ НАРОДНЫЕ ПЕСНИ - Сложный уровень ===
  {
    question: 'Кто первым записал русские народные былины?',
    correctAnswer: 'Кирша Данилов',
    options: ['Кирша Данилов', 'Александр Пушкин', 'Николай Гоголь', 'Владимир Даль'],
    category: 'folk',
    difficulty: 3,
    explanation: 'Кирша Данилов в XVIII веке составил первый сборник русских былин.',
    funFact: 'Сборник Данилова содержит 71 былину и историческую песню.'
  },
  {
    question: 'Какой жанр русской народной песни исполняется на свадьбе?',
    correctAnswer: 'Свадебная песня',
    options: ['Свадебная песня', 'Былина', 'Частушка', 'Колыбельная'],
    category: 'folk',
    difficulty: 3,
    explanation: 'Свадебные песни — важная часть русского свадебного обряда.',
    funFact: 'Свадебные песни делятся на величальные, корильные и лирические.'
  },
  
  // === МУЗЫКАЛЬНЫЕ ТЕРМИНЫ (terms) - Лёгкий уровень ===
  {
    question: 'Что означает "пиано" в музыке?',
    correctAnswer: 'Тихо',
    options: ['Тихо', 'Громко', 'Быстро', 'Медленно'],
    category: 'terms',
    difficulty: 1,
    explanation: 'Пиано (p) — музыкальный термин, означающий тихое исполнение.',
    funFact: 'От слова "пиано" произошло название инструмента пианино!'
  },
  {
    question: 'Что такое мелодия?',
    correctAnswer: 'Главный музыкальный голос',
    options: ['Главный музыкальный голос', 'Аккомпанемент', 'Ритм', 'Тембр'],
    category: 'terms',
    difficulty: 1,
    explanation: 'Мелодия — одноголосно выраженная музыкальная мысль, главное в музыке.',
    funFact: 'Мелодию можно напеть без слов — она запоминается!'
  },
  {
    question: 'Что такое ритм в музыке?',
    correctAnswer: 'Чередование звуков и пауз',
    options: ['Чередование звуков и пауз', 'Громкость звука', 'Высота звука', 'Тембр звука'],
    category: 'terms',
    difficulty: 1,
    explanation: 'Ритм — организация музыки во времени, чередование длительностей.',
    funFact: 'Ритм — основа музыки, без него нет мелодии!'
  },
  {
    question: 'Что такое хор?',
    correctAnswer: 'Коллектив певцов',
    options: ['Коллектив певцов', 'Коллектив танцоров', 'Оркестр', 'Театр'],
    category: 'terms',
    difficulty: 1,
    explanation: 'Хор — певческий коллектив, исполняющий вокальную музыку.',
    funFact: 'Хор может быть детским, женским, мужским или смешанным.'
  },
  {
    question: 'Что такое темп?',
    correctAnswer: 'Скорость исполнения музыки',
    options: ['Скорость исполнения музыки', 'Громкость музыки', 'Высота звуков', 'Окраска звука'],
    category: 'terms',
    difficulty: 1,
    explanation: 'Темп — скорость исполнения музыкального произведения.',
    funFact: 'Темп измеряется в ударах в минуту (BPM).'
  },
  
  // === МУЗЫКАЛЬНЫЕ ТЕРМИНЫ - Средний уровень ===
  {
    question: 'Что такое динамика в музыке?',
    correctAnswer: 'Громкость звучания',
    options: ['Громкость звучания', 'Скорость исполнения', 'Высота звуков', 'Ритмический рисунок'],
    category: 'terms',
    difficulty: 2,
    explanation: 'Динамика — изменения громкости в музыке: от пиано до форте.',
    funFact: 'Крещендо — постепенное усиление звука, диминуэндо — ослабление.'
  },
  {
    question: 'Что такое аккомпанемент?',
    correctAnswer: 'Сопровождение мелодии',
    options: ['Сопровождение мелодии', 'Главная мелодия', 'Сольное выступление', 'Хоровое пение'],
    category: 'terms',
    difficulty: 2,
    explanation: 'Аккомпанемент — гармоническое и ритмическое сопровождение мелодии.',
    funFact: 'Аккомпаниатор — музыкант, который играет сопровождение.'
  },
  {
    question: 'Что такое тембр?',
    correctAnswer: 'Окраска звука',
    options: ['Окраска звука', 'Громкость звука', 'Высота звука', 'Длительность звука'],
    category: 'terms',
    difficulty: 2,
    explanation: 'Тембр — индивидуальная окраска звука, позволяющая различать инструменты.',
    funFact: 'Благодаря тембру мы отличаем скрипку от флейты!'
  },
  {
    question: 'Что означает "стаккато"?',
    correctAnswer: 'Отрывистое исполнение',
    options: ['Отрывистое исполнение', 'Плавное исполнение', 'Громкое исполнение', 'Тихое исполнение'],
    category: 'terms',
    difficulty: 2,
    explanation: 'Стаккато — короткое, отрывистое исполнение нот.',
    funFact: 'Стаккато обозначается точкой над или под нотой.'
  },
  {
    question: 'Что такое гамма?',
    correctAnswer: 'Последовательность нот по порядку',
    options: ['Последовательность нот по порядку', 'Музыкальный аккорд', 'Ритмический рисунок', 'Мелодический оборот'],
    category: 'terms',
    difficulty: 2,
    explanation: 'Гамма — последовательность нот по восходящей или нисходящей.',
    funFact: 'Мажорная гамма звучит весело, минорная — грустно.'
  },
  
  // === МУЗЫКАЛЬНЫЕ ТЕРМИНЫ - Сложный уровень ===
  {
    question: 'Что такое фактура в музыке?',
    correctAnswer: 'Строение музыкальной ткани',
    options: ['Строение музыкальной ткани', 'Громкость звучания', 'Скорость исполнения', 'Форма произведения'],
    category: 'terms',
    difficulty: 3,
    explanation: 'Фактура — способ сочетания голосов в музыкальном произведении.',
    funFact: 'Фактура бывает монодическая, полифоническая, гомофонная.'
  },
  {
    question: 'Что такое лады в музыке?',
    correctAnswer: 'Система взаимосвязи звуков',
    options: ['Система взаимосвязи звуков', 'Музыкальный инструмент', 'Темп музыки', 'Динамика музыки'],
    category: 'terms',
    difficulty: 3,
    explanation: 'Лад — система связей звуков, определяющая настроение музыки.',
    funFact: 'Основные лады — мажор (весёлый) и минор (грустный).'
  },
  {
    question: 'Что такое модуляция в музыке?',
    correctAnswer: 'Переход в другую тональность',
    options: ['Переход в другую тональность', 'Изменение темпа', 'Изменение громкости', 'Смена ритма'],
    category: 'terms',
    difficulty: 3,
    explanation: 'Модуляция — переход из одной тональности в другую.',
    funFact: 'Модуляция создаёт развитие и разнообразие в музыке.'
  },
  {
    question: 'Что такое контрапункт?',
    correctAnswer: 'Полифоническое сочетание мелодий',
    options: ['Полифоническое сочетание мелодий', 'Аккорд', 'Ритмический рисунок', 'Динамический оттенок'],
    category: 'terms',
    difficulty: 3,
    explanation: 'Контрапункт — искусство сочетания нескольких мелодий.',
    funFact: 'Контрапункт — важнейшая техника в музыке Баха.'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', description: '1-4 класс', count: 8, time: 0, diffLevel: 1, xp: 70 },
  1: { name: 'Средний', description: '5-8 класс', count: 12, time: 30, diffLevel: 2, xp: 100 },
  2: { name: 'Сложный', description: '9-11 класс', count: 15, time: 25, diffLevel: 3, xp: 120 }
}

// Настройки категорий
const categorySettings = {
  notes: { name: 'Нотная грамота', icon: '🎵', color: 'from-violet-400 to-purple-500', lucideIcon: Music },
  instruments: { name: 'Музыкальные инструменты', icon: '🎹', color: 'from-amber-400 to-orange-500', lucideIcon: Piano },
  composers: { name: 'Композиторы', icon: '🎼', color: 'from-rose-400 to-pink-500', lucideIcon: Disc },
  genres: { name: 'Жанры музыки', icon: '🎶', color: 'from-cyan-400 to-teal-500', lucideIcon: Headphones },
  folk: { name: 'Русские народные песни', icon: '🪗', color: 'from-red-400 to-rose-500', lucideIcon: Mic },
  terms: { name: 'Музыкальные термины', icon: '📖', color: 'from-emerald-400 to-green-500', lucideIcon: Music }
}

export default function MusicGame({ gradeId = 0, onExperience }: MusicGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<MusicCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<MusicQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  
  const currentQuestion = currentQuestions[currentIndex]
  const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
  
  // Инициализация игры
  const startGame = useCallback(() => {
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    
    // Фильтруем вопросы по категории и сложности
    let filteredQuestions = questions.filter(q => {
      const diffMatch = q.difficulty <= settings.diffLevel
      const catMatch = selectedCategory === 'all' || q.category === selectedCategory
      return diffMatch && catMatch
    })
    
    // Перемешиваем
    filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5)
    
    // Берём нужное количество
    const gameQuestions = filteredQuestions.slice(0, settings.count)
    
    setCurrentQuestions(gameQuestions)
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setHearts(3)
    setTimeLeft(settings.time)
    setAnswered(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setGameState('playing')
  }, [difficulty, selectedCategory])
  
  // Генерация перемешанных вариантов ответа
  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return []
    return [...currentQuestion.options].sort(() => Math.random() - 0.5)
  }, [currentQuestion])
  
  // Обработка таймаута
  const handleTimeout = useCallback(() => {
    if (!answered) {
      playError()
      setAnswered(true)
      setStreak(0)
      setHearts(prev => prev - 1)
      setShowExplanation(true)
    }
  }, [answered, playError])
  
  // Завершение игры
  const endGame = useCallback(() => {
    playWin()
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    onExperience?.(earnedXP)
    setGameState('result')
  }, [playWin, score, settings, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setTimeLeft(settings.time)
      setAnswered(false)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      endGame()
    }
  }, [currentIndex, currentQuestions.length, settings.time, endGame])
  
  // Таймер
  useEffect(() => {
    if (gameState === 'playing' && settings.time > 0 && !answered) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeout()
            return settings.time
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [gameState, answered, settings.time, handleTimeout])
  
  // Автопереход после ответа
  useEffect(() => {
    if (answered) {
      const timer = setTimeout(() => {
        if (hearts <= 0) {
          endGame()
        } else {
          nextQuestion()
        }
      }, showExplanation ? 3500 : 2000)
      return () => clearTimeout(timer)
    }
  }, [answered, hearts, showExplanation, endGame, nextQuestion])
  
  // Обработка ответа
  const handleAnswer = (index: number) => {
    if (answered) return
    
    const answer = shuffledOptions[index]
    const isCorrect = answer === currentQuestion.correctAnswer
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (isCorrect) {
      playSuccess()
      const streakBonus = Math.min(streak * 2, 10)
      setScore(prev => prev + 10 + streakBonus)
      setStreak(prev => {
        const newStreak = prev + 1
        if (newStreak > maxStreak) setMaxStreak(newStreak)
        if (newStreak === 5) playLevelUp()
        return newStreak
      })
    } else {
      playError()
      setStreak(0)
      setHearts(prev => prev - 1)
    }
    
    setShowExplanation(true)
  }
  
  // Рендер экрана настройки
  if (gameState === 'setup') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-3xl">🎵</span>
            Музыка
            <span className="text-3xl">🎹</span>
          </h2>
          <p className="text-gray-400">Проверь знания по музыкальному искусству!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Music className="w-5 h-5 text-violet-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-violet-400 bg-violet-400/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">📝</span>
              <div className="font-bold mt-1">Все темы</div>
            </motion.button>
            
            {Object.entries(categorySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key as MusicCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${value.color} border-transparent`
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{value.icon}</span>
                <div className="font-bold mt-1 text-xs sm:text-sm">{value.name}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Выбор сложности */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Сложность
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            {Object.entries(difficultySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setDifficulty(Number(key))}
                className={`p-3 rounded-xl border-2 transition-all ${
                  difficulty === Number(key)
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{value.name}</div>
                <div className="text-xs text-gray-400">{value.description}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {value.count} вопросов
                  {value.time > 0 && ` • ${value.time}сек`}
                </div>
                <div className="text-xs text-yellow-400 mt-1">+{value.xp} XP</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Кнопка старта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-2xl"
          >
            <Music className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    const accuracy = Math.round((score / (settings.count * 10)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-2xl sm:text-3xl font-bold">Отлично!</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-xs text-gray-400">Очков</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{earnedXP}</div>
              <div className="text-xs text-gray-400">XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-xs text-gray-400">Точность</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{maxStreak}</div>
              <div className="text-xs text-gray-400">Макс. серия</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={() => setGameState('setup')}
            variant="outline"
            className="flex-1"
          >
            К настройкам
          </Button>
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Играть снова
          </Button>
        </div>
      </motion.div>
    )
  }
  
  // Рендер игры
  return (
    <div className="space-y-4">
      {/* Прогресс */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${i < hearts ? 'text-red-400 fill-red-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
          
          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold">x{streak}</span>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Прогресс бар */}
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-400 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
        />
      </div>
      
      {/* Таймер */}
      {settings.time > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`} />
          <span className={`font-mono text-lg ${timeLeft <= 5 ? 'text-red-400' : ''}`}>
            {timeLeft}с
          </span>
        </div>
      )}
      
      {/* Карточка вопроса */}
      {currentQuestion && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Card className={`bg-gradient-to-br ${categorySettings[currentQuestion.category].color} border-0`}>
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">
                  {categorySettings[currentQuestion.category].icon} {categorySettings[currentQuestion.category].name}
                </div>
                
                <div className="text-xl sm:text-2xl font-bold">
                  {currentQuestion.question}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Варианты ответа */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((option, index) => {
              const isCorrect = option === currentQuestion.correctAnswer
              const isSelected = selectedAnswer === index
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 rounded-xl border-2 font-medium text-base transition-all ${
                    answered
                      ? isCorrect
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : isSelected
                          ? 'border-red-400 bg-red-400/20 text-red-300'
                          : 'border-white/10 text-gray-500'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    {answered && isCorrect && <Check className="w-5 h-5" />}
                    {answered && isSelected && !isCorrect && <X className="w-5 h-5" />}
                    {option}
                  </div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Объяснение */}
          {answered && showExplanation && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white/10 rounded-xl space-y-2"
            >
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">💡 Объяснение: </span>
                {currentQuestion.explanation}
              </div>
              {currentQuestion.funFact && (
                <div className="text-sm text-purple-300">
                  <span className="font-bold">✨ Интересный факт: </span>
                  {currentQuestion.funFact}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
      
      {/* Счётчик вопросов */}
      <div className="text-center text-gray-400">
        {currentIndex + 1} / {currentQuestions.length}
      </div>
    </div>
  )
}
