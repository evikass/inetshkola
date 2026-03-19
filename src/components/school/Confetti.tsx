'use client'

export function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          {['🎉', '⭐', '🌟', '✨', '🎊', '💫'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  )
}
