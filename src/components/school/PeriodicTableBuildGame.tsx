'use client';
import React, { useState, useMemo } from 'react';
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
];

// ==================== ИГРА: «СОБЕРИ ТАБЛИЦУ» ====================
interface PeriodicTableBuildGameProps {
  onBack?: () => void;
  onComplete?: (stars: number) => void;
}

export function PeriodicTableBuildGame({ onBack, onComplete }: PeriodicTableBuildGameProps) {
  const [placed, setPlaced] = useState<Record<number, boolean>>({});
  const [activeElement, setActiveElement] = useState<Element | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showFact, setShowFact] = useState<{ el: Element; message: string } | null>(null);
  const [showStart, setShowStart] = useState(true);

  // Фильтруем только основную таблицу (без лантаноидов и актиноидов)
  const mainElements = useMemo(() => {
    return elementsData.filter(
      el => !(el.atomicNumber >= 58 && el.atomicNumber <= 71) && !(el.atomicNumber >= 90 && el.atomicNumber <= 103)
    );
  }, []);

  const total = mainElements.length;
  const placedCount = Object.keys(placed).length;
  const progress = Math.round((placedCount / total) * 100);

  // Перемешанные элементы для нижней панели
  const [remaining, setRemaining] = useState<Element[]>(() => {
    return [...mainElements].sort(() => Math.random() - 0.5);
  });

  // Карта: позиция `${period}-${group}` → элемент
  const positionMap = useMemo(() => {
    const map: Record<string, Element> = {};
    mainElements.forEach(el => {
      const key = `${el.period}-${el.group}`;
      map[key] = el;
    });
    return map;
  }, [mainElements]);

  const handleSlotClick = (period: number, group: number) => {
    if (!activeElement) return;

    const key = `${period}-${group}`;
    const targetElement = positionMap[key];

    if (targetElement && targetElement.atomicNumber === activeElement.atomicNumber) {
      // Правильно!
      setPlaced(prev => ({ ...prev, [activeElement.atomicNumber]: true }));
      
      // Убираем из remaining
      setRemaining(prev => prev.filter(el => el.atomicNumber !== activeElement.atomicNumber));

      // Показываем факт
      const facts = [
        "Отлично! Этот элемент на своём месте!",
        "Супер! Ты знаешь таблицу!",
        "Круто! Правильная позиция!",
        "Молодец! Химия — это просто!",
        "Великолепно! Так держать!",
      ];
      setShowFact({
        el: activeElement,
        message: facts[Math.floor(Math.random() * facts.length)]
      });

      setActiveElement(null);

      // Проверка победы
      if (placedCount + 1 === total) {
        setTimeout(() => {
          setGameOver(true);
          const stars = mistakes === 0 ? 3 : mistakes <= 5 ? 2 : 1;
          onComplete?.(stars);
        }, 800);
      }
    } else if (targetElement) {
      // Неправильно - есть элемент на этой позиции
      setMistakes(prev => prev + 1);
    }
  };

  const handleElementClick = (el: Element) => {
    setActiveElement(activeElement?.atomicNumber === el.atomicNumber ? null : el);
  };

  const restart = () => {
    setPlaced({});
    setActiveElement(null);
    setMistakes(0);
    setGameOver(false);
    setShowFact(null);
    setShowStart(true);
    setRemaining([...mainElements].sort(() => Math.random() - 0.5));
  };

  // Стартовый экран
  if (showStart) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl shadow-2xl text-center">
        <div className="text-8xl mb-4">🧩</div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Собери таблицу по группам
        </h2>
        <p className="text-slate-600 mb-6">
          Размести все элементы на своих местах!<br/>
          Кликни на элемент внизу, затем на пустую ячейку в таблице.
        </p>
        
        <div className="bg-white/60 rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-bold text-lg mb-3">📋 Правила:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>• Выбери элемент в нижней панели</li>
            <li>• Кликни на правильную ячейку в таблице</li>
            <li>• 0 ошибок = ⭐⭐⭐</li>
            <li>• 1-5 ошибок = ⭐⭐</li>
            <li>• 6+ ошибок = ⭐</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button
              onClick={onBack}
              className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300"
            >
              ← Назад
            </Button>
          )}
          <button
            onClick={() => setShowStart(false)}
            className="px-10 py-4 bg-emerald-600 text-white text-xl rounded-2xl hover:bg-emerald-700 active:scale-95"
          >
            🎮 Начать игру
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const stars = mistakes === 0 ? 3 : mistakes <= 5 ? 2 : 1;
    return (
      <div className="max-w-2xl mx-auto text-center py-12 bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl">
        <div className="text-8xl mb-6">🧩</div>
        <h2 className="text-4xl font-bold mb-2">Таблица собрана!</h2>
        <p className="text-2xl mb-4 text-slate-600">Ошибок: {mistakes}</p>
        
        <div className="flex justify-center gap-4 text-7xl mb-8">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={`${i < stars ? 'text-yellow-400 animate-pulse' : 'text-gray-300'}`}>⭐</span>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          {onBack && (
            <Button onClick={onBack} className="px-8 py-4 bg-slate-200 text-slate-700 text-xl rounded-2xl hover:bg-slate-300">
              ← К инструментам
            </Button>
          )}
          <button onClick={restart} className="px-10 py-4 bg-emerald-600 text-white text-xl rounded-2xl hover:bg-emerald-700 active:scale-95">
            🔄 Играть снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-3xl shadow-2xl">
      {/* Заголовок */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">🧩 Собери таблицу по группам</h2>
          <p className="text-slate-500 text-sm">Кликни на элемент → кликни на пустую ячейку</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-emerald-600">{placedCount}/{total}</div>
            <div className="text-xs text-red-500">Ошибки: {mistakes}</div>
          </div>
          {onBack && (
            <Button onClick={onBack} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 text-sm">
              ← Выход
            </Button>
          )}
        </div>
      </div>

      {/* Прогресс */}
      <div className="h-3 bg-slate-100 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700" style={{ width: `${progress}%` }} />
      </div>

      {/* ТАБЛИЦА */}
      <div className="relative overflow-x-auto mb-8">
        <div className="grid gap-1 text-center min-w-[900px]" style={{ gridTemplateColumns: 'repeat(18, minmax(48px, 1fr))', gridTemplateRows: 'repeat(7, 64px)' }}>
          {Array.from({ length: 7 }, (_, p) => {
            const period = p + 1;
            return Array.from({ length: 18 }, (_, g) => {
              const group = g + 1;
              const key = `${period}-${group}`;
              const target = positionMap[key];
              const isPlaced = target && placed[target.atomicNumber];
              const isActiveSlot = activeElement && target && activeElement.atomicNumber === target.atomicNumber;

              if (!target) {
                return <div key={key} className="opacity-0" />;
              }

              return (
                <div
                  key={key}
                  onClick={() => handleSlotClick(period, group)}
                  className={`flex flex-col items-center justify-center border-2 rounded-xl transition-all cursor-pointer select-none
                    ${isPlaced 
                      ? 'bg-emerald-100 border-emerald-400 shadow-inner' 
                      : 'border-dashed border-slate-300 hover:border-violet-400 hover:bg-violet-50'}
                    ${isActiveSlot ? 'ring-4 ring-offset-2 ring-fuchsia-500 scale-105' : ''}`}
                >
                  {isPlaced && target ? (
                    <>
                      <div className="text-[9px] opacity-60">{target.atomicNumber}</div>
                      <div className="text-2xl font-black text-slate-800">{target.symbol}</div>
                    </>
                  ) : (
                    <div className="text-2xl text-slate-300 font-light">+</div>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>

      {/* ПАНЕЛЬ ОСТАВШИХСЯ ЭЛЕМЕНТОВ */}
      <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200">
        <div className="uppercase text-xs tracking-widest text-slate-400 mb-3 text-center">
          Выбери элемент и поставь на место ({remaining.length} осталось)
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
          {remaining.map(el => {
            const isActive = activeElement?.atomicNumber === el.atomicNumber;
            return (
              <div
                key={el.atomicNumber}
                onClick={() => handleElementClick(el)}
                className={`flex flex-col items-center justify-center border-2 rounded-xl py-2 cursor-pointer transition-all active:scale-95
                  ${isActive 
                    ? 'border-fuchsia-500 bg-fuchsia-100 ring-2 ring-fuchsia-300' 
                    : 'border-slate-300 hover:border-slate-400 hover:bg-white'}`}
              >
                <div className="text-[9px] text-slate-500">{el.atomicNumber}</div>
                <div className="text-2xl font-bold text-slate-900">{el.symbol}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО С АТОМОМ */}
      {showFact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowFact(null)}>
          <div onClick={e => e.stopPropagation()} className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
            <AtomModel atomicNumber={showFact.el.atomicNumber} symbol={showFact.el.symbol} color="#10b981" />
            <div className="mt-4 text-2xl font-semibold text-emerald-700">{showFact.el.name}</div>
            <div className="text-emerald-600">№ {showFact.el.atomicNumber} • {showFact.el.mass}</div>
            <p className="mt-4 text-lg text-slate-700">{showFact.message}</p>
            <button onClick={() => setShowFact(null)} className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-2xl hover:bg-black">
              Продолжить
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-center text-xs text-slate-400">
        8–11 класс • Химия • Собери все элементы без ошибок = 3 звезды!
      </div>
    </div>
  );
}

export default PeriodicTableBuildGame;
