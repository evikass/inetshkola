'use client'

import { useCallback, useRef } from 'react'

// Хук для воспроизведения звуков в играх
export function useSound() {
  const audioContext = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioContext.current
  }, [])

  // Простой звук успеха
  const playSuccess = useCallback(() => {
    try {
      const ctx = getAudioContext()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.frequency.setValueAtTime(523.25, ctx.currentTime) // C5
      oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1) // E5
      oscillator.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2) // G5
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.3)
    } catch (e) {
      // Игнорируем ошибки звука
    }
  }, [getAudioContext])

  // Звук ошибки
  const playError = useCallback(() => {
    try {
      const ctx = getAudioContext()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.frequency.setValueAtTime(200, ctx.currentTime)
      oscillator.frequency.setValueAtTime(150, ctx.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.2)
    } catch (e) {
      // Игнорируем ошибки звука
    }
  }, [getAudioContext])

  // Звук победы
  const playWin = useCallback(() => {
    try {
      const ctx = getAudioContext()
      const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
      
      notes.forEach((freq, i) => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)
        
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15)
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.15)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3)
        
        oscillator.start(ctx.currentTime + i * 0.15)
        oscillator.stop(ctx.currentTime + i * 0.15 + 0.3)
      })
    } catch (e) {
      // Игнорируем ошибки звука
    }
  }, [getAudioContext])

  // Звук повышения уровня
  const playLevelUp = useCallback(() => {
    try {
      const ctx = getAudioContext()
      const notes = [392, 523.25, 659.25, 783.99, 1046.50] // G4, C5, E5, G5, C6
      
      notes.forEach((freq, i) => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)
        
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1)
        gainNode.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.1)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.2)
        
        oscillator.start(ctx.currentTime + i * 0.1)
        oscillator.stop(ctx.currentTime + i * 0.1 + 0.2)
      })
    } catch (e) {
      // Игнорируем ошибки звука
    }
  }, [getAudioContext])

  // Звук клика
  const playClick = useCallback(() => {
    try {
      const ctx = getAudioContext()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.frequency.setValueAtTime(800, ctx.currentTime)
      
      gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.05)
    } catch (e) {
      // Игнорируем ошибки звука
    }
  }, [getAudioContext])

  return {
    playSuccess,
    playError,
    playWin,
    playLevelUp,
    playClick
  }
}
