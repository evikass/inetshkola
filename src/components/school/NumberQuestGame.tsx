'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Swords, Heart, Star, Zap, Target, TrendingUp, 
  Clock, Trophy, Skull, Shield, Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface QuestProblem {
  question: string
  answer: number
  type: 'addition' | 'subtraction' | 'multiplication' | 'division' | 'mixed'
  difficulty: number
  timeBonus: number
}

interface Enemy {
  name: string
  emoji: string
  hp: number
  maxHp: number
  attack: number
  reward: number
}

interface Props {
  onScore?: (points: number) => void
  gradeId?: number
}

const ENEMIES: Enemy[] = [
  { name: 'Слизень', emoji: '🐌', hp: 30, maxHp: 30, attack: 5, reward: 10 },
  { name: 'Гоблин', emoji: '👺', hp: 50, maxHp: 50, attack: 10, reward: 20 },
  { name: 'Скелет', emoji: '💀', hp: 70, maxHp: 70, attack: 15, reward: 30 },
  { name: 'Огр', emoji: '👹', hp: 100, maxHp: 100, attack: 20, reward: 50 },
  { name: 'Дракон', emoji: '🐉', hp: 150, maxHp: 150, attack: 30, reward: 100 },
  { name: 'Тёмный маг', emoji: '🧙‍♂️', hp: 200, maxHp: 200, attack: 40, reward: 150 },
  { name: 'Древний голем', emoji: '🗿', hp: 250, maxHp: 250, attack: 35, reward: 200 },
  { name: 'Космический страж', emoji: '👽', hp: 300, maxHp: 300, attack: 50, reward: 300 },
]

