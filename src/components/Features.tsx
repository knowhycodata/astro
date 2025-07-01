import React from 'react'
import { Star, Heart, Calendar, Hash, Moon, Brain } from 'lucide-react'

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
      title: 'Harita Analizi',
      description: '🗺️ Detaylı doğum haritası ile kişilik profilinizi ve potansiyelinizi keşfedin',
      buttonText: 'Haritamı Çıkar'
    },
    {
      icon: Brain,
      title: 'Potansiyel Tespiti',
      description: '🧠 Yapay zeka ile karakterinizin gizli yönlerini ve yeteneklerinizi ortaya çıkarın',
      buttonText: 'Keşfet'
    },
    {
      icon: Heart,
      title: 'Fal Yorumlama',
      description: '🔮 Profesyonel AI yorumları ile tarot kartları ve kahve falı okutun',
      buttonText: 'Fal Baktır'
    },
    {
      icon: Calendar,
      title: 'Uyumluluk',
      description: '💞 Kapsamlı ilişki analizleri ve partner uyumluluğu değerlendirmeleri',
      buttonText: 'Test Et'
    },
    {
      icon: Hash,
      title: 'Günlük Yorumlar',
      description: '📅 Kişiye özel günlük, haftalık ve aylık astroloji yorumları',
      buttonText: 'Yorumlarım'
    },
    {
      icon: Moon,
      title: 'Rüya Tabirleri',
      description: '💭 Derinlemesine rüya analizleri ile bilinçaltınızı keşfedin',
      buttonText: 'Yorumla'
    }
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Lüks section başlığı */}
        <div className="text-center mb-20">
          <h2 className="font-serif-classic text-4xl md:text-6xl font-bold text-sand-beige mb-6 luxury-shadow">
            Premium <span className="text-wine-purple">Özellikler</span>
          </h2>
          <p className="text-sand-beige/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Astrobot ile keşfedeceğiniz mistik dünyaya hoş geldiniz. Her özellik, ruhunuza farklı bir kapı açar.
          </p>
        </div>

        {/* Lüks özellikler grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="luxury-card p-8 bg-sand-beige/5 border border-silver-line/30 luxury-hover-shadow flex flex-col h-full"
              >
                {/* Icon section */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center luxury-shadow transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-sand-beige" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif-classic text-2xl font-bold text-sand-beige mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sand-beige/70 leading-relaxed mb-8 text-base flex-1">
                    {feature.description}
                  </p>

                  {/* Lüks CTA button */}
                  <button
                    onClick={handleFeatureClick}
                    className="w-full bg-gradient-to-r from-honey-energy/80 to-honey-energy hover:from-honey-energy hover:to-honey-energy/90 text-night-navy font-semibold py-3 px-6 transition-all duration-300 luxury-hover-shadow mt-auto"
                  >
                    {feature.buttonText}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features 