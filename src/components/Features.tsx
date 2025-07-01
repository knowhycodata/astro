import React from 'react'
import { Star, Heart, Calendar, Hash, Moon, Brain, Sparkles } from 'lucide-react'

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
      icon: Brain,
      title: 'Kişilik Haritası',
      description: 'Detaylı AI analizi ile benzersiz kişilik özelliklerinizi ve potansiyelinizi keşfedin',
      buttonText: 'Haritanı Çıkar',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Star,
      title: 'Astral Rehberlik',
      description: 'Kişiselleştirilmiş astroloji yorumları ve yaşam rehberliği almanız için profesyonel analiz',
      buttonText: 'Rehberlik Al',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Heart,
      title: 'İlişki Analizi',
      description: 'Kapsamlı uyumluluk testleri ve partner analizi ile ilişkilerinizi güçlendirin',
      buttonText: 'Analiz Et',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      icon: Moon,
      title: 'Rüya Yorumlama',
      description: 'Bilinçaltınızın mesajlarını çözün ve rüyalarınızın derin anlamlarını keşfedin',
      buttonText: 'Yorumla',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Günlük Öngörüler',
      description: 'Kişiye özel günlük, haftalık ve aylık astroloji yorumları ile geleceğe hazırlanın',
      buttonText: 'Öngörülerimi Gör',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: Hash,
      title: 'Numeroloji',
      description: 'Sayıların gizli gücünü keşfedin ve hayat yolunuzdaki önemli mesajları alın',
      buttonText: 'Sayılarımı Çöz',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ]

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200 tracking-wider uppercase">Özellikler</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Profesyonel
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Analiz Araçları
            </span>
          </h2>
          
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Her özellik, kişisel gelişiminize değer katan derinlemesine analizler sunar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1"
              >
                
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={handleFeatureClick}
                    className={`w-full bg-gradient-to-r ${feature.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105`}
                  >
                    {feature.buttonText}
                  </button>
                </div>
                
                {/* Subtle glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/60 text-lg mb-6">
            Tüm özellikleri denemek için analizinizi başlatın
          </p>
          <button 
            onClick={handleFeatureClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105"
          >
            <Brain className="w-5 h-5" />
            <span>Analizine Başla</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features 