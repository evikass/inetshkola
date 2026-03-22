'use client'

import React, { useState, useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Html, Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { FlaskConical, TestTube, Beaker, Flame, Sparkles, RotateCcw, Info, ChevronRight } from 'lucide-react'

// ====================== ТИПЫ ======================
interface Substance {
  id: string
  name: string
  formula: string
  color: string
  emoji: string
  state: 'liquid' | 'solid' | 'gas'
}

interface Reaction {
  id: string
  name: string
  reactants: string[]
  products: string[]
  description: string
  equation: string
  effects: {
    colorChange?: string
    bubbles?: boolean
    smoke?: boolean
    fire?: boolean
    precipitate?: boolean
    precipitateColor?: string
  }
  safetyNote?: string
}

// ====================== ДАННЫЕ ======================
const substances: Substance[] = [
  { id: 'hcl', name: 'Соляная кислота', formula: 'HCl', color: '#ffff99', emoji: '🧪', state: 'liquid' },
  { id: 'naoh', name: 'Гидроксид натрия', formula: 'NaOH', color: '#ffffff', emoji: '⚪', state: 'solid' },
  { id: 'na2co3', name: 'Карбонат натрия', formula: 'Na₂CO₃', color: '#f0f0f0', emoji: '🧂', state: 'solid' },
  { id: 'cuso4', name: 'Сульфат меди', formula: 'CuSO₄', color: '#0066ff', emoji: '💎', state: 'solid' },
  { id: 'fes04', name: 'Сульфат железа', formula: 'FeSO₄', color: '#90EE90', emoji: '🌿', state: 'solid' },
  { id: 'nacl', name: 'Хлорид натрия', formula: 'NaCl', color: '#ffffff', emoji: '🧂', state: 'solid' },
  { id: 'h2o', name: 'Вода', formula: 'H₂O', color: '#87CEEB', emoji: '💧', state: 'liquid' },
  { id: 'phenol', name: 'Фенолфталеин', formula: 'C₂₀H₁₄O₄', color: '#ffffff', emoji: '🔴', state: 'liquid' },
  { id: 'h2so4', name: 'Серная кислота', formula: 'H₂SO₄', color: '#ffffcc', emoji: '⚠️', state: 'liquid' },
  { id: 'bacl2', name: 'Хлорид бария', formula: 'BaCl₂', color: '#ffffff', emoji: '⚪', state: 'solid' },
  { id: 'agno3', name: 'Нитрат серебра', formula: 'AgNO₃', color: '#e8e8e8', emoji: '🥈', state: 'solid' },
  { id: 'ki', name: 'Йодид калия', formula: 'KI', color: '#fff8dc', emoji: '🟡', state: 'solid' },
  { id: 'mg', name: 'Магний', formula: 'Mg', color: '#c0c0c0', emoji: '⚡', state: 'solid' },
  { id: 'zn', name: 'Цинк', formula: 'Zn', color: '#a8a8a8', emoji: '🔩', state: 'solid' },
  { id: 'koh', name: 'Гидроксид калия', formula: 'KOH', color: '#ffffff', emoji: '⚪', state: 'solid' },
  { id: 'fecl3', name: 'Хлорид железа(III)', formula: 'FeCl₃', color: '#cd853f', emoji: '🟤', state: 'solid' },
]

const reactions: Reaction[] = [
  {
    id: 'neutralization',
    name: 'Нейтрализация',
    reactants: ['hcl', 'naoh'],
    products: ['nacl', 'h2o'],
    description: 'Кислота реагирует со щёлочью, образуя соль и воду. Это классическая реакция нейтрализации.',
    equation: 'HCl + NaOH → NaCl + H₂O',
    effects: { bubbles: true }
  },
  {
    id: 'phosphoresce',
    name: 'Качественная реакция на карбонат-ион',
    reactants: ['hcl', 'na2co3'],
    products: ['nacl', 'h2o'],
    description: 'Карбонат натрия реагирует с соляной кислотой с выделением углекислого газа.',
    equation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑',
    effects: { bubbles: true, smoke: true }
  },
  {
    id: 'cuso4-naoh',
    name: 'Получение гидроксида меди',
    reactants: ['cuso4', 'naoh'],
    products: ['nacl'],
    description: 'Голубой осадок гидроксида меди(II) выпадает при взаимодействии сульфата меди с щёлочью.',
    equation: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄',
    effects: { precipitate: true, precipitateColor: '#4169E1', colorChange: '#4169E1' }
  },
  {
    id: 'phenolphthalein',
    name: 'Индикатор фенолфталеин',
    reactants: ['naoh', 'phenol'],
    products: [],
    description: 'Фенолфталеин становится малиновым в щелочной среде. Это качественная реакция на щёлочи.',
    equation: 'В щелочной среде → малиновое окрашивание',
    effects: { colorChange: '#FF1493' }
  },
  {
    id: 'h2so4-bacl2',
    name: 'Качественная реакция на сульфат-ион',
    reactants: ['h2so4', 'bacl2'],
    products: ['bacl2'],
    description: 'Белый осадок сульфата бария выпадает при взаимодействии сульфатов с хлоридом бария.',
    equation: 'H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl',
    effects: { precipitate: true, precipitateColor: '#ffffff', colorChange: '#f5f5f5' }
  },
  {
    id: 'agno3-nacl',
    name: 'Качественная реакция на хлорид-ион',
    reactants: ['agno3', 'nacl'],
    products: ['nacl'],
    description: 'Белый творожистый осадок хлорида серебра выпадает при взаимодействии хлоридов с нитратом серебра.',
    equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    effects: { precipitate: true, precipitateColor: '#ffffff', colorChange: '#f8f8ff' }
  },
  {
    id: 'mg-hcl',
    name: 'Взаимодействие магния с кислотой',
    reactants: ['mg', 'hcl'],
    products: [],
    description: 'Магний активно реагирует с соляной кислотой с выделением водорода.',
    equation: 'Mg + 2HCl → MgCl₂ + H₂↑',
    effects: { bubbles: true, fire: true },
    safetyNote: 'Выделяется водород - огнеопасно!'
  },
  {
    id: 'ki-agno3',
    name: 'Образование йодида серебра',
    reactants: ['ki', 'agno3'],
    products: [],
    description: 'Жёлтый осадок йодида серебра выпадает при взаимодействии йодидов с нитратом серебра.',
    equation: 'KI + AgNO₃ → AgI↓ + KNO₃',
    effects: { precipitate: true, precipitateColor: '#FFD700', colorChange: '#FFF8DC' }
  },
  {
    id: 'fe-naoh',
    name: 'Гидроксид железа(II)',
    reactants: ['fes04', 'naoh'],
    products: [],
    description: 'Зеленоватый осадок гидроксида железа(II) быстро окисляется на воздухе.',
    equation: 'FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄',
    effects: { precipitate: true, precipitateColor: '#90EE90', colorChange: '#98FB98' }
  },
  {
    id: 'fecl3-naoh',
    name: 'Гидроксид железа(III)',
    reactants: ['fecl3', 'naoh'],
    products: [],
    description: 'Бурый осадок гидроксида железа(III) выпадает при взаимодействии солей железа(III) с щёлочью.',
    equation: 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl',
    effects: { precipitate: true, precipitateColor: '#8B4513', colorChange: '#D2691E' }
  },
]

// ====================== 3D КОМПОНЕНТЫ ======================

// Колба
function Flask3D({ position, liquidColor, liquidLevel, bubbles, precipitate, precipitateColor }: {
  position: [number, number, number]
  liquidColor?: string
  liquidLevel?: number
  bubbles?: boolean
  precipitate?: boolean
  precipitateColor?: string
}) {
  const bubblesRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (bubblesRef.current && bubbles) {
      bubblesRef.current.children.forEach((child, i) => {
        const t = clock.getElapsedTime() + i * 0.3
        child.position.y = -0.5 + ((t * 0.5 + i * 0.15) % 0.9) * 0.8
      })
    }
  })

  return (
    <group position={position}>
      {/* Основа колбы - стекло с обводкой */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.42, 0.32, 0.6, 32]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      
      {/* Внутренность колбы */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.38, 0.28, 0.58, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.15}
        />
      </mesh>
      
      {/* Горлышко */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.17, 0.22, 0.4, 32]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      
      {/* Жидкость - более яркая */}
      {liquidColor && (
        <mesh position={[0, -0.3 + (liquidLevel || 0.3) / 2 - 0.15, 0]}>
          <cylinderGeometry args={[0.35, 0.25, liquidLevel || 0.3, 32]} />
          <meshStandardMaterial 
            color={liquidColor}
            transparent 
            opacity={0.95}
            emissive={liquidColor}
            emissiveIntensity={0.8}
          />
        </mesh>
      )}
      
      {/* Осадок - более заметный */}
      {precipitate && precipitateColor && (
        <mesh position={[0, -0.55, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.15, 32]} />
          <meshStandardMaterial 
            color={precipitateColor} 
            emissive={precipitateColor}
            emissiveIntensity={0.6}
          />
        </mesh>
      )}
      
      {/* Пузырьки - больше и ярче */}
      {bubbles && (
        <group ref={bubblesRef}>
          {[...Array(20)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i * 1.5) * 0.2, -0.5 + i * 0.05, Math.cos(i * 1.5) * 0.2]}>
              <sphereGeometry args={[0.04 + Math.random() * 0.03, 12, 12]} />
              <meshStandardMaterial 
                color="#ffffff" 
                transparent 
                opacity={0.9}
                emissive="#ffffff"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      )}
    </group>
  )
}