export default function NumberQuestGame({ onScore, gradeId = 1 }: Props) {
  const [playerHp, setPlayerHp] = useState(100)
  const [playerMaxHp, setPlayerMaxHp] = useState(100)
  const [currentEnemy, setCurrentEnemy] = useState<Enemy | null>(null)
  const [currentProblem, setCurrentProblem] = useState<QuestProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [enemiesDefeated, setEnemiesDefeated] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showVictory, setShowVictory] = useState(false)
  const [showDefeat, setShowDefeat] = useState(false)
  const [combo, setCombo] = useState(0)
  const [criticalHit, setCriticalHit] = useState(false)

  // Генерация математической задачи
  const generateProblem = useCallback((difficulty: number): QuestProblem => {
    const types = ['addition', 'subtraction', 'multiplication', 'division', 'mixed']
    const type = types[Math.floor(Math.random() * (difficulty <= 2 ? 2 : difficulty <= 4 ? 4 : 5))] as QuestProblem['type']
    
    let a: number, b: number, answer: number, question: string
    
    const maxNum = Math.min(10 + difficulty * 5, 100)
    
    switch (type) {
      case 'addition':
        a = Math.floor(Math.random() * maxNum) + 1
        b = Math.floor(Math.random() * maxNum) + 1
        answer = a + b
        question = `${a} + ${b} = ?`
        break
      case 'subtraction':
        a = Math.floor(Math.random() * maxNum) + 10
        b = Math.floor(Math.random() * Math.min(a, maxNum)) + 1
        answer = a - b
        question = `${a} − ${b} = ?`
        break
      case 'multiplication':
        a = Math.floor(Math.random() * Math.min(12, maxNum / 2)) + 1
        b = Math.floor(Math.random() * Math.min(12, maxNum / 2)) + 1
        answer = a * b
        question = `${a} × ${b} = ?`
        break
      case 'division':
        b = Math.floor(Math.random() * 10) + 2
        answer = Math.floor(Math.random() * 10) + 1
        a = b * answer
        question = `${a} ÷ ${b} = ?`
        break
      default: // mixed
        const ops = ['+', '−', '×']
        const op = ops[Math.floor(Math.random() * 3)]
        if (op === '+') {
          a = Math.floor(Math.random() * 50) + 1
          b = Math.floor(Math.random() * 50) + 1
          answer = a + b
        } else if (op === '−') {
          a = Math.floor(Math.random() * 50) + 20
          b = Math.floor(Math.random() * Math.min(a, 30)) + 1
          answer = a - b
        } else {
          a = Math.floor(Math.random() * 12) + 1
          b = Math.floor(Math.random() * 12) + 1
          answer = a * b
        }
        question = `${a} ${op} ${b} = ?`
    }
    
    return {
      question,
      answer,
      type,
      difficulty,
      timeBonus: Math.max(5, 20 - difficulty * 2)
    }
  }, [])

  // Спавн нового врага
  const spawnEnemy = useCallback(() => {
    const enemyIndex = Math.min(Math.floor(level / 2), ENEMIES.length - 1)
    const baseEnemy = ENEMIES[enemyIndex]
    
    // Масштабирование врага по уровню
    const scaledHp = Math.floor(baseEnemy.hp * (1 + (level - 1) * 0.2))
    const scaledAttack = Math.floor(baseEnemy.attack * (1 + (level - 1) * 0.1))
    const scaledReward = Math.floor(baseEnemy.reward * (1 + (level - 1) * 0.15))
    
    setCurrentEnemy({
      ...baseEnemy,
      hp: scaledHp,
      maxHp: scaledHp,
      attack: scaledAttack,
      reward: scaledReward
    })
    
    setCurrentProblem(generateProblem(level))
    setTimeLeft(15)
  }, [level, generateProblem])

  // Таймер
  useEffect(() => {
    if (!isPlaying || !currentEnemy) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Время вышло - игрок получает урон
          handleWrongAnswer()
          return 15
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [isPlaying, currentEnemy])

  const startGame = () => {
    setIsPlaying(true)
    setPlayerHp(100)
    setPlayerMaxHp(100)
    setScore(0)
    setLevel(1)
    setEnemiesDefeated(0)
    setCombo(0)
    setShowVictory(false)
    setShowDefeat(false)
    spawnEnemy()
  }

  const handleAnswer = () => {
    if (!currentProblem || !currentEnemy) return
    
    const userNum = parseInt(userAnswer)
    
    if (userNum === currentProblem.answer) {
      handleCorrectAnswer()
    } else {
      handleWrongAnswer()
    }
    
    setUserAnswer('')
  }

  const handleCorrectAnswer = () => {
    if (!currentEnemy || !currentProblem) return
    
    // Урон врагу
    const baseDamage = 10 + Math.floor(timeLeft / 2)
    const comboMultiplier = 1 + combo * 0.1
    const damage = Math.floor(baseDamage * comboMultiplier)
    
    // Проверка на критический удар (10% шанс)
    const isCritical = Math.random() < 0.1
    const finalDamage = isCritical ? damage * 2 : damage
    
    setCriticalHit(isCritical)
    setTimeout(() => setCriticalHit(false), 500)
    
    const newEnemyHp = currentEnemy.hp - finalDamage
    setCombo(prev => prev + 1)
    
    if (newEnemyHp <= 0) {
      // Враг повержен
      const reward = currentEnemy.reward + (combo * 5)
      setScore(prev => prev + reward)
      setEnemiesDefeated(prev => prev + 1)
      onScore?.(reward)
      
      // Повышение уровня каждые 3 врага
      if ((enemiesDefeated + 1) % 3 === 0) {
        setLevel(prev => prev + 1)
        // Восстановление здоровья при повышении уровня
        setPlayerHp(prev => Math.min(playerMaxHp, prev + 20))
      }
      
      // Следующий враг
      setTimeout(() => spawnEnemy(), 1000)
    } else {
      // Враг ещё жив
      setCurrentEnemy(prev => prev ? { ...prev, hp: newEnemyHp } : null)
      setCurrentProblem(generateProblem(level))
      setTimeLeft(15)
    }
  }

  const handleWrongAnswer = () => {
    if (!currentEnemy) return
    
    setCombo(0)
    setPlayerHp(prev => {
      const newHp = prev - currentEnemy.attack
      if (newHp <= 0) {
        setIsPlaying(false)
        setShowDefeat(true)
        return 0
      }
      return newHp
    })
    
    setCurrentProblem(generateProblem(level))
    setTimeLeft(15)
  }

  const handleHeal = () => {
    if (score >= 50) {
      setScore(prev => prev - 50)
      setPlayerHp(prev => Math.min(playerMaxHp, prev + 30))
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-red-900/80 to-orange-900/80 border-red-500/30 backdrop-blur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Swords className="w-6 h-6 text-red-400" />
              Числовой квест
            </h3>
            <p className="text-red-300">Победи монстров решая примеры!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-yellow-500/30 rounded-lg">
              <span className="text-yellow-300 text-xs">Уровень</span>
              <span className="text-white font-bold ml-1">{level}</span>
            </div>
            <div className="px-3 py-1 bg-purple-500/30 rounded-lg">
              <span className="text-purple-300 text-xs">Очки</span>
              <span className="text-white font-bold ml-1">{score}</span>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          <div className="text-center py-8">
            {showDefeat ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <Skull className="w-16 h-16 text-red-400 mx-auto" />
                <h4 className="text-2xl font-bold text-red-400">Поражение!</h4>
                <p className="text-white/70">
                  Побеждено врагов: {enemiesDefeated}
                </p>
                <p className="text-yellow-400 font-bold">Набрано очков: {score}</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <Shield className="w-16 h-16 text-blue-400 mx-auto" />
                <h4 className="text-2xl font-bold text-white">Готов к приключению?</h4>
                <p className="text-white/70">Решай примеры и побеждай монстров!</p>
              </motion.div>
            )}
            <Button
              onClick={startGame}
              className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {showDefeat ? 'Играть снова' : 'Начать квест'}
            </Button>
          </div>
        ) : (
          <>
            {/* Player & Enemy Stats */}
            <div className="grid grid-cols-2 gap-4">
              {/* Player */}
              <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🧙‍♂️</span>
                  <span className="text-blue-300 font-bold">Герой</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    <Progress value={(playerHp / playerMaxHp) * 100} className="h-3" />
                  </div>
                  <div className="text-xs text-blue-300">{playerHp}/{playerMaxHp} HP</div>
                </div>
              </div>
              
              {/* Enemy */}
              <div className="p-4 bg-red-500/20 rounded-xl border border-red-500/30">
                {currentEnemy && (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{currentEnemy.emoji}</span>
                      <span className="text-red-300 font-bold">{currentEnemy.name}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Skull className="w-4 h-4 text-red-400" />
                        <Progress value={(currentEnemy.hp / currentEnemy.maxHp) * 100} className="h-3" />
                      </div>
                      <div className="text-xs text-red-300">{currentEnemy.hp}/{currentEnemy.maxHp} HP</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Combo indicator */}
            {combo > 0 && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-center"
              >
                <span className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-bold">
                  🔥 Комбо x{combo}!
                </span>
              </motion.div>
            )}

            {/* Timer */}
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <div className="w-48 h-4 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-yellow-500"
                  initial={{ width: '100%' }}
                  animate={{ 
                    width: `${(timeLeft / 15) * 100}%`,
                    backgroundColor: timeLeft < 5 ? '#ef4444' : '#22c55e'
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-white font-bold">{timeLeft}с</span>
            </div>

            {/* Problem */}
            {currentProblem && (
              <motion.div
                key={currentProblem.question}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-center p-6 rounded-xl ${
                  criticalHit 
                    ? 'bg-yellow-500/30 border-2 border-yellow-400' 
                    : 'bg-white/10'
                }`}
              >
                {criticalHit && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-yellow-300 font-bold mb-2"
                  >
                    ⚡ КРИТИЧЕСКИЙ УДАР! ⚡
                  </motion.div>
                )}
                <div className="text-4xl font-bold text-white mb-4">
                  {currentProblem.question}
                </div>
                
                <div className="flex justify-center gap-2">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAnswer()}
                    placeholder="Ответ"
                    className="w-32 px-4 py-3 text-2xl text-center bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <Button
                    onClick={handleAnswer}
                    className="px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  >
                    <Target className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Heal button */}
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleHeal}
                disabled={score < 50 || playerHp >= playerMaxHp}
                className="bg-green-500/20 border-green-500/30 text-green-300 hover:bg-green-500/30"
              >
                <Heart className="w-4 h-4 mr-1" /> Лечение (50 очков)
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-4 text-sm text-white/60">
              <span>⚔️ Побеждено: {enemiesDefeated}</span>
              <span>🎯 Уровень: {level}</span>
            </div>
          </>
        )}
      </div>
    </Card>
  )
}
