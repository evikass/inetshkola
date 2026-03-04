'use client'

import { useCallback, useRef, useEffect } from 'react'

// Типы звуков
type SoundType = 'correct' | 'wrong' | 'levelUp' | 'achievement' | 'click' | 'success' | 'coin' | 'streak'

// Интерфейс для настроек звука
interface SoundSettings {
  enabled: boolean
  volume: number
}

// Базовые частоты для простых звуков
const SOUND_FREQUENCIES: Record<SoundType, { frequencies: number[], durations: number[], type: OscillatorType }> = {
  correct: {
    frequencies: [523.25, 659.25, 783.99], // C5, E5, G5 - мажорное трезвучие
    durations: [0.1, 0.1, 0.15],
    type: 'sine'
  },
  wrong: {
    frequencies: [200, 150], // Низкие частоты для ошибки
    durations: [0.15, 0.2],
    type: 'sawtooth'
  },
  levelUp: {
    frequencies: [392, 523.25, 659.25, 783.99, 1046.5], // G4, C5, E5, G5, C6 - арпеджио
    durations: [0.1, 0.1, 0.1, 0.1, 0.2],
    type: 'sine'
  },
  achievement: {
    frequencies: [523.25, 659.25, 783.99, 1046.5], // C5, E5, G5, C6
    durations: [0.1, 0.1, 0.1, 0.3],
    type: 'triangle'
  },
  click: {
    frequencies: [800],
    durations: [0.05],
    type: 'sine'
  },
  success: {
    frequencies: [440, 554.37, 659.25, 880], // A4, C#5, E5, A5
    durations: [0.1, 0.1, 0.1, 0.2],
    type: 'sine'
  },
  coin: {
    frequencies: [987.77, 1318.5], // B5, E6 - звук монеты
    durations: [0.08, 0.15],
    type: 'square'
  },
  streak: {
    frequencies: [523.25, 659.25, 783.99, 1046.5, 1318.5], // Восходящая последовательность
    durations: [0.08, 0.08, 0.08, 0.08, 0.15],
    type: 'triangle'
  }
}

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const settingsRef = useRef<SoundSettings>({
    enabled: true,
    volume: 0.3
  })

  // Инициализация AudioContext
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  // Загрузка настроек из localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('school-sound-settings')
    if (savedSettings) {
      try {
        settingsRef.current = JSON.parse(savedSettings)
      } catch (e) {
        console.error('Error loading sound settings:', e)
      }
    }
  }, [])

  // Сохранение настроек
  const saveSettings = useCallback(() => {
    localStorage.setItem('school-sound-settings', JSON.stringify(settingsRef.current))
  }, [])

  // Проигрывание звука
  const playSound = useCallback((type: SoundType) => {
    if (!settingsRef.current.enabled) return

    try {
      const audioContext = getAudioContext()
      const soundConfig = SOUND_FREQUENCIES[type]
      
      // Resume AudioContext if suspended (требуется взаимодействие пользователя)
      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }

      let startTime = audioContext.currentTime

      soundConfig.frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.type = soundConfig.type
        oscillator.frequency.setValueAtTime(freq, startTime)
        
        // Envelope для плавного затухания
        gainNode.gain.setValueAtTime(0, startTime)
        gainNode.gain.linearRampToValueAtTime(settingsRef.current.volume, startTime + 0.01)
        gainNode.gain.linearRampToValueAtTime(0, startTime + soundConfig.durations[index])
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.start(startTime)
        oscillator.stop(startTime + soundConfig.durations[index])
        
        startTime += soundConfig.durations[index]
      })
    } catch (error) {
      console.warn('Error playing sound:', error)
    }
  }, [getAudioContext])

  // Включение/выключение звуков
  const toggleSound = useCallback(() => {
    settingsRef.current.enabled = !settingsRef.current.enabled
    saveSettings()
    return settingsRef.current.enabled
  }, [saveSettings])

  // Установка громкости
  const setVolume = useCallback((volume: number) => {
    settingsRef.current.volume = Math.max(0, Math.min(1, volume))
    saveSettings()
  }, [saveSettings])

  // Получение текущих настроек
  const getSettings = useCallback(() => ({ ...settingsRef.current }), [])

  return {
    playSound,
    toggleSound,
    setVolume,
    getSettings,
    // Предустановленные функции для частых звуков
    playCorrect: () => playSound('correct'),
    playWrong: () => playSound('wrong'),
    playLevelUp: () => playSound('levelUp'),
    playAchievement: () => playSound('achievement'),
    playClick: () => playSound('click'),
    playSuccess: () => playSound('success'),
    playCoin: () => playSound('coin'),
    playStreak: () => playSound('streak'),
  }
}

// Экспорт типов
export type { SoundType, SoundSettings }
