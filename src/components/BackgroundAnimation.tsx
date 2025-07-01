import React from 'react'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space base with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950"></div>
      
      {/* Flowing mystical energy streams */}
      <div className="absolute inset-0">
        {/* Primary energy flow */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="energyFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(147, 51, 234, 0.3)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.1;0.8;0.1" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" style={{stopColor: 'rgba(59, 130, 246, 0.4)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.2;0.9;0.2" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" style={{stopColor: 'rgba(168, 85, 247, 0.2)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.1;0.7;0.1" dur="10s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <linearGradient id="energyFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(236, 72, 153, 0.3)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.1;0.6;0.1" dur="12s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" style={{stopColor: 'rgba(99, 102, 241, 0.4)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="9s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" style={{stopColor: 'rgba(20, 184, 166, 0.3)', stopOpacity: 1}}>
                  <animate attributeName="stop-opacity" values="0.1;0.5;0.1" dur="7s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            
            {/* Flowing energy paths */}
            <path d="M0,30 Q25,10 50,30 T100,30" stroke="url(#energyFlow1)" strokeWidth="0.5" fill="none" opacity="0.6">
              <animate attributeName="d" values="M0,30 Q25,10 50,30 T100,30;M0,35 Q25,15 50,25 T100,35;M0,30 Q25,10 50,30 T100,30" dur="15s" repeatCount="indefinite" />
            </path>
            <path d="M0,70 Q25,90 50,70 T100,70" stroke="url(#energyFlow2)" strokeWidth="0.8" fill="none" opacity="0.5">
              <animate attributeName="d" values="M0,70 Q25,90 50,70 T100,70;M0,65 Q25,85 50,75 T100,65;M0,70 Q25,90 50,70 T100,70" dur="18s" repeatCount="indefinite" />
            </path>
            <path d="M20,0 Q40,50 20,100" stroke="url(#energyFlow1)" strokeWidth="0.6" fill="none" opacity="0.4">
              <animate attributeName="d" values="M20,0 Q40,50 20,100;M25,0 Q35,50 25,100;M20,0 Q40,50 20,100" dur="20s" repeatCount="indefinite" />
            </path>
            <path d="M80,0 Q60,50 80,100" stroke="url(#energyFlow2)" strokeWidth="0.7" fill="none" opacity="0.5">
              <animate attributeName="d" values="M80,0 Q60,50 80,100;M75,0 Q65,50 75,100;M80,0 Q60,50 80,100" dur="16s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
      
      {/* Self-drawing mystical constellations */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Constellation Draco */}
          <g opacity="0.7">
            <circle cx="150" cy="200" r="2" fill="#a855f7">
              <animate attributeName="opacity" values="0;1;0.8" dur="3s" begin="0s" fill="freeze" />
            </circle>
            <circle cx="250" cy="150" r="2" fill="#3b82f6">
              <animate attributeName="opacity" values="0;1;0.8" dur="3s" begin="1s" fill="freeze" />
            </circle>
            <circle cx="350" cy="180" r="2" fill="#ec4899">
              <animate attributeName="opacity" values="0;1;0.8" dur="3s" begin="2s" fill="freeze" />
            </circle>
            <circle cx="420" cy="120" r="2" fill="#14b8a6">
              <animate attributeName="opacity" values="0;1;0.8" dur="3s" begin="3s" fill="freeze" />
            </circle>
            
            <line x1="150" y1="200" x2="250" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.4" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,200;100,0" dur="2s" begin="1s" fill="freeze" />
            </line>
            <line x1="250" y1="150" x2="350" y2="180" stroke="#3b82f6" strokeWidth="1" opacity="0.4" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,200;100,0" dur="2s" begin="2s" fill="freeze" />
            </line>
            <line x1="350" y1="180" x2="420" y2="120" stroke="#ec4899" strokeWidth="1" opacity="0.4" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,200;80,0" dur="2s" begin="3s" fill="freeze" />
            </line>
          </g>
          
          {/* Constellation Lyra */}
          <g opacity="0.6">
            <circle cx="700" cy="300" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="0;1;0.9" dur="3s" begin="4s" fill="freeze" />
            </circle>
            <circle cx="750" cy="250" r="2" fill="#8b5cf6">
              <animate attributeName="opacity" values="0;1;0.9" dur="3s" begin="5s" fill="freeze" />
            </circle>
            <circle cx="800" cy="320" r="2" fill="#06b6d4">
              <animate attributeName="opacity" values="0;1;0.9" dur="3s" begin="6s" fill="freeze" />
            </circle>
            <circle cx="780" cy="380" r="2" fill="#f97316">
              <animate attributeName="opacity" values="0;1;0.9" dur="3s" begin="7s" fill="freeze" />
            </circle>
            
            <polygon points="700,300 750,250 800,320 780,380" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,400;300,0" dur="4s" begin="5s" fill="freeze" />
            </polygon>
          </g>
        </svg>
      </div>
      
      {/* Morphing sacred geometry portals */}
      <div className="absolute inset-0">
        {/* Portal 1 - Top left */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="portalGrad1">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="70%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#portalGrad1)" strokeWidth="0.5">
              <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="30s" repeatCount="indefinite" />
            </circle>
            <polygon points="50,20 65,40 50,60 35,40" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="0.3">
              <animateTransform attributeName="transform" type="rotate" values="0 50 50;-360 50 50" dur="25s" repeatCount="indefinite" />
            </polygon>
            <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="0.4">
              <animateTransform attributeName="transform" type="scale" values="1;1.5;1" dur="8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        
        {/* Portal 2 - Bottom right */}
        <div className="absolute bottom-1/4 right-1/5 w-40 h-40 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="portalGrad2">
                <stop offset="0%" stopColor="rgba(20, 184, 166, 0.5)" />
                <stop offset="60%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="none" stroke="url(#portalGrad2)" strokeWidth="0.6">
              <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="40s" repeatCount="indefinite" />
            </polygon>
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="0.4">
              <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" dur="20s" repeatCount="indefinite" />
            </circle>
            <polygon points="50,10 85,50 50,90 15,50" fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="0.3">
              <animateTransform attributeName="transform" type="scale" values="0.5;1.2;0.5" dur="12s" repeatCount="indefinite" />
            </polygon>
          </svg>
        </div>
      </div>
      
      {/* Floating mystical crystal formations */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`crystal-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            <svg width="20" height="24" viewBox="0 0 20 24" className="animate-float">
              <defs>
                <linearGradient id={`crystalGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={`rgba(${Math.random() > 0.5 ? '168, 85, 247' : '59, 130, 246'}, 0.6)`} />
                  <stop offset="100%" stopColor={`rgba(${Math.random() > 0.5 ? '236, 72, 153' : '20, 184, 166'}, 0.3)`} />
                </linearGradient>
              </defs>
              <polygon 
                points="10,2 18,8 15,22 5,22 2,8" 
                fill={`url(#crystalGrad-${i})`} 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="0.5"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  values="0 10 12;360 10 12" 
                  dur={`${15 + Math.random() * 10}s`} 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.8;0.3" 
                  dur={`${4 + Math.random() * 3}s`} 
                  repeatCount="indefinite" 
                />
              </polygon>
            </svg>
          </div>
        ))}
      </div>
      
      {/* Aurora-like flowing colors */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/10 to-transparent transform -skew-y-12 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-600/8 to-transparent transform skew-y-6 animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-600/6 to-transparent transform -skew-y-3 animate-pulse" style={{animationDuration: '15s', animationDelay: '4s'}}></div>
      </div>
      
      {/* Mystical floating symbols */}
      <div className="absolute inset-0">
        {['✦', '✧', '⟡', '◊', '◈', '⬟', '⬢', '⬡'].map((symbol, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-white/20 text-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random() * 0.8})`,
            }}
          >
            <span className="animate-pulse" style={{animationDuration: `${3 + Math.random() * 2}s`}}>
              {symbol}
            </span>
          </div>
        ))}
      </div>
      
      {/* Energy connection network */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          {/* Dynamic connection nodes */}
          {Array.from({ length: 6 }).map((_, i) => {
            const x = 20 + (i % 3) * 30;
            const y = 30 + Math.floor(i / 3) * 40;
            return (
              <g key={`node-${i}`}>
                <circle cx={x} cy={y} r="1" fill="url(#nodeGlow)">
                  <animate attributeName="r" values="1;3;1" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                </circle>
                {i < 5 && (
                  <line 
                    x1={x} 
                    y1={y} 
                    x2={20 + ((i + 1) % 3) * 30} 
                    y2={30 + Math.floor((i + 1) / 3) * 40} 
                    stroke="rgba(168, 85, 247, 0.3)" 
                    strokeWidth="0.2"
                  >
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${6 + Math.random() * 3}s`} repeatCount="indefinite" />
                  </line>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Deep space vortex overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/20 to-slate-950/60"></div>
      
      {/* Final atmospheric blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
      
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white via-transparent to-white mix-blend-screen"></div>
    </div>
  )
}

export default BackgroundAnimation 