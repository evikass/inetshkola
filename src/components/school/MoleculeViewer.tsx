'use client'

import { useState, useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Html, Environment, Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { RotateCcw, ZoomIn, ZoomOut, Info, Beaker, Atom, ChevronLeft } from 'lucide-react'

// Типы атомов с их свойствами
const ATOM_PROPERTIES: Record<string, { color: string; radius: number; name: string; mass: number }> = {
  H: { color: '#ffffff', radius: 0.31, name: 'Водород', mass: 1.008 },
  O: { color: '#ff4444', radius: 0.66, name: 'Кислород', mass: 15.999 },
  C: { color: '#333333', radius: 0.77, name: 'Углерод', mass: 12.011 },
  N: { color: '#3333ff', radius: 0.71, name: 'Азот', mass: 14.007 },
  S: { color: '#ffcc00', radius: 1.05, name: 'Сера', mass: 32.065 },
  P: { color: '#ff8800', radius: 1.07, name: 'Фосфор', mass: 30.974 },
  Cl: { color: '#00ff00', radius: 1.02, name: 'Хлор', mass: 35.453 },
  Na: { color: '#8866ff', radius: 1.86, name: 'Натрий', mass: 22.990 },
  Fe: { color: '#cc8866', radius: 1.26, name: 'Железо', mass: 55.845 },
  Ca: { color: '#88ccff', radius: 1.97, name: 'Кальций', mass: 40.078 },
  K: { color: '#ff66cc', radius: 2.27, name: 'Калий', mass: 39.098 },
  Mg: { color: '#88ff88', radius: 1.60, name: 'Магний', mass: 24.305 },
}

// База данных молекул
const MOLECULES_DATABASE = {
  water: {
    name: 'Вода',
    formula: 'H₂O',
    description: 'Вода — самое распространённое вещество на Земле. Она необходима для жизни всех организмов.',
    atoms: [
      { element: 'O', position: [0, 0, 0] as [number, number, number] },
      { element: 'H', position: [0.76, 0.59, 0] as [number, number, number] },
      { element: 'H', position: [-0.76, 0.59, 0] as [number, number, number] },
    ],
    bonds: [[0, 1], [0, 2]],
    facts: ['Составляет 70% поверхности Земли', 'Температура кипения: 100°C', 'Температура замерзания: 0°C'],
  },
  carbondioxide: {
    name: 'Углекислый газ',
    formula: 'CO₂',
    description: 'Углекислый газ — бесцветный газ без запаха. Образуется при дыхании и горении.',
    atoms: [
      { element: 'C', position: [0, 0, 0] as [number, number, number] },
      { element: 'O', position: [1.16, 0, 0] as [number, number, number] },
      { element: 'O', position: [-1.16, 0, 0] as [number, number, number] },
    ],
    bonds: [[0, 1, 2], [0, 2, 2]],
    facts: ['Выделяется при дыхании', 'Используется в газировке', 'Парниковый газ'],
  },
  methane: {
    name: 'Метан',
    formula: 'CH₄',
    description: 'Метан — простейший углеводород, основной компонент природного газа.',
    atoms: [
      { element: 'C', position: [0, 0, 0] as [number, number, number] },
      { element: 'H', position: [0.63, 0.63, 0.63] as [number, number, number] },
      { element: 'H', position: [-0.63, -0.63, 0.63] as [number, number, number] },
      { element: 'H', position: [-0.63, 0.63, -0.63] as [number, number, number] },
      { element: 'H', position: [0.63, -0.63, -0.63] as [number, number, number] },
    ],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
    facts: ['Основной компонент природного газа', 'Парниковый газ', 'Используется как топливо'],
  },
  ammonia: {
    name: 'Аммиак',
    formula: 'NH₃',
    description: 'Аммиак — бесцветный газ с резким запахом. Широко используется в промышленности.',
    atoms: [
      { element: 'N', position: [0, 0, 0] as [number, number, number] },
      { element: 'H', position: [0.94, 0.38, 0] as [number, number, number] },
      { element: 'H', position: [-0.47, 0.38, 0.81] as [number, number, number] },
      { element: 'H', position: [-0.47, 0.38, -0.81] as [number, number, number] },
    ],
    bonds: [[0, 1], [0, 2], [0, 3]],
    facts: ['Используется в удобрениях', 'Резкий запах', 'Применяется в холодильниках'],
  },
  nacl: {
    name: 'Хлорид натрия',
    formula: 'NaCl',
    description: 'Поваренная соль — необходимый для организма минерал.',
    atoms: [
      { element: 'Na', position: [0, 0, 0] as [number, number, number] },
      { element: 'Cl', position: [2.0, 0, 0] as [number, number, number] },
    ],
    bonds: [[0, 1, 1.5]],
    facts: ['Пищевая соль', 'Необходима для организма', 'Консервант'],
  },
  ethanol: {
    name: 'Этанол',
    formula: 'C₂H₅OH',
    description: 'Этанол — спирт, содержащийся в алкогольных напитках. Используется как топливо и растворитель.',
    atoms: [
      { element: 'C', position: [0, 0, 0] as [number, number, number] },
      { element: 'C', position: [1.54, 0, 0] as [number, number, number] },
      { element: 'O', position: [2.3, 1.2, 0] as [number, number, number] },
      { element: 'H', position: [-0.63, 0.63, 0.63] as [number, number, number] },
      { element: 'H', position: [-0.63, -0.63, -0.63] as [number, number, number] },
      { element: 'H', position: [-0.63, -0.63, 0.63] as [number, number, number] },
      { element: 'H', position: [2.17, 0, -0.63] as [number, number, number] },
      { element: 'H', position: [2.17, 0, 0.63] as [number, number, number] },
      { element: 'H', position: [3.2, 1.1, 0] as [number, number, number] },
    ],
    bonds: [[0, 1], [1, 2], [0, 3], [0, 4], [0, 5], [1, 6], [1, 7], [2, 8]],
    facts: ['Алкоголь', 'Топливо', 'Антисептик'],
  },
  glucose: {
    name: 'Глюкоза',
    formula: 'C₆H₁₂O₆',
    description: 'Глюкоза — основной источник энергии для клеток организма.',
    atoms: [
      { element: 'C', position: [0, 0, 0] as [number, number, number] },
      { element: 'C', position: [1.5, 0, 0] as [number, number, number] },
      { element: 'C', position: [2.25, 1.3, 0] as [number, number, number] },
      { element: 'C', position: [1.5, 2.6, 0] as [number, number, number] },
      { element: 'C', position: [0, 2.6, 0] as [number, number, number] },
      { element: 'O', position: [-0.75, 1.3, 0] as [number, number, number] },
      { element: 'O', position: [3.75, 1.3, 0] as [number, number, number] },
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [2, 6]],
    facts: ['Источник энергии', 'Содержится в фруктах', 'Уровень сахара в крови'],
  },
  caffeine: {
    name: 'Кофеин',
    formula: 'C₈H₁₀N₄O₂',
    description: 'Кофеин — стимулятор нервной системы, содержащийся в кофе, чае и какао.',
    atoms: [
      { element: 'N', position: [0, 0, 0] as [number, number, number] },
      { element: 'C', position: [1.2, 0.8, 0] as [number, number, number] },
      { element: 'N', position: [2.4, 0, 0] as [number, number, number] },
      { element: 'C', position: [2.4, -1.4, 0] as [number, number, number] },
      { element: 'C', position: [1.2, -2.0, 0] as [number, number, number] },
      { element: 'N', position: [0, -1.2, 0] as [number, number, number] },
      { element: 'O', position: [1.2, 2.0, 0] as [number, number, number] },
      { element: 'O', position: [1.2, -3.4, 0] as [number, number, number] },
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 6, 2], [4, 7, 2]],
    facts: ['Стимулятор', 'В кофе и чае', 'Повышает бодрость'],
  },
  ozone: {
    name: 'Озон',
    formula: 'O₃',
    description: 'Озон — газ с характерным запахом. Образует озоновый слой в атмосфере.',
    atoms: [
      { element: 'O', position: [0, 0, 0] as [number, number, number] },
      { element: 'O', position: [1.13, 0.48, 0] as [number, number, number] },
      { element: 'O', position: [1.13, -0.48, 0] as [number, number, number] },
    ],
    bonds: [[0, 1, 1.5], [0, 2, 1.5]],
    facts: ['Озоновый слой', 'Защита от УФ', 'Антисептик'],
  },
  hydrogenperoxide: {
    name: 'Пероксид водорода',
    formula: 'H₂O₂',
    description: 'Перекись водорода — антисептик для обработки ран.',
    atoms: [
      { element: 'O', position: [0, 0, 0] as [number, number, number] },
      { element: 'O', position: [1.2, 0, 0] as [number, number, number] },
      { element: 'H', position: [-0.6, 0.8, 0] as [number, number, number] },
      { element: 'H', position: [1.8, 0.8, 0] as [number, number, number] },
    ],
    bonds: [[0, 1], [0, 2], [1, 3]],
    facts: ['Антисептик', 'Обесцвечивает волосы', 'Отбеливатель'],
  },
}

