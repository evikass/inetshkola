'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Settings, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { useSound } from '@/hooks/useSound'

interface SoundControlProps {
  compact?: boolean
}

export default function SoundControl({ compact = false }: SoundControlProps) {
  const [showSettings, setShowSettings] = useState(false)
  const { getSettings, toggleSound, setVolume, playClick } = useSound()
  const [settings, setSettings] = useState({ enabled: true, volume: 0.3 })
  
  useEffect(() => {
    setSettings(getSettings())
  }, [getSettings])
  
  const handleToggle = () => {
    playClick()
    const newEnabled = toggleSound()
    setSettings(prev => ({ ...prev, enabled: newEnabled }))
  }
  
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100
    setVolume(newVolume)
    setSettings(prev => ({ ...prev, volume: newVolume }))
  }
  
  if (compact) {
    return (
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-lg transition-all ${
          settings.enabled 
            ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
            : 'bg-white/5 text-gray-500 hover:bg-white/10'
        }`}
        title={settings.enabled ? 'Звуки включены' : 'Звуки выключены'}
      >
        {settings.enabled ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </motion.button>
    )
  }
  
  return (
    <>
      {/* Кнопка управления */}
      <motion.button
        onClick={() => setShowSettings(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all"
      >
        {settings.enabled ? (
          <Volume2 className="w-4 h-4 text-blue-400" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400" />
        )}
        <span className="text-sm">Звук</span>
      </motion.button>
      
      {/* Модальное окно настроек */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm"
            >
              <Card className="bg-slate-900/95 backdrop-blur-xl border-white/10 overflow-hidden">
                {/* Заголовок */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-white">Настройки звука</h3>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Настройки */}
                <div className="p-4 space-y-4">
                  {/* Включение/выключение */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {settings.enabled ? (
                        <Volume2 className="w-5 h-5 text-blue-400" />
                      ) : (
                        <VolumeX className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="text-white">
                        {settings.enabled ? 'Звуки включены' : 'Звуки выключены'}
                      </span>
                    </div>
                    <Button
                      onClick={handleToggle}
                      size="sm"
                      className={settings.enabled 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-gray-600 hover:bg-gray-500 text-white'
                      }
                    >
                      {settings.enabled ? 'Выключить' : 'Включить'}
                    </Button>
                  </div>
                  
                  {/* Громкость */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Громкость</span>
                      <span className="text-sm text-white">
                        {Math.round(settings.volume * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[settings.volume * 100]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={5}
                      disabled={!settings.enabled}
                      className={!settings.enabled ? 'opacity-50' : ''}
                    />
                  </div>
                  
                  {/* Превью звуков */}
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-2">Превью звуков:</p>
                    <div className="flex flex-wrap gap-2">
                      <PreviewButton label="✅ Правильно" sound="correct" />
                      <PreviewButton label="❌ Ошибка" sound="wrong" />
                      <PreviewButton label="⬆️ Уровень" sound="levelUp" />
                      <PreviewButton label="🏆 Достижение" sound="achievement" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Кнопка для превью звука
function PreviewButton({ label, sound }: { label: string; sound: 'correct' | 'wrong' | 'levelUp' | 'achievement' }) {
  const { playSound, getSettings } = useSound()
  const settings = getSettings()
  
  return (
    <button
      onClick={() => playSound(sound)}
      disabled={!settings.enabled}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        settings.enabled
          ? 'bg-white/5 hover:bg-white/10 text-white'
          : 'bg-white/5 text-gray-500 cursor-not-allowed'
      }`}
    >
      {label}
    </button>
  )
}
