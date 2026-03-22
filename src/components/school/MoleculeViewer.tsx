'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Line } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

interface MoleculeViewerProps {
  moleculeKey: string
}

// Данные атомов
interface Atom {
  element: string
  position: [number, number, number]
  color: string
  radius: number
}

interface Bond {
  from: number
  to: number
  order: number
}

interface MoleculeData {
  name: string
  atoms: Atom[]
  bonds: Bond[]
}

// Цвета атомов
const elementColors: Record<string, string> = {
  H: '#ffffff',
  O: '#ff4444',
  C: '#333333',
  N: '#3333ff',
  S: '#ffff00',
  Cl: '#00ff00',
  Na: '#aa8844',
}

// Радиусы атомов
const elementRadii: Record<string, number> = {
  H: 0.35,
  O: 0.6,
  C: 0.5,
  N: 0.55,
  S: 0.8,
  Cl: 0.7,
  Na: 0.9,
}

// База данных молекул
const molecules: Record<string, MoleculeData> = {
  'H2O': {
    name: 'Вода',
    atoms: [
      { element: 'O', position: [0, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'H', position: [-0.8, 0.6, 0], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [0.8, 0.6, 0], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
    ],
  },
  'H2O2': {
    name: 'Перекись водорода',
    atoms: [
      { element: 'O', position: [-0.7, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [0.7, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'H', position: [-1.3, 0.6, 0], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [1.3, 0.6, 0], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 1, to: 3, order: 1 },
    ],
  },
  'CO2': {
    name: 'Углекислый газ',
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#333333', radius: 0.5 },
      { element: 'O', position: [-1.2, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [1.2, 0, 0], color: '#ff4444', radius: 0.6 },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 2 },
    ],
  },
  'CH4': {
    name: 'Метан',
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#333333', radius: 0.5 },
      { element: 'H', position: [0.6, 0.6, 0.6], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [-0.6, -0.6, 0.6], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [-0.6, 0.6, -0.6], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [0.6, -0.6, -0.6], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 },
    ],
  },
  'NH3': {
    name: 'Аммиак',
    atoms: [
      { element: 'N', position: [0, 0, 0], color: '#3333ff', radius: 0.55 },
      { element: 'H', position: [0.8, -0.3, 0], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [-0.4, -0.3, 0.7], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [-0.4, -0.3, -0.7], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
  },
  'O3': {
    name: 'Озон',
    atoms: [
      { element: 'O', position: [-0.9, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [0, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [0.9, 0, 0], color: '#ff4444', radius: 0.6 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1.5 },
      { from: 1, to: 2, order: 1.5 },
    ],
  },
  'O2': {
    name: 'Кислород',
    atoms: [
      { element: 'O', position: [-0.6, 0, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [0.6, 0, 0], color: '#ff4444', radius: 0.6 },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
    ],
  },
  'H2': {
    name: 'Водород',
    atoms: [
      { element: 'H', position: [-0.4, 0, 0], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [0.4, 0, 0], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
    ],
  },
  'N2': {
    name: 'Азот',
    atoms: [
      { element: 'N', position: [-0.5, 0, 0], color: '#3333ff', radius: 0.55 },
      { element: 'N', position: [0.5, 0, 0], color: '#3333ff', radius: 0.55 },
    ],
    bonds: [
      { from: 0, to: 1, order: 3 },
    ],
  },
  'NaCl': {
    name: 'Хлорид натрия',
    atoms: [
      { element: 'Na', position: [-0.8, 0, 0], color: '#aa8844', radius: 0.9 },
      { element: 'Cl', position: [0.8, 0, 0], color: '#00ff00', radius: 0.7 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
    ],
  },
  'H2SO4': {
    name: 'Серная кислота',
    atoms: [
      { element: 'S', position: [0, 0, 0], color: '#ffff00', radius: 0.8 },
      { element: 'O', position: [-1.0, 0.6, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [1.0, 0.6, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [-0.6, -0.8, 0], color: '#ff4444', radius: 0.6 },
      { element: 'O', position: [0.6, -0.8, 0], color: '#ff4444', radius: 0.6 },
      { element: 'H', position: [-0.9, -1.4, 0], color: '#ffffff', radius: 0.35 },
      { element: 'H', position: [0.9, -1.4, 0], color: '#ffffff', radius: 0.35 },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 2 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 },
      { from: 3, to: 5, order: 1 },
      { from: 4, to: 6, order: 1 },
    ],
  },
}

function Atom({ position, color, radius }: { position: [number, number, number]; color: string; radius: number }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  )
}

function BondLine({ from, to, order }: { from: [number, number, number]; to: [number, number, number]; order: number }) {
  const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)]
  
  // Для кратных связей рисуем несколько линий
  if (order === 2) {
    const offset = 0.15
    const dx = to[0] - from[0]
    const dy = to[1] - from[1]
    const length = Math.sqrt(dx * dx + dy * dy)
    const nx = -dy / length * offset
    const ny = dx / length * offset
    
    return (
      <group>
        <Line points={points} color="#888888" lineWidth={2} />
        <Line 
          points={[
            new THREE.Vector3(from[0] + nx, from[1] + ny, from[2]),
            new THREE.Vector3(to[0] + nx, to[1] + ny, to[2])
          ]} 
          color="#888888" 
          lineWidth={2} 
        />
      </group>
    )
  }
  
  if (order === 3) {
    const offset = 0.12
    const dx = to[0] - from[0]
    const dy = to[1] - from[1]
    const length = Math.sqrt(dx * dx + dy * dy)
    const nx = -dy / length * offset
    const ny = dx / length * offset
    
    return (
      <group>
        <Line points={points} color="#888888" lineWidth={2} />
        <Line 
          points={[
            new THREE.Vector3(from[0] + nx, from[1] + ny, from[2]),
            new THREE.Vector3(to[0] + nx, to[1] + ny, to[2])
          ]} 
          color="#888888" 
          lineWidth={2} 
        />
        <Line 
          points={[
            new THREE.Vector3(from[0] - nx, from[1] - ny, from[2]),
            new THREE.Vector3(to[0] - nx, to[1] - ny, to[2])
          ]} 
          color="#888888" 
          lineWidth={2} 
        />
      </group>
    )
  }
  
  return <Line points={points} color="#888888" lineWidth={2} />
}

function Molecule({ data }: { data: MoleculeData }) {
  return (
    <group>
      {/* Связи */}
      {data.bonds.map((bond, index) => {
        const from = data.atoms[bond.from].position
        const to = data.atoms[bond.to].position
        return <BondLine key={index} from={from} to={to} order={bond.order} />
      })}
      
      {/* Атомы */}
      {data.atoms.map((atom, index) => (
        <Atom key={index} position={atom.position} color={atom.color} radius={atom.radius} />
      ))}
    </group>
  )
}

export default function MoleculeViewer({ moleculeKey }: MoleculeViewerProps) {
  const molecule = molecules[moleculeKey]
  
  if (!molecule) {
    return (
      <div className="flex items-center justify-center h-full text-white/50">
        Молекула не найдена
      </div>
    )
  }

  return (
    <div className="w-full h-full min-h-[200px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <Suspense fallback={null}>
          <Molecule data={molecule} />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  )
}
