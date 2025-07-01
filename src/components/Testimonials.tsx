import React from 'react'
import { Star, Heart, Users } from 'lucide-react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface TrustIndicatorProps {
  value: number
  decimals?: number
  suffix?: string
  title: string
  subtitle: string
  index: number
  gradient: string
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  value,
  decimals = 0,
  suffix = '',
  title,
  subtitle,
  index,
  gradient
}) => {
  const { value: animatedValue, ref } = useAnimatedCounter({
    end: value,
    duration: 2000 + (index * 200),
    decimals,
    suffix,
    startOnView: true
  })

  return (
    <div ref={ref} className="group text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">{animatedValue}</div>
        <div className="text-white text-sm font-semibold">{title}</div>
        <div className="text-white/60 text-xs mt-1">{subtitle}</div>
      </div>
    </div>
  )
}

const Testimonials: React.FC = () => {
  const handleStartJourney = () => {
    if ((window as any).openKnowhyBot) {
      (window as any).openKnowhyBot();
    } else {
      const chatButton = document.querySelector('knowhy-bot') as any;
      if (chatButton) {
        chatButton.click();
      }
    }
  }

  const testimonials = [
    {
      name: 'Elif K.',
      sign: 'Aslan Burcu',
      avatar: '🦁',
      rating: 5,
      text: 'Astrobot sayesinde kendimi çok daha iyi tanıdım. Doğum haritası analizi gerçekten çok detaylı ve doğruydu.',
      highlight: 'çok daha iyi tanıdım',
      category: 'Doğum Haritası',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      name: 'Mehmet D.',
      sign: 'Akrep Burcu',
      avatar: '🦂',
      rating: 5,
      text: 'AI falcı gerçekten çok başarılı! Tarot okumalarım her zaman doğru çıkıyor ve hayatıma yön veriyor.',
      highlight: 'her zaman doğru çıkıyor',
      category: 'Tarot & AI',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Zeynep Ö.',
      sign: 'Balık Burcu',
      avatar: '🐟',
      rating: 5,
      text: 'Burç uyumluluğu özelliği sayesinde partnerimle aramızdaki dinamikleri çok daha iyi anlayabiliyoruz.',
      highlight: 'çok daha iyi anlayabiliyoruz',
      category: 'İlişki Analizi',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Can Y.',
      sign: 'İkizler Burcu',
      avatar: '👯‍♂️',
      rating: 5,
      text: 'Numeroloji analizim beni çok etkiledi. Yaşam yolu sayım ve kişilik özelliklerim birebir uyuşuyor.',
      highlight: 'birebir uyuşuyor',
      category: 'Numeroloji',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Ayşe Ç.',
      sign: 'Başak Burcu',
      avatar: '👸',
      rating: 5,
      text: 'Rüya yorumları inanılmaz detaylı ve anlamlı. Bilinçaltımdan gelen mesajları anlamamda çok yardımcı oluyor.',
      highlight: 'inanılmaz detaylı ve anlamlı',
      category: 'Rüya Yorumu',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Emre K.',
      sign: 'Koç Burcu',
      avatar: '🐏',
      rating: 5,
      text: 'Günlük burç yorumlarım her sabah motivasyonumu artırıyor. Gün içinde karşılaşacağım durumlar için hazırlanabiliyorum.',
      highlight: 'motivasyonumu artırıyor',
      category: 'Günlük Burç',
      gradient: 'from-red-500 to-orange-500'
    }
  ]

  const trustIndicators = [
    {
      value: 4.9,
      decimals: 1,
      suffix: '/5',
      title: 'Ortalama Puan',
      subtitle: '3000+ değerlendirme',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      value: 98,
      suffix: '%',
      title: 'Tavsiye Oranı',
      subtitle: 'Kullanıcılar tarafından',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200 tracking-wider uppercase">Kullanıcı Deneyimleri</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gerçek
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Deneyimler
            </span>
          </h2>
          
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Binlerce kullanıcımızın hayatlarını değiştiren deneyimlerini keşfedin
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                
                {/* Category badge */}
                <div className={`inline-block bg-gradient-to-r ${testimonial.gradient}/20 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6`}>
                  {testimonial.category}
                </div>

                {/* Rating stars */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <div className="mb-6">
                  <p className="text-white/80 leading-relaxed text-base">
                    "{testimonial.text.split(testimonial.highlight)[0]}
                    <span className="text-purple-300 font-semibold bg-purple-300/10 px-1 py-0.5 rounded">
                      {testimonial.highlight}
                    </span>
                    {testimonial.text.split(testimonial.highlight)[1]}"
                  </p>
                </div>

                {/* User info */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm font-medium">{testimonial.sign}</p>
                  </div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {trustIndicators.map((indicator, index) => (
            <TrustIndicator
              key={index}
              value={indicator.value}
              decimals={indicator.decimals}
              suffix={indicator.suffix}
              title={indicator.title}
              subtitle={indicator.subtitle}
              index={index}
              gradient={indicator.gradient}
            />
          ))}
          <div className="group text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-white text-sm font-semibold">Destek Hizmeti</div>
            <div className="text-white/60 text-xs mt-1">Her zaman yanınızda</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sen de Bu <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Deneyimin</span> Parçası Ol
          </h3>
          
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Kişilik analizin ile yaşamındaki gizli potansiyelleri keşfet ve kozmik rehberliğin eşliğinde yoluna devam et.
          </p>
          
          <button 
            onClick={handleStartJourney}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105"
          >
            <Heart className="w-5 h-5" />
            <span>Analizine Başla</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 