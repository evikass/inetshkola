'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Trophy, Star, Clock, CheckCircle, XCircle, 
  Lightbulb, Users, Scale, Building, Coins, BookOpen
} from 'lucide-react'

interface SocialStudiesGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'society' | 'human' | 'economy' | 'law' | 'politics' | 'spiritual'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

const categoryInfo: Record<Category, { name: string; icon: React.ElementType; color: string }> = {
  society: { name: 'Общество', icon: Users, color: 'from-blue-400 to-cyan-500' },
  human: { name: 'Человек', icon: BookOpen, color: 'from-purple-400 to-pink-500' },
  economy: { name: 'Экономика', icon: Coins, color: 'from-yellow-400 to-orange-500' },
  law: { name: 'Право', icon: Scale, color: 'from-red-400 to-rose-500' },
  politics: { name: 'Политика', icon: Building, color: 'from-indigo-400 to-violet-500' },
  spiritual: { name: 'Духовная сфера', icon: Lightbulb, color: 'from-teal-400 to-emerald-500' }
}

const questions: Question[] = [
  // === ОБЩЕСТВО ===
  {
    question: 'Что такое общество в широком смысле?',
    options: [
      'Группа людей, объединённых общими интересами',
      'Обособившаяся от природы часть материального мира, совокупность исторически сложившихся форм совместной деятельности людей',
      'Организация, созданная для достижения определённых целей',
      'Система государственного управления'
    ],
    correct: 1,
    explanation: 'Общество в широком смысле — это обособившаяся от природы часть материального мира, представляющая собой исторически развивающуюся форму жизнедеятельности людей.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    question: 'Какие сферы общественной жизни выделяют?',
    options: [
      'Техническую и гуманитарную',
      'Экономическую, политическую, социальную и духовную',
      'Научную и образовательную',
      'Государственную и частную'
    ],
    correct: 1,
    explanation: 'Выделяют четыре основные сферы общественной жизни: экономическую, политическую, социальную и духовную.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    question: 'Что относится к духовной сфере общества?',
    options: [
      'Производство товаров и услуг',
      'Государственное управление',
      'Наука, образование, культура, религия',
      'Торговля и финансы'
    ],
    correct: 2,
    explanation: 'Духовная сфера включает науку, образование, культуру, искусство, религию, мораль и другие формы общественного сознания.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    question: 'Что такое общественный прогресс?',
    options: [
      'Сохранение существующего порядка',
      'Направление развития общества от низшего к высшему',
      'Возврат к традиционным ценностям',
      'Техническое перевооружение производства'
    ],
    correct: 1,
    explanation: 'Общественный прогресс — это направление развития общества от низшего к высшему, от простого к сложному.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    question: 'Что такое социальный институт?',
    options: [
      'Научное учреждение',
      'Исторически сложившаяся устойчивая форма организации совместной деятельности людей',
      'Учебное заведение',
      'Государственный орган'
    ],
    correct: 1,
    explanation: 'Социальный институт — это исторически сложившаяся устойчивая форма организации совместной деятельности людей, направленная на удовлетворение базовых потребностей общества.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    question: 'Какой пример относится к глобальным проблемам современности?',
    options: [
      'Местные выборы',
      'Экологический кризис',
      'Ремонт дорог',
      'Школьное образование'
    ],
    correct: 1,
    explanation: 'Глобальные проблемы — это проблемы, затрагивающие всё человечество. К ним относятся: экологический кризис, угроза ядерной войны, международный терроризм и другие.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    question: 'Что такое традиционное общество?',
    options: [
      'Общество с развитой промышленностью',
      'Общество с преобладанием традиций и обычаях в регулировании жизни',
      'Общество с демократическим устройством',
      'Информационное общество'
    ],
    correct: 1,
    explanation: 'Традиционное общество — это общество с преобладанием традиций, обычаев и религиозных ценностей в регулировании общественной жизни.',
    category: 'society',
    difficulty: 'medium'
  },

  // === ЧЕЛОВЕК ===
  {
    question: 'Что делает человека личностью?',
    options: [
      'Биологическое строение организма',
      'Социальные качества, формирующиеся в общении и деятельности',
      'Наличие имени и фамилии',
      'Возраст человека'
    ],
    correct: 1,
    explanation: 'Личность — это человек как субъект отношений и сознательной деятельности, обладающий совокупностью социально значимых качеств.',
    category: 'human',
    difficulty: 'easy'
  },
  {
    question: 'Что такое социализация личности?',
    options: [
      'Процесс биологического развития',
      'Процесс усвоения индивидом социальных норм и культурных ценностей',
      'Получение образования',
      'Трудовая деятельность'
    ],
    correct: 1,
    explanation: 'Социализация — это процесс усвоения индивидом социальных норм, культурных ценностей и образцов поведения, необходимых для успешного функционирования в обществе.',
    category: 'human',
    difficulty: 'medium'
  },
  {
    question: 'Какая потребность относится к социальным?',
    options: [
      'Потребность в пище',
      'Потребность в общении',
      'Потребность во сне',
      'Потребность в воздухе'
    ],
    correct: 1,
    explanation: 'Социальные потребности возникают в процессе общения и взаимодействия людей. К ним относятся потребности в общении, признании, самореализации.',
    category: 'human',
    difficulty: 'easy'
  },
  {
    question: 'Что такое мировоззрение?',
    options: [
      'Знание иностранных языков',
      'Система взглядов на мир и место человека в нём',
      'Образование человека',
      'Профессиональные навыки'
    ],
    correct: 1,
    explanation: 'Мировоззрение — это система взглядов человека на мир и своё место в нём, определяющая его отношение к действительности.',
    category: 'human',
    difficulty: 'medium'
  },
  {
    question: 'Какое качество относится к интеллектуальным?',
    options: [
      'Доброта',
      'Критичность мышления',
      'Честность',
      'Смелость'
    ],
    correct: 1,
    explanation: 'Интеллектуальные качества связаны с познавательной деятельностью: критичность мышления, гибкость ума, наблюдательность, память.',
    category: 'human',
    difficulty: 'medium'
  },
  {
    question: 'Что такое самосознание?',
    options: [
      'Способность к труду',
      'Осознание человеком самого себя, своих качеств и места в обществе',
      'Биологическое развитие',
      'Физическое совершенствование'
    ],
    correct: 1,
    explanation: 'Самосознание — это осознание человеком самого себя, своих физических и духовных качеств, своего места в обществе.',
    category: 'human',
    difficulty: 'hard'
  },
  {
    question: 'Что такое способности человека?',
    options: [
      'Только врождённые качества',
      'Индивидуальные особенности личности, являющиеся условием успешного осуществления деятельности',
      'Профессиональные навыки',
      'Физическая сила'
    ],
    correct: 1,
    explanation: 'Способности — это индивидуальные психологические особенности личности, являющиеся условиями успешного осуществления определённой деятельности.',
    category: 'human',
    difficulty: 'hard'
  },

  // === ЭКОНОМИКА ===
  {
    question: 'Что такое экономика?',
    options: [
      'Наука о природе',
      'Хозяйственная деятельность людей по созданию благ',
      'Политическая система',
      'Культурная деятельность'
    ],
    correct: 1,
    explanation: 'Экономика — это хозяйственная деятельность людей по созданию материальных благ и удовлетворению потребностей общества.',
    category: 'economy',
    difficulty: 'easy'
  },
  {
    question: 'Что такое деньги?',
    options: [
      'Товар, выполняющий роль всеобщего эквивалента',
      'Бумажные купюры',
      'Металлические монеты',
      'Банковские карты'
    ],
    correct: 0,
    explanation: 'Деньги — это особый товар, выполняющий роль всеобщего эквивалента стоимости всех других товаров и услуг.',
    category: 'economy',
    difficulty: 'easy'
  },
  {
    question: 'Что такое инфляция?',
    options: [
      'Рост производства товаров',
      'Обесценивание денег и рост цен',
      'Увеличение зарплат',
      'Снижение безработицы'
    ],
    correct: 1,
    explanation: 'Инфляция — это процесс обесценивания денег, проявляющийся в росте общего уровня цен на товары и услуги.',
    category: 'economy',
    difficulty: 'medium'
  },
  {
    question: 'Что относится к факторам производства?',
    options: [
      'Только природные ресурсы',
      'Труд, земля, капитал, предпринимательство',
      'Только денежные средства',
      'Государственное управление'
    ],
    correct: 1,
    explanation: 'Факторы производства — это ресурсы, используемые для создания благ: труд, земля (природные ресурсы), капитал, предпринимательская способность.',
    category: 'economy',
    difficulty: 'medium'
  },
  {
    question: 'Что такое рынок?',
    options: [
      'Место торговли продуктами',
      'Система экономических отношений по поводу купли-продажи товаров',
      'Государственный магазин',
      'Производственное предприятие'
    ],
    correct: 1,
    explanation: 'Рынок — это совокупность экономических отношений, с помощью которых осуществляется обращение общественного продукта в товарно-денежной форме.',
    category: 'economy',
    difficulty: 'easy'
  },
  {
    question: 'Что такое безработица?',
    options: [
      'Нежелание работать',
      'Социально-экономическое явление, при котором часть трудоспособного населения не имеет работы',
      'Отпуск',
      'Выход на пенсию'
    ],
    correct: 1,
    explanation: 'Безработица — это социально-экономическое явление, при котором часть экономически активного населения не имеет работы и заработка.',
    category: 'economy',
    difficulty: 'easy'
  },
  {
    question: 'Что такое налоги?',
    options: [
      'Добровольные пожертвования',
      'Обязательные платежи, взимаемые государством с физических и юридических лиц',
      'Штрафы за нарушения',
      'Коммерческие сборы'
    ],
    correct: 1,
    explanation: 'Налоги — это обязательные, индивидуально безвозмездные платежи, взимаемые с организаций и физических лиц в целях финансового обеспечения деятельности государства.',
    category: 'economy',
    difficulty: 'medium'
  },
  {
    question: 'Что такое банк?',
    options: [
      'Магазин',
      'Финансово-кредитная организация, осуществляющая операции с деньгами',
      'Производственное предприятие',
      'Государственное учреждение'
    ],
    correct: 1,
    explanation: 'Банк — это финансово-кредитная организация, которая выполняет операции с деньгами: принимает вклады, выдаёт кредиты, осуществляет переводы.',
    category: 'economy',
    difficulty: 'easy'
  },

  // === ПРАВО ===
  {
    question: 'Что такое право?',
    options: [
      'Моральные нормы',
      'Система общеобязательных норм, охраняемых государством',
      'Религиозные правила',
      'Традиции и обычаи'
    ],
    correct: 1,
    explanation: 'Право — это система общеобязательных, формально-определённых норм, выраженных в законах и охраняемых государством.',
    category: 'law',
    difficulty: 'easy'
  },
  {
    question: 'Что такое конституция?',
    options: [
      'Обычный закон',
      'Основной закон государства',
      'Правительственное постановление',
      'Международный договор'
    ],
    correct: 1,
    explanation: 'Конституция — это основной закон государства, обладающий высшей юридической силой и закрепляющий основы общественного и государственного строя.',
    category: 'law',
    difficulty: 'easy'
  },
  {
    question: 'Со скольки лет наступает уголовная ответственность в РФ?',
    options: [
      'С 14 лет',
      'С 16 лет',
      'С 18 лет',
      'С 21 года'
    ],
    correct: 1,
    explanation: 'По общему правилу уголовная ответственность в РФ наступает с 16 лет. За наиболее тяжкие преступления — с 14 лет.',
    category: 'law',
    difficulty: 'medium'
  },
  {
    question: 'Что такое правонарушение?',
    options: [
      'Нарушение моральных норм',
      'Виновное противоправное деяние',
      'Несогласие с законом',
      'Критика властей'
    ],
    correct: 1,
    explanation: 'Правонарушение — это виновное противоправное деяние дееспособного лица, которое причиняет вред обществу и влечёт юридическую ответственность.',
    category: 'law',
    difficulty: 'medium'
  },
  {
    question: 'Что относится к видам юридической ответственности?',
    options: [
      'Только уголовная',
      'Уголовная, административная, гражданско-правовая, дисциплинарная',
      'Только административная',
      'Только гражданская'
    ],
    correct: 1,
    explanation: 'Виды юридической ответственности: уголовная, административная, гражданско-правовая, дисциплинарная, материальная.',
    category: 'law',
    difficulty: 'medium'
  },
  {
    question: 'Что такое гражданство?',
    options: [
      'Проживание на территории страны',
      'Правовая связь человека с государством',
      'Наличие паспорта',
      'Регистрация по месту жительства'
    ],
    correct: 1,
    explanation: 'Гражданство — это устойчивая правовая связь человека с государством, выражающаяся в совокупности их взаимных прав, обязанностей и ответственности.',
    category: 'law',
    difficulty: 'medium'
  },
  {
    question: 'Кто согласно Конституции РФ является носителем суверенитета?',
    options: [
      'Президент',
      'Народ',
      'Парламент',
      'Правительство'
    ],
    correct: 1,
    explanation: 'Согласно статье 3 Конституции РФ, носителем суверенитета и единственным источником власти является народ.',
    category: 'law',
    difficulty: 'hard'
  },
  {
    question: 'Что такое правоспособность?',
    options: [
      'Способность совершать сделки',
      'Способность иметь права и нести обязанности',
      'Дееспособность',
      'Гражданство'
    ],
    correct: 1,
    explanation: 'Правоспособность — это способность лица иметь гражданские права и нести обязанности. Возникает с рождения.',
    category: 'law',
    difficulty: 'hard'
  },

  // === ПОЛИТИКА ===
  {
    question: 'Что такое государство?',
    options: [
      'Политическая партия',
      'Особая организация политической власти, управляющая обществом',
      'Общественная организация',
      'Территория страны'
    ],
    correct: 1,
    explanation: 'Государство — это особая организация политической власти, обладающая суверенитетом и осуществляющая управление обществом.',
    category: 'politics',
    difficulty: 'easy'
  },
  {
    question: 'Что является признаком государства?',
    options: [
      'Наличие спортсменов',
      'Наличие территории, населения, публичной власти, права, суверенитета',
      'Наличие предприятий',
      'Наличие культурных учреждений'
    ],
    correct: 1,
    explanation: 'Признаки государства: публичная власть, территория, население (гражданство), суверенитет, правовая система, налоги, армия.',
    category: 'politics',
    difficulty: 'medium'
  },
  {
    question: 'Что такое демократия?',
    options: [
      'Власть одного человека',
      'Власть народа',
      'Власть партии',
      'Отсутствие власти'
    ],
    correct: 1,
    explanation: 'Демократия (от греч. demos — народ + kratos — власть) — это форма правления, при которой власть принадлежит народу.',
    category: 'politics',
    difficulty: 'easy'
  },
  {
    question: 'Что такое политическая партия?',
    options: [
      'Государственный орган',
      'Общественное объединение, стремящееся к участию во власти',
      'Коммерческая организация',
      'Религиозная община'
    ],
    correct: 1,
    explanation: 'Политическая партия — это общественное объединение, созданное для участия в политической жизни общества и стремящееся к получению власти.',
    category: 'politics',
    difficulty: 'medium'
  },
  {
    question: 'Кто является главой государства в РФ?',
    options: [
      'Председатель Правительства',
      'Президент',
      'Председатель Государственной Думы',
      'Генеральный прокурор'
    ],
    correct: 1,
    explanation: 'Согласно Конституции РФ, Президент является главой государства, гарантом Конституции, прав и свобод человека и гражданина.',
    category: 'politics',
    difficulty: 'easy'
  },
  {
    question: 'Что такое референдум?',
    options: [
      'Выборы президента',
      'Всенародное голосование по важному вопросу',
      'Заседание парламента',
      'Митинг'
    ],
    correct: 1,
    explanation: 'Референдум — это всенародное голосование по наиболее важным вопросам государственной и общественной жизни.',
    category: 'politics',
    difficulty: 'medium'
  },
  {
    question: 'Какой орган осуществляет законодательную власть в РФ?',
    options: [
      'Правительство',
      'Федеральное Собрание',
      'Суды',
      'Прокуратура'
    ],
    correct: 1,
    explanation: 'Федеральное Собрание — парламент РФ — является представительным и законодательным органом Российской Федерации.',
    category: 'politics',
    difficulty: 'hard'
  },

  // === ДУХОВНАЯ СФЕРА ===
  {
    question: 'Что такое культура?',
    options: [
      'Только искусство',
      'Совокупность материальных и духовных ценностей, созданных человечеством',
      'Только образование',
      'Только религия'
    ],
    correct: 1,
    explanation: 'Культура — это совокупность материальных и духовных ценностей, созданных и создаваемых человечеством в процессе общественно-исторической практики.',
    category: 'spiritual',
    difficulty: 'easy'
  },
  {
    question: 'Что такое образование?',
    options: [
      'Производственная деятельность',
      'Целенаправленный процесс получения знаний и развития личности',
      'Политическая деятельность',
      'Коммерческая деятельность'
    ],
    correct: 1,
    explanation: 'Образование — это целенаправленный процесс получения знаний, умений и навыков, а также развития личности.',
    category: 'spiritual',
    difficulty: 'easy'
  },
  {
    question: 'Что такое наука?',
    options: [
      'Сфера культуры, производящая новые знания',
      'Система образования',
      'Религиозная деятельность',
      'Политическая система'
    ],
    correct: 0,
    explanation: 'Наука — это сфера человеческой деятельности, направленная на получение объективных знаний о природе, обществе и человеке.',
    category: 'spiritual',
    difficulty: 'medium'
  },
  {
    question: 'Что такое мораль?',
    options: [
      'Государственные законы',
      'Система норм и ценностей, регулирующих поведение людей',
      'Религиозные догмы',
      'Корпоративные правила'
    ],
    correct: 1,
    explanation: 'Мораль — это система исторически сложившихся норм и правил поведения, основанных на представлениях о добре и зле, справедливости и несправедливости.',
    category: 'spiritual',
    difficulty: 'medium'
  },
  {
    question: 'Что такое религия?',
    options: [
      'Научное мировоззрение',
      'Форма мировоззрения, основанная на вере в сверхъестественное',
      'Политическая идеология',
      'Философское учение'
    ],
    correct: 1,
    explanation: 'Религия — это форма мировоззрения, основанная на вере в сверхъестественные силы и существование загробного мира.',
    category: 'spiritual',
    difficulty: 'easy'
  },
  {
    question: 'Что такое искусство?',
    options: [
      'Научная деятельность',
      'Форма культуры, отражающая действительность в художественных образах',
      'Политическая пропаганда',
      'Производство товаров'
    ],
    correct: 1,
    explanation: 'Искусство — это форма культуры, отражающая действительность в художественных образах и вызывающая эстетическое отношение к миру.',
    category: 'spiritual',
    difficulty: 'medium'
  },
  {
    question: 'Что такое мировые религии?',
    options: [
      'Религии одного народа',
      'Религии, распространившиеся среди многих народов (буддизм, христианство, ислам)',
      'Древние верования',
      'Современные культы'
    ],
    correct: 1,
    explanation: 'Мировые религии — это религии, получившие распространение среди многих народов: буддизм, христианство, ислам.',
    category: 'spiritual',
    difficulty: 'hard'
  }
]

