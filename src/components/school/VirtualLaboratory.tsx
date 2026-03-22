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
  reactantMolecules?: string[]
  productMolecules?: string[]
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

// Данные атомов для 3D визуализации
interface Atom {
  element: string
  color: string
  radius: number
  position: [number, number, number]
}

interface Bond {
  from: number
  to: number
  order: number // 1, 2 или 3 - одинарная, двойная, тройная
}

interface MoleculeData {
  name: string
  formula: string
  atoms: Atom[]
  bonds: Bond[]
}

// Цвета и размеры атомов
const atomProperties: Record<string, { color: string, radius: number }> = {
  H: { color: '#ffffff', radius: 0.15 },
  O: { color: '#ff4444', radius: 0.25 },
  N: { color: '#3333ff', radius: 0.24 },
  C: { color: '#333333', radius: 0.28 },
  Cl: { color: '#22cc22', radius: 0.30 },
  Na: { color: '#ff8800', radius: 0.35 },
  Cu: { color: '#ff6600', radius: 0.32 },
  Fe: { color: '#cc8844', radius: 0.32 },
  S: { color: '#cccc00', radius: 0.28 },
  Ba: { color: '#8844cc', radius: 0.40 },
  Ag: { color: '#cccccc', radius: 0.35 },
  I: { color: '#660066', radius: 0.35 },
  Mg: { color: '#44aa44', radius: 0.30 },
  Zn: { color: '#8888cc', radius: 0.30 },
  K: { color: '#cc44cc', radius: 0.38 },
}

