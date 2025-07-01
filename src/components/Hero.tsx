import React, { useState, useEffect } from 'react'
import { Sparkles, Zap, Star, Moon, Sun, Globe, Orbit } from 'lucide-react'

const Hero: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showMysticalText, setShowMysticalText] = useState(false)

  const handleAnalysisStart = () => {
    setIsAnalyzing(true)
    
    setTimeout(() => {
      if ((window as any).openKnowhyBot) {
        (window as any).openKnowhyBot();
      } else {
        const chatButton = document.querySelector('knowhy-bot') as any;
        if (chatButton) {
          chatButton.click();
        }
      }
      setIsAnalyzing(false)
    }, 2000)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMysticalText(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      
      {/* Professional Cosmic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"></div>
        
        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-96 h-96 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute w-80 h-80 border border-purple-300/10 rounded-full animate-spin-reverse" style={{animationDuration: '25s'}}></div>
          <div className="absolute w-64 h-64 border border-blue-300/10 rounded-full animate-spin-slow" style={{animationDuration: '35s'}}></div>
        </div>
        
        {/* Constellation dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`constellation-${i}`}
              className="absolute"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            >
              <div 
                className="w-1 h-1 bg-white/60 rounded-full animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Ethereal light beams */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-1/2 bg-gradient-to-b from-blue-300/20 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-2/3 bg-gradient-to-b from-purple-300/15 to-transparent transform -rotate-6"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-1/3 bg-gradient-to-t from-indigo-300/20 to-transparent transform rotate-3"></div>
        </div>
        
        {/* Subtle nebula effects */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1/4 left-1/6 w-1/3 h-1/4 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-1/5 h-1/5 bg-indigo-400/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Content readability overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        
        {/* Professional Header */}
        <div className={`space-y-8 transition-all duration-1000 ${showMysticalText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Orbit className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200 tracking-wider uppercase">Profesyonel Astroloji Analizi</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent leading-tight">
              Kişilik
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Analizi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Benzersiz kişilik özelliklerinizi keşfedin ve hayatınızdaki 
              <span className="text-purple-300 font-medium"> gizli potansiyelleri </span>
              ortaya çıkarın
            </p>
          </div>
          
          {/* Action Area */}
          <div className="pt-8 space-y-6">
            
            {/* Analysis Status */}
            {isAnalyzing && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-center gap-2">
                  <div className="relative">
                    <Globe className="w-6 h-6 text-purple-300 animate-spin" />
                    <div className="absolute inset-0 animate-ping">
                      <Globe className="w-6 h-6 text-purple-300/50" />
                    </div>
                  </div>
                  <span className="text-lg text-purple-200 font-medium">Astral analiz başlatılıyor...</span>
                </div>
                
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Primary CTA */}
            {!isAnalyzing && (
              <div className="space-y-4">
                <button 
                  onClick={handleAnalysisStart}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  <span>Analizine Başla</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </button>
                
                <p className="text-white/60 text-sm">
                  ✨ Kişiselleştirilmiş içgörüler ve detaylı yönlendirmeler
                </p>
              </div>
            )}
          </div>
          
          {/* Key Features Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            {[
              { icon: Star, text: "Kişilik Haritası" },
              { icon: Moon, text: "Astral Rehberlik" },
              { icon: Sun, text: "Potansiyel Analizi" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-white/80">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 animate-float">
          <Star className="w-6 h-6 text-purple-300/40" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-float" style={{animationDelay: '1s'}}>
          <Moon className="w-5 h-5 text-blue-300/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{animationDelay: '2s'}}>
          <Sparkles className="w-4 h-4 text-white/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float" style={{animationDelay: '1.5s'}}>
          <Zap className="w-5 h-5 text-purple-300/40" />
        </div>
      </div>
    </section>
  )
}

export default Hero 