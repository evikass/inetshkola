'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ==================== ТИПЫ ====================
interface AtomProperties {
  name: string;
  nameRu: string;
  color: number;
  radius: number;
  mass: number;
}

interface Atom {
  element: string;
  position: [number, number, number];
}

interface Bond {
  start: number;
  end: number;
  type: 'single' | 'double' | 'triple';
}

interface MoleculeData {
  name: string;
  formula: string;
  description: string;
  atoms: Atom[];
  bonds: Bond[];
  bondInfo: string;
  center: [number, number, number];
  category: 'basic' | 'organic' | 'biological' | 'inorganic';
}

// ==================== ДАННЫЕ АТОМОВ ====================
const ATOM_PROPERTIES: Record<string, AtomProperties> = {
  H: { name: 'Hydrogen', nameRu: 'Водород', color: 0xffffff, radius: 0.31, mass: 1.008 },
  C: { name: 'Carbon', nameRu: 'Углерод', color: 0x333333, radius: 0.77, mass: 12.011 },
  O: { name: 'Oxygen', nameRu: 'Кислород', color: 0xff4444, radius: 0.73, mass: 15.999 },
  N: { name: 'Nitrogen', nameRu: 'Азот', color: 0x4444ff, radius: 0.75, mass: 14.007 },
  P: { name: 'Phosphorus', nameRu: 'Фосфор', color: 0xff8800, radius: 1.07, mass: 30.974 },
  S: { name: 'Sulfur', nameRu: 'Сера', color: 0xffff00, radius: 1.02, mass: 32.065 },
  Cl: { name: 'Chlorine', nameRu: 'Хлор', color: 0x00ff00, radius: 0.99, mass: 35.453 },
  Na: { name: 'Sodium', nameRu: 'Натрий', color: 0xff00ff, radius: 1.54, mass: 22.990 },
  Fe: { name: 'Iron', nameRu: 'Железо', color: 0xcc6600, radius: 1.26, mass: 55.845 },
  Ca: { name: 'Calcium', nameRu: 'Кальций', color: 0x00ffaa, radius: 1.97, mass: 40.078 },
  K: { name: 'Potassium', nameRu: 'Калий', color: 0xaa00ff, radius: 2.03, mass: 39.098 },
  Mg: { name: 'Magnesium', nameRu: 'Магний', color: 0x00aaff, radius: 1.60, mass: 24.305 },
};

