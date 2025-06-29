import React from 'react'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cosmic-950 to-mystical-950"></div>
      
      {/* Animated constellation pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="constellation-bg"></div>
      </div>
      
      {/* Premium floating stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moving stellar particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cosmic-400/60 rounded-full animate-float-vertical"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Premium minimalist planets */}
      <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-cosmic-400 to-cosmic-600 rounded-full opacity-20 animate-float-slow shadow-2xl shadow-cosmic-400/10"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-mystical-400 to-mystical-600 rounded-full opacity-25 animate-float-reverse shadow-2xl shadow-mystical-400/10"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-15 animate-float-slow shadow-2xl shadow-yellow-400/10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-float-reverse shadow-2xl shadow-pink-400/10"></div>
      <div className="absolute top-1/3 left-16 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-18 animate-float-slow shadow-2xl shadow-blue-400/10"></div>

      {/* Orbital rings */}
      <div className="absolute top-20 right-16 w-24 h-24 border border-cosmic-400/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border border-mystical-400/10 rounded-full animate-spin-reverse"></div>

      {/* Floating mystical particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`mystical-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cosmic-400/30 to-mystical-400/30 rounded-full animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle nebula effects */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-cosmic-600/5 to-transparent blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-mystical-600/5 to-transparent blur-3xl opacity-40 animate-pulse-slow"></div>
      
      {/* Premium overlay for depth */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  )
}

export default BackgroundAnimation 