export default function SocialStudiesGame({ gradeId = 0, onExperience }: SocialStudiesGameProps) {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [gameQuestions, setGameQuestions] = useState<Question[]>([])

  const isKidMode = gradeId <= 2

  // Filter and shuffle questions
  const prepareQuestions = useCallback(() => {
    let filtered = questions
    if (selectedCategory !== 'all') {
      filtered = questions.filter(q => q.category === selectedCategory)
    }
    
    // Filter by difficulty for younger students
    if (isKidMode) {
      filtered = filtered.filter(q => q.difficulty === 'easy')
    } else if (difficulty === 'easy') {
      filtered = filtered.filter(q => q.difficulty !== 'hard')
    }

    // Shuffle and take 10 questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10)
    return shuffled.length > 0 ? shuffled : filtered.slice(0, 10)
  }, [selectedCategory, difficulty, isKidMode])

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || selectedAnswer !== null || showExplanation) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, selectedAnswer, showExplanation, currentQuestion])

  const handleTimeout = useCallback(() => {
    setSelectedAnswer(-1)
    setShowExplanation(true)
  }, [])

  const startGame = useCallback(() => {
    const questions = prepareQuestions()
    setGameQuestions(questions)
    setCurrentQuestion(0)
    setScore(0)
    setAnsweredQuestions(new Set())
    setSelectedAnswer(null)
    setShowExplanation(false)
    setTimeLeft(30)
    setGameState('playing')
  }, [prepareQuestions])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === gameQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1)
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion))
  }, [selectedAnswer, currentQuestion, gameQuestions])

  const nextQuestion = useCallback(() => {
    if (currentQuestion >= gameQuestions.length - 1) {
      setGameState('result')
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(30)
    }
  }, [currentQuestion, gameQuestions.length])

  const calculateXP = useCallback(() => {
    const baseXP = 110
    const scoreBonus = score * 10
    const difficultyMultiplier = difficulty === 'hard' ? 1.5 : difficulty === 'medium' ? 1.2 : 1
    return Math.round((baseXP + scoreBonus) * difficultyMultiplier)
  }, [score, difficulty])

  const handleGameEnd = useCallback(() => {
    const xp = calculateXP()
    onExperience?.(xp)
  }, [calculateXP, onExperience])

  // Current question options with memoization
  const currentOptions = useMemo(() => {
    if (!gameQuestions[currentQuestion]) return []
    return gameQuestions[currentQuestion].options
  }, [gameQuestions, currentQuestion])

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-6xl mb-4"
          >
            📜
          </motion.div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
            Обществознание
          </h2>
          <p className="text-gray-400">
            Проверь свои знания об обществе, праве и экономике!
          </p>
        </div>

        {/* Category Selection */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-400" />
              Выбери тему
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📚 Все темы
              </motion.button>
              {(Object.keys(categoryInfo) as Category[]).map(cat => {
                const info = categoryInfo[cat]
                const Icon = info.icon
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      selectedCategory === cat
                        ? `bg-gradient-to-r ${info.color} text-white`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    {info.name}
                  </motion.button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Difficulty Selection */}
        {!isKidMode && (
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Уровень сложности
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'easy', label: 'Лёгкий', color: 'from-green-400 to-emerald-500' },
                  { id: 'medium', label: 'Средний', color: 'from-yellow-400 to-orange-500' },
                  { id: 'hard', label: 'Сложный', color: 'from-red-400 to-rose-500' }
                ].map(diff => (
                  <motion.button
                    key={diff.id}
                    onClick={() => setDifficulty(diff.id as Difficulty)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      difficulty === diff.id
                        ? `bg-gradient-to-r ${diff.color} text-white`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {diff.label}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-red-400 to-rose-500 hover:from-red-500 hover:to-rose-600"
          >
            <Trophy className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>

        {/* Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>10 вопросов • +{110} XP за прохождение</p>
        </div>
      </div>
    )
  }

  // Result screen
  if (gameState === 'result') {
    const xp = calculateXP()
    const percentage = Math.round((score / gameQuestions.length) * 100)
    
    return (
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-8xl mb-4"
        >
          {percentage >= 80 ? '🏆' : percentage >= 50 ? '🎯' : '📚'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {percentage >= 80 ? 'Отлично!' : percentage >= 50 ? 'Хорошо!' : 'Попробуй ещё!'}
          </h2>
          <p className="text-gray-400">
            Правильных ответов: {score} из {gameQuestions.length}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 inline-block">
            <CardContent className="p-4 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">+{xp} XP</span>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-sm text-gray-400">Правильно</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{gameQuestions.length - score}</p>
              <p className="text-sm text-gray-400">Ошибки</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{percentage}%</p>
              <p className="text-sm text-gray-400">Результат</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-red-400 to-rose-500"
          >
            Играть снова
          </Button>
          <Button
            onClick={() => {
              handleGameEnd()
              setGameState('menu')
            }}
            variant="outline"
            className="flex-1"
          >
            К меню
          </Button>
        </div>
      </div>
    )
  }

  // Playing screen
  const question = gameQuestions[currentQuestion]
  if (!question) return null

  const category = categoryInfo[question.category]

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setGameState('menu')}
          className="text-gray-400"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Выход
        </Button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className={`font-mono ${timeLeft <= 10 ? 'text-red-400' : ''}`}>
              {timeLeft}с
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>{score}/{gameQuestions.length}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-red-400 to-rose-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
        />
      </div>

      {/* Category Badge */}
      <div className="flex items-center gap-2">
        <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white flex items-center gap-1`}>
          <category.icon className="w-4 h-4" />
          {category.name}
        </span>
        <span className="text-sm text-gray-500">
          Вопрос {currentQuestion + 1} из {gameQuestions.length}
        </span>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <p className="text-lg font-medium mb-6">
              {question.question}
            </p>

            <div className="space-y-3">
              {currentOptions.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correct
                const showResult = selectedAnswer !== null

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-white/5 opacity-50'
                        : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
                    }`}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : isSelected
                            ? 'bg-red-500 text-white'
                            : 'bg-white/20'
                          : 'bg-white/20'
                      }`}>
                        {showResult ? (isCorrect ? '✓' : isSelected ? '✗' : String.fromCharCode(65 + index)) : String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className={`${
              selectedAnswer === question.correct
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {selectedAnswer === question.correct ? (
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium mb-1">
                      {selectedAnswer === question.correct ? 'Правильно!' : 'Неверно'}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Button */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-red-400 to-rose-500"
          >
            {currentQuestion >= gameQuestions.length - 1 ? 'Результаты' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