// ==================== БИБЛИОТЕКА МОЛЕКУЛ ====================
const MOLECULES: Record<string, MoleculeData> = {
  // === ОСНОВНЫЕ МОЛЕКУЛЫ ===
  water: {
    name: 'Water',
    formula: 'H₂O',
    description: 'Вода — самое важное вещество для жизни на Земле. Состоит из двух атомов водорода и одного атома кислорода. Угол между связями H-O-H составляет примерно 104.5°.',
    atoms: [
      { element: 'O', position: [0, 0, 0] },
      { element: 'H', position: [0.96, 0, 0] },
      { element: 'H', position: [-0.24, 0.93, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 0, end: 2, type: 'single' }
    ],
    bondInfo: '2 ковалентные связи O-H',
    center: [0, 0, 0],
    category: 'basic'
  },
  carbonDioxide: {
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    description: 'Углекислый газ — продукт дыхания и горения. Линейная молекула с двумя двойными связями. Основной парниковый газ.',
    atoms: [
      { element: 'C', position: [0, 0, 0] },
      { element: 'O', position: [-1.16, 0, 0] },
      { element: 'O', position: [1.16, 0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'double' },
      { start: 0, end: 2, type: 'double' }
    ],
    bondInfo: '2 двойные связи C=O',
    center: [0, 0, 0],
    category: 'basic'
  },
  oxygen: {
    name: 'Oxygen',
    formula: 'O₂',
    description: 'Кислород — необходим для дыхания всех аэробных организмов. Содержит двойную связь между атомами.',
    atoms: [
      { element: 'O', position: [-0.6, 0, 0] },
      { element: 'O', position: [0.6, 0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'double' }
    ],
    bondInfo: '1 двойная связь O=O',
    center: [0, 0, 0],
    category: 'basic'
  },
  nitrogen: {
    name: 'Nitrogen',
    formula: 'N₂',
    description: 'Азот составляет 78% атмосферы Земли. Очень стабильная молекула с тройной связью.',
    atoms: [
      { element: 'N', position: [-0.55, 0, 0] },
      { element: 'N', position: [0.55, 0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'triple' }
    ],
    bondInfo: '1 тройная связь N≡N',
    center: [0, 0, 0],
    category: 'basic'
  },
  hydrogen: {
    name: 'Hydrogen',
    formula: 'H₂',
    description: 'Водород — самый лёгкий газ, самый распространённый элемент во Вселенной. Одинарная связь между атомами.',
    atoms: [
      { element: 'H', position: [-0.37, 0, 0] },
      { element: 'H', position: [0.37, 0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' }
    ],
    bondInfo: '1 одинарная связь H-H',
    center: [0, 0, 0],
    category: 'basic'
  },
  ammonia: {
    name: 'Ammonia',
    formula: 'NH₃',
    description: 'Аммиак — важное промышленное вещество, используется в удобрениях. Пирамидальная структура.',
    atoms: [
      { element: 'N', position: [0, 0, 0] },
      { element: 'H', position: [0.94, 0.38, 0] },
      { element: 'H', position: [-0.47, 0.38, 0.81] },
      { element: 'H', position: [-0.47, 0.38, -0.81] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 0, end: 2, type: 'single' },
      { start: 0, end: 3, type: 'single' }
    ],
    bondInfo: '3 ковалентные связи N-H',
    center: [0, 0, 0],
    category: 'basic'
  },
  methane: {
    name: 'Methane',
    formula: 'CH₄',
    description: 'Метан — простейший углеводород, основной компонент природного газа. Тетраэдрическая структура.',
    atoms: [
      { element: 'C', position: [0, 0, 0] },
      { element: 'H', position: [1.09, 0, 0] },
      { element: 'H', position: [-0.36, 1.03, 0] },
      { element: 'H', position: [-0.36, -0.51, 0.89] },
      { element: 'H', position: [-0.36, -0.51, -0.89] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 0, end: 2, type: 'single' },
      { start: 0, end: 3, type: 'single' },
      { start: 0, end: 4, type: 'single' }
    ],
    bondInfo: '4 ковалентные связи C-H (тетраэдр)',
    center: [0, 0, 0],
    category: 'basic'
  },
  
  // === ОРГАНИЧЕСКИЕ МОЛЕКУЛЫ ===
  ethane: {
    name: 'Ethane',
    formula: 'C₂H₆',
    description: 'Этан — второй по простоте углеводород после метана. Содержит одинарную связь C-C.',
    atoms: [
      { element: 'C', position: [-0.77, 0, 0] },
      { element: 'C', position: [0.77, 0, 0] },
      { element: 'H', position: [-1.17, 0.51, 0.89] },
      { element: 'H', position: [-1.17, 0.51, -0.89] },
      { element: 'H', position: [-1.17, -1, 0] },
      { element: 'H', position: [1.17, 0.51, 0.89] },
      { element: 'H', position: [1.17, 0.51, -0.89] },
      { element: 'H', position: [1.17, -1, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 0, end: 2, type: 'single' },
      { start: 0, end: 3, type: 'single' },
      { start: 0, end: 4, type: 'single' },
      { start: 1, end: 5, type: 'single' },
      { start: 1, end: 6, type: 'single' },
      { start: 1, end: 7, type: 'single' }
    ],
    bondInfo: '1 связь C-C, 6 связей C-H',
    center: [0, 0, 0],
    category: 'organic'
  },
  ethene: {
    name: 'Ethene (Ethylene)',
    formula: 'C₂H₄',
    description: 'Этен (этилен) — простейший алкен с двойной связью между атомами углерода. Плоская молекула.',
    atoms: [
      { element: 'C', position: [-0.67, 0, 0] },
      { element: 'C', position: [0.67, 0, 0] },
      { element: 'H', position: [-1.23, 0.93, 0] },
      { element: 'H', position: [-1.23, -0.93, 0] },
      { element: 'H', position: [1.23, 0.93, 0] },
      { element: 'H', position: [1.23, -0.93, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'double' },
      { start: 0, end: 2, type: 'single' },
      { start: 0, end: 3, type: 'single' },
      { start: 1, end: 4, type: 'single' },
      { start: 1, end: 5, type: 'single' }
    ],
    bondInfo: '1 двойная связь C=C, 4 связи C-H',
    center: [0, 0, 0],
    category: 'organic'
  },
  ethanol: {
    name: 'Ethanol',
    formula: 'C₂H₅OH',
    description: 'Этанол — спирт, содержащийся в алкогольных напитках. Содержит гидроксильную группу -OH.',
    atoms: [
      { element: 'C', position: [-0.7, 0, 0] },
      { element: 'C', position: [0.7, 0, 0] },
      { element: 'O', position: [1.4, 1.1, 0] },
      { element: 'H', position: [-1.1, 0.5, 0.9] },
      { element: 'H', position: [-1.1, 0.5, -0.9] },
      { element: 'H', position: [-1.1, -1, 0] },
      { element: 'H', position: [1.1, -0.5, 0.9] },
      { element: 'H', position: [1.1, -0.5, -0.9] },
      { element: 'H', position: [2.3, 1.0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 1, end: 2, type: 'single' },
      { start: 0, end: 3, type: 'single' },
      { start: 0, end: 4, type: 'single' },
      { start: 0, end: 5, type: 'single' },
      { start: 1, end: 6, type: 'single' },
      { start: 1, end: 7, type: 'single' },
      { start: 2, end: 8, type: 'single' }
    ],
    bondInfo: '1 C-C, 1 C-O, 1 O-H, 5 C-H связей',
    center: [0.4, 0.3, 0],
    category: 'organic'
  },
  aceticAcid: {
    name: 'Acetic Acid',
    formula: 'CH₃COOH',
    description: 'Уксусная кислота — придаёт уксусу характерный запах. Содержит карбоксильную группу -COOH.',
    atoms: [
      { element: 'C', position: [-0.75, 0, 0] },
      { element: 'C', position: [0.75, 0, 0] },
      { element: 'O', position: [1.35, 1.1, 0] },
      { element: 'O', position: [1.5, -1.0, 0] },
      { element: 'H', position: [-1.15, 0.5, 0.9] },
      { element: 'H', position: [-1.15, 0.5, -0.9] },
      { element: 'H', position: [-1.15, -1, 0] },
      { element: 'H', position: [2.45, -0.8, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' },
      { start: 1, end: 2, type: 'double' },
      { start: 1, end: 3, type: 'single' },
      { start: 0, end: 4, type: 'single' },
      { start: 0, end: 5, type: 'single' },
      { start: 0, end: 6, type: 'single' },
      { start: 3, end: 7, type: 'single' }
    ],
    bondInfo: 'Карбоксильная группа -COOH',
    center: [0.3, 0, 0],
    category: 'organic'
  },
  
  // === НЕОРГАНИЧЕСКИЕ ===
  sodiumChloride: {
    name: 'Sodium Chloride',
    formula: 'NaCl',
    description: 'Хлорид натрия — обычная поваренная соль. Ионное соединение с кристаллической решёткой.',
    atoms: [
      { element: 'Na', position: [-0.5, 0, 0] },
      { element: 'Cl', position: [0.5, 0, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'single' }
    ],
    bondInfo: 'Ионная связь Na⁺-Cl⁻',
    center: [0, 0, 0],
    category: 'inorganic'
  },
  sulfurDioxide: {
    name: 'Sulfur Dioxide',
    formula: 'SO₂',
    description: 'Диоксид серы — образуется при сжигании серы. Угловая структура с двойными связями.',
    atoms: [
      { element: 'S', position: [0, 0, 0] },
      { element: 'O', position: [-1.2, 0.6, 0] },
      { element: 'O', position: [1.2, 0.6, 0] }
    ],
    bonds: [
      { start: 0, end: 1, type: 'double' },
      { start: 0, end: 2, type: 'double' }
    ],
    bondInfo: '2 двойные связи S=O',
    center: [0, 0.2, 0],
    category: 'inorganic'
  },
};

// Генератор бензола
function generateBenzene(): MoleculeData {
  const atoms: Atom[] = [];
  const bonds: Bond[] = [];
  const radius = 1.4;
  
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    atoms.push({
      element: 'C',
      position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0]
    });
    atoms.push({
      element: 'H',
      position: [Math.cos(angle) * 2.3, Math.sin(angle) * 2.3, 0]
    });
  }
  
  for (let i = 0; i < 6; i++) {
    bonds.push({ 
      start: i * 2, 
      end: ((i + 1) % 6) * 2, 
      type: i % 2 === 0 ? 'double' : 'single' 
    });
    bonds.push({ start: i * 2, end: i * 2 + 1, type: 'single' });
  }
  
  return {
    name: 'Benzene',
    formula: 'C₆H₆',
    description: 'Бензол — ароматический углеводород с кольцевой структурой. Содержит сопряжённую систему двойных связей.',
    atoms,
    bonds,
    bondInfo: '6 C-C связей (чередующиеся), 6 C-H связей',
    center: [0, 0, 0],
    category: 'organic'
  };
}

// Добавляем бензол
MOLECULES.benzene = generateBenzene();

// ==================== КОМПОНЕНТ ====================
interface MolecularViewer3DProps {
  moleculeKey?: string;
  height?: string;
  showControls?: boolean;
  showInfo?: boolean;
  onMoleculeChange?: (key: string) => void;
}

export function MolecularViewer3D({ 
  moleculeKey = 'water', 
  height = '500px',
  showControls = true,
  showInfo = true,
  onMoleculeChange
}: MolecularViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMolecule, setCurrentMolecule] = useState(moleculeKey);
  const [displayMode, setDisplayMode] = useState<'ball-stick' | 'space-fill'>('ball-stick');
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredAtom, setHoveredAtom] = useState<AtomProperties | null>(null);
  const [mounted, setMounted] = useState(false);
  
  // Refs для Three.js
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const moleculeGroupRef = useRef<THREE.Group | null>(null);
  const atomMeshesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number>(0);

  // Инициализация сцены
  useEffect(() => {
    if (!containerRef.current) return;
    setMounted(true);

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0x00d4ff, 0.5);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);

    // Molecule group
    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);
    moleculeGroupRef.current = moleculeGroup;

    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      controls.update();
      
      if (moleculeGroup) {
        moleculeGroup.position.y = Math.sin(elapsed * 0.5) * 0.1;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Создание молекулы
  const createMolecule = useCallback((molKey: string) => {
    if (!moleculeGroupRef.current || !sceneRef.current) return;
    
    const mol = MOLECULES[molKey];
    if (!mol) return;

    // Очистка
    while (moleculeGroupRef.current.children.length > 0) {
      const child = moleculeGroupRef.current.children[0];
      moleculeGroupRef.current.remove(child);
      if ((child as THREE.Mesh).geometry) ((child as THREE.Mesh).geometry).dispose();
      if ((child as THREE.Mesh).material) {
        const mat = (child as THREE.Mesh).material;
        if (Array.isArray(mat)) {
          mat.forEach(m => m.dispose());
        } else {
          mat.dispose();
        }
      }
    }
    atomMeshesRef.current = [];

    const scaleFactor = 2;
    const bondRadius = 0.1;
    const ballStickRadius = 0.25;

    const center = new THREE.Vector3(...mol.center);

    // Создание атомов
    mol.atoms.forEach((atom, index) => {
      const props = ATOM_PROPERTIES[atom.element];
      if (!props) return;
      
      const radius = displayMode === 'ball-stick' 
        ? ballStickRadius 
        : props.radius * scaleFactor;

      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: props.color,
        shininess: 100,
        specular: 0x444444
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        atom.position[0] * scaleFactor - center.x,
        atom.position[1] * scaleFactor - center.y,
        atom.position[2] * scaleFactor - center.z
      );
      mesh.userData = { element: atom.element, index, properties: props };

      moleculeGroupRef.current!.add(mesh);
      atomMeshesRef.current.push(mesh);
    });

    // Создание связей
    mol.bonds.forEach((bond) => {
      const startAtom = mol.atoms[bond.start];
      const endAtom = mol.atoms[bond.end];
      
      const start = new THREE.Vector3(
        startAtom.position[0] * scaleFactor - center.x,
        startAtom.position[1] * scaleFactor - center.y,
        startAtom.position[2] * scaleFactor - center.z
      );
      const end = new THREE.Vector3(
        endAtom.position[0] * scaleFactor - center.x,
        endAtom.position[1] * scaleFactor - center.y,
        endAtom.position[2] * scaleFactor - center.z
      );

      const direction = new THREE.Vector3().subVectors(end, start);
      const length = direction.length();

      const createBondMesh = (offset: number = 0) => {
        const bondGeometry = new THREE.CylinderGeometry(
          bond.type === 'single' ? bondRadius : bondRadius * 0.7,
          bond.type === 'single' ? bondRadius : bondRadius * 0.7,
          length, 16
        );
        const bondMaterial = new THREE.MeshPhongMaterial({
          color: 0x888888,
          shininess: 50
        });
        const bondMesh = new THREE.Mesh(bondGeometry, bondMaterial);
        
        const midpoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        if (offset !== 0) {
          const perpendicular = new THREE.Vector3(1, 0, 0);
          if (Math.abs(direction.dot(perpendicular)) > 0.9) {
            perpendicular.set(0, 1, 0);
          }
          const offsetVec = new THREE.Vector3().crossVectors(direction, perpendicular).normalize().multiplyScalar(offset);
          midpoint.add(offsetVec);
        }
        bondMesh.position.copy(midpoint);
        bondMesh.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction.clone().normalize()
        );
        
        moleculeGroupRef.current!.add(bondMesh);
      };

      if (bond.type === 'triple') {
        createBondMesh(0);
        createBondMesh(0.12);
        createBondMesh(-0.12);
      } else if (bond.type === 'double') {
        createBondMesh(0.08);
        createBondMesh(-0.08);
      } else {
        createBondMesh();
      }
    });
  }, [displayMode]);

  // Обновление при смене молекулы или режима
  useEffect(() => {
    if (mounted) {
      createMolecule(currentMolecule);
    }
  }, [currentMolecule, displayMode, mounted, createMolecule]);

  // Обновление автовращения
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  // Mouse hover
  useEffect(() => {
    if (!containerRef.current || !cameraRef.current) return;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(atomMeshesRef.current);

      // Reset previous
      atomMeshesRef.current.forEach(mesh => {
        mesh.material = new THREE.MeshPhongMaterial({
          color: (mesh.userData.properties as AtomProperties).color,
          shininess: 100,
          specular: 0x444444
        });
        mesh.scale.set(1, 1, 1);
      });

      if (intersects.length > 0) {
        const atom = intersects[0].object as THREE.Mesh;
        atom.material = new THREE.MeshPhongMaterial({
          color: (atom.userData.properties as AtomProperties).color,
          shininess: 100,
          specular: 0x444444,
          emissive: 0x00ff88,
          emissiveIntensity: 0.3
        });
        atom.scale.set(1.2, 1.2, 1.2);
        setHoveredAtom(atom.userData.properties as AtomProperties);
      } else {
        setHoveredAtom(null);
      }
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);
    return () => {
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
    };
  }, [mounted]);

  const mol = MOLECULES[currentMolecule];

  const handleMoleculeChange = (key: string) => {
    setCurrentMolecule(key);
    onMoleculeChange?.(key);
  };

  if (!mounted) {
    return (
      <div className="w-full bg-slate-900 rounded-2xl flex items-center justify-center" style={{ height }}>
        <div className="text-white">Загрузка 3D визуализации...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
      {/* Заголовок */}
      <div className="text-center py-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          🔬 3D Молекулярная визуализация
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* 3D Canvas */}
        <div className="flex-1 relative">
          <div 
            ref={containerRef} 
            className="w-full"
            style={{ height, minHeight: '400px' }}
          />
          
          {/* Подсказка */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/80 px-4 py-2 rounded-full text-sm text-slate-400">
            Вращайте мышью • Масштабируйте колёсиком • Наведите на атом
          </div>
        </div>

        {/* Панель информации */}
        {showInfo && (
          <div className="lg:w-80 p-4 bg-slate-800/50 space-y-4">
            {/* Информация о молекуле */}
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Молекула</h3>
              <div className="text-2xl font-bold text-white">{mol?.name}</div>
              <div className="text-emerald-400 font-mono text-lg">{mol?.formula}</div>
              <p className="text-slate-400 text-sm mt-2">{mol?.description}</p>
            </div>

            {/* Атом под курсором */}
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Атом</h3>
              {hoveredAtom ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: `#${hoveredAtom.color.toString(16).padStart(6, '0')}`,
                        boxShadow: `0 0 10px #${hoveredAtom.color.toString(16).padStart(6, '0')}`
                      }}
                    />
                    <span className="text-white font-semibold">{hoveredAtom.nameRu}</span>
                  </div>
                  <div className="text-slate-400 text-sm">
                    Масса: {hoveredAtom.mass} а.е.м.
                  </div>
                  <div className="text-slate-400 text-sm">
                    Радиус: {hoveredAtom.radius} Å
                  </div>
                </div>
              ) : (
                <div className="text-slate-500 text-sm">Наведите на атом</div>
              )}
            </div>

            {/* Связи */}
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Связи</h3>
              <div className="text-slate-300">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-400">Всего:</span>
                  <span>{mol?.bonds.length}</span>
                </div>
                <div className="text-sm text-slate-500">{mol?.bondInfo}</div>
              </div>
            </div>

            {/* Легенда атомов */}
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Атомы</h3>
              <div className="grid grid-cols-2 gap-2">
                {mol && [...new Set(mol.atoms.map(a => a.element))].map(el => {
                  const props = ATOM_PROPERTIES[el];
                  return (
                    <div key={el} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: `#${props.color.toString(16).padStart(6, '0')}`,
                          boxShadow: `0 0 6px #${props.color.toString(16).padStart(6, '0')}`
                        }}
                      />
                      <span className="text-slate-300">{props.nameRu} ({el})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Контролы */}
      {showControls && (
        <div className="p-4 bg-slate-800/50 flex flex-wrap gap-4 items-center justify-between">
          {/* Выбор молекулы */}
          <div className="flex-1 min-w-[200px]">
            <select
              value={currentMolecule}
              onChange={(e) => handleMoleculeChange(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            >
              <optgroup label="Основные">
                {Object.entries(MOLECULES).filter(([, m]) => m.category === 'basic').map(([key, m]) => (
                  <option key={key} value={key}>{m.formula} — {m.name}</option>
                ))}
              </optgroup>
              <optgroup label="Органические">
                {Object.entries(MOLECULES).filter(([, m]) => m.category === 'organic').map(([key, m]) => (
                  <option key={key} value={key}>{m.formula} — {m.name}</option>
                ))}
              </optgroup>
              <optgroup label="Неорганические">
                {Object.entries(MOLECULES).filter(([, m]) => m.category === 'inorganic').map(([key, m]) => (
                  <option key={key} value={key}>{m.formula} — {m.name}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Режим отображения */}
          <div className="flex gap-2">
            <button
              onClick={() => setDisplayMode('ball-stick')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                displayMode === 'ball-stick'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              ⚫ Шарики-палочки
            </button>
            <button
              onClick={() => setDisplayMode('space-fill')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                displayMode === 'space-fill'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              ⚪ Заполнение
            </button>
          </div>

          {/* Автовращение */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              autoRotate
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoRotate ? 'bg-emerald-400' : 'bg-slate-500'}`} />
            Автовращение
          </button>
        </div>
      )}
    </div>
  );
}

export default MolecularViewer3D;
