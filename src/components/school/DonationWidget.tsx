'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X, Copy, Check, CreditCard, Globe, Building2, QrCode, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DonationWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'transfer' | 'international'>('card')

  const bankAccount = '40817810127008641225'
  const phoneNumber = '+79991234567' // Номер телефона для СБП
  
  // URL для генерации QR кода через публичный API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(bankAccount)}&bgcolor=1e293b&color=ffffff&margin=1`
  
  // Прямая ссылка на Сбербанк Онлайн для перевода
  const sberbankUrl = `https://online.sberbank.ru/CSAFront/async/page/onBilling.do?BILLING_NUMBER=${bankAccount}`
  
  // СБП QR код по номеру телефона
  const sbpQrUrl = `https://qr.nspk.ru/${phoneNumber.replace('+', '')}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankAccount)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <>
      {/* Плавающая кнопка */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 backdrop-blur-sm border-2 border-white/30 shadow-lg shadow-pink-500/30 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        title="Поддержать проект"
      >
        <Heart className="w-5 h-5 text-white" />
      </motion.button>

      {/* Модальное окно */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Заголовок */}
              <div className="relative p-6 bg-gradient-to-r from-pink-600/20 to-rose-600/20 border-b border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Поддержать проект</h2>
                    <p className="text-sm text-gray-400">Помогите развитию платформы</p>
                  </div>
                </div>
              </div>

              {/* Содержимое */}
              <div className="p-6 space-y-4">
                {/* Переключатель способов */}
                <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                  <button
                    onClick={() => setSelectedMethod('card')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedMethod === 'card'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    Карта
                  </button>
                  <button
                    onClick={() => setSelectedMethod('transfer')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedMethod === 'transfer'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    Перевод
                  </button>
                  <button
                    onClick={() => setSelectedMethod('international')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedMethod === 'international'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Из-за рубежа
                  </button>
                </div>

                {/* Содержимое в зависимости от выбора */}
                {selectedMethod === 'card' && (
                  <div className="space-y-4">
                    {/* QR код */}
                    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-3 text-gray-400">
                        <QrCode className="w-4 h-4" />
                        <span className="text-sm">Отсканируйте в приложении банка</span>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-xl">
                        <img 
                          src={qrCodeUrl} 
                          alt="QR код для перевода" 
                          className="w-40 h-40"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        QR код содержит номер счёта
                      </p>
                    </div>
                    
                    {/* Номер счёта */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-sm text-gray-400 mb-2">Номер счёта Сбербанка:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-base font-mono text-white bg-white/5 px-3 py-2 rounded-lg break-all">
                          {bankAccount}
                        </code>
                        <Button
                          onClick={copyToClipboard}
                          size="sm"
                          variant="outline"
                          className="shrink-0 border-white/20 text-white hover:bg-white/10"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    
                    {/* Номер телефона для СБП */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-sm text-gray-400 mb-2">Номер телефона для СБП / Озон Банка:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-base font-mono text-white bg-white/5 px-3 py-2 rounded-lg">
                          {phoneNumber}
                        </code>
                        <Button
                          onClick={copyPhoneToClipboard}
                          size="sm"
                          variant="outline"
                          className="shrink-0 border-white/20 text-white hover:bg-white/10"
                        >
                          {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    
                    {/* Кнопки банков */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 text-center">Быстрый перевод через банк:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={copyPhoneToClipboard}
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">💜</span>
                          СБП
                          {copiedPhone && <Check className="w-3 h-3 text-green-300" />}
                        </button>
                        <a
                          href={sberbankUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">🟢</span>
                          Сбер
                        </a>
                        <a
                          href="https://www.tinkoff.ru/payments/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">🟡</span>
                          Тинькофф
                        </a>
                        <a
                          href="https://mobile.alfabank.ru/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">🔴</span>
                          Альфа
                        </a>
                        <button
                          onClick={copyPhoneToClipboard}
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">🔵</span>
                          Озон Банк
                          {copiedPhone && <Check className="w-3 h-3 text-green-300" />}
                        </button>
                        <a
                          href="https://raiffeisen.ru/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-black rounded-xl font-medium transition-all text-sm"
                        >
                          <span className="text-lg">🟨</span>
                          Райффайзен
                        </a>
                      </div>
                      
                      {/* Подсказка для СБП */}
                      <p className="text-xs text-gray-500 text-center mt-2">
                        💡 СБП и Озон Банк — скопируйте номер телефона и вставьте в приложении
                      </p>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Скопируйте номер счёта и вставьте в приложении банка
                    </p>
                  </div>
                )}

                {selectedMethod === 'transfer' && (
                  <div className="space-y-4">
                    {/* QR код */}
                    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-3 text-gray-400">
                        <QrCode className="w-4 h-4" />
                        <span className="text-sm">QR код для перевода</span>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-xl">
                        <img 
                          src={qrCodeUrl} 
                          alt="QR код для перевода" 
                          className="w-36 h-36"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-sm text-gray-400 mb-2">Банковский перевод:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-base font-mono text-white bg-white/5 px-3 py-2 rounded-lg break-all">
                          {bankAccount}
                        </code>
                        <Button
                          onClick={copyToClipboard}
                          size="sm"
                          variant="outline"
                          className="shrink-0 border-white/20 text-white hover:bg-white/10"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Сбербанк России</p>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Комиссия зависит от вашего банка
                    </p>
                  </div>
                )}

                {selectedMethod === 'international' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                      <p className="text-sm font-medium text-white">Денежные переводы:</p>
                      <div className="grid grid-cols-3 gap-2">
                        <a 
                          href="https://koronapay.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-center text-xs text-gray-300 hover:text-white transition-colors"
                        >
                          KoronaPay
                        </a>
                        <a 
                          href="https://www.contact-sys.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-center text-xs text-gray-300 hover:text-white transition-colors"
                        >
                          CONTACT
                        </a>
                        <a 
                          href="https://unistream.ru/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-center text-xs text-gray-300 hover:text-white transition-colors"
                        >
                          Unistream
                        </a>
                      </div>
                      <div className="pt-2 border-t border-white/10">
                        <p className="text-sm font-medium text-white mb-1">SWIFT перевод</p>
                        <p className="text-xs text-gray-400">
                          Через банки, работающие с РФ. Реквизиты по запросу.
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Выберите удобный способ международного перевода
                    </p>
                  </div>
                )}

                {/* Благодарность */}
                <div className="pt-4 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-300">
                    Спасибо за вашу поддержку! ❤️
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Средства пойдут на развитие платформы
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

// Экспорт плавающей кнопки для удобства
export function FloatingDonationButton() {
  return <DonationWidget />
}
