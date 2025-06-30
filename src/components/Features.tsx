import React from 'react'
import { Star, Heart, Calendar, Hash, Moon, Brain, Zap, ArrowRight } from 'lucide-react'

const Features: React.FC = () => {
  const handleFeatureClick = () => {
    // Chatbot'u açıp özellik hakkında soru sorma
    if ((window as any).openKnowhyBot) {
      (window as any).openKnowhyBot();
    } else {
      const chatButton = document.querySelector('knowhy-bot') as any;
      if (chatButton) {
        chatButton.click();
      }
    }
  }

  const features = [
    {
      icon: Star,
      title: 'Doğum Haritası Analizi',
      description: 'Detaylı kişilik profili ve potansiyel tespiti ile astroljik haritanızı keşfedin',
      gradient: 'from-cosmic-500 to-cosmic-700',
      buttonText: 'Haritamı Çıkar',
      glowColor: 'cosmic-400'
    },
    {
      icon: Brain,
      title: 'Yapay Zeka Yorumları',
      description: 'Gelişmiş AI teknolojisi ile tarot ve kahve falı profesyonel yorumlama',
      gradient: 'from-mystical-500 to-mystical-700',
      buttonText: 'AI Fal Baktır',
      glowColor: 'mystical-400'
    },
    {
      icon: Heart,
      title: 'Burç Uyumluluğu',
      description: 'Kapsamlı ilişki analizleri ve partner uyumluluğu değerlendirmeleri',
      gradient: 'from-pink-500 to-pink-700',
      buttonText: 'Uyumu Test Et',
      glowColor: 'pink-400'
    },
    {
      icon: Calendar,
      title: 'Kişisel Burç Yorumları',
      description: 'Günlük, haftalık ve aylık kişiselleştirilmiş astroloji yorumları',
      gradient: 'from-blue-500 to-blue-700',
      buttonText: 'Günlük Falım',
      glowColor: 'blue-400'
    },
    {
      icon: Hash,
      title: 'Numeroloji Analizleri',
      description: 'Yaşam yolu sayısı ve kapsamlı kişisel numeroloji değerlendirmeleri',
      gradient: 'from-emerald-500 to-emerald-700',
      buttonText: 'Sayılarım',
      glowColor: 'emerald-400'
    },
    {
      icon: Moon,
      title: 'Rüya Tabirleri',
      description: 'Derinlemesine rüya analizleri ve mistik yorumlarla bilinçaltınızı keşfedin',
      gradient: 'from-purple-500 to-purple-700',
      buttonText: 'Rüyamı Sor',
      glowColor: 'purple-400'
    }
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Premium section header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cosmic-400/20 to-mystical-400/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl shadow-cosmic-400/10">
              <Zap className="w-8 h-8 text-cosmic-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cosmic-400 via-mystical-400 to-cosmic-500 bg-clip-text text-transparent">
              Premium Özellikler
            </span>
          </h2>
          <p className="text-starlight-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Astrobot ile keşfedeceğiniz mistik dünyaya hoş geldiniz. Her özellik, ruhunuza farklı bir kapı açar ve 
            kişisel gelişiminizi destekler.
          </p>
        </div>

        {/* Premium features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 card-hover overflow-hidden"
              >
                {/* Premium background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.glowColor}/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>
                
                {/* Icon section */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-${feature.glowColor}/20 group-hover:shadow-${feature.glowColor}/40`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cosmic-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-starlight-300 leading-relaxed mb-8 text-base">
                    {feature.description}
                  </p>

                  {/* Premium CTA button */}
                  <button
                    onClick={handleFeatureClick}
                    className="group/btn w-full bg-black/30 backdrop-blur-sm border border-white/20 hover:border-cosmic-400/50 text-starlight-200 hover:text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 hover:bg-cosmic-400/10 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative flex items-center space-x-3">
                      <Zap className="w-5 h-5 group-hover/btn:animate-pulse text-yellow-400" />
                      <span>{feature.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cosmic-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-mystical-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features 