// Пробирка
function TestTube3D({ position, liquidColor, liquidLevel }: {
  position: [number, number, number]
  liquidColor?: string
  liquidLevel?: number
}) {
  return (
    <group position={position} rotation={[0, 0, 0.1]}>
      {/* Стекло пробирки */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      {/* Дно пробирки (закруглённое) */}
      <mesh position={[0, -0.4, 0]}>
        <sphereGeometry args={[0.1, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      {liquidColor && (
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.09, 0.08, liquidLevel || 0.4, 16]} />
          <meshStandardMaterial 
            color={liquidColor} 
            transparent 
            opacity={0.95}
            emissive={liquidColor}
            emissiveIntensity={0.6}
          />
        </mesh>
      )}
    </group>
  )
}

// Мензурка
function Beaker3D({ position, liquidColor, liquidLevel }: {
  position: [number, number, number]
  liquidColor?: string
  liquidLevel?: number
}) {
  return (
    <group position={position}>
      {/* Стекло мензурки */}
      <mesh>
        <cylinderGeometry args={[0.38, 0.33, 0.7, 32]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      {/* Носик мензурки */}
      <mesh position={[0.38, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.5}
          roughness={0.1}
        />
      </mesh>
      {liquidColor && (
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.34, 0.29, liquidLevel || 0.4, 32]} />
          <meshStandardMaterial 
            color={liquidColor} 
            transparent 
            opacity={0.95}
            emissive={liquidColor}
            emissiveIntensity={0.6}
          />
        </mesh>
      )}
      {/* Шкала */}
      <Html position={[0.4, 0, 0]} center>
        <div className="flex flex-col text-[8px] text-gray-600 font-medium">
          {[100, 75, 50, 25].map(v => (
            <span key={v} className="bg-white/80 px-1 rounded">{v}ml</span>
          ))}
        </div>
      </Html>
    </group>
  )
}

// Стакан с веществом
function SubstanceContainer({ substance, onClick, selected }: {
  substance: Substance
  onClick: () => void
  selected: boolean
}) {
  const color = substance.state === 'liquid' ? substance.color : '#e0e0e0'
  
  return (
    <group onClick={onClick}>
      {/* Контейнер */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.2, 0.18, 0.4, 16]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.25}
          roughness={0}
        />
      </mesh>
      {/* Вещество */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.18, 0.16, substance.state === 'solid' ? 0.15 : 0.25, 16]} />
        <meshStandardMaterial 
          color={substance.state === 'solid' ? '#f5f5f5' : substance.color}
          transparent
          opacity={substance.state === 'solid' ? 1 : 0.85}
          emissive={substance.state === 'solid' ? '#ffffff' : substance.color}
          emissiveIntensity={0.2}
        />
      </mesh>
      {selected && (
        <mesh position={[0, 0, 0]}>
          <ringGeometry args={[0.22, 0.25, 32]} />
          <meshBasicMaterial color="#00ff00" side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  )
}

// Лабораторный стол
function LabTable() {
  return (
    <group>
      {/* Основная поверхность стола */}
      <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#e8e4e0" />
      </mesh>
      {/* Край стола */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[8, 0.1, 4]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  )
}

// Пламя (для эффектов) - более яркое
function Flame3D({ position, active }: { position: [number, number, number], active: boolean }) {
  const flameRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (flameRef.current && active) {
      const t = clock.getElapsedTime()
      flameRef.current.children.forEach((child, i) => {
        child.scale.x = 1 + Math.sin(t * 12 + i) * 0.15
        child.scale.z = 1 + Math.cos(t * 10 + i) * 0.15
        child.scale.y = 1 + Math.sin(t * 8 + i) * 0.1
      })
    }
  })

  if (!active) return null

  return (
    <group position={position} ref={flameRef}>
      {/* Внешнее пламя */}
      <mesh position={[0, 0.2, 0]}>
        <coneGeometry args={[0.15, 0.5, 8]} />
        <meshStandardMaterial 
          color="#ff4400" 
          emissive="#ff2200" 
          emissiveIntensity={3} 
          transparent 
          opacity={0.9} 
        />
      </mesh>
      {/* Внутреннее пламя */}
      <mesh position={[0, 0.25, 0]}>
        <coneGeometry args={[0.08, 0.35, 8]} />
        <meshStandardMaterial 
          color="#ffff00" 
          emissive="#ffaa00" 
          emissiveIntensity={4} 
          transparent 
          opacity={0.95} 
        />
      </mesh>
      {/* Ядро */}
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={5} 
        />
      </mesh>
      <pointLight color="#ff6600" intensity={2} distance={3} />
      <pointLight color="#ffaa00" intensity={1} distance={2} position={[0, 0.3, 0]} />
    </group>
  )
}

