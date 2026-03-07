'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Heart, Coffee, Sparkles, Gift, X, Copy, Check, 
  CreditCard, Smartphone, ExternalLink
} from 'lucide-react'

interface DonationOption {
  amount: string
  amountNum: number
  label: string
  icon: typeof Coffee
  color: string
  description: string
}

const donationOptions: DonationOption[] = [
  { amount: '100₽', amountNum: 100, label: 'Кофе', icon: Coffee, color: 'from-amber-500 to-orange-500', description: 'Поможет купить кофе разработчику ☕' },
  { amount: '300₽', amountNum: 300, label: 'Урок', icon: Sparkles, color: 'from-purple-500 to-pink-500', description: 'Покроет часть затрат на один урок 📚' },
  { amount: '500₽', amountNum: 500, label: 'Тема', icon: Gift, color: 'from-pink-500 to-rose-500', description: 'Поможет создать новую тему 🎁' },
]

// Способы оплаты
const paymentMethods = [
  {
    id: 'card',
    name: 'Банковская карта',
    icon: CreditCard,
    color: 'from-purple-500 to-pink-600',
    info: 'Перевод на карту',
    cardNumber: '2202 2080 6819 7913',
    recipient: 'Кассин Евгений Юрьевич',
    link: null
  },
  {
    id: 'account',
    name: 'Банковский счёт',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-600',
    info: 'Номер счёта',
    cardNumber: '40817 810 1270 0864 1225',
    recipient: 'Кассин Евгений Юрьевич',
    link: null
  },
  {
    id: 'phone',
    name: 'По номеру телефона',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-600',
    info: 'СБП (по номеру телефона)',
    cardNumber: '+7 (909) 132-72-32',
    recipient: 'Кассин Евгений Юрьевич',
    link: null
  },
  {
    id: 'boosty',
    name: 'Boosty',
    icon: ExternalLink,
    color: 'from-orange-500 to-red-500',
    info: 'Платформа поддержки',
    cardNumber: null,
    recipient: 'ИНЕТШКОЛА',
    link: 'https://boosty.to/inetshkola'
  }
]

export default function DonateSection() {
  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleSelectDonation = (option: DonationOption) => {
    setSelectedOption(option)
    setShowPaymentModal(true)
  }

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const closePaymentModal = () => {
    setShowPaymentModal(false)
    setTimeout(() => setSelectedOption(null), 300)
  }

  return (
    <>
      <div className="space-y-4">
        {/* Header */}
        <Card className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-500/30 rounded-lg">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Поддержать проект</h2>
                <p className="text-sm text-gray-400">Помогите развитию образовательной платформы</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main donation card */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Gift className="w-5 h-5 text-pink-400" />
              Выберите сумму поддержки
            </CardTitle>
            <CardDescription className="text-gray-400">
              Ваша поддержка помогает нам развивать платформу и добавлять новый контент
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Info text */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
              <p className="text-sm text-white/80 leading-relaxed">
                ИНЕТШКОЛА — бесплатная образовательная платформа для школьников. 
                Мы постоянно работаем над улучшением контента и добавлением новых функций. 
                Ваша поддержка поможет нам делать обучение ещё лучше!
              </p>
            </div>

            {/* Donation options - работающие кнопки */}
            <div className="grid grid-cols-3 gap-3">
              {donationOptions.map((option) => (
                <motion.div
                  key={option.amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card 
                    className={`bg-gradient-to-br ${option.color} border-0 cursor-pointer transition-shadow hover:shadow-lg hover:shadow-pink-500/20`}
                    onClick={() => handleSelectDonation(option)}
                  >
                    <CardContent className="p-3 text-center">
                      <option.icon className="w-5 h-5 mx-auto mb-1 text-white/80" />
                      <p className="text-lg font-bold text-white">{option.amount}</p>
                      <p className="text-xs text-white/70">{option.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Свободная сумма */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-500/30 cursor-pointer hover:border-purple-400/50"
                onClick={() => handleSelectDonation({ 
                  amount: 'Любая', 
                  amountNum: 0, 
                  label: 'Сумма', 
                  icon: Heart, 
                  color: 'from-purple-500 to-pink-500',
                  description: 'Поддержите проект любой удобной суммой 💖'
                })}
              >
                <CardContent className="p-3 text-center">
                  <p className="text-sm font-medium text-white">💝 Своя сумма</p>
                  <p className="text-xs text-gray-300 mt-1">Введите любую сумму при переводе</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Thank you message */}
            <motion.div 
              className="text-center pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-gray-400">
                Спасибо за вашу поддержку! 💖
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && selectedOption && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closePaymentModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-purple-900 
                rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={closePaymentModal}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 
                  flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${selectedOption.color}`}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <selectedOption.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedOption.amount === 'Любая' ? 'Своя сумма' : `Поддержка ${selectedOption.amount}`}
                    </h3>
                    <p className="text-sm text-white/80">{selectedOption.description}</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-400 mb-4">Выберите способ перевода:</p>
                
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                        <method.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{method.name}</p>
                        <p className="text-xs text-gray-400">{method.info}</p>
                      </div>
                    </div>

                    {method.cardNumber && (
                      <div className="flex items-center justify-between bg-black/20 rounded-lg p-2 mt-2">
                        <code className="text-sm text-gray-300 font-mono">{method.cardNumber}</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleCopy(method.cardNumber!, method.id)}
                        >
                          {copiedId === method.id ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 mt-2">Получатель: {method.recipient}</p>

                    {method.link && (
                      <Button
                        className="w-full mt-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                        onClick={() => window.open(method.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Открыть страницу оплаты
                      </Button>
                    )}
                  </div>
                ))}

                {/* Thank you */}
                <div className="text-center pt-4 border-t border-white/10 mt-4">
                  <p className="text-sm text-gray-400">
                    💖 Спасибо за поддержку проекта ИНЕТШКОЛА!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