// Компонент атома
function AtomSphere({ element, position, onClick, isSelected }: {
  element: string
  position: [number, number, number]
  onClick?: () => void
  isSelected?: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const props = ATOM_PROPERTIES[element] || { color: '#888888', radius: 0.5 }
  const scale = props.radius * 1.5

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <Sphere
        ref={meshRef}
        position={position}
        args={[scale, 32, 32]}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={props.color}
          metalness={0.3}
          roughness={0.4}
          emissive={isSelected ? props.color : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
        {isSelected && (
          <meshStandardMaterial
            color={props.color}
            metalness={0.3}
            roughness={0.4}
            emissive={props.color}
            emissiveIntensity={0.5}
          />
        )}
      </Sphere>
      <Html position={position} center distanceFactor={10}>
        <div className={`px-1.5 py-0.5 rounded text-xs font-bold bg-black/70 text-white pointer-events-none ${isSelected ? 'ring-2 ring-yellow-400' : ''}`}>
          {element}
        </div>
      </Html>
    </Float>
  )
}

// Компонент связи между атомами
function Bond({ start, end, order = 1 }: {
  start: [number, number, number]
  end: [number, number, number]
  order?: number
}) {
  const startPoint = new THREE.Vector3(...start)
  const endPoint = new THREE.Vector3(...end)
  const midPoint = new THREE.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5)
  const direction = new THREE.Vector3().subVectors(endPoint, startPoint)
  const length = direction.length()

  const bonds = []
  const offset = 0.1

  for (let i = 0; i < order; i++) {
    const offsetAmount = (i - (order - 1) / 2) * offset
    const perpendicular = new THREE.Vector3(0, 1, 0)
    if (Math.abs(direction.normalize().dot(perpendicular)) > 0.9) {
      perpendicular.set(1, 0, 0)
    }
    const offsetVec = perpendicular.cross(direction).normalize().multiplyScalar(offsetAmount)

    bonds.push(
      <mesh
        key={i}
        position={midPoint.clone().add(offsetVec)}
        rotation={[0, 0, Math.atan2(direction.y, direction.x)]}
      >
        <cylinderGeometry args={[0.05, 0.05, length * 0.9, 16]} />
        <meshStandardMaterial color="#888888" metalness={0.5} roughness={0.3} />
      </mesh>
    )
  }

  return <group>{bonds}</group>
}

