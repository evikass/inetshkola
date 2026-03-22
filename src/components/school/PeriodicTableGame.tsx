'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// ==================== АТОМНАЯ МОДЕЛЬ ====================
interface AtomModelProps {
  atomicNumber: number;
  symbol: string;
  color?: string;
}

const AtomModel: React.FC<AtomModelProps> = ({ atomicNumber, symbol, color = '#8b5cf6' }) => {
  const electrons = Math.min(Math.max(atomicNumber, 1), 20);
  const shells = Math.ceil(Math.sqrt(electrons));

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg width="128" height="128" viewBox="0 0 120 120" className="drop-shadow-xl">
        <circle cx="60" cy="60" r="14" fill="#1e2937" />
        <text x="60" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{symbol}</text>
        {Array.from({ length: shells }, (_, i) => {
          const radius = 24 + i * 14;
          return (
            <g key={i}>
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 3" />
              {Array.from({ length: Math.min(electrons - i * 4, 8) }, (_, j) => {
                const angle = (j * 360) / Math.min(electrons - i * 4, 8) + i * 30;
                const x = 60 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 60 + radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <circle key={j} cx={x} cy={y} r="4" fill={color} className="animate-[spin_3s_linear_infinite]" style={{ animationDelay: `-${j * 0.2}s` }} />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ==================== ДАННЫЕ ЭЛЕМЕНТОВ ====================
interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
}

const elementsData: Element[] = [
  { atomicNumber: 1, symbol: 'H', name: 'Водород', mass: '1.008', period: 1, group: 1, block: 's' },
  { atomicNumber: 2, symbol: 'He', name: 'Гелий', mass: '4.0026', period: 1, group: 18, block: 'p' },
  { atomicNumber: 3, symbol: 'Li', name: 'Литий', mass: '6.94', period: 2, group: 1, block: 's' },
  { atomicNumber: 4, symbol: 'Be', name: 'Бериллий', mass: '9.0122', period: 2, group: 2, block: 's' },
  { atomicNumber: 5, symbol: 'B', name: 'Бор', mass: '10.81', period: 2, group: 13, block: 'p' },
  { atomicNumber: 6, symbol: 'C', name: 'Углерод', mass: '12.011', period: 2, group: 14, block: 'p' },
  { atomicNumber: 7, symbol: 'N', name: 'Азот', mass: '14.007', period: 2, group: 15, block: 'p' },
  { atomicNumber: 8, symbol: 'O', name: 'Кислород', mass: '15.999', period: 2, group: 16, block: 'p' },
  { atomicNumber: 9, symbol: 'F', name: 'Фтор', mass: '18.998', period: 2, group: 17, block: 'p' },
  { atomicNumber: 10, symbol: 'Ne', name: 'Неон', mass: '20.180', period: 2, group: 18, block: 'p' },
  { atomicNumber: 11, symbol: 'Na', name: 'Натрий', mass: '22.990', period: 3, group: 1, block: 's' },
  { atomicNumber: 12, symbol: 'Mg', name: 'Магний', mass: '24.305', period: 3, group: 2, block: 's' },
  { atomicNumber: 13, symbol: 'Al', name: 'Алюминий', mass: '26.982', period: 3, group: 13, block: 'p' },
  { atomicNumber: 14, symbol: 'Si', name: 'Кремний', mass: '28.085', period: 3, group: 14, block: 'p' },
  { atomicNumber: 15, symbol: 'P', name: 'Фосфор', mass: '30.974', period: 3, group: 15, block: 'p' },
  { atomicNumber: 16, symbol: 'S', name: 'Сера', mass: '32.06', period: 3, group: 16, block: 'p' },
  { atomicNumber: 17, symbol: 'Cl', name: 'Хлор', mass: '35.45', period: 3, group: 17, block: 'p' },
  { atomicNumber: 18, symbol: 'Ar', name: 'Аргон', mass: '39.948', period: 3, group: 18, block: 'p' },
  { atomicNumber: 19, symbol: 'K', name: 'Калий', mass: '39.098', period: 4, group: 1, block: 's' },
  { atomicNumber: 20, symbol: 'Ca', name: 'Кальций', mass: '40.078', period: 4, group: 2, block: 's' },
  { atomicNumber: 21, symbol: 'Sc', name: 'Скандий', mass: '44.956', period: 4, group: 3, block: 'd' },
  { atomicNumber: 22, symbol: 'Ti', name: 'Титан', mass: '47.867', period: 4, group: 4, block: 'd' },
  { atomicNumber: 23, symbol: 'V', name: 'Ванадий', mass: '50.942', period: 4, group: 5, block: 'd' },
  { atomicNumber: 24, symbol: 'Cr', name: 'Хром', mass: '51.996', period: 4, group: 6, block: 'd' },
  { atomicNumber: 25, symbol: 'Mn', name: 'Марганец', mass: '54.938', period: 4, group: 7, block: 'd' },
  { atomicNumber: 26, symbol: 'Fe', name: 'Железо', mass: '55.845', period: 4, group: 8, block: 'd' },
  { atomicNumber: 27, symbol: 'Co', name: 'Кобальт', mass: '58.933', period: 4, group: 9, block: 'd' },
  { atomicNumber: 28, symbol: 'Ni', name: 'Никель', mass: '58.693', period: 4, group: 10, block: 'd' },
  { atomicNumber: 29, symbol: 'Cu', name: 'Медь', mass: '63.546', period: 4, group: 11, block: 'd' },
  { atomicNumber: 30, symbol: 'Zn', name: 'Цинк', mass: '65.38', period: 4, group: 12, block: 'd' },
  { atomicNumber: 31, symbol: 'Ga', name: 'Галлий', mass: '69.723', period: 4, group: 13, block: 'p' },
  { atomicNumber: 32, symbol: 'Ge', name: 'Германий', mass: '72.630', period: 4, group: 14, block: 'p' },
  { atomicNumber: 33, symbol: 'As', name: 'Мышьяк', mass: '74.922', period: 4, group: 15, block: 'p' },
  { atomicNumber: 34, symbol: 'Se', name: 'Селен', mass: '78.971', period: 4, group: 16, block: 'p' },
  { atomicNumber: 35, symbol: 'Br', name: 'Бром', mass: '79.904', period: 4, group: 17, block: 'p' },
  { atomicNumber: 36, symbol: 'Kr', name: 'Криптон', mass: '83.798', period: 4, group: 18, block: 'p' },
  { atomicNumber: 37, symbol: 'Rb', name: 'Рубидий', mass: '85.468', period: 5, group: 1, block: 's' },
  { atomicNumber: 38, symbol: 'Sr', name: 'Стронций', mass: '87.62', period: 5, group: 2, block: 's' },
  { atomicNumber: 39, symbol: 'Y', name: 'Иттрий', mass: '88.906', period: 5, group: 3, block: 'd' },
  { atomicNumber: 40, symbol: 'Zr', name: 'Цирконий', mass: '91.224', period: 5, group: 4, block: 'd' },
  { atomicNumber: 41, symbol: 'Nb', name: 'Ниобий', mass: '92.906', period: 5, group: 5, block: 'd' },
  { atomicNumber: 42, symbol: 'Mo', name: 'Молибден', mass: '95.95', period: 5, group: 6, block: 'd' },
  { atomicNumber: 43, symbol: 'Tc', name: 'Технеций', mass: '(98)', period: 5, group: 7, block: 'd' },
  { atomicNumber: 44, symbol: 'Ru', name: 'Рутений', mass: '101.07', period: 5, group: 8, block: 'd' },
  { atomicNumber: 45, symbol: 'Rh', name: 'Родий', mass: '102.91', period: 5, group: 9, block: 'd' },
  { atomicNumber: 46, symbol: 'Pd', name: 'Палладий', mass: '106.42', period: 5, group: 10, block: 'd' },
  { atomicNumber: 47, symbol: 'Ag', name: 'Серебро', mass: '107.87', period: 5, group: 11, block: 'd' },
  { atomicNumber: 48, symbol: 'Cd', name: 'Кадмий', mass: '112.41', period: 5, group: 12, block: 'd' },
  { atomicNumber: 49, symbol: 'In', name: 'Индий', mass: '114.82', period: 5, group: 13, block: 'p' },
  { atomicNumber: 50, symbol: 'Sn', name: 'Олово', mass: '118.71', period: 5, group: 14, block: 'p' },
  { atomicNumber: 51, symbol: 'Sb', name: 'Сурьма', mass: '121.76', period: 5, group: 15, block: 'p' },
  { atomicNumber: 52, symbol: 'Te', name: 'Теллур', mass: '127.60', period: 5, group: 16, block: 'p' },
  { atomicNumber: 53, symbol: 'I', name: 'Йод', mass: '126.90', period: 5, group: 17, block: 'p' },
  { atomicNumber: 54, symbol: 'Xe', name: 'Ксенон', mass: '131.29', period: 5, group: 18, block: 'p' },
  { atomicNumber: 55, symbol: 'Cs', name: 'Цезий', mass: '132.91', period: 6, group: 1, block: 's' },
  { atomicNumber: 56, symbol: 'Ba', name: 'Барий', mass: '137.33', period: 6, group: 2, block: 's' },
  { atomicNumber: 57, symbol: 'La', name: 'Лантан', mass: '138.91', period: 6, group: 3, block: 'f' },
  { atomicNumber: 72, symbol: 'Hf', name: 'Гафний', mass: '178.49', period: 6, group: 4, block: 'd' },
  { atomicNumber: 73, symbol: 'Ta', name: 'Тантал', mass: '180.95', period: 6, group: 5, block: 'd' },
  { atomicNumber: 74, symbol: 'W', name: 'Вольфрам', mass: '183.84', period: 6, group: 6, block: 'd' },
  { atomicNumber: 75, symbol: 'Re', name: 'Рений', mass: '186.21', period: 6, group: 7, block: 'd' },
  { atomicNumber: 76, symbol: 'Os', name: 'Осмий', mass: '190.23', period: 6, group: 8, block: 'd' },
  { atomicNumber: 77, symbol: 'Ir', name: 'Иридий', mass: '192.22', period: 6, group: 9, block: 'd' },
  { atomicNumber: 78, symbol: 'Pt', name: 'Платина', mass: '195.08', period: 6, group: 10, block: 'd' },
  { atomicNumber: 79, symbol: 'Au', name: 'Золото', mass: '196.97', period: 6, group: 11, block: 'd' },
  { atomicNumber: 80, symbol: 'Hg', name: 'Ртуть', mass: '200.59', period: 6, group: 12, block: 'd' },
  { atomicNumber: 81, symbol: 'Tl', name: 'Таллий', mass: '204.38', period: 6, group: 13, block: 'p' },
  { atomicNumber: 82, symbol: 'Pb', name: 'Свинец', mass: '207.2', period: 6, group: 14, block: 'p' },
  { atomicNumber: 83, symbol: 'Bi', name: 'Висмут', mass: '208.98', period: 6, group: 15, block: 'p' },
  { atomicNumber: 84, symbol: 'Po', name: 'Полоний', mass: '(209)', period: 6, group: 16, block: 'p' },
  { atomicNumber: 85, symbol: 'At', name: 'Астат', mass: '(210)', period: 6, group: 17, block: 'p' },
  { atomicNumber: 86, symbol: 'Rn', name: 'Радон', mass: '(222)', period: 6, group: 18, block: 'p' },
  { atomicNumber: 87, symbol: 'Fr', name: 'Франций', mass: '(223)', period: 7, group: 1, block: 's' },
  { atomicNumber: 88, symbol: 'Ra', name: 'Радий', mass: '(226)', period: 7, group: 2, block: 's' },
  { atomicNumber: 89, symbol: 'Ac', name: 'Актиний', mass: '(227)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 104, symbol: 'Rf', name: 'Резерфордий', mass: '(267)', period: 7, group: 4, block: 'd' },
  { atomicNumber: 105, symbol: 'Db', name: 'Дубний', mass: '(270)', period: 7, group: 5, block: 'd' },
  { atomicNumber: 106, symbol: 'Sg', name: 'Сиборгий', mass: '(269)', period: 7, group: 6, block: 'd' },
  { atomicNumber: 107, symbol: 'Bh', name: 'Борий', mass: '(270)', period: 7, group: 7, block: 'd' },
  { atomicNumber: 108, symbol: 'Hs', name: 'Хассий', mass: '(270)', period: 7, group: 8, block: 'd' },
  { atomicNumber: 109, symbol: 'Mt', name: 'Мейтнерий', mass: '(278)', period: 7, group: 9, block: 'd' },
  { atomicNumber: 110, symbol: 'Ds', name: 'Дармштадтий', mass: '(281)', period: 7, group: 10, block: 'd' },
  { atomicNumber: 111, symbol: 'Rg', name: 'Рентгений', mass: '(282)', period: 7, group: 11, block: 'd' },
  { atomicNumber: 112, symbol: 'Cn', name: 'Коперниций', mass: '(285)', period: 7, group: 12, block: 'd' },
  { atomicNumber: 113, symbol: 'Nh', name: 'Нихоний', mass: '(286)', period: 7, group: 13, block: 'p' },
  { atomicNumber: 114, symbol: 'Fl', name: 'Флеровий', mass: '(289)', period: 7, group: 14, block: 'p' },
  { atomicNumber: 115, symbol: 'Mc', name: 'Московий', mass: '(290)', period: 7, group: 15, block: 'p' },
  { atomicNumber: 116, symbol: 'Lv', name: 'Ливерморий', mass: '(293)', period: 7, group: 16, block: 'p' },
  { atomicNumber: 117, symbol: 'Ts', name: 'Теннессин', mass: '(294)', period: 7, group: 17, block: 'p' },
  { atomicNumber: 118, symbol: 'Og', name: 'Оганесон', mass: '(294)', period: 7, group: 18, block: 'p' },
  { atomicNumber: 58, symbol: 'Ce', name: 'Церий', mass: '140.12', period: 6, group: 3, block: 'f' },
  { atomicNumber: 59, symbol: 'Pr', name: 'Празеодим', mass: '140.91', period: 6, group: 3, block: 'f' },
  { atomicNumber: 60, symbol: 'Nd', name: 'Неодим', mass: '144.24', period: 6, group: 3, block: 'f' },
  { atomicNumber: 61, symbol: 'Pm', name: 'Прометий', mass: '(145)', period: 6, group: 3, block: 'f' },
  { atomicNumber: 62, symbol: 'Sm', name: 'Самарий', mass: '150.36', period: 6, group: 3, block: 'f' },
  { atomicNumber: 63, symbol: 'Eu', name: 'Европий', mass: '151.96', period: 6, group: 3, block: 'f' },
  { atomicNumber: 64, symbol: 'Gd', name: 'Гадолиний', mass: '157.25', period: 6, group: 3, block: 'f' },
  { atomicNumber: 65, symbol: 'Tb', name: 'Тербий', mass: '158.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 66, symbol: 'Dy', name: 'Диспрозий', mass: '162.50', period: 6, group: 3, block: 'f' },
  { atomicNumber: 67, symbol: 'Ho', name: 'Гольмий', mass: '164.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 68, symbol: 'Er', name: 'Эрбий', mass: '167.26', period: 6, group: 3, block: 'f' },
  { atomicNumber: 69, symbol: 'Tm', name: 'Тулий', mass: '168.93', period: 6, group: 3, block: 'f' },
  { atomicNumber: 70, symbol: 'Yb', name: 'Иттербий', mass: '173.05', period: 6, group: 3, block: 'f' },
  { atomicNumber: 71, symbol: 'Lu', name: 'Лютеций', mass: '174.97', period: 6, group: 3, block: 'f' },
  { atomicNumber: 90, symbol: 'Th', name: 'Торий', mass: '232.04', period: 7, group: 3, block: 'f' },
  { atomicNumber: 91, symbol: 'Pa', name: 'Протактиний', mass: '231.04', period: 7, group: 3, block: 'f' },
  { atomicNumber: 92, symbol: 'U', name: 'Уран', mass: '238.03', period: 7, group: 3, block: 'f' },
  { atomicNumber: 93, symbol: 'Np', name: 'Нептуний', mass: '(237)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 94, symbol: 'Pu', name: 'Плутоний', mass: '(244)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 95, symbol: 'Am', name: 'Америций', mass: '(243)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 96, symbol: 'Cm', name: 'Кюрий', mass: '(247)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 97, symbol: 'Bk', name: 'Берклий', mass: '(247)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 98, symbol: 'Cf', name: 'Калифорний', mass: '(251)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 99, symbol: 'Es', name: 'Эйнштейний', mass: '(252)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 100, symbol: 'Fm', name: 'Фермий', mass: '(257)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 101, symbol: 'Md', name: 'Менделевий', mass: '(258)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 102, symbol: 'No', name: 'Нобелий', mass: '(259)', period: 7, group: 3, block: 'f' },
  { atomicNumber: 103, symbol: 'Lr', name: 'Лоуренсий', mass: '(266)', period: 7, group: 3, block: 'f' },
];

// ==================== ВОПРОСЫ ДЛЯ ИГРЫ ====================
interface Question {
  hint: string;
  correct: number;
  fact: string;
}

const questions: Question[] = [
  { hint: "Самый лёгкий элемент во Вселенной", correct: 1, fact: "Водород — основа всех звёзд и 90% массы Вселенной!" },
  { hint: "Благородный газ, которым надувают воздушные шары", correct: 2, fact: "Гелий — легче воздуха и не горит!" },
  { hint: "Элемент, из которого состоят алмазы и графит", correct: 6, fact: "Углерод — основа всей органической жизни!" },
  { hint: "Газ, которым мы дышим (21% атмосферы)", correct: 8, fact: "Кислород — самый важный для дыхания!" },
  { hint: "Элемент, придающий крови красный цвет", correct: 26, fact: "Железо — в гемоглобине переносит кислород!" },
  { hint: "Щелочной металл, который взрывается в воде", correct: 11, fact: "Натрий — входит в состав поваренной соли!" },
  { hint: "Драгоценный металл жёлтого цвета", correct: 79, fact: "Золото — один из самых ковких металлов!" },
  { hint: "Элемент, используемый как топливо в АЭС", correct: 92, fact: "Уран — самый тяжёлый природный элемент!" },
  { hint: "Металл с самой высокой температурой плавления", correct: 74, fact: "Вольфрам — в нитях ламп накаливания!" },
  { hint: "Элемент, который светится в темноте (фосфор)", correct: 15, fact: "Фосфор — первый открытый элемент заново!" },
  { hint: "Благородный газ, дающий красное свечение в неоновых вывесках", correct: 10, fact: "Неон — название от греческого 'новый'!" },
  { hint: "Элемент, из которого делают электропровода", correct: 29, fact: "Медь — лучшая электропроводность!" },
  { hint: "Самый лёгкий металл (плавает на воде)", correct: 3, fact: "Литий — используется в батарейках!" },
  { hint: "Элемент, необходимый для костей и зубов", correct: 20, fact: "Кальций — в молоке и сыре!" },
  { hint: "Единственный жидкий металл при комнатной температуре", correct: 80, fact: "Ртуть — очень токсична!" },
  { hint: "Элемент, который даёт зелёный цвет в фейерверках", correct: 56, fact: "Барий — бариевая кисл для рентгена!" },
  { hint: "Самый твёёрдый природный материал (алмазаз)", correct: 6, fact: "Углерод образует алмазы под давлением!" },
  { hint: "Элемент с атомным номером 47, используется в ювелирке", correct: 47, fact: "Серебро — бактерицидные свойства!" },
  { hint: "Галоген, добавляемый в соль для профилактики зоба", correct: 53, fact: "Йод — необходим для щитовидной железы!" },
  { hint: "Элемент, названный в честь Земли (Телuris)", correct: 52, fact: "Теллур — редкий полуметалл!" },
];

// Перемешивание вопросов
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ==================== ОСНОВНАЯ ИГРА ====================
interface PeriodicTableGameProps {
  onBack?: () => void
  onComplete?: (stars: number) => void
}

export function PeriodicTableGame({ onBack, onComplete }: PeriodicTableGameProps) {
  const [shuffledQuestions] = useState(() => shuffleArray(questions).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [showStart, setShowStart] = useState(true);

  const current = shuffledQuestions[currentIndex];
  const progress = Math.round(((currentIndex + (feedback === 'correct' ? 1 : 0)) / shuffledQuestions.length) * 100);

  const handleClick = (el: Element) => {
    if (feedback) return;
    setSelected(el.atomicNumber);

    if (el.atomicNumber === current.correct) {
      setFeedback('correct');
      const newScore = score + 1;
      setScore(newScore);

      setTimeout(() => {
        if (currentIndex < shuffledQuestions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setFeedback(null);
          setSelected(null);
        } else {
          setGameOver(true);
          const stars = newScore >= 9 ? 2 : 1;
          onComplete?.(stars);
        }
      }, 1800);
    } else {
      setFeedback('wrong');
      setTimeout(() => {
        if (currentIndex < shuffledQuestions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setFeedback(null);
          setSelected(null);
        } else {
          setGameOver(true);
          const stars = score >= 9 ? 1 : 1;
          onComplete?.(stars);
        }
      }, 1000);
    }
  };

  const restart = () => {
    window.location.reload();
  };

  const currentElement = elementsData.find(el => el.atomicNumber === current?.correct);

  // Стартовый экран
  if (showStart) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-3xl shadow-2xl text-center">
        <div className="text-8xl mb-4 animate-bounce-slow">🕵️</div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Детектив Периодической Таблицы
        </h2>
        <p className="text-slate-600 mb-2">
          Найди элемент по подсказке!<br/>
          Чем быстрее и точнее — тем больше звёзд!
        </p>
        
        <div className="bg-white/60 rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-bold text-lg mb-3">📋 Правила:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>• Читай подсказку и кликай на правильный элемент</li>
            <li>• 9-10 правильных = 3 звёзд за 9+ правильных = ⭐⭐⭐</li>
            <li>• 1-5 правильных = ⭐</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button
              onClick={() => setShowStart(false)}
              className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300"
            >
              ← К инструментам
            </Button>
          )}
          <button
            onClick={() => setShowStart(false)}
            className="px-10 py-4 bg-violet-600 text-white text-xl rounded-2xl hover:bg-violet-700 active:scale-95"
          >
            🎮 Начать игру
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const stars = score >= 9 ? 3 : 1
          onComplete?.(stars);
    
    return (
      <div className="max-w-1xl mx-auto py-12 bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl text-center">
        <div className="text-8xl mb-6">🏆</div>
        <h2 className="text-4xl font-bold mb-2">Миссия выполнена!</h2>
        <p className="text-2xl mb-8 text-slate-600">
          Ты правильно нашёл {score} из {shuffledQuestions.length} элементовов
        </p>
        
        <div className="flex justify-center gap-4 text-7xl mb-8">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={`${i < stars ? 'text-yellow-400 animate-pulse' : 'text-gray-300'}`}>
              ⭐
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button
              onClick={onBack}
              className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300"
            >
              ← К инструментам
            </Button>
          )}
          <button
            onClick={restart}
            className="px-10 py-4 bg-violet-600 text-white text-xl rounded-2xl hover:bg-violet-700 active:scale-95"
          >
            🔄 Играть снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-3xl shadow-2xl text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="text-2xl font-mono font-bold text-slate-900">⭐ {score}</div>
          {onBack && (
            <Button
              onClick={onBack}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 text-sm"
            >
              ← Выход
            </Button>
          )}
          <Button
            onClick={() => setShowPeriodicGame(true)}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl hover:from-violet-600"
          >
            🎮 Играть: Найди элемент!
          </Button>
        </div>

        {/* Прогресс */}
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Подсказка */}
        <div className={`bg-gradient-to-r border rounded-3xl p-6 mb-6 text-center transition-all ${
          feedback === 'correct' 
            ? 'from-emerald-100 to-green-100 border-emerald-300' 
            : feedback === 'wrong'
            ? 'from-red-100 to-pink-100 border-red-300'
            : 'from-violet-100 to-fuchsia-100 border-violet-300'
        }`}>
          <div className="uppercase text-xs tracking-widest text-violet-600 mb-2">ПОДСКАЗКА</div>
          <div className="text-2xl sm:text-3xl font-medium text-slate-900 leading-tight">{current.hint}</div>
          {feedback === 'correct' && currentElement && (
            <div className="mt-4 flex flex-col items-center">
              <AtomModel atomicNumber={current.correct} symbol={currentElement.symbol} color="#10b981" />
              <p className="mt-3 text-lg font-semibold text-emerald-600">🎉 {current.fact}</p>
            </div>
          )}
          {feedback === 'wrong' && (
            <p className="mt-4 text-lg font-semibold text-red-600">❌ Неверно! Правильный ответ выделен</p>
          )}
        </div>

        {/* Таблица */}
        <div className="relative overflow-x-auto pb-4">
          <div
            className="grid gap-1 text-center text-xs font-medium select-none min-w-[900px]"
            style={{ gridTemplateColumns: 'repeat(18, minmax(48px, 1fr))', gridTemplateRows: 'repeat(7, 60px)' }}
          >
            {elementsData
              .filter(el => !(el.atomicNumber >= 58 && el.atomicNumber <= 71) && !(el.atomicNumber >= 90 && el.atomicNumber <= 103))
              .map(el => {
                const isSelected = selected === el.atomicNumber;
                const isCorrect = (feedback === 'correct' || feedback === 'wrong') && el.atomicNumber === current.correct;
                const isWrong = feedback === 'wrong' && isSelected;

                let cellClass = 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300';
                if (el.block === 's') cellClass = 'bg-blue-50 border-blue-200 hover:bg-blue-100';
                if (el.block === 'p') cellClass = 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100';
                if (el.block === 'd') cellClass = 'bg-violet-50 border-violet-200 hover:bg-violet-100';

                return (
                  <div
                    key={el.atomicNumber}
                    onClick={() => handleClick(el)}
                    style={{ gridColumn: el.group, gridRow: el.period }}
                    className={`group flex flex-col items-center justify-center border-2 rounded-xl cursor-pointer transition-all active:scale-95 shadow-sm
                    ${cellClass}
                    ${isCorrect ? 'ring-4 ring-emerald-400 bg-emerald-100 scale-105 border-emerald-400' : ''}
                    ${isWrong ? 'ring-4 ring-red-400 bg-red-100 border-red-400' : ''}
                    ${isSelected && !isCorrect && !isWrong ? 'ring-4 ring-violet-400' : ''}
                    hover:shadow-md`}
                  >
                    <div className="text-[9px] opacity-60">{el.atomicNumber}</div>
                    <div className="text-xl sm:text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform">{el.symbol}</div>
                    <div className="text-[8px] mt-0.5 leading-none opacity-70 hidden sm:block">{el.name}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          8–11 класс • Химия • Найди элемент по подсказке
        </div>
      </div>
    );
  }
