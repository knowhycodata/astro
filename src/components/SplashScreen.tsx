import React, { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'dark' | 'star' | 'galaxy' | 'text' | 'complete'>('dark')

  useEffect(() => {
    const timers = [
      // 1s: Mor nokta belirsin
      setTimeout(() => setPhase('star'), 1000),
      // 2s: Galaksi yayılımı başlasın
      setTimeout(() => setPhase('galaxy'), 2000),
      // 3s: Yazı oluşmaya başlasın
      setTimeout(() => setPhase('text'), 3000),
      // 5.5s: Fade-out başlasın
      setTimeout(() => setPhase('complete'), 5500),
      // 6.5s: Ana sayfaya geç
      setTimeout(onComplete, 6500)
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
      phase === 'complete' ? 'opacity-0' : 'opacity-100'
    }`}>
      
      {/* Karanlık arka plan */}
      <div className="absolute inset-0 bg-black">
        
        {/* Animasyonlu yıldızlar - arka plan */}
        <div className="absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={`bg-star-${i}`}
              className={`absolute bg-white rounded-full transition-all duration-1000 ${
                phase !== 'dark' ? 'opacity-100 animate-twinkle' : 'opacity-0'
              }`}
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 4 + 1}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transitionDelay: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Özel parlak yıldızlar */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`bright-star-${i}`}
              className={`absolute transition-all duration-2000 ${
                phase === 'galaxy' || phase === 'text' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transitionDelay: `${2 + Math.random() * 2}s`,
              }}
            >
              {/* Yıldız çekirdeği */}
              <div 
                className="w-1 h-1 bg-blue-200 rounded-full animate-pulse"
                style={{
                  boxShadow: '0 0 4px rgba(147, 197, 253, 0.8), 0 0 8px rgba(147, 197, 253, 0.4)',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              />
              {/* Yıldız ışınları */}
              <div 
                className="absolute top-1/2 left-1/2 w-4 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `starRotate ${3 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 w-px h-4 bg-gradient-to-b from-transparent via-blue-200/50 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `starRotate ${3 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Çok parlak ana yıldızlar */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`main-star-${i}`}
              className={`absolute transition-all duration-3000 ${
                phase === 'text' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${15 + Math.random() * 70}%`,
                transitionDelay: `${3 + Math.random() * 1.5}s`,
              }}
            >
              {/* Ana yıldız gövdesi */}
              <div 
                className="w-2 h-2 bg-yellow-200 rounded-full"
                style={{
                  boxShadow: '0 0 8px rgba(254, 240, 138, 1), 0 0 16px rgba(254, 240, 138, 0.6), 0 0 24px rgba(254, 240, 138, 0.3)',
                  animation: `starBreathe ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
              {/* Çapraz ışınlar */}
              <div 
                className="absolute top-1/2 left-1/2 w-8 h-px bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `starRotate ${4 + Math.random() * 3}s linear infinite`,
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 w-px h-8 bg-gradient-to-b from-transparent via-yellow-200/60 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `starRotate ${4 + Math.random() * 3}s linear infinite`,
                }}
              />
              {/* Diyagonal ışınlar */}
              <div 
                className="absolute top-1/2 left-1/2 w-6 h-px bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                style={{
                  animation: `starRotate ${4 + Math.random() * 3}s linear infinite reverse`,
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 w-px h-6 bg-gradient-to-b from-transparent via-yellow-200/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                style={{
                  animation: `starRotate ${4 + Math.random() * 3}s linear infinite reverse`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Uzak yıldız - mor nokta */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`absolute w-2 h-2 bg-purple-400 rounded-full transition-all duration-1000 ease-out ${
              phase === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            } ${phase === 'star' ? 'animate-starPulse' : ''}`}
            style={{
              boxShadow: phase !== 'dark' ? '0 0 20px rgba(147, 51, 234, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)' : 'none'
            }}
          />
        </div>

        {/* Galaksi yayılımı */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`absolute transition-all duration-2000 ease-out ${
              phase === 'galaxy' || phase === 'text' ? 'opacity-100 scale-100 animate-galaxyRotate' : 'opacity-0 scale-0'
            }`}
            style={{
              width: '800px',  
              height: '800px',
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.3) 0%, rgba(139, 92, 246, 0.2) 30%, rgba(139, 92, 246, 0.1) 60%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          />
          
          {/* Galaksi spiral kolları */}
          <div 
            className={`absolute transition-all duration-2000 ease-out ${
              phase === 'galaxy' || phase === 'text' ? 'opacity-100 scale-100 animate-galaxyRotateReverse' : 'opacity-0 scale-0'
            }`}
            style={{
              width: '600px',
              height: '600px', 
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(147, 51, 234, 0.4) 45deg, transparent 90deg, rgba(139, 92, 246, 0.3) 135deg, transparent 180deg, rgba(147, 51, 234, 0.4) 225deg, transparent 270deg, rgba(139, 92, 246, 0.3) 315deg, transparent 360deg)',
              borderRadius: '50%',
              filter: 'blur(2px)'
            }}
          />
        </div>

        {/* Yıldız tozu parçacıkları */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute bg-purple-300 rounded-full transition-all duration-1000 ${
                phase === 'text' ? 'opacity-100 animate-particleFloat animate-particleGlow' : 'opacity-0'
              }`}
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${45 + Math.random() * 10}%`,
                top: `${45 + Math.random() * 10}%`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* ASTROBOT yazısı - yıldız tozlarından oluşan */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.3em] text-white transition-all duration-2000 ease-out ${
              phase === 'text' ? 'opacity-100 scale-100 animate-textFormation animate-textGlow' : 'opacity-0 scale-75'
            }`}
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '100',
              textShadow: '0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(139, 92, 246, 0.4), 0 0 90px rgba(147, 51, 234, 0.2)',
              filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
            }}
          >
            ASTROBOT
          </h1>
        </div>

        {/* Parşömen efekti - alt yazı */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-center justify-center">
          <div 
            className={`relative transition-all duration-2000 ease-out ${
              phase === 'text' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '1s'
            }}
          >
            {/* Parşömen arka plan */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-amber-50/10 to-amber-100/5 rounded-lg px-8 py-4 ${
                phase === 'text' ? 'animate-parchmentUnfold' : ''
              }`}
              style={{
                background: 'linear-gradient(to top, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.05))',
                boxShadow: 'inset 0 0 20px rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            />
            
            {/* Alt yazı */}
            <div 
              className={`relative text-amber-100/80 text-lg md:text-xl font-light tracking-[0.2em] px-8 py-4 ${
                phase === 'text' ? 'animate-textFadeIn' : ''
              }`}
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '300',
                textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
              }}
            >
              Merakınızın Gücünü Keşfedin
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SplashScreen 