// Вращающаяся молекула
function MoleculeScene({ molecule, selectedAtom, onAtomClick }: {
  molecule: typeof MOLECULES_DATABASE.water
  selectedAtom: number | null
  onAtomClick: (index: number) => void
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff88ff" />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} penumbra={1} />

      <group ref={groupRef}>
        {/* Атомы */}
        {molecule.atoms.map((atom, index) => (
          <AtomSphere
            key={index}
            element={atom.element}
            position={atom.position}
            onClick={() => onAtomClick(index)}
            isSelected={selectedAtom === index}
          />
        ))}

        {/* Связи */}
        {molecule.bonds?.map((bond, index) => {
          const start = molecule.atoms[bond[0] as number].position
          const end = molecule.atoms[bond[1] as number].position
          const order = (bond[2] as number) || 1
          return <Bond key={index} start={start} end={end} order={order} />
        })}
      </group>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={20}
      />
    </>
  )
}

// Загрузочный компонент
function LoadingScene() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70">Загрузка 3D визуализации...</p>
      </div>
    </div>
  )
}

// Главный компонент
interface MoleculeViewerProps {
  onBack?: () => void
}

export default function MoleculeViewer({ onBack }: MoleculeViewerProps) {
  const [selectedMolecule, setSelectedMolecule] = useState<string>('water')
  const [selectedAtom, setSelectedAtom] = useState<number | null>(null)
  const [autoRotate, setAutoRotate] = useState(true)

  const molecule = MOLECULES_DATABASE[selectedMolecule as keyof typeof MOLECULES_DATABASE]

  const handleAtomClick = (index: number) => {
    setSelectedAtom(selectedAtom === index ? null : index)
  }

  const selectedAtomInfo = selectedAtom !== null
    ? ATOM_PROPERTIES[molecule.atoms[selectedAtom].element]
    : null

  return (
    <div className="h-full flex flex-col">
      {/* Заголовок */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack} className="text-white/70 hover:text-white">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Назад
            </Button>
          )}
          <Atom className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">3D Молекулы</h2>
        </div>
        <Badge variant="outline" className="border-purple-500/50 text-purple-300">
          {molecule.formula}
        </Badge>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Список молекул */}
        <Card className="lg:col-span-1 bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Beaker className="w-5 h-5 text-cyan-400" />
              Молекулы
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm">
              Выберите молекулу для визуализации
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 max-h-96 overflow-y-auto">
            {Object.entries(MOLECULES_DATABASE).map(([key, mol]) => (
              <Button
                key={key}
                variant={selectedMolecule === key ? 'default' : 'ghost'}
                className={`w-full justify-start text-left ${
                  selectedMolecule === key
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => {
                  setSelectedMolecule(key)
                  setSelectedAtom(null)
                }}
              >
                <span className="mr-2">{mol.formula}</span>
                <span className="text-xs opacity-70">{mol.name}</span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* 3D Визуализация */}
        <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-0 h-96 lg:h-[500px] relative">
            <Suspense fallback={<LoadingScene />}>
              <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <MoleculeScene
                  molecule={molecule}
                  selectedAtom={selectedAtom}
                  onAtomClick={handleAtomClick}
                />
              </Canvas>
            </Suspense>

            {/* Подсказка */}
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <p className="text-xs text-white/50">
                🔍 Вращайте мышью • Прокрутка для приближения • Клик на атом для информации
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Информация о молекуле */}
        <Card className="lg:col-span-1 bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400" />
              {molecule.name}
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm">
              {molecule.formula}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Описание */}
            <p className="text-white/80 text-sm leading-relaxed">
              {molecule.description}
            </p>

            {/* Выбранный атом */}
            {selectedAtomInfo && (
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: selectedAtomInfo.color }}
                  />
                  {selectedAtomInfo.name}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-white/60">Масса:</div>
                  <div className="text-white/80">{selectedAtomInfo.mass} а.е.м.</div>
                  <div className="text-white/60">Радиус:</div>
                  <div className="text-white/80">{selectedAtomInfo.radius} Å</div>
                </div>
              </div>
            )}

            {/* Факты */}
            <div>
              <h4 className="font-medium text-white/80 mb-2 text-sm">Интересные факты:</h4>
              <ul className="space-y-1">
                {molecule.facts.map((fact, index) => (
                  <li key={index} className="text-white/60 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Атомный состав */}
            <div>
              <h4 className="font-medium text-white/80 mb-2 text-sm">Состав молекулы:</h4>
              <div className="flex flex-wrap gap-1">
                {molecule.atoms.map((atom, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`cursor-pointer transition-all ${
                      selectedAtom === index
                        ? 'border-yellow-400 text-yellow-300'
                        : 'border-white/20 text-white/60 hover:border-white/40'
                    }`}
                    onClick={() => setSelectedAtom(index)}
                  >
                    {atom.element}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
