import React from 'react'
import { TrendingUp, Users, Star, Award, Shield, Clock, Target, Zap } from 'lucide-react'
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
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  icon: IconComponent,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  description,
  index
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
      className="luxury-card p-8 text-center bg-sand-beige/5 border border-silver-line/30 luxury-hover-shadow"
    >
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center luxury-shadow transition-all duration-300">
          <IconComponent className="w-8 h-8 text-sand-beige" />
        </div>
      </div>
      
      {/* Animated Number */}
      <div className="mb-2">
        <span className="font-serif-classic text-4xl md:text-5xl font-bold text-honey-energy block">
          {animatedValue}
        </span>
      </div>
      
      {/* Label */}
      <h3 className="text-lg font-semibold text-sand-beige mb-2">
        {label}
      </h3>
      
      {/* Description */}
      <p className="text-sand-beige/70 text-sm leading-relaxed">
        {description}
      </p>
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
      description: 'Profesyonel analiz kalitesi'
    },
    {
      icon: Users,
      value: 3000,
      suffix: '+',
      label: 'Günlük Aktif Kullanıcı',
      description: 'Güven veren topluluk'
    },
    {
      icon: TrendingUp,
      value: 75000,
      suffix: '+',
      label: 'Astroloji Raporu',
      description: 'Kapsamlı analiz deneyimi'
    },
    {
      icon: Star,
      value: 5.0,
      decimals: 1,
      label: 'Memnuniyet Puanı',
      description: 'Yüksek kullanıcı memnuniyeti'
    }
  ]

  const additionalStats = [
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Verileriniz güvende'
    },
    {
      icon: Clock,
      title: '7/24 Erişim',
      description: 'Her zaman ulaşılabilir'
    },
    {
      icon: Target,
      title: 'Kişisel Analiz',
      description: 'Size özel yorumlar'
    },
    {
      icon: Zap,
      title: 'Anında Sonuç',
      description: 'Hızlı raporlama'
    }
  ]

  return (
    <section id="stats" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Lüks section başlığı */}
        <div className="text-center mb-20">
          <h2 className="font-serif-classic text-4xl md:text-6xl font-bold text-sand-beige mb-6 luxury-shadow">
            Güvenilir <span className="text-wine-purple">Platform</span>
          </h2>
          <p className="text-sand-beige/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Binlerce kullanıcı Astrobot ile kozmik potansiyelini keşfetti ve hayatlarına yön verdi.
          </p>
        </div>

        {/* Ana istatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
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
            />
          ))}
        </div>

        {/* Ek özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {additionalStats.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="luxury-card p-6 bg-sand-beige/3 border border-silver-line/20 luxury-hover-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wine-purple/20 flex items-center justify-center luxury-shadow">
                    <IconComponent className="w-6 h-6 text-wine-purple" />
                  </div>
                  <div>
                    <h4 className="text-sand-beige font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-sand-beige/60 text-xs leading-relaxed">{item.description}</p>
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