// 3D структура молекул
const molecules3D: Record<string, MoleculeData> = {
  'HCl': {
    name: 'Хлороводород',
    formula: 'HCl',
    atoms: [
      { element: 'H', color: '#ffffff', radius: 0.15, position: [-0.3, 0, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [0.3, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }]
  },
  'NaOH': {
    name: 'Гидроксид натрия',
    formula: 'NaOH',
    atoms: [
      { element: 'Na', color: '#ff8800', radius: 0.35, position: [-0.5, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0, 0, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [0.4, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }]
  },
  'H2O': {
    name: 'Вода',
    formula: 'H₂O',
    atoms: [
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0, 0, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [-0.35, 0.2, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [0.35, 0.2, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 1 }]
  },
  'NaCl': {
    name: 'Хлорид натрия',
    formula: 'NaCl',
    atoms: [
      { element: 'Na', color: '#ff8800', radius: 0.35, position: [-0.35, 0, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [0.35, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }]
  },
  'H2SO4': {
    name: 'Серная кислота',
    formula: 'H₂SO₄',
    atoms: [
      { element: 'S', color: '#cccc00', radius: 0.28, position: [0, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.4, 0.3, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.4, 0.3, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.3, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.3, -0.4, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [-0.5, -0.6, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [0.5, -0.6, 0] },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 0, to: 2, order: 2 },
      { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 },
      { from: 3, to: 5, order: 1 }, { from: 4, to: 6, order: 1 }
    ]
  },
  'BaCl2': {
    name: 'Хлорид бария',
    formula: 'BaCl₂',
    atoms: [
      { element: 'Ba', color: '#8844cc', radius: 0.40, position: [0, 0, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [-0.5, 0, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [0.5, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 1 }]
  },
  'CuSO4': {
    name: 'Сульфат меди',
    formula: 'CuSO₄',
    atoms: [
      { element: 'Cu', color: '#ff6600', radius: 0.32, position: [0, 0.4, 0] },
      { element: 'S', color: '#cccc00', radius: 0.28, position: [0, -0.2, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.25, -0.6, 0.3] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.25, -0.6, -0.3] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 2 },
      { from: 1, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }
    ]
  },
  'Mg': {
    name: 'Магний',
    formula: 'Mg',
    atoms: [
      { element: 'Mg', color: '#44aa44', radius: 0.30, position: [0, 0, 0] },
    ],
    bonds: []
  },
  'AgNO3': {
    name: 'Нитрат серебра',
    formula: 'AgNO₃',
    atoms: [
      { element: 'Ag', color: '#cccccc', radius: 0.35, position: [-0.5, 0, 0] },
      { element: 'N', color: '#3333ff', radius: 0.24, position: [0.2, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.5, 0.3, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.5, -0.3, 0.2] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.5, -0.3, -0.2] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 2 }, { from: 1, to: 4, order: 2 }
    ]
  },
  'KI': {
    name: 'Йодид калия',
    formula: 'KI',
    atoms: [
      { element: 'K', color: '#cc44cc', radius: 0.38, position: [-0.4, 0, 0] },
      { element: 'I', color: '#660066', radius: 0.35, position: [0.4, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }]
  },
  'CO2': {
    name: 'Углекислый газ',
    formula: 'CO₂',
    atoms: [
      { element: 'C', color: '#333333', radius: 0.28, position: [0, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.45, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.45, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 2 }, { from: 0, to: 2, order: 2 }]
  },
  'FeSO4': {
    name: 'Сульфат железа',
    formula: 'FeSO₄',
    atoms: [
      { element: 'Fe', color: '#cc8844', radius: 0.32, position: [0, 0.4, 0] },
      { element: 'S', color: '#cccc00', radius: 0.28, position: [0, -0.2, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.25, -0.6, 0.3] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.25, -0.6, -0.3] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 2 },
      { from: 1, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }
    ]
  },
  'FeCl3': {
    name: 'Хлорид железа(III)',
    formula: 'FeCl₃',
    atoms: [
      { element: 'Fe', color: '#cc8844', radius: 0.32, position: [0, 0, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [-0.5, 0.3, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [0.5, 0.3, 0] },
      { element: 'Cl', color: '#22cc22', radius: 0.30, position: [0, -0.5, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }]
  },
  'Na2CO3': {
    name: 'Карбонат натрия',
    formula: 'Na₂CO₃',
    atoms: [
      { element: 'Na', color: '#ff8800', radius: 0.35, position: [-0.7, 0.2, 0] },
      { element: 'Na', color: '#ff8800', radius: 0.35, position: [0.7, 0.2, 0] },
      { element: 'C', color: '#333333', radius: 0.28, position: [0, 0, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.3, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.3, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0, -0.5, 0.3] },
    ],
    bonds: [
      { from: 2, to: 3, order: 2 }, { from: 2, to: 4, order: 2 }, { from: 2, to: 5, order: 1 }
    ]
  },
  'CuSO4': {
    name: 'Сульфат меди',
    formula: 'CuSO₄',
    atoms: [
      { element: 'Cu', color: '#ff6600', radius: 0.32, position: [0, 0.4, 0] },
      { element: 'S', color: '#cccc00', radius: 0.28, position: [0, -0.1, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.4, -0.4, 0] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [-0.2, -0.6, 0.3] },
      { element: 'O', color: '#ff4444', radius: 0.25, position: [0.2, -0.6, -0.3] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 2 },
      { from: 1, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }
    ]
  },
  'H2': {
    name: 'Водород',
    formula: 'H₂',
    atoms: [
      { element: 'H', color: '#ffffff', radius: 0.15, position: [-0.2, 0, 0] },
      { element: 'H', color: '#ffffff', radius: 0.15, position: [0.2, 0, 0] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }]
  },
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
    reactantMolecules: ['HCl', 'NaOH'],
    productMolecules: ['NaCl', 'H2O'],
    description: 'Кислота реагирует со щёлочью, образуя соль и воду. Это классическая реакция нейтрализации.',
    equation: 'HCl + NaOH → NaCl + H₂O',
    effects: { bubbles: true }
  },
  {
    id: 'phosphoresce',
    name: 'Качественная реакция на карбонат-ион',
    reactants: ['hcl', 'na2co3'],
    products: ['nacl', 'h2o'],
    reactantMolecules: ['HCl'],
    productMolecules: ['NaCl', 'H2O', 'CO2'],
    description: 'Карбонат натрия реагирует с соляной кислотой с выделением углекислого газа.',
    equation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑',
    effects: { bubbles: true, smoke: true }
  },
  {
    id: 'cuso4-naoh',
    name: 'Получение гидроксида меди',
    reactants: ['cuso4', 'naoh'],
    products: ['nacl'],
    reactantMolecules: ['CuSO4', 'NaOH'],
    productMolecules: ['NaCl'],
    description: 'Голубой осадок гидроксида меди(II) выпадает при взаимодействии сульфата меди с щёлочью.',
    equation: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄',
    effects: { precipitate: true, precipitateColor: '#4169E1', colorChange: '#4169E1' }
  },
  {
    id: 'phenolphthalein',
    name: 'Индикатор фенолфталеин',
    reactants: ['naoh', 'phenol'],
    products: [],
    reactantMolecules: ['NaOH'],
    productMolecules: [],
    description: 'Фенолфталеин становится малиновым в щелочной среде. Это качественная реакция на щёлочи.',
    equation: 'В щелочной среде → малиновое окрашивание',
    effects: { colorChange: '#FF1493' }
  },
  {
    id: 'h2so4-bacl2',
    name: 'Качественная реакция на сульфат-ион',
    reactants: ['h2so4', 'bacl2'],
    products: ['bacl2'],
    reactantMolecules: ['H2SO4', 'BaCl2'],
    productMolecules: ['NaCl'],
    description: 'Белый осадок сульфата бария выпадает при взаимодействии сульфатов с хлоридом бария.',
    equation: 'H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl',
    effects: { precipitate: true, precipitateColor: '#ffffff', colorChange: '#f5f5f5' }
  },
  {
    id: 'agno3-nacl',
    name: 'Качественная реакция на хлорид-ион',
    reactants: ['agno3', 'nacl'],
    products: ['nacl'],
    reactantMolecules: ['AgNO3', 'NaCl'],
    productMolecules: ['NaCl'],
    description: 'Белый творожистый осадок хлорида серебра выпадает при взаимодействии хлоридов с нитратом серебра.',
    equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    effects: { precipitate: true, precipitateColor: '#ffffff', colorChange: '#f8f8ff' }
  },
  {
    id: 'mg-hcl',
    name: 'Взаимодействие магния с кислотой',
    reactants: ['mg', 'hcl'],
    products: [],
    reactantMolecules: ['Mg', 'HCl'],
    productMolecules: ['H2O'],
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
    reactantMolecules: ['KI', 'AgNO3'],
    productMolecules: [],
    description: 'Жёлтый осадок йодида серебра выпадает при взаимодействии йодидов с нитратом серебра.',
    equation: 'KI + AgNO₃ → AgI↓ + KNO₃',
    effects: { precipitate: true, precipitateColor: '#FFD700', colorChange: '#FFF8DC' }
  },
  {
    id: 'fe-naoh',
    name: 'Гидроксид железа(II)',
    reactants: ['fes04', 'naoh'],
    products: [],
    reactantMolecules: ['FeSO4', 'NaOH'],
    productMolecules: [],
    description: 'Зеленоватый осадок гидроксида железа(II) быстро окисляется на воздухе.',
    equation: 'FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄',
    effects: { precipitate: true, precipitateColor: '#90EE90', colorChange: '#98FB98' }
  },
  {
    id: 'fecl3-naoh',
    name: 'Гидроксид железа(III)',
    reactants: ['fecl3', 'naoh'],
    products: [],
    reactantMolecules: ['FeCl3', 'NaOH'],
    productMolecules: [],
    description: 'Бурый осадок гидроксида железа(III) выпадает при взаимодействии солей железа(III) с щёлочью.',
    equation: 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl',
    effects: { precipitate: true, precipitateColor: '#8B4513', colorChange: '#D2691E' }
  },
]

// ====================== 3D КОМПОНЕНТЫ ======================

// 3D Молекула
function Molecule3D({ moleculeKey, position, scale = 1, showLabel = true, opacity = 1 }: { 
  moleculeKey: string, 
  position: [number, number, number], 
  scale?: number,
  showLabel?: boolean,
  opacity?: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const molecule = molecules3D[moleculeKey]
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Медленное вращение молекулы
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  if (!molecule) return null

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Атомы */}
      {molecule.atoms.map((atom, i) => (
        <mesh key={i} position={atom.position}>
          <sphereGeometry args={[atom.radius, 24, 24]} />
          <meshStandardMaterial 
            color={atom.color}
            transparent
            opacity={opacity}
            emissive={atom.color}
            emissiveIntensity={0.2}
          />
          {/* Подпись элемента */}
          {showLabel && (
            <Html position={[0, atom.radius + 0.1, 0]} center>
              <span className="text-xs font-bold text-white bg-black/50 px-1 rounded">{atom.element}</span>
            </Html>
          )}
        </mesh>
      ))}
      
      {/* Связи между атомами */}
      {molecule.bonds.map((bond, i) => {
        const from = molecule.atoms[bond.from]
        const to = molecule.atoms[bond.to]
        if (!from || !to) return null
        
        const start = new THREE.Vector3(...from.position)
        const end = new THREE.Vector3(...to.position)
        const mid = start.clone().add(end).multiplyScalar(0.5)
        const direction = end.clone().sub(start)
        const length = direction.length()
        const bondRadius = 0.04
        
        // Для двойных и тройных связей создаём несколько цилиндров
        const bondOffsets = bond.order === 2 ? [-0.06, 0.06] : bond.order === 3 ? [-0.08, 0, 0.08] : [0]
        
        return bondOffsets.map((offset, j) => (
          <mesh key={`${i}-${j}`} position={mid.toArray()} rotation={[0, 0, Math.atan2(direction.y, direction.x)]}>
            <cylinderGeometry args={[bondRadius, bondRadius, length * 0.9, 8]} />
            <meshStandardMaterial 
              color="#888888" 
              transparent 
              opacity={opacity * 0.8}
            />
          </mesh>
        ))
      })}
    </group>
  )
}

// Анимация превращения молекул
function MoleculeTransformation({ reaction, showProducts, isReacting }: { 
  reaction: Reaction | null, 
  showProducts: boolean,
  isReacting: boolean
}) {
  const reactants = reaction?.reactantMolecules || []
  const products = reaction?.productMolecules || []
  
  if (!reaction || reactants.length === 0) return null

  // Позиции для реагентов (слева до реакции)
  const reactantPositions: [number, number, number][] = reactants.length === 1 
    ? [[-1, 1.8, 0]] 
    : reactants.map((_, i) => [-1.5 + i * 1.2, 1.8, 0])
  
  // Позиции для продуктов (после реакции)
  const productPositions: [number, number, number][] = products.length === 1 
    ? [[0, 1.8, 0]] 
    : products.map((_, i) => [-1.2 + i * 1.2, 1.8, 0])

  return (
    <group>
      {/* Реагенты - показываются всегда, исчезают при появлении продуктов */}
      {!showProducts && reactants.map((mol, i) => (
        <group key={`reactant-group-${mol}`}>
          <Molecule3D 
            moleculeKey={mol} 
            position={reactantPositions[i] || [-1, 1.8, 0]}
            scale={0.7}
            opacity={isReacting ? 0.5 : 1}
          />
          {/* Знак + между реагентами */}
          {i < reactants.length - 1 && (
            <Html position={[-0.9 + i * 1.2, 1.8, 0]} center>
              <span className="text-2xl font-bold text-yellow-400">+</span>
            </Html>
          )}
        </group>
      ))}
      
      {/* Стрелка реакции - появляется во время реакции */}
      {(isReacting || showProducts) && (
        <Html position={[0, 1.8, 0]} center>
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl font-bold text-yellow-400"
          >
            →
          </motion.span>
        </Html>
      )}
      
      {/* Продукты - появляются после реакции */}
      {showProducts && products.map((mol, i) => (
        <group key={`product-group-${mol}`}>
          <Molecule3D 
            moleculeKey={mol} 
            position={productPositions[i] || [0, 1.8, 0]}
            scale={0.7}
            opacity={1}
          />
          {/* Знак + между продуктами */}
          {i < products.length - 1 && (
            <Html position={[0.6 + i * 1.2, 1.8, 0]} center>
              <span className="text-2xl font-bold text-green-400">+</span>
            </Html>
          )}
        </group>
      ))}
      
      {/* Название реакции */}
      {showProducts && (
        <Html position={[0, 2.5, 0]} center>
          <div className="bg-black/70 px-3 py-1 rounded-lg">
            <span className="text-sm text-white font-medium">{reaction.equation}</span>
          </div>
        </Html>
      )}
    </group>
  )
}

// Реалистичные пузырьки
function Bubble({ startPos, speed, size }: { startPos: [number, number, number], speed: number, size: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const offset = useRef(Math.random() * 100)
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * speed + offset.current
      // Подъём снизу вверх
      meshRef.current.position.y = startPos[1] + (t % 1.2)
      // Лёгкое покачивание
      meshRef.current.position.x = startPos[0] + Math.sin(t * 3) * 0.03
      meshRef.current.position.z = startPos[2] + Math.cos(t * 2) * 0.03
      // Рост пузырька при подъёме
      const scale = 1 + (t % 1.2) * 0.3
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={startPos}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.7}
        emissive="#aaddff"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

// Частицы осадка падающие вниз
function PrecipitateParticle({ startPos, delay, color }: { startPos: [number, number, number], delay: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const settled = useRef(false)
  const settledY = useRef(-0.52)
  
  useFrame(({ clock }) => {
    if (meshRef.current && !settled.current) {
      const t = clock.getElapsedTime() - delay
      if (t > 0) {
        // Падение с ускорением
        const fall = t * t * 2
        meshRef.current.position.y = startPos[1] - fall
        // Случайное смещение при падении
        meshRef.current.position.x = startPos[0] + Math.sin(t * 5) * 0.02
        
        if (meshRef.current.position.y <= settledY.current) {
          meshRef.current.position.y = settledY.current + Math.random() * 0.02
          settled.current = true
        }
      }
    }
  })

  return (
    <mesh ref={meshRef} position={startPos}>
      <sphereGeometry args={[0.02 + Math.random() * 0.015, 8, 8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Пена на поверхности
function Foam({ active, color }: { active: boolean, color: string }) {
  const foamRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (foamRef.current && active) {
      const t = clock.getElapsedTime()
      foamRef.current.children.forEach((child, i) => {
        // Пена слегка двигается
        child.position.x = Math.sin(t + i) * 0.15
        child.position.z = Math.cos(t * 0.8 + i) * 0.15
        child.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.1)
      })
    }
  })

  if (!active) return null

  return (
    <group ref={foamRef} position={[0, 0.05, 0]}>
      {[...Array(15)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 0.7) * 0.2, 0, Math.cos(i * 0.9) * 0.2]}>
          <sphereGeometry args={[0.03 + Math.random() * 0.02, 8, 8]} />
          <meshStandardMaterial 
            color={color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

// Колба
function Flask3D({ position, liquidColor, liquidLevel, bubbles, precipitate, precipitateColor, isReacting }: {
  position: [number, number, number]
  liquidColor?: string
  liquidLevel?: number
  bubbles?: boolean
  precipitate?: boolean
  precipitateColor?: string
  isReacting?: boolean
}) {
  // Генерация пузырьков
  const bubbleData = useMemo(() => 
    [...Array(25)].map((_, i) => ({
      startPos: [
        (Math.random() - 0.5) * 0.3,
        -0.5,
        (Math.random() - 0.5) * 0.25
      ] as [number, number, number],
      speed: 0.3 + Math.random() * 0.4,
      size: 0.02 + Math.random() * 0.025,
      delay: Math.random() * 2
    })), 
    []
  )
  
  // Генерация частиц осадка
  const precipitateData = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      startPos: [
        (Math.random() - 0.5) * 0.25,
        -0.1 + Math.random() * 0.2,
        (Math.random() - 0.5) * 0.2
      ] as [number, number, number],
      delay: i * 0.05
    })),
    []
  )

  return (
    <group position={position}>
      {/* Основа колбы - стекло */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.42, 0.32, 0.6, 32]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>
      
      {/* Горлышко */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.17, 0.22, 0.4, 32]} />
        <meshStandardMaterial 
          color="#88ccff" 
          transparent 
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>
      
      {/* Жидкость */}
      {liquidColor && (
        <mesh position={[0, -0.3 + (liquidLevel || 0.3) / 2 - 0.15, 0]}>
          <cylinderGeometry args={[0.36, 0.26, liquidLevel || 0.3, 32]} />
          <meshStandardMaterial 
            color={liquidColor}
            transparent 
            opacity={0.9}
          />
        </mesh>
      )}
      
      {/* Пена при активной реакции */}
      <Foam active={isReacting && bubbles} color={liquidColor || '#ffffff'} />
      
      {/* Осадок - слой на дне */}
      {precipitate && precipitateColor && (
        <mesh position={[0, -0.56, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.12, 32]} />
          <meshStandardMaterial 
            color={precipitateColor} 
          />
        </mesh>
      )}
      
      {/* Падающие частицы осадка */}
      {precipitate && precipitateColor && precipitateData.map((p, i) => (
        <PrecipitateParticle 
          key={i} 
          startPos={p.startPos} 
          delay={p.delay}
          color={precipitateColor}
        />
      ))}
      
      {/* Пузырьки газа */}
      {bubbles && bubbleData.map((b, i) => (
        <Bubble
          key={i}
          startPos={b.startPos}
          speed={b.speed}
          size={b.size}
        />
      ))}
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
      {/* Стол - одна сплошная поверхность */}
      <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial 
          color="#d4c8bc" 
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Тёмная подставка под столом */}
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[8, 0.2, 4]} />
        <meshStandardMaterial color="#5c4033" />
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
  precipitateColor,
  isReacting,
  showProducts
}: { 
  selectedSubstances: Substance[]
  reaction: Reaction | null
  flaskLiquid: string | null
  showPrecipitate: boolean
  precipitateColor: string | null
  isReacting: boolean
  showProducts: boolean
}) {
  return (
    <>
      {/* Простое освещение */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 3]} intensity={0.8} />
      
      <LabTable />
      
      {/* 3D молекулы и превращение */}
      <MoleculeTransformation reaction={reaction} showProducts={showProducts} isReacting={isReacting} />
      
      {/* Подставка для пробирок */}
      <mesh position={[-1.2, -0.83, -0.8]}>
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
        isReacting={isReacting}
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
  const [showProducts, setShowProducts] = useState(false)

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
    setShowProducts(false)

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
        setShowProducts(true)
      } else {
        setFlaskLiquid(selectedSubstances[0]?.color || '#87CEEB')
        setShowResult(true)
      }
      
      // Оставляем isReacting=true ещё 3 секунды для анимации
      setTimeout(() => {
        setIsReacting(false)
      }, 3000)
    }, 800)
  }, [selectedSubstances, findReaction])

  const resetExperiment = useCallback(() => {
    setSelectedSubstances([])
    setCurrentReaction(null)
    setFlaskLiquid(null)
    setShowPrecipitate(false)
    setPrecipitateColor(null)
    setShowResult(false)
    setIsReacting(false)
    setShowProducts(false)
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
              isReacting={isReacting}
              showProducts={showProducts}
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
