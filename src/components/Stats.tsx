import React from 'react'
import { TrendingUp, Users, Star, Award, Shield, Clock, Target, Zap, BarChart3 } from 'lucide-react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface AnimatedStatCardProps {
  icon: React.ComponentType<any>
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  label: string
  description: string
  index: number
  gradient: string
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  icon: IconComponent,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  description,
  index,
  gradient
}) => {
  const { value: animatedValue, ref } = useAnimatedCounter({
    end: value,
    duration: 2000 + (index * 200),
    decimals,
    suffix,
    prefix,
    startOnView: true
  })

  return (
    <div
      ref={ref}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
    >
      {/* Gradient background effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Animated Number */}
        <div className="mb-3">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent block leading-tight">
            {animatedValue}
          </span>
        </div>
        
        {/* Label & Description */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
          {label}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
    </div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: 94,
      prefix: '%',
      label: 'Doğruluk Oranı',
      description: 'Profesyonel analiz kalitesi',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      value: 25000,
      suffix: '+',
      label: 'Aktif Kullanıcı',
      description: 'Güvenilir topluluk',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      value: 150000,
      suffix: '+',
      label: 'Analiz Raporu',
      description: 'Kapsamlı analiz deneyimi',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      value: 4.9,
      decimals: 1,
      label: 'Memnuniyet Puanı',
      description: 'Yüksek kullanıcı memnuniyeti',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Verileriniz SSL ile korunur',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Clock,
      title: '7/24 Erişim',
      description: 'Her zaman ulaşılabilir hizmet',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'Kişisel Analiz',
      description: 'Size özel detaylı yorumlar',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Anında Sonuç',
      description: 'Hızlı ve güvenilir raporlama',
      gradient: 'from-yellow-500 to-amber-500'
    }
  ]

  return (
    <section id="stats" className="py-32 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200 tracking-wider uppercase">İstatistikler</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Güvenilir
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Binlerce kullanıcı Astrobot ile kozmik potansiyelini keşfetti ve hayatlarına yön verdi
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              label={stat.label}
              description={stat.description}
              index={index}
              gradient={stat.gradient}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 text-xs leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats 