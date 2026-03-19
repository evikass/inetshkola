'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Wallet, TrendingUp, TrendingDown, PiggyBank, CreditCard, 
  Building, Calculator, CheckCircle2, XCircle, ArrowLeft,
  Coins, Receipt, BarChart3, Lightbulb, Target, Gift
} from 'lucide-react'

interface FinancialLiteracyGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type QuestionCategory = 'budget' | 'savings' | 'investments' | 'credit' | 'taxes' | 'banking'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  category: QuestionCategory
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const categoryIcons: Record<QuestionCategory, typeof Wallet> = {
  budget: Receipt,
  savings: PiggyBank,
  investments: TrendingUp,
  credit: CreditCard,
  taxes: Building,
  banking: Wallet
}

const categoryNames: Record<QuestionCategory, string> = {
  budget: 'Бюджет',
  savings: 'Накопления',
  investments: 'Инвестиции',
  credit: 'Кредиты',
  taxes: 'Налоги',
  banking: 'Банки'
}

const questions: Question[] = [
  // Бюджет - Easy
  {
    question: 'Что такое семейный бюджет?',
    options: [
      'Список покупок на неделю',
      'План доходов и расходов семьи',
      'Количество денег в кошельке',
      'Банковский счёт'
    ],
    correctAnswer: 1,
    category: 'budget',
    explanation: 'Семейный бюджет — это план доходов и расходов семьи на определённый период. Он помогает контролировать финансы и достигать финансовых целей.',
    difficulty: 'easy'
  },
  {
    question: 'Что относится к доходам семьи?',
    options: [
      'Оплата коммунальных услуг',
      'Покупка продуктов',
      'Зарплата родителей',
      'Оплата проезда'
    ],
    correctAnswer: 2,
    category: 'budget',
    explanation: 'Доходы — это деньги, которые семья получает: зарплата, пенсии, пособия, стипендии. Всё остальное — это расходы.',
    difficulty: 'easy'
  },
  {
    question: 'Что такое "расходы"?',
    options: [
      'Деньги, которые мы получаем',
      'Деньги, которые мы тратим',
      'Деньги в банке',
      'Зарплата'
    ],
    correctAnswer: 1,
    category: 'budget',
    explanation: 'Расходы — это деньги, которые мы тратим на товары и услуги: продукты, одежду, коммунальные услуги, развлечения.',
    difficulty: 'easy'
  },
  {
    question: 'Какой расход является обязательным?',
    options: [
      'Покупка нового телефона',
      'Поход в кино',
      'Оплата электричества',
      'Покупка игрушки'
    ],
    correctAnswer: 2,
    category: 'budget',
    explanation: 'Обязательные расходы — это то, без чего нельзя обойтись: коммунальные услуги, еда, одежда, медицина. Остальное — желательные расходы.',
    difficulty: 'easy'
  },
  
  // Бюджет - Medium
  {
    question: 'Если доходы превышают расходы, это называется:',
    options: [
      'Дефицит бюджета',
      'Профицит бюджета',
      'Баланс бюджета',
      'Кризис бюджета'
    ],
    correctAnswer: 1,
    category: 'budget',
    explanation: 'Профицит бюджета — это ситуация, когда доходы превышают расходы. Эти деньги можно отложить или инвестировать. Дефицит — наоборот, расходы больше доходов.',
    difficulty: 'medium'
  },
  {
    question: 'Правило "50/30/20" в бюджете означает:',
    options: [
      '50% на еду, 30% на одежду, 20% на развлечения',
      '50% на нужды, 30% на желания, 20% на накопления',
      '50% на накопления, 30% на еду, 20% на развлечения',
      '50% на кредиты, 30% на еду, 20% на отдых'
    ],
    correctAnswer: 1,
    category: 'budget',
    explanation: 'Правило 50/30/20: 50% дохода — на обязательные нужды (жильё, еда), 30% — на желания (развлечения, хобби), 20% — на накопления и долги.',
    difficulty: 'medium'
  },
  {
    question: 'Что такое "финансовая подушка безопасности"?',
    options: [
      'Кредитная карта на случай emergencies',
      'Деньги на 3-6 месяцев расходов в доступном виде',
      'Золотые украшения',
      'Страховой полис'
    ],
    correctAnswer: 1,
    category: 'budget',
    explanation: 'Финансовая подушка безопасности — это деньги на 3-6 месяцев жизни, которые помогут пережить потерю работы, болезнь или другие неожиданности.',
    difficulty: 'medium'
  },
  
  // Накопления - Easy
  {
    question: 'Где лучше всего хранить накопления?',
    options: [
      'Под матрасом',
      'В банке на накопительном счёте',
      'В кармане',
      'Потратить сразу'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Накопления лучше хранить в банке на накопительном счёте или депозите — это безопасно и приносит небольшой доход в виде процентов.',
    difficulty: 'easy'
  },
  {
    question: 'Что такое депозит в банке?',
    options: [
      'Кредит от банка',
      'Вклад, на который начисляются проценты',
      'Банковская карта',
      'Долг банку'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Депозит (вклад) — это деньги, которые вы передаёте банку на хранение на определённый срок. Банк платит вам проценты за использование этих денег.',
    difficulty: 'easy'
  },
  {
    question: 'Зачем нужно откладывать деньги?',
    options: [
      'Чтобы потратить всё сразу',
      'Для крупных покупок и непредвиденных ситуаций',
      'Это бессмысленно',
      'Чтобы не платить налоги'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Накопления нужны для крупных целей (машина, квартира), создания подушки безопасности и обеспечения финансовой стабильности.',
    difficulty: 'easy'
  },
  
  // Накопления - Medium
  {
    question: 'Что такое капитализация процентов?',
    options: [
      'Выплата процентов каждый месяц',
      'Добавление процентов к вкладу для начисления процентов на проценты',
      'Снятие процентов со счёта',
      'Уменьшение процентной ставки'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Капитализация — когда проценты не выплачиваются, а добавляются к вкладу. В следующем периоде проценты начисляются уже на большую сумму.',
    difficulty: 'medium'
  },
  {
    question: 'Если инфляция 8% в год, а вклад под 6%, то:',
    options: [
      'Вы зарабатываете деньги',
      'Вы теряете покупательную способность',
      'Ваш доход 14%',
      'Ничего не меняется'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Реальная доходность = номинальная ставка минус инфляция. При 6% ставке и 8% инфляции вы теряете 2% покупательской способности.',
    difficulty: 'medium'
  },
  
  // Накопления - Hard
  {
    question: 'Правило "сложного процента" работает лучше всего при:',
    options: [
      'Частом снятии процентов',
      'Долгосрочном вложении с капитализацией',
      'Краткосрочных вкладах',
      'Отсутствии пополнений'
    ],
    correctAnswer: 1,
    category: 'savings',
    explanation: 'Сложный процент (капитализация) показывает чудо на длинной дистанции. За 20-30 лет даже небольшие накопления могут вырасти в 5-10 раз.',
    difficulty: 'hard'
  },
  
  // Инвестиции - Medium
  {
    question: 'Что такое акции?',
    options: [
      'Долговые обязательства компании',
      'Ценные бумаги, дающие право на долю в компании',
      'Банковский вклад',
      'Валюта'
    ],
    correctAnswer: 1,
    category: 'investments',
    explanation: 'Акции — это ценные бумаги, которые дают право на долю в компании. Владелец акций может получать дивиденды и участвовать в управлении компанией.',
    difficulty: 'medium'
  },
  {
    question: 'Что такое дивиденды?',
    options: [
      'Проценты по кредиту',
      'Часть прибыли компании, выплачиваемая акционерам',
      'Налог на инвестиции',
      'Комиссия брокера'
    ],
    correctAnswer: 1,
    category: 'investments',
    explanation: 'Дивиденды — это часть прибыли компании, которую она распределяет между акционерами. Не все компании платят дивиденды.',
    difficulty: 'medium'
  },
  {
    question: 'Что означает "диверсификация" инвестиций?',
    options: [
      'Инвестирование в один актив',
      'Распределение денег между разными активами',
      'Продажа всех акций',
      'Покупка только облигаций'
    ],
    correctAnswer: 1,
    category: 'investments',
    explanation: 'Диверсификация — распределение инвестиций между разными активами (акции, облигации, валюта). Это снижает риск потерь.',
    difficulty: 'medium'
  },
  
  // Инвестиции - Hard
  {
    question: 'Облигации отличаются от акций тем, что:',
    options: [
      'Облигации — это долевое участие, акции — долг',
      'Облигации — это долг компании, акции — долевое участие',
      'Акции всегда выгоднее',
      'Облигации не приносят дохода'
    ],
    correctAnswer: 1,
    category: 'investments',
    explanation: 'Облигации — это долговые бумаги: вы даёте компании в долг под проценты. Акции — это доля в компании с рисками и возможностью роста.',
    difficulty: 'hard'
  },
  {
    question: 'Что такое ПИФ (паевой инвестиционный фонд)?',
    options: [
      'Банковский депозит',
      'Общий котёл денег инвесторов, управляемый профессионалами',
      'Вид кредита',
      'Налоговый вычет'
    ],
    correctAnswer: 1,
    category: 'investments',
    explanation: 'ПИФ — это общий фонд денег многих инвесторов, которым управляют профессионалы. Вы покупаете "пай" — долю в этом фонде.',
    difficulty: 'hard'
  },
  
  // Кредиты - Easy
  {
    question: 'Что такое кредит?',
    options: [
      'Деньги, которые банк даёт в долг',
      'Деньги, которые вы даёте банку',
      'Подарок от банка',
      'Зарплата'
    ],
    correctAnswer: 0,
    category: 'credit',
    explanation: 'Кредит — это деньги, которые банк даёт вам в долг. Вы обязаны вернуть их с процентами в установленный срок.',
    difficulty: 'easy'
  },
  {
    question: 'Процент по кредиту — это:',
    options: [
      'Плата за пользование кредитом',
      'Сумма кредита',
      'Срок кредита',
      'Штраф за просрочку'
    ],
    correctAnswer: 0,
    category: 'credit',
    explanation: 'Процентная ставка — это плата за пользование деньгами банка. Чем выше ставка, тем больше переплата по кредиту.',
    difficulty: 'easy'
  },
  {
    question: 'Что произойдёт, если не платить кредит вовремя?',
    options: [
      'Ничего не будет',
      'Начислят штрафы и испортят кредитную историю',
      'Банк забудет о долге',
      'Кредит станет подарком'
    ],
    correctAnswer: 1,
    category: 'credit',
    explanation: 'При просрочке платежей начисляются штрафы и пени, портится кредитная история. В будущем будет сложно получить новый кредит.',
    difficulty: 'easy'
  },
  
  // Кредиты - Medium
  {
    question: 'Что такое кредитная история?',
    options: [
      'История всех покупок',
      'Запись о кредитах и их погашении',
      'Список банковских карт',
      'История работодателей'
    ],
    correctAnswer: 1,
    category: 'credit',
    explanation: 'Кредитная история — это запись обо всех ваших кредитах и их погашении. Банки проверяют её перед выдачей кредита.',
    difficulty: 'medium'
  },
  {
    question: 'Что лучше: досрочное погашение кредита или по графику?',
    options: [
      'По графику, это выгоднее банку',
      'Досрочное, так как меньше переплата по процентам',
      'Без разницы',
      'Лучше продлить срок кредита'
    ],
    correctAnswer: 1,
    category: 'credit',
    explanation: 'Досрочное погашение уменьшает переплату по процентам. Чем быстрее вы вернёте кредит, тем меньше заплатите банку.',
    difficulty: 'medium'
  },
  
  // Кредиты - Hard
  {
    question: 'Полная стоимость кредита (ПСК) включает:',
    options: [
      'Только проценты',
      'Проценты, комиссии, страховки и другие платежи',
      'Только сумму долга',
      'Только страховку'
    ],
    correctAnswer: 1,
    category: 'credit',
    explanation: 'ПСК показывает реальную стоимость кредита в процентах годовых. Включает проценты, комиссии, страховки и другие обязательные платежи.',
    difficulty: 'hard'
  },
  
  // Налоги - Medium
  {
    question: 'Что такое НДФЛ?',
    options: [
      'Налог на добавленную стоимость',
      'Налог на доходы физических лиц',
      'Налог на имущество',
      'Транспортный налог'
    ],
    correctAnswer: 1,
    category: 'taxes',
    explanation: 'НДФЛ — налог на доходы физических лиц. В России основная ставка 13%. Этот налог удерживается из зарплаты автоматически.',
    difficulty: 'medium'
  },
  {
    question: 'Налог на добавленную стоимость (НДС) — это:',
    options: [
      'Налог с зарплаты',
      'Налог, включённый в цену большинства товаров',
      'Налог на имущество',
      'Налог на прибыль'
    ],
    correctAnswer: 1,
    category: 'taxes',
    explanation: 'НДС — косвенный налог, который включён в цену товаров и услуг. В России основная ставка 20%. Фактически его платит покупатель.',
    difficulty: 'medium'
  },
  {
    question: 'Налоговый вычет — это:',
    options: [
      'Дополнительный налог',
      'Возврат части уплаченного налога',
      'Штраф за неуплату',
      'Освобождение от всех налогов'
    ],
    correctAnswer: 1,
    category: 'taxes',
    explanation: 'Налоговый вычет — это возврат части уплаченного НДФЛ. Например, за лечение, обучение, покупку жилья. Можно вернуть до 13% расходов.',
    difficulty: 'medium'
  },
  
  // Налоги - Hard
  {
    question: 'Какой налог платят с дохода от продажи квартиры?',
    options: [
      'НДС 20%',
      'НДФЛ 13% (если владели менее 3-5 лет)',
      'Налог не платится в любом случае',
      'Налог на имущество'
    ],
    correctAnswer: 1,
    category: 'taxes',
    explanation: 'Если владели квартирой менее 3-5 лет (зависит от обстоятельств), с дохода от продажи платится НДФЛ 13%. При большей собственности — налога нет.',
    difficulty: 'hard'
  },
  
  // Банки - Easy
  {
    question: 'Что такое банковская карта?',
    options: [
      'Документ для получения кредита',
      'Инструмент для доступа к деньгам на счёте',
      'Удостоверение личности',
      'Клубная карта'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'Банковская карта — это инструмент для доступа к вашему счёту в банке. Она позволяет снимать наличные и платить безналично.',
    difficulty: 'easy'
  },
  {
    question: 'Что такое ПИН-код?',
    options: [
      'Номер карты',
      'Секретный код из 4 цифр',
      'Срок действия карты',
      'Имя владельца'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'ПИН-код — это секретный код из 4 цифр для подтверждения операций с картой. Никогда не сообщайте его никому!',
    difficulty: 'easy'
  },
  {
    question: 'Что делать, если потерял банковскую карту?',
    options: [
      'Ждать, когда найдут',
      'Срочно заблокировать через банк',
      'Ничего, карта защищена',
      'Искать неделю, потом блокировать'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'При утере карты немедленно заблокируйте её через приложение банка или по телефону горячей линии. Иначе мошенники могут украсть деньги.',
    difficulty: 'easy'
  },
  
  // Банки - Medium
  {
    question: 'Чем дебетовая карта отличается от кредитной?',
    options: [
      'Дебетовая — это ваши деньги, кредитная — деньги банка',
      'Кредитная — это ваши деньги, дебетовая — деньги банка',
      'Они одинаковые',
      'Дебетовая платная, кредитная бесплатная'
    ],
    correctAnswer: 0,
    category: 'banking',
    explanation: 'Дебетовая карта — доступ к вашим деньгам на счёте. Кредитная карта — деньги банка в долг, которые нужно возвращать с процентами.',
    difficulty: 'medium'
  },
  {
    question: 'Что такое кэшбэк?',
    options: [
      'Комиссия за перевод',
      'Возврат части потраченных денег',
      'Штраф за просрочку',
      'Бонус за открытие счёта'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'Кэшбэк — это возврат части потраченных денег на карту. Обычно 1-5% от суммы покупки. Банки используют это для привлечения клиентов.',
    difficulty: 'medium'
  },
  
  // Банки - Hard
  {
    question: 'Система страхования вкладов (АСВ) гарантирует:',
    options: [
      '100% суммы вклада',
      'До 1,4 млн рублей при банкротстве банка',
      'Только проценты по вкладу',
      'Ничего не гарантирует'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'АСВ страхует вклады до 1,4 млн рублей на один банк. Если банк обанкротится, государство вернёт деньги в пределах этой суммы.',
    difficulty: 'hard'
  },
  {
    question: 'CVV/CVC код на карте — это:',
    options: [
      'Номер счёта',
      'Код безопасности для онлайн-покупок',
      'Срок действия карты',
      'Код банка'
    ],
    correctAnswer: 1,
    category: 'banking',
    explanation: 'CVV/CVC — это 3 цифры на обороте карты. Они нужны для онлайн-платежей. Никогда не сообщайте их вместе с номером карты!',
    difficulty: 'hard'
  }
]

export default function FinancialLiteracyGame({ gradeId = 5, onExperience }: FinancialLiteracyGameProps) {
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
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
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
                  <Coins className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
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
                  <Gift className="w-8 h-8 mx-auto mb-2 text-purple-400" />
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
              }} className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500">
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
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardHeader className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Wallet className="w-16 h-16 mx-auto text-green-400" />
            </motion.div>
            <CardTitle className="text-3xl mt-4">Финансовая грамотность</CardTitle>
            <p className="text-gray-400 mt-2">
              Научись управлять деньгами! 💰
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
                    className={`flex flex-col py-3 ${difficulty === d ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                  >
                    <span className="text-lg">{d === 'easy' ? '🌱' : d === 'medium' ? '🌿' : '🌳'}</span>
                    <span className="text-xs">{d === 'easy' ? 'Лёгкий' : d === 'medium' ? 'Средний' : 'Сложный'}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Тема:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Button
                  onClick={() => setSelectedCategory('all')}
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className={`flex flex-col py-3 ${selectedCategory === 'all' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-xs">Все темы</span>
                </Button>
                {(Object.keys(categoryNames) as QuestionCategory[]).map((cat) => {
                  const Icon = categoryIcons[cat]
                  return (
                    <Button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      className={`flex flex-col py-3 ${selectedCategory === cat ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
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
              className="w-full py-6 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Начать игру
            </Button>

            <p className="text-center text-sm text-gray-500">
              {filteredQuestions.length} вопросов выбрано • +130 XP
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
              <Gift className="w-4 h-4" />
              <span className="text-sm font-bold">x{streak}</span>
            </motion.div>
          )}
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${
            timeLeft > 15 ? 'bg-green-500' : timeLeft > 5 ? 'bg-yellow-500' : 'bg-red-500'
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
                <Icon className="w-4 h-4 text-green-400" />
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
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            {currentQuestion >= filteredQuestions.length - 1 ? 'Завершить' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
