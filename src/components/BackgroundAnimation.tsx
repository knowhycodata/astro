import React from 'react'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Premium gradient background with dynamic colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cosmic-950 to-mystical-950"></div>
      
      {/* Animated constellation pattern - daha hızlı */}
      <div className="absolute inset-0 opacity-60">
        <div className="constellation-bg" style={{ animationDuration: '15s' }}></div>
      </div>
      
      {/* Çok daha fazla yıldız - 300 adet */}
      <div className="absolute inset-0">
        {Array.from({ length: 300 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              boxShadow: Math.random() > 0.7 ? '0 0 10px rgba(255,255,255,0.8)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Renkli cosmic parçacıklar - 80 adet */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={`cosmic-particle-${i}`}
            className="absolute rounded-full animate-float-vertical opacity-70"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 
                  ? 'rgba(139, 92, 246, 0.8)' 
                  : Math.random() > 0.5 
                    ? 'rgba(168, 85, 247, 0.8)'
                    : 'rgba(196, 181, 253, 0.8)'
              }, transparent)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Büyük mystical orbs - renkli ve parlak */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-drift opacity-40"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 
                  ? 'rgba(139, 92, 246, 0.3)' 
                  : i % 3 === 1 
                    ? 'rgba(168, 85, 247, 0.3)'
                    : 'rgba(236, 72, 153, 0.3)'
              }, transparent)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      {/* Premium gezegen efektleri - daha büyük ve renkli */}
      <div className="absolute top-16 right-12 w-24 h-24 bg-gradient-to-br from-cosmic-400 to-cosmic-600 rounded-full opacity-30 animate-float-slow shadow-2xl shadow-cosmic-400/20" style={{ filter: 'blur(1px)' }}></div>
      <div className="absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-mystical-400 to-mystical-600 rounded-full opacity-35 animate-float-reverse shadow-2xl shadow-mystical-400/20" style={{ filter: 'blur(1px)' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-25 animate-float-slow shadow-2xl shadow-yellow-400/20" style={{ filter: 'blur(0.5px)' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-30 animate-float-reverse shadow-2xl shadow-pink-400/20"></div>
      <div className="absolute top-1/2 left-12 w-18 h-18 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-25 animate-float-slow shadow-2xl shadow-blue-400/20" style={{ filter: 'blur(0.8px)' }}></div>
      <div className="absolute top-20 left-1/2 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-28 animate-float-reverse shadow-2xl shadow-purple-400/20"></div>

      {/* Premium orbital rings - daha hızlı */}
      <div className="absolute top-16 right-12 w-32 h-32 border border-cosmic-400/15 rounded-full animate-spin-slow" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-20 left-16 w-28 h-28 border border-mystical-400/15 rounded-full animate-spin-reverse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-yellow-400/10 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }}></div>

      {/* Shooting stars - hızlı hareket eden ışık çizgileri */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `shooting-star ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              boxShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(139, 92, 246, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Floating mystical particles daha renkli */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`mystical-${i}`}
            className="absolute rounded-full animate-drift opacity-60"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                Math.random() > 0.33 
                  ? 'rgba(139, 92, 246, 0.8)' 
                  : Math.random() > 0.5 
                    ? 'rgba(168, 85, 247, 0.8)'
                    : 'rgba(236, 72, 153, 0.8)'
              }, rgba(255,255,255,0.2))`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              boxShadow: '0 0 8px rgba(139, 92, 246, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Enhanced nebula effects - daha canlı */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-cosmic-600/10 to-transparent blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-mystical-600/8 to-transparent blur-3xl opacity-60 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-gradient-radial from-pink-600/6 to-transparent blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Premium overlay for depth */}
      <div className="absolute inset-0 bg-black/15"></div>
    </div>
  )
}

export default BackgroundAnimation 