// Дым - более заметный
function SmokeEffect({ active }: { active: boolean }) {
  const smokeRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (smokeRef.current && active) {
      smokeRef.current.children.forEach((child, i) => {
        const t = clock.getElapsedTime() + i * 0.5
        child.position.y = -0.3 + (t * 0.3 % 2)
        child.position.x = Math.sin(t + i) * 0.15
        child.position.z = Math.cos(t + i) * 0.15
        const scale = 1 + (t * 0.1 % 0.5)
        child.scale.setScalar(scale)
      })
    }
  })

  if (!active) return null

  return (
    <group ref={smokeRef} position={[0, 0.5, 0]}>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 0.12, i * 0.15, Math.cos(i) * 0.12]}>
          <sphereGeometry args={[0.08 + i * 0.03, 12, 12]} />
          <meshStandardMaterial 
            color="#dddddd" 
            transparent 
            opacity={0.6 - i * 0.04}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Главная 3D сцена лаборатории
function LaboratoryScene({ 
  selectedSubstances, 
  reaction,
  flaskLiquid,
  showPrecipitate,
  precipitateColor
}: { 
  selectedSubstances: Substance[]
  reaction: Reaction | null
  flaskLiquid: string | null
  showPrecipitate: boolean
  precipitateColor: string | null
}) {
  return (
    <>
      {/* Улучшенное освещение */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, 3, 0]} intensity={0.4} color="#ffffee" />
      
      <LabTable />
      
      {/* Подставка для пробирок */}
      <mesh position={[-1.2, -0.85, -0.8]}>
        <boxGeometry args={[1.5, 0.1, 0.4]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      
      {/* Основная колба для эксперимента */}
      <Flask3D 
        position={[0, -0.5, 0]} 
        liquidColor={flaskLiquid || undefined}
        liquidLevel={selectedSubstances.length > 0 ? 0.4 : 0.1}
        bubbles={reaction?.effects.bubbles || false}
        precipitate={showPrecipitate}
        precipitateColor={precipitateColor || undefined}
      />
      
      {/* Пробирки с веществами */}
      {selectedSubstances.slice(0, 3).map((sub, i) => (
        <TestTube3D 
          key={sub.id}
          position={[-1.5 + i * 0.5, -0.5, -0.8]}
          liquidColor={sub.state === 'liquid' ? sub.color : sub.color}
          liquidLevel={0.4}
        />
      ))}
      
      {/* Мензурка */}
      <Beaker3D position={[1.5, -0.5, 0.5]} />
      
      {/* Дополнительные предметы лаборатории */}
      <mesh position={[2, -0.8, -0.5]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#ff9800" />
      </mesh>
      
      {/* Эффекты */}
      <Flame3D position={[0, -0.8, 0]} active={reaction?.effects.fire || false} />
      <SmokeEffect active={reaction?.effects.smoke || false} />
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  )
}

// ====================== UI КОМПОНЕНТЫ ======================

function SubstanceCard({ substance, selected, onClick }: {
  substance: Substance
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
        selected 
          ? 'bg-purple-500/30 border-purple-400 text-purple-200' 
          : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
      }`}
    >
      <span className="text-xl">{substance.emoji}</span>
      <div className="text-left">
        <div className="text-sm font-medium">{substance.name}</div>
        <div className="text-xs text-gray-500 font-mono">{substance.formula}</div>
      </div>
      <div 
        className="w-4 h-4 rounded-full ml-auto border border-white/20"
        style={{ backgroundColor: substance.color }}
      />
    </button>
  )
}

function ReactionCard({ reaction, onTry }: {
  reaction: Reaction
  onTry: () => void
}) {
  return (
    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-white">{reaction.name}</h4>
        <span className="text-xs text-purple-400">{reaction.reactants.length} реагента</span>
      </div>
      <p className="text-xs font-mono text-gray-400 mb-2">{reaction.equation}</p>
      <button
        onClick={onTry}
        className="w-full py-1.5 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-sm text-purple-300 transition-colors"
      >
        Попробовать
      </button>
    </div>
  )
}

// ====================== ГЛАВНЫЙ КОМПОНЕНТ ======================
export default function VirtualLaboratory() {
  const [selectedSubstances, setSelectedSubstances] = useState<Substance[]>([])
  const [currentReaction, setCurrentReaction] = useState<Reaction | null>(null)
  const [flaskLiquid, setFlaskLiquid] = useState<string | null>(null)
  const [showPrecipitate, setShowPrecipitate] = useState(false)
  const [precipitateColor, setPrecipitateColor] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isReacting, setIsReacting] = useState(false)

  const toggleSubstance = useCallback((substance: Substance) => {
    setSelectedSubstances(prev => {
      const exists = prev.find(s => s.id === substance.id)
      if (exists) {
        return prev.filter(s => s.id !== substance.id)
      }
      if (prev.length >= 2) {
        return [prev[1], substance]
      }
      return [...prev, substance]
    })
    setCurrentReaction(null)
    setShowResult(false)
  }, [])

  const findReaction = useCallback((subs: Substance[]): Reaction | null => {
    const ids = subs.map(s => s.id).sort()
    return reactions.find(r => {
      const reactantIds = [...r.reactants].sort()
      return JSON.stringify(reactantIds) === JSON.stringify(ids)
    }) || null
  }, [])

  const mixSubstances = useCallback(() => {
    if (selectedSubstances.length < 2) return

    const reaction = findReaction(selectedSubstances)
    setIsReacting(true)

    setTimeout(() => {
      if (reaction) {
        setCurrentReaction(reaction)
        
        if (reaction.effects.colorChange) {
          setFlaskLiquid(reaction.effects.colorChange)
        }
        
        if (reaction.effects.precipitate && reaction.effects.precipitateColor) {
          setShowPrecipitate(true)
          setPrecipitateColor(reaction.effects.precipitateColor)
        }
        
        setShowResult(true)
      } else {
        setFlaskLiquid(selectedSubstances[0]?.color || '#87CEEB')
        setShowResult(true)
      }
      
      setIsReacting(false)
    }, 1500)
  }, [selectedSubstances, findReaction])

  const resetExperiment = useCallback(() => {
    setSelectedSubstances([])
    setCurrentReaction(null)
    setFlaskLiquid(null)
    setShowPrecipitate(false)
    setPrecipitateColor(null)
    setShowResult(false)
    setIsReacting(false)
  }, [])

  const tryReaction = useCallback((reaction: Reaction) => {
    resetExperiment()
    const subs = reaction.reactants.map(id => substances.find(s => s.id === id)).filter(Boolean) as Substance[]
    setSelectedSubstances(subs)
    
    setTimeout(() => {
      mixSubstances()
    }, 100)
  }, [resetExperiment, mixSubstances])

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid md:grid-cols-3 h-full">
        {/* Панель веществ */}
        <div className="p-4 border-r border-white/10 overflow-y-auto">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TestTube className="w-5 h-5 text-purple-400" />
            Реактивы
          </h3>
          <div className="space-y-2">
            {substances.map(substance => (
              <SubstanceCard
                key={substance.id}
                substance={substance}
                selected={selectedSubstances.some(s => s.id === substance.id)}
                onClick={() => toggleSubstance(substance)}
              />
            ))}
          </div>
        </div>

        {/* 3D Лаборатория */}
        <div className="relative">
          <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
            <LaboratoryScene 
              selectedSubstances={selectedSubstances}
              reaction={currentReaction}
              flaskLiquid={flaskLiquid}
              showPrecipitate={showPrecipitate}
              precipitateColor={precipitateColor}
            />
          </Canvas>
          
          {/* Оверлей управления */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <button
              onClick={mixSubstances}
              disabled={selectedSubstances.length < 2 || isReacting}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isReacting ? (
                <>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Реакция...
                </>
              ) : (
                <>
                  <FlaskConical className="w-4 h-4" />
                  Смешать
                </>
              )}
            </button>
            <button
              onClick={resetExperiment}
              className="p-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Результат реакции */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-4 left-4 right-4 p-4 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-purple-500/30"
              >
                {currentReaction ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <h4 className="font-bold text-white">{currentReaction.name}</h4>
                    </div>
                    <p className="text-sm font-mono text-purple-300 mb-2">{currentReaction.equation}</p>
                    <p className="text-xs text-gray-300">{currentReaction.description}</p>
                    {currentReaction.safetyNote && (
                      <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        {currentReaction.safetyNote}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-gray-300">
                    <p className="text-sm">Реакция не происходит</p>
                    <p className="text-xs text-gray-500 mt-1">Попробуйте другие вещества</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Панель реакций */}
        <div className="p-4 border-l border-white/10 overflow-y-auto">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Известные реакции
          </h3>
          <div className="space-y-3">
            {reactions.map(reaction => (
              <ReactionCard
                key={reaction.id}
                reaction={reaction}
                onTry={() => tryReaction(reaction)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
