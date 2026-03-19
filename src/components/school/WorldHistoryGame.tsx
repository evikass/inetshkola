'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Globe, Landmark, Crown, Sword, Scroll, Castle, 
  CheckCircle2, XCircle, Clock, Lightbulb, Target, Trophy, Star
} from 'lucide-react'

interface WorldHistoryGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type QuestionCategory = 'ancient' | 'medieval' | 'renaissance' | 'modern' | 'wars' | 'civilizations'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  category: QuestionCategory
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const categoryIcons: Record<QuestionCategory, typeof Globe> = {
  ancient: Landmark,
  medieval: Castle,
  renaissance: Scroll,
  modern: Globe,
  wars: Sword,
  civilizations: Crown
}

const categoryNames: Record<QuestionCategory, string> = {
  ancient: 'Древний мир',
  medieval: 'Средние века',
  renaissance: 'Возрождение',
  modern: 'Новое время',
  wars: 'Войны',
  civilizations: 'Цивилизации'
}

const questions: Question[] = [
  // Древний мир - Easy
  {
    question: 'Какая цивилизация построила пирамиды в Гизе?',
    options: ['Римская', 'Греческая', 'Египетская', 'Персидская'],
    correctAnswer: 2,
    category: 'ancient',
    explanation: 'Пирамиды Гизы были построены древними египтянами около 2500 г. до н.э. Великая пирамида Хеопса — одно из семи чудес света.',
    difficulty: 'easy'
  },
  {
    question: 'Кто был первым императором Рима?',
    options: ['Юлий Цезарь', 'Октавиан Август', 'Нерон', 'Калигула'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Октавиан Август стал первым римским императором в 27 г. до н.э. Юлий Цезарь был диктатором, но не носил титул императора.',
    difficulty: 'easy'
  },
  {
    question: 'В каком городе находились висячие сады Семирамиды?',
    options: ['Афины', 'Рим', 'Вавилон', 'Мемфис'],
    correctAnswer: 2,
    category: 'ancient',
    explanation: 'Висячие сады Семирамиды — одно из семи чудес света, находились в Вавилоне (современный Ирак). Были созданы около 600 г. до н.э.',
    difficulty: 'easy'
  },
  {
    question: 'Какое море греки называли "нашим морем" (Mare Nostrum)?',
    options: ['Чёрное', 'Средиземное', 'Красное', 'Каспийское'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Римляне называли Средиземное море Mare Nostrum ("Наше море"), так как их империя окружала его со всех сторон.',
    difficulty: 'easy'
  },
  {
    question: 'Кто написал "Илиаду" и "Одиссею"?',
    options: ['Софокл', 'Гомер', 'Аристотель', 'Платон'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Гомер — легендарный древнегреческий поэт, автор эпических поэм "Илиада" (о Троянской войне) и "Одиссея" (о возвращении Одиссея).',
    difficulty: 'easy'
  },

  // Древний мир - Medium
  {
    question: 'Какой кодекс законов создал вавилонский царь Хаммурапи?',
    options: ['Кодекс справедливости', 'Законы Хаммурапи', 'Вавилонский устав', 'Правила города'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Законы Хаммурапи (около 1750 г. до н.э.) — один из древнейших сводов законов. Содержал 282 статьи, включая принцип "око за око".',
    difficulty: 'medium'
  },
  {
    question: 'Какая битва закончила Персидские войны в 479 г. до н.э.?',
    options: ['Марафон', 'Фермопилы', 'Платеи', 'Саламин'],
    correctAnswer: 2,
    category: 'ancient',
    explanation: 'Битва при Платеях (479 г. до н.э.) окончательно разгромила персидскую армию в Греции. Это завершило Персидские войны.',
    difficulty: 'medium'
  },
  {
    question: 'Какое государство основал Александр Македонский в Египте?',
    options: ['Каир', 'Александрию', 'Мемфис', 'Фивы'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Александр Великий основал Александрию в 331 г. до н.э. Она стала центром эллинистической культуры с знаменитой библиотекой.',
    difficulty: 'medium'
  },

  // Древний мир - Hard
  {
    question: 'Какая династия правила Китаем, когда была построена Великая Китайская стена?',
    options: ['Хань', 'Цинь', 'Тан', 'Мин'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Династия Цинь (221-206 гг. до н.э.) объединила Китай и начала строительство Великой стены. Император Цинь Шихуанди приказал соединить разрозненные участки.',
    difficulty: 'hard'
  },
  {
    question: 'Какой город был столицей империи инков?',
    options: ['Теночтитлан', 'Куско', 'Мачу-Пикчу', 'Чичен-Ица'],
    correctAnswer: 1,
    category: 'ancient',
    explanation: 'Куско был столицей империи инков (XIII-XVI вв.). Расположен в Андах на высоте 3400 м. Был захвачен испанцами в 1533 г.',
    difficulty: 'hard'
  },

  // Средние века - Easy
  {
    question: 'Что такое феодализм?',
    options: [
      'Форма правления, где власть у народа',
      'Система, где земля даётся за службу',
      'Тип монастыря',
      'Вид ремесла'
    ],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Феодализм — система, где сеньор даёт вассалу землю (феод) за военную службу и верность. Основа средневекового общества.',
    difficulty: 'easy'
  },
  {
    question: 'Как назывались воины-монахи, охранявшие паломников в Святой земле?',
    options: ['Самураи', 'Тамплиеры', 'Викинги', 'Рыцари Круглого стола'],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Тамплиеры (рыцари Храма) — военный орден, основанный в 1119 г. Охраняли паломников в Иерусалиме. Были богатейшей организацией.',
    difficulty: 'easy'
  },
  {
    question: 'Какое событие произошло в 1066 году в Англии?',
    options: [
      'Подписание Великой хартии вольностей',
      'Нормандское завоевание',
      'Столетняя война',
      'Война Алой и Белой розы'
    ],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'В 1066 г. Вильгельм Завоеватель из Нормандии вторгся в Англию и победил при Гастингсе. Это изменило историю Англии.',
    difficulty: 'easy'
  },
  {
    question: 'Что такое крестовые походы?',
    options: [
      'Походы за новыми землями',
      'Военные экспедиции для освобождения Святой земли',
      'Торговые миссии',
      'Паломничества монахов'
    ],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Крестовые походы (1096-1291) — военные экспедиции европейцев для освобождения Иерусалима и Святой земли от мусульман.',
    difficulty: 'easy'
  },

  // Средние века - Medium
  {
    question: 'Какая эпидемия унесла треть населения Европы в XIV веке?',
    options: ['Оспа', 'Холера', 'Чума', 'Тиф'],
    correctAnswer: 2,
    category: 'medieval',
    explanation: 'Чёрная смерть (чума) 1347-1351 гг. унесла 30-60% населения Европы. Распространилась по торговым путям из Азии.',
    difficulty: 'medium'
  },
  {
    question: 'Какая война длилась 116 лет (1337-1453)?',
    options: [
      'Тридцатилетняя война',
      'Столетняя война',
      'Война Алой и Белой розы',
      'Северная война'
    ],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Столетняя война между Англией и Францией длилась 116 лет. Закончилась победой Франции, Англия потеряла владения на континенте.',
    difficulty: 'medium'
  },
  {
    question: 'В каком году пал Константинополь, завершив Византийскую империю?',
    options: ['1204', '1341', '1453', '1492'],
    correctAnswer: 2,
    category: 'medieval',
    explanation: '29 мая 1453 г. Константинополь был захвачен османами под предводительством Мехмеда II. Конец Византийской империи.',
    difficulty: 'medium'
  },

  // Средние века - Hard
  {
    question: 'Какой документ подписал английский король Иоанн Безземельный в 1215 году?',
    options: [
      'Билль о правах',
      'Великую хартию вольностей',
      'Грамоту о независимости',
      'Указ о престолонаследии'
    ],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Magna Carta (Великая хартия вольностей) ограничила власть короля и дала права баронам. Основа конституционного права.',
    difficulty: 'hard'
  },
  {
    question: 'Какое государство создал Чингисхан?',
    options: ['Китай', 'Монгольскую империю', 'Золотую Орду', 'Персию'],
    correctAnswer: 1,
    category: 'medieval',
    explanation: 'Чингисхан (1206-1227) создал Монгольскую империю — крупнейшую сухопутную империю в истории. Простиралась от Китая до Европы.',
    difficulty: 'hard'
  },

  // Возрождение - Easy
  {
    question: 'Кто написал картину "Мона Лиза"?',
    options: ['Рафаэль', 'Микеланджело', 'Леонардо да Винчи', 'Тициан'],
    correctAnswer: 2,
    category: 'renaissance',
    explanation: 'Леонардо да Винчи написал "Мону Лизу" около 1503-1519 гг. Это самая известная картина в мире, хранится в Лувре.',
    difficulty: 'easy'
  },
  {
    question: 'Что означает слово "Ренессанс"?',
    options: ['Золотой век', 'Возрождение', 'Просвещение', 'Расцвет'],
    correctAnswer: 1,
    category: 'renaissance',
    explanation: 'Ренессанс (фр. Renaissance) означает "Возрождение". Это эпоха возрождения интереса к античной культуре и искусству (XIV-XVI вв.).',
    difficulty: 'easy'
  },
  {
    question: 'Кто написал "Божественную комедию"?',
    options: ['Франческо Петрарка', 'Джованни Боккаччо', 'Данте Алигьери', 'Никколо Макиавелли'],
    correctAnswer: 2,
    category: 'renaissance',
    explanation: 'Данте Алигьери (1265-1321) написал "Божественную комедию" — поэму о путешествии через Ад, Чистилище и Рай.',
    difficulty: 'easy'
  },

  // Возрождение - Medium
  {
    question: 'Какое изобретение Иоганна Гутенберга изменило мир в XV веке?',
    options: ['Компас', 'Печатный станок', 'Телескоп', 'Микроскоп'],
    correctAnswer: 1,
    category: 'renaissance',
    explanation: 'Гутенберг изобрёл печатный станок с подвижными литерами около 1440 г. Это сделало книги доступными и ускорило распространение знаний.',
    difficulty: 'medium'
  },
  {
    question: 'Кто был автором книги "Государь"?',
    options: ['Томас Мор', 'Эразм Роттердамский', 'Никколо Макиавелли', 'Жан Боден'],
    correctAnswer: 2,
    category: 'renaissance',
    explanation: 'Макиавелли написал "Государя" в 1513 г. Трактат о политической власти, где цель оправдывает средства. Основоположник политологии.',
    difficulty: 'medium'
  },
  {
    question: 'В каком городе началось Возрождение?',
    options: ['Рим', 'Венеция', 'Флоренция', 'Милан'],
    correctAnswer: 2,
    category: 'renaissance',
    explanation: 'Возрождение началось во Флоренции в XIV веке. Семья Медичи покровительствовала искусству, там работали Леонардо, Микеланджело, Рафаэль.',
    difficulty: 'medium'
  },

  // Новое время - Easy
  {
    question: 'Кто открыл Америку в 1492 году?',
    options: ['Васко да Гама', 'Христофор Колумб', 'Фернандо Магеллан', 'Америго Веспуччи'],
    correctAnswer: 1,
    category: 'modern',
    explanation: 'Колумб достиг Америки 12 октября 1492 г., ища западный путь в Индию. Континент назван позже в честь Америго Веспуччи.',
    difficulty: 'easy'
  },
  {
    question: 'Какое событие произошло во Франции 14 июля 1789 года?',
    options: [
      'Казнь Людовика XVI',
      'Взятие Бастилии',
      'Провозглашение республики',
      'Коронация Наполеона'
    ],
    correctAnswer: 1,
    category: 'modern',
    explanation: 'Взятие Бастилии 14 июля 1789 г. — начало Великой французской революции. Этот день — национальный праздник Франции.',
    difficulty: 'easy'
  },
  {
    question: 'Кто был первым президентом США?',
    options: ['Томас Джефферсон', 'Бенджамин Франклин', 'Джордж Вашингтон', 'Джон Адамс'],
    correctAnswer: 2,
    category: 'modern',
    explanation: 'Джордж Вашингтон (1789-1797) — первый президент США, главнокомандующий в Войне за независимость. "Отец нации".',
    difficulty: 'easy'
  },

  // Новое время - Medium
  {
    question: 'Какая революция началась в Англии в XVII веке и привела к казни короля?',
    options: ['Американская', 'Французская', 'Английская буржуазная', 'Промышленная'],
    correctAnswer: 2,
    category: 'modern',
    explanation: 'Английская революция (1640-1660) привела к казни Карла I в 1649 г. и установлению республики под руководством Кромвеля.',
    difficulty: 'medium'
  },
  {
    question: 'В каком году была написана Декларация независимости США?',
    options: ['1774', '1776', '1783', '1789'],
    correctAnswer: 1,
    category: 'modern',
    explanation: 'Декларация независимости США принята 4 июля 1776 г. Автор — Томас Джефферсон. День независимости США.',
    difficulty: 'medium'
  },
  {
    question: 'Какое событие положило начало Промышленной революции?',
    options: [
      'Изобретение паровой машины',
      'Открытие электричества',
      'Создание двигателя',
      'Изобретение телефона'
    ],
    correctAnswer: 0,
    category: 'modern',
    explanation: 'Паровая машина Джеймса Уатта (1769) начала Промышленную революцию. Механизация производства, фабрики, города.',
    difficulty: 'medium'
  },

  // Новое время - Hard
  {
    question: 'Какой конгресс определил границы Европы после поражения Наполеона?',
    options: ['Парижский', 'Венский', 'Берлинский', 'Лондонский'],
    correctAnswer: 1,
    category: 'modern',
    explanation: 'Венский конгресс (1814-1815) перекроил карту Европы после Наполеоновских войн. Россия получила Польшу, создан "Священный союз".',
    difficulty: 'hard'
  },
  {
    question: 'Какая страна первой осуществила промышленную революцию?',
    options: ['Франция', 'Германия', 'Англия', 'США'],
    correctAnswer: 2,
    category: 'modern',
    explanation: 'Англия первой прошла промышленную революцию (1760-1840). Причины: колонии, уголь, железная руда, капитал, политическая стабильность.',
    difficulty: 'hard'
  },

  // Войны - Easy
  {
    question: 'Какая война длилась с 1914 по 1918 год?',
    options: ['Вторая мировая', 'Первая мировая', 'Гражданская в России', 'Крымская'],
    correctAnswer: 1,
    category: 'wars',
    explanation: 'Первая мировая война (1914-1918) — первый глобальный конфликт. Участвовало 38 государств, погибло около 17 млн человек.',
    difficulty: 'easy'
  },
  {
    question: 'Какое событие стало поводом к началу Первой мировой войны?',
    options: [
      'Убийство эрцгерцога Франца Фердинанда',
      'Нападение Германии на Францию',
      'Объявление войны Россией',
      'Вторжение в Бельгию'
    ],
    correctAnswer: 0,
    category: 'wars',
    explanation: 'Убийство Франца Фердинанда в Сараево 28 июня 1914 г. — повод к войне. Серб Гаврило Принцип застрелил наследника австрийского престола.',
    difficulty: 'easy'
  },
  {
    question: 'Когда началась Вторая мировая война?',
    options: ['1 сентября 1939', '22 июня 1941', '7 декабря 1941', '1 сентября 1945'],
    correctAnswer: 0,
    category: 'wars',
    explanation: '1 сентября 1939 г. Германия напала на Польшу — начало Второй мировой войны. 3 сентября Англия и Франция объявили войну Германии.',
    difficulty: 'easy'
  },

  // Войны - Medium
  {
    question: 'Какая битва стала переломной во Второй мировой войне на Восточном фронте?',
    options: ['Московская', 'Сталинградская', 'Курская', 'Битва за Берлин'],
    correctAnswer: 1,
    category: 'wars',
    explanation: 'Сталинградская битва (1942-1943) — перелом в войне. Германия потеряла около 1,5 млн человек. Начало наступления Красной армии.',
    difficulty: 'medium'
  },
  {
    question: 'Какая битва стала переломной на Тихом океане?',
    options: ['Перл-Харбор', 'Мидуэй', 'Иводзима', 'Окинава'],
    correctAnswer: 1,
    category: 'wars',
    explanation: 'Битва при Мидуэе (июнь 1942) — перелом на Тихом океане. США уничтожили 4 японских авианосца. Япония перешла к обороне.',
    difficulty: 'medium'
  },
  {
    question: 'Какая битва считается крупнейшим танковым сражением истории?',
    options: ['Сталинградская', 'Курская', 'Битва на Калке', 'Битва при Эль-Аламейне'],
    correctAnswer: 1,
    category: 'wars',
    explanation: 'Курская битва (июль 1943) — крупнейшее танковое сражение. Под Прохоровкой около 1200 танков. СССР победил, началось освобождение.',
    difficulty: 'medium'
  },

  // Войны - Hard
  {
    question: 'Какой план Германии по войне с СССР назывался "Барбаросса"?',
    options: [
      'План молниеносной войны',
      'План бомбардировок городов',
      'План экономической блокады',
      'План высадки десанта'
    ],
    correctAnswer: 0,
    category: 'wars',
    explanation: 'План "Барбаросса" — план молниеносной войны против СССР (блицкриг). Предполагал разгром за 3-4 месяца. Провалился под Москвой.',
    difficulty: 'hard'
  },
  {
    question: 'В каком году закончилась Вьетнамская война?',
    options: ['1973', '1975', '1979', '1989'],
    correctAnswer: 1,
    category: 'wars',
    explanation: 'Вьетнамская война закончилась в 1975 г. падением Сайгона. США потерпели поражение, Вьетнам объединился под властью коммунистов.',
    difficulty: 'hard'
  },

  // Цивилизации - Easy
  {
    question: 'Какая цивилизация придумала ноль и создала календарь, которым мы пользуемся?',
    options: ['Египетская', 'Греческая', 'Майя', 'Римская'],
    correctAnswer: 2,
    category: 'civilizations',
    explanation: 'Майя изобрели ноль и создали точный календарь. Современный григорианский календарь основан на римском юлианском календаре.',
    difficulty: 'easy'
  },
  {
    question: 'Какая цивилизация создала письменность иероглифов?',
    options: ['Шумерская', 'Египетская', 'Китайская', 'Все перечисленные'],
    correctAnswer: 3,
    category: 'civilizations',
    explanation: 'Иероглифическую письменность создали шумеры, египтяне и китайцы независимо друг от друга. Это одна из древнейших систем письма.',
    difficulty: 'easy'
  },
  {
    question: 'Какая река была колыбелью древнеегипетской цивилизации?',
    options: ['Тигр', 'Евфрат', 'Нил', 'Инд'],
    correctAnswer: 2,
    category: 'civilizations',
    explanation: 'Нил — колыбель египетской цивилизации. Разливы реки удобряли землю, обеспечивая урожай. "Дар Нила" — так греки называли Египет.',
    difficulty: 'easy'
  },

  // Цивилизации - Medium
  {
    question: 'Какая империя была крупнейшей в истории по площади?',
    options: ['Монгольская', 'Британская', 'Римская', 'Российская'],
    correctAnswer: 1,
    category: 'civilizations',
    explanation: 'Британская империя в 1920 г. занимала 35,5 млн км² — крупнейшая в истории. "Солнце никогда не заходит над Британской империей".',
    difficulty: 'medium'
  },
  {
    question: 'Какой народ создал первый алфавит?',
    options: ['Египтяне', 'Финикийцы', 'Греки', 'Римляне'],
    correctAnswer: 1,
    category: 'civilizations',
    explanation: 'Финикийцы создали первый алфавит (около 1050 г. до н.э.) с 22 буквами. Греки добавили гласные, римляне адаптировали его.',
    difficulty: 'medium'
  },
  {
    question: 'Какая империя существовала дольше всех в истории?',
    options: ['Римская', 'Византийская', 'Священная Римская', 'Османская'],
    correctAnswer: 1,
    category: 'civilizations',
    explanation: 'Византийская (Восточная Римская) империя существовала около 1100 лет (330-1453). Пала после взятия Константинополя турками.',
    difficulty: 'medium'
  },

  // Цивилизации - Hard
  {
    question: 'Какой город считается древнейшим в мире (около 11000 лет)?',
    options: ['Дамаск', 'Иерихон', 'Вавилон', 'Ур'],
    correctAnswer: 1,
    category: 'civilizations',
    explanation: 'Иерихон на Западном берегу реки Иордан — древнейший город мира, населённый с 9000 г. до н.э. "Город пальм".',
    difficulty: 'hard'
  },
  {
    question: 'Какая цивилизация создала первую Конституцию в истории?',
    options: ['Афинская', 'Римская', 'Американская', 'Французская'],
    correctAnswer: 0,
    category: 'civilizations',
    explanation: 'Афинская конституция Солона (594 г. до н.э.) — первый писаный свод законов о государственном устройстве. Основа демократии.',
    difficulty: 'hard'
  }
]

export default function WorldHistoryGame({ gradeId = 5, onExperience }: WorldHistoryGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'all'>('all')
  const [gameStarted, setGameStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const filteredQuestions = questions.filter(q => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) return false
    if (difficulty === 'easy') return q.difficulty === 'easy'
    if (difficulty === 'medium') return q.difficulty === 'easy' || q.difficulty === 'medium'
    return true
  })

  const currentQ = filteredQuestions[currentQuestion]

  useEffect(() => {
    if (!gameStarted || gameOver || selectedAnswer !== null) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(-1)
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, gameOver, selectedAnswer, currentQuestion])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === currentQ?.correctAnswer

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft / 3)
      const difficultyMultiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.5 : 2
      const points = Math.round(10 * difficultyMultiplier + timeBonus)
      setScore(prev => prev + points)
      setCorrectAnswers(prev => prev + 1)
      setStreak(prev => {
        const newStreak = prev + 1
        setMaxStreak(max => Math.max(max, newStreak))
        return newStreak
      })
    } else {
      setStreak(0)
    }

    setShowResult(true)
  }, [selectedAnswer, currentQ, timeLeft, difficulty])

  const nextQuestion = () => {
    if (currentQuestion >= filteredQuestions.length - 1) {
      setGameOver(true)
      const xp = score + correctAnswers * 5
      onExperience?.(xp)
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setTimeLeft(30)
    }
  }

  const restartGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameOver(false)
    setGameStarted(false)
    setTimeLeft(30)
    setCorrectAnswers(0)
    setStreak(0)
    setMaxStreak(0)
  }

  // Screen: Game Over
  if (gameOver) {
    const percentage = Math.round((correctAnswers / filteredQuestions.length) * 100)
    let grade = ''
    let gradeEmoji = ''
    
    if (percentage >= 90) { grade = 'Отлично!'; gradeEmoji = '🏆' }
    else if (percentage >= 70) { grade = 'Хорошо!'; gradeEmoji = '👍' }
    else if (percentage >= 50) { grade = 'Неплохо'; gradeEmoji = '📚' }
    else { grade = 'Нужно подтянуть'; gradeEmoji = '💪' }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30">
          <CardHeader className="text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="text-6xl mb-4"
            >
              {gradeEmoji}
            </motion.div>
            <CardTitle className="text-3xl">{grade}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/5">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <p className="text-2xl font-bold">{score}</p>
                  <p className="text-sm text-gray-400">очков</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5">
                <CardContent className="p-4 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold">{correctAnswers}/{filteredQuestions.length}</p>
                  <p className="text-sm text-gray-400">правильных</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold">{percentage}%</p>
                  <p className="text-sm text-gray-400">результат</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl font-bold">{maxStreak}</p>
                  <p className="text-sm text-gray-400">макс. серия</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-3">
              <Button onClick={restartGame} className="flex-1" variant="outline">
                Сменить тему
              </Button>
              <Button onClick={() => {
                setGameOver(false)
                setCurrentQuestion(0)
                setScore(0)
                setSelectedAnswer(null)
                setShowResult(false)
                setTimeLeft(30)
                setCorrectAnswers(0)
                setStreak(0)
                setMaxStreak(0)
              }} className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500">
                Играть снова
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Screen: Start Menu
  if (!gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30">
          <CardHeader className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Globe className="w-16 h-16 mx-auto text-amber-400" />
            </motion.div>
            <CardTitle className="text-3xl mt-4">Всемирная история</CardTitle>
            <p className="text-gray-400 mt-2">
              Путешествуй сквозь эпохи! 🌍
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Difficulty */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Сложность:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['easy', 'medium', 'hard'] as const).map((d) => (
                  <Button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    variant={difficulty === d ? 'default' : 'outline'}
                    className={`flex flex-col py-3 ${difficulty === d ? 'bg-gradient-to-r from-amber-500 to-orange-500' : ''}`}
                  >
                    <span className="text-lg">{d === 'easy' ? '📜' : d === 'medium' ? '🏛️' : '👑'}</span>
                    <span className="text-xs">{d === 'easy' ? 'Лёгкий' : d === 'medium' ? 'Средний' : 'Сложный'}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Эпоха:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Button
                  onClick={() => setSelectedCategory('all')}
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className={`flex flex-col py-3 ${selectedCategory === 'all' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : ''}`}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-xs">Все эпохи</span>
                </Button>
                {(Object.keys(categoryNames) as QuestionCategory[]).map((cat) => {
                  const Icon = categoryIcons[cat]
                  return (
                    <Button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      className={`flex flex-col py-3 ${selectedCategory === cat ? 'bg-gradient-to-r from-amber-500 to-orange-500' : ''}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{categoryNames[cat]}</span>
                    </Button>
                  )
                })}
              </div>
            </div>

            <Button
              onClick={() => setGameStarted(true)}
              className="w-full py-6 text-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
            >
              <Landmark className="w-5 h-5 mr-2" />
              Начать путешествие
            </Button>

            <p className="text-center text-sm text-gray-500">
              {filteredQuestions.length} вопросов выбрано • +135 XP
            </p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Screen: Question
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Вопрос</span>
          <span className="font-bold">{currentQuestion + 1}/{filteredQuestions.length}</span>
        </div>
        <div className="flex items-center gap-4">
          {streak > 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-yellow-400"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-bold">x{streak}</span>
            </motion.div>
          )}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${
            timeLeft > 15 ? 'bg-amber-500' : timeLeft > 5 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: `${(timeLeft / 30) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Category Badge */}
      {currentQ && (
        <div className="flex items-center gap-2">
          {(() => {
            const Icon = categoryIcons[currentQ.category]
            return (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10">
                <Icon className="w-4 h-4 text-amber-400" />
                <span className="text-sm">{categoryNames[currentQ.category]}</span>
              </div>
            )
          })()}
          <div className={`px-2 py-1 rounded text-xs ${
            currentQ.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
            currentQ.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {currentQ.difficulty === 'easy' ? 'Лёгкий' : currentQ.difficulty === 'medium' ? 'Средний' : 'Сложный'}
          </div>
        </div>
      )}

      {/* Question Card */}
      {currentQ && (
        <Card className={`border-2 transition-all ${
          showResult
            ? selectedAnswer === currentQ.correctAnswer
              ? 'border-green-500 bg-green-500/10'
              : 'border-red-500 bg-red-500/10'
            : 'border-white/10'
        }`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-6">{currentQ.question}</h3>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQ.correctAnswer
                const showCorrect = showResult && isCorrect
                const showWrong = showResult && isSelected && !isCorrect

                return (
                  <motion.button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-500/20 text-green-300'
                        : showWrong
                        ? 'border-red-500 bg-red-500/20 text-red-300'
                        : isSelected
                        ? 'border-white/50 bg-white/10'
                        : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    }`}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showCorrect ? 'bg-green-500 text-white' :
                        showWrong ? 'bg-red-500 text-white' :
                        'bg-white/10'
                      }`}>
                        {showCorrect ? <CheckCircle2 className="w-5 h-5" /> : showWrong ? <XCircle className="w-5 h-5" /> : String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-300">{currentQ.explanation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      )}

      {/* Next Button */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
          >
            {currentQuestion >= filteredQuestions.length - 1 ? 'Завершить' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
