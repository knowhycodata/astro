import React, { useState, useEffect } from 'react'
import { Star, Sparkles, Zap } from 'lucide-react'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'knowhy' | 'astrobot' | 'complete'>('knowhy')

  useEffect(() => {
    const timers = [
      // Phase 1: Knowhy reveal (1.5s)
      setTimeout(() => setPhase('astrobot'), 1500),
      // Phase 2: Astrobot reveal (2.5s)
      setTimeout(() => setPhase('complete'), 4000),
      // Phase 3: Complete and fade out (0.5s)
      setTimeout(onComplete, 4500)
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${
      phase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Premium background with deep space effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cosmic-950 to-mystical-950">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/30 via-transparent to-mystical-900/30 animate-pulse-slow"></div>
        
        {/* Premium star field */}
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Premium floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-gradient-to-r from-cosmic-400 to-mystical-400 rounded-full animate-drift opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Central vortex effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-radial from-cosmic-600/10 via-mystical-600/5 to-transparent rounded-full animate-spin-slow blur-xl"></div>
          <div className="absolute w-64 h-64 bg-gradient-radial from-mystical-500/20 via-cosmic-500/10 to-transparent rounded-full animate-spin-reverse blur-lg"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative z-10">
          
          {/* Phase 1: KNOWHY */}
          <div className={`transition-all duration-1000 ease-out ${
            phase === 'knowhy' ? 'opacity-100 scale-100 translate-y-0' : 
            phase === 'astrobot' ? 'opacity-30 scale-90 -translate-y-16' :
            'opacity-0 scale-75 -translate-y-24'
          }`}>
            <div className="mb-8 relative">
              {/* Glowing particles around KNOWHY */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`knowhy-particle-${i}`}
                    className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full transition-all duration-1000 ${
                      phase === 'knowhy' ? 'opacity-100 animate-ping' : 'opacity-0'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s',
                      boxShadow: '0 0 10px rgba(147, 51, 234, 0.6)'
                    }}
                  />
                ))}
              </div>

              {/* Main KNOWHY text with 3D neon effect */}
              <div className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em] mb-4 transition-all duration-1500 ${
                phase === 'knowhy' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`} style={{
                color: '#8b5cf6',
                animation: phase === 'knowhy' ? 'pulse 3s ease-in-out infinite' : 'none',
                textShadow: `
                  0 0 5px rgba(139, 92, 246, 0.8),
                  0 0 10px rgba(139, 92, 246, 0.4),
                  0 0 15px rgba(139, 92, 246, 0.2)
                `,
                filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))',
                fontWeight: '900',
              }}>
                K N O W H Y
              </div>

              {/* Enhanced glowing underline */}
              <div className="relative flex justify-center">
                <div className={`h-2 w-48 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto transition-all duration-1000 ${
                  phase === 'knowhy' ? 'animate-shimmer opacity-100 shadow-lg shadow-purple-400/50' : 'opacity-0'
                }`} style={{
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 0 30px rgba(147, 51, 234, 0.3)',
                  borderRadius: '4px'
                }}></div>
                
                {/* Secondary shimmer line */}
                <div className={`absolute top-4 h-1 w-32 bg-gradient-to-r from-transparent via-violet-300 to-transparent mx-auto transition-all duration-1000 ${
                  phase === 'knowhy' ? 'animate-shimmer opacity-60' : 'opacity-0'
                }`} style={{
                  animationDelay: '0.5s',
                  animationDuration: '3s',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
                }}></div>
              </div>

              {/* Subtitle for KNOWHY */}
              <div className={`text-lg md:text-xl font-medium text-purple-200/80 mt-6 transition-all duration-1000 ${
                phase === 'knowhy' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ 
                transitionDelay: '0.8s',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}>
                <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent animate-pulse">
                  Merakınızın Gücünü Keşfedin
                </span>
              </div>
            </div>
          </div>

          {/* Phase 2: ASTROBOT - Premium reveal */}
          <div className={`transition-all duration-1500 ease-out ${
            phase === 'astrobot' ? 'opacity-100 scale-100 translate-y-0' : 
            phase === 'complete' ? 'opacity-0 scale-110 translate-y-8' :
            'opacity-0 scale-75 translate-y-16'
          }`}>
            
            {/* Premium logo container */}
            <div className="relative">
              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border border-cosmic-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-96 h-96 border border-mystical-400/15 rounded-full animate-spin-reverse"></div>
                <div className="absolute w-64 h-64 border-2 border-cosmic-500/30 rounded-full animate-spin-slow" 
                     style={{ animationDuration: '25s' }}></div>
              </div>

              {/* Zodiac constellation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 relative">
                  {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, index) => (
                    <div
                      key={index}
                      className={`absolute text-2xl text-cosmic-300/60 transition-all duration-1000 ${
                        phase === 'astrobot' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${index * 30}deg) translateY(-136px) rotate(-${index * 30}deg)`,
                        transitionDelay: `${index * 0.1 + 0.5}s`,
                      }}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>
              </div>

              {/* Central star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 bg-gradient-to-br from-cosmic-400 to-mystical-600 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-1000 ${
                  phase === 'astrobot' ? 'opacity-100 scale-100 shadow-cosmic-400/50' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                  <Star className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>

              {/* Main ASTROBOT text with 3D effect */}
              <div className="relative z-10">
                <h1 className={`text-8xl md:text-9xl font-bold mb-6 transition-all duration-1500 ease-out ${
                  phase === 'astrobot' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-125 translate-y-12'
                }`} style={{ 
                  background: 'linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #8b5cf6)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: phase === 'astrobot' ? 'animate-gradient 3s ease infinite' : 'none',
                  textShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
                  filter: 'drop-shadow(0 4px 20px rgba(139, 92, 246, 0.4))',
                  transitionDelay: '0.3s'
                }}>
                  ASTROBOT
                </h1>

                {/* Subtitle with premium styling */}
                <div className={`text-xl md:text-2xl font-medium text-starlight-300 mb-8 transition-all duration-1000 ${
                  phase === 'astrobot' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1.2s' }}>
                  <span className="bg-gradient-to-r from-cosmic-300 to-mystical-300 bg-clip-text text-transparent">
                    Kişisel Astroloji Rehberiniz
                  </span>
                </div>

                {/* Premium loading dots */}
                <div className={`flex justify-center space-x-3 transition-all duration-1000 ${
                  phase === 'astrobot' ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '1.5s' }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-r from-cosmic-400 to-mystical-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.3 + 1.8}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Premium glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950/50 via-transparent to-mystical-950/30 pointer-events-none"></div>
    </div>
  )
}

export default SplashScreen 