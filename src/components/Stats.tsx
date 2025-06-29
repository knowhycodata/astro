import React from 'react'
import { TrendingUp, Users, Star, Award, Shield, Clock, Target, Zap } from 'lucide-react'

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      number: '%94',
      label: 'Doğruluk Oranı',
      description: 'Profesyonel analiz kalitesi',
      color: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
      glow: 'yellow-400'
    },
    {
      icon: Users,
      number: '3,000+',
      label: 'Günlük Aktif Kullanıcı',
      description: 'Güven veren topluluk',
      color: 'text-cosmic-400',
      gradient: 'from-cosmic-400 to-cosmic-600',
      glow: 'cosmic-400'
    },
    {
      icon: TrendingUp,
      number: '75,000+',
      label: 'Astroloji Raporu',
      description: 'Kapsamlı analiz deneyimi',
      color: 'text-mystical-400',
      gradient: 'from-mystical-400 to-mystical-600',
      glow: 'mystical-400'
    },
    {
      icon: Star,
      number: '5.0',
      label: 'Memnuniyet Puanı',
      description: 'Yüksek kullanıcı memnuniyeti',
      color: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      glow: 'green-400'
    }
  ]

  const additionalStats = [
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Verileriniz 256-bit SSL ile korunur'
    },
    {
      icon: Clock,
      title: '7/24 Erişim',
      description: 'İstediğiniz zaman fal bakımı'
    },
    {
      icon: Target,
      title: 'Kişisel Analiz',
      description: 'Size özel yorumlar ve öneriler'
    },
    {
      icon: Zap,
      title: 'Anında Sonuç',
      description: 'Hızlı ve detaylı raporlama'
    }
  ]

  return (
    <section id="stats" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Premium section header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl shadow-yellow-400/10">
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Güvenilir Platform
            </span>
          </h2>
          <p className="text-starlight-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Binlerce kullanıcı Astrobot ile kozmik potansiyelini keşfetti ve hayatlarına yön verdi.
            Profesyonel kalitemizle siz de bu güvenilir yolculuğa katılın.
          </p>
        </div>

        {/* Main statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center card-hover overflow-hidden"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.glow}/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-${stat.glow}/20 group-hover:shadow-${stat.glow}/40`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 top-0 left-1/2 transform -translate-x-1/2`}></div>
                </div>
                
                {/* Number */}
                <div className="relative z-10 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white block group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold text-starlight-200 mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-starlight-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cosmic-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-mystical-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>
            )
          })}
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {additionalStats.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="group bg-black/10 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:bg-black/20 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cosmic-500/20 to-mystical-500/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-cosmic-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-starlight-400 text-xs leading-relaxed">{item.description}</p>
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