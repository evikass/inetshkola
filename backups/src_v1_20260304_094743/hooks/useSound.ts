'use client'

import { useCallback, useRef, useState } from 'react'

interface UseSoundOptions {
  volume?: number
  enabled?: boolean
}

interface UseSoundReturn {
  playSuccess: () => void
  playError: () => void
  playClick: () => void
  playWin: () => void
  playLevelUp: () => void
  isMuted: boolean
  toggleMute: () => void
  setVolume: (volume: number) => void
}

/**
 * Custom hook for playing sound effects using Web Audio API
 * Generates sounds programmatically without external audio files
 */
export function useSound(options: UseSoundOptions = {}): UseSoundReturn {
  const { volume: initialVolume = 0.3, enabled = true } = options
  const [isMuted, setIsMuted] = useState(false)
  const volumeRef = useRef(initialVolume)
  const audioContextRef = useRef<AudioContext | null>(null)

  // Get or create AudioContext
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  // Play a tone with given frequency and duration
  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine', volume?: number) => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

      const vol = volume ?? volumeRef.current
      gainNode.gain.setValueAtTime(vol, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + duration)
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  // Play success sound - cheerful ascending tone
  const playSuccess = useCallback(() => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      // Create a pleasant ascending arpeggio
      const frequencies = [523.25, 659.25, 783.99] // C5, E5, G5
      frequencies.forEach((freq, i) => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, now + i * 0.08)

        const vol = volumeRef.current * 0.5
        gainNode.gain.setValueAtTime(0, now + i * 0.08)
        gainNode.gain.linearRampToValueAtTime(vol, now + i * 0.08 + 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.15)

        oscillator.start(now + i * 0.08)
        oscillator.stop(now + i * 0.08 + 0.15)
      })
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  // Play error sound - short descending tone
  const playError = useCallback(() => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(300, now)
      oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.2)

      const vol = volumeRef.current * 0.4
      gainNode.gain.setValueAtTime(vol, now)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25)

      oscillator.start(now)
      oscillator.stop(now + 0.25)
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  // Play click sound - soft click
  const playClick = useCallback(() => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(800, now)
      oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.05)

      const vol = volumeRef.current * 0.2
      gainNode.gain.setValueAtTime(vol, now)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05)

      oscillator.start(now)
      oscillator.stop(now + 0.05)
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  // Play win sound - victory fanfare (multiple tones)
  const playWin = useCallback(() => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      // Victory fanfare - ascending then resolving
      const notes = [
        { freq: 392, time: 0, dur: 0.15 },      // G4
        { freq: 523.25, time: 0.12, dur: 0.15 }, // C5
        { freq: 659.25, time: 0.24, dur: 0.15 }, // E5
        { freq: 783.99, time: 0.36, dur: 0.3 },  // G5
        { freq: 1046.5, time: 0.5, dur: 0.4 },   // C6
      ]

      notes.forEach(note => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(note.freq, now + note.time)

        const vol = volumeRef.current * 0.4
        gainNode.gain.setValueAtTime(0, now + note.time)
        gainNode.gain.linearRampToValueAtTime(vol, now + note.time + 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.dur)

        oscillator.start(now + note.time)
        oscillator.stop(now + note.time + note.dur)
      })
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  // Play level up sound - special ascending melody
  const playLevelUp = useCallback(() => {
    if (isMuted || !enabled) return

    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime

      // Level up melody - rising arpeggio with sparkle
      const notes = [
        { freq: 523.25, time: 0, dur: 0.1 },     // C5
        { freq: 659.25, time: 0.08, dur: 0.1 },  // E5
        { freq: 783.99, time: 0.16, dur: 0.1 },  // G5
        { freq: 1046.5, time: 0.24, dur: 0.15 }, // C6
        { freq: 1318.51, time: 0.32, dur: 0.15 }, // E6
        { freq: 1567.98, time: 0.4, dur: 0.3 },  // G6
      ]

      notes.forEach(note => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(note.freq, now + note.time)

        const vol = volumeRef.current * 0.35
        gainNode.gain.setValueAtTime(0, now + note.time)
        gainNode.gain.linearRampToValueAtTime(vol, now + note.time + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.dur)

        oscillator.start(now + note.time)
        oscillator.stop(now + note.time + note.dur)
      })

      // Add sparkle effect
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          const sparkleTime = now + 0.6 + i * 0.1
          const oscillator = ctx.createOscillator()
          const gainNode = ctx.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(ctx.destination)

          oscillator.type = 'sine'
          oscillator.frequency.setValueAtTime(2000 + i * 200, sparkleTime)

          const vol = volumeRef.current * 0.15
          gainNode.gain.setValueAtTime(vol, sparkleTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, sparkleTime + 0.05)

          oscillator.start(sparkleTime)
          oscillator.stop(sparkleTime + 0.05)
        }
      }, 600)
    } catch {
      // Audio context might not be available
    }
  }, [isMuted, enabled, getAudioContext])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev)
  }, [])

  const setVolume = useCallback((vol: number) => {
    volumeRef.current = Math.max(0, Math.min(1, vol))
  }, [])

  return {
    playSuccess,
    playError,
    playClick,
    playWin,
    playLevelUp,
    isMuted,
    toggleMute,
    setVolume
  }
}

export default useSound
