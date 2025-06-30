import React from 'react'
import { Star, Sparkles, TrendingUp, Users, Award } from 'lucide-react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface HeroStatCardProps {
  icon: React.ComponentType<any>
  value: number
  suffix?: string
  prefix?: string
  label: string
  gradient: string
  shadowColor: string
  index: number
}

const HeroStatCard: React.FC<HeroStatCardProps> = ({
  icon: IconComponent,
  value,
  suffix = '',
  prefix = '',
  label,
  gradient,
  shadowColor,
  index
}) => {
  const { value: animatedValue, ref } = useAnimatedCounter({
    end: value,
    duration: 1800 + (index * 150),
    suffix,
    prefix,
    startOnView: true
  })

  return (
    <div 
      ref={ref}
      className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-center mb-3">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center shadow-2xl ${shadowColor}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{animatedValue}</div>
      <div className="text-starlight-300 text-sm font-medium">{label}</div>
    </div>
  )
}

interface CosmicEnergyCircleProps {
  value: number
  label: string
  gradient: string
  borderColor: string
  textColor: string
  index: number
}

const CosmicEnergyCircle: React.FC<CosmicEnergyCircleProps> = ({
  value,
  label,
  gradient,
  borderColor,
  textColor,
  index
}) => {
  const { value: animatedValue, ref } = useAnimatedCounter({
    end: value,
    duration: 2200 + (index * 100),
    suffix: '%',
    startOnView: true
  })

  return (
    <div ref={ref} className="text-center">
      <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${gradient}/20 rounded-full flex items-center justify-center border ${borderColor}`}>
        <div className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-sm">{animatedValue}</span>
        </div>
      </div>
      <p className={`${textColor} text-sm font-medium`}>{label}</p>
    </div>
  )
}

const Hero: React.FC = () => {
  const heroStats = [
    {
      icon: Award,
      value: 94,
      prefix: '%',
      label: 'Doğruluk Oranı',
      gradient: 'from-yellow-400 to-orange-500',
      shadowColor: 'shadow-yellow-400/20'
    },
    {
      icon: Users,
      value: 3000,
      suffix: '+',
      label: 'Günlük Kullanıcı',
      gradient: 'from-cosmic-400 to-mystical-500',
      shadowColor: 'shadow-cosmic-400/20'
    },
    {
      icon: TrendingUp,
      value: 75000,
      suffix: '+',
      label: 'Analiz Raporu',
      gradient: 'from-mystical-400 to-cosmic-600',
      shadowColor: 'shadow-mystical-400/20'
    }
  ]

  const cosmicEnergies = [
    {
      value: 87,
      label: 'Sezgi',
      gradient: 'from-cosmic-400 to-cosmic-600',
      borderColor: 'border-cosmic-400/30',
      textColor: 'text-cosmic-300'
    },
    {
      value: 92,
      label: 'Aşk',
      gradient: 'from-mystical-400 to-mystical-600',
      borderColor: 'border-mystical-400/30',
      textColor: 'text-mystical-300'
    },
    {
      value: 78,
      label: 'Bereket',
      gradient: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-400/30',
      textColor: 'text-yellow-300'
    }
  ]

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        
        {/* Premium Hero Content */}
        <div className="mb-8">
          {/* Enhanced Premium headline with small sparkles */}
          <div className="relative mb-6 mt-8">
            {/* Small floating sparkles - safely positioned */}
            <div className="absolute left-0 right-0 top-16 bottom-0 overflow-hidden pointer-events-none">
              <Sparkles className="absolute top-4 left-20 w-3 h-3 text-cosmic-400 animate-twinkle opacity-60" />
              <Sparkles className="absolute top-8 right-24 w-2 h-2 text-mystical-400 animate-twinkle opacity-50" style={{ animationDelay: '1s' }} />
              <Star className="absolute bottom-12 left-16 w-3 h-3 text-cosmic-300 animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
              <Sparkles className="absolute bottom-8 right-20 w-2 h-2 text-mystical-300 animate-twinkle opacity-50" style={{ animationDelay: '0.5s' }} />
              
              {/* Additional small sparkles */}
              <Sparkles className="absolute top-12 left-32 w-2 h-2 text-cosmic-300 animate-twinkle opacity-40" style={{ animationDelay: '1.5s' }} />
              <Star className="absolute top-16 right-16 w-2 h-2 text-mystical-300 animate-pulse opacity-35" style={{ animationDelay: '2.5s' }} />
              <Sparkles className="absolute top-20 left-12 w-1.5 h-1.5 text-cosmic-400 animate-twinkle opacity-30" style={{ animationDelay: '3s' }} />
              <Sparkles className="absolute top-24 right-32 w-1.5 h-1.5 text-mystical-400 animate-twinkle opacity-35" style={{ animationDelay: '0.8s' }} />
              <Star className="absolute bottom-16 right-12 w-2 h-2 text-cosmic-200 animate-pulse opacity-30" style={{ animationDelay: '1.8s' }} />
              <Sparkles className="absolute bottom-20 left-24 w-1.5 h-1.5 text-mystical-200 animate-twinkle opacity-25" style={{ animationDelay: '2.2s' }} />
              <Sparkles className="absolute top-28 left-40 w-1 h-1 text-cosmic-300 animate-twinkle opacity-20" style={{ animationDelay: '3.5s' }} />
              <Star className="absolute bottom-4 left-8 w-1.5 h-1.5 text-mystical-300 animate-pulse opacity-25" style={{ animationDelay: '4s' }} />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight relative">
              <span 
                className="bg-gradient-to-r from-white via-cosmic-200 to-mystical-200 bg-clip-text text-transparent animate-shimmer"
                style={{
                  textShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)',
                  filter: 'drop-shadow(0 4px 20px rgba(139, 92, 246, 0.4))'
                }}
              >
                Geleceğinizi
              </span>
              <br />
              <span 
                className="bg-gradient-to-r from-cosmic-400 via-mystical-400 to-cosmic-500 bg-clip-text text-transparent animate-gradient"
                style={{
                  textShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)',
                  filter: 'drop-shadow(0 6px 25px rgba(139, 92, 246, 0.6))',
                  backgroundSize: '200% 200%'
                }}
              >
                Keşfedin
              </span>
            </h1>
          </div>

          {/* Enhanced subtitle with neon glow */}
          <div className="relative mb-4">
            <p 
              className="text-xl md:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-cosmic-300 via-mystical-300 to-cosmic-400 bg-clip-text font-bold animate-pulse-slow"
              style={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                filter: 'drop-shadow(0 2px 10px rgba(139, 92, 246, 0.3))'
              }}
            >
              ✨ Kozmik Sırları Keşfedin ⚡
            </p>
          </div>
          
          {/* Enhanced description with better spacing */}
          <p className="text-base md:text-lg text-starlight-300 max-w-4xl mx-auto leading-relaxed mb-8 opacity-90 font-medium">
            Yıldızların şifrelerini çözün, kaderinizi şekillendirin! Yapay zekayla desteklenen profesyonel 
            tarot, astroloji ve fal yorumlarıyla benzersiz bir deneyim sizi bekliyor.
          </p>
        </div>

        {/* Premium Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          {heroStats.map((stat, index) => (
            <HeroStatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              gradient={stat.gradient}
              shadowColor={stat.shadowColor}
              index={index}
            />
          ))}
        </div>

        {/* Mystical Cosmic Energy Widget */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-black/30 transition-all duration-500 group relative overflow-hidden">
            {/* Floating mystical particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-6 w-1 h-1 bg-cosmic-400 rounded-full animate-twinkle opacity-60"></div>
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-mystical-400 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute bottom-6 left-8 w-1 h-1 bg-cosmic-300 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-cosmic-400 animate-pulse" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cosmic-300 to-mystical-300 bg-clip-text text-transparent">
                  Günün Kozmik Enerjisi
                </h3>
                <Star className="w-6 h-6 text-mystical-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Energy Levels */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {cosmicEnergies.map((energy, index) => (
                <CosmicEnergyCircle
                  key={index}
                  value={energy.value}
                  label={energy.label}
                  gradient={energy.gradient}
                  borderColor={energy.borderColor}
                  textColor={energy.textColor}
                  index={index}
                />
              ))}
            </div>

            {/* Mystical Quote */}
            <div className="text-center border-t border-white/10 pt-6">
              <p className="text-starlight-200 italic leading-relaxed text-lg">
                "Evren bugün size yeni fırsatların kapısını aralıyor. 
                <br />
                <span className="bg-gradient-to-r from-cosmic-300 to-mystical-300 bg-clip-text text-transparent font-semibold">
                  Sezgilerinize güvenin ve adım atın."
                </span>
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-cosmic-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-mystical-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-cosmic-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium zodiac symbols */}
        <div className="flex justify-center flex-wrap gap-4 opacity-60">
          {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-xl text-cosmic-300 cursor-pointer hover:bg-white/10 hover:border-cosmic-400/50 hover:text-cosmic-200 hover:scale-110 transition-all duration-300 group"
              title={`Burç ${index + 1}`}
            >
              <span className="group-hover:animate-pulse">{symbol}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero 