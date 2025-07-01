import React from 'react'
import { Star, Heart } from 'lucide-react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface TrustIndicatorProps {
  value: number
  decimals?: number
  suffix?: string
  title: string
  subtitle: string
  index: number
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  value,
  decimals = 0,
  suffix = '',
  title,
  subtitle,
  index
}) => {
  const { value: animatedValue, ref } = useAnimatedCounter({
    end: value,
    duration: 2000 + (index * 200),
    decimals,
    suffix,
    startOnView: true
  })

  return (
    <div ref={ref} className="text-center luxury-card p-6 bg-sand-beige/5 border border-silver-line/30">
      <div className="font-serif-classic text-3xl font-bold text-honey-energy mb-2">{animatedValue}</div>
      <div className="text-sand-beige text-sm">{title}</div>
      <div className="text-sand-beige/60 text-xs mt-1">{subtitle}</div>
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
      category: 'Doğum Haritası'
    },
    {
      name: 'Mehmet D.',
      sign: 'Akrep Burcu',
      avatar: '🦂',
      rating: 5,
      text: 'AI falcı gerçekten çok başarılı! Tarot okumalarım her zaman doğru çıkıyor ve hayatıma yön veriyor.',
      highlight: 'her zaman doğru çıkıyor',
      category: 'Tarot & AI'
    },
    {
      name: 'Zeynep Ö.',
      sign: 'Balık Burcu',
      avatar: '🐟',
      rating: 5,
      text: 'Burç uyumluluğu özelliği sayesinde partnerimle aramızdaki dinamikleri çok daha iyi anlayabiliyoruz.',
      highlight: 'çok daha iyi anlayabiliyoruz',
      category: 'İlişki Analizi'
    },
    {
      name: 'Can Y.',
      sign: 'İkizler Burcu',
      avatar: '👯‍♂️',
      rating: 5,
      text: 'Numeroloji analizim beni çok etkiledi. Yaşam yolu sayım ve kişilik özelliklerim birebir uyuşuyor.',
      highlight: 'birebir uyuşuyor',
      category: 'Numeroloji'
    },
    {
      name: 'Ayşe Ç.',
      sign: 'Başak Burcu',
      avatar: '👸',
      rating: 5,
      text: 'Rüya yorumları inanılmaz detaylı ve anlamlı. Bilinçaltımdan gelen mesajları anlamamda çok yardımcı oluyor.',
      highlight: 'inanılmaz detaylı ve anlamlı',
      category: 'Rüya Yorumu'
    },
    {
      name: 'Emre K.',
      sign: 'Koç Burcu',
      avatar: '🐏',
      rating: 5,
      text: 'Günlük burç yorumlarım her sabah motivasyonumu artırıyor. Gün içinde karşılaşacağım durumlar için hazırlanabiliyorum.',
      highlight: 'motivasyonumu artırıyor',
      category: 'Günlük Burç'
    }
  ]

  const trustIndicators = [
    {
      value: 4.9,
      decimals: 1,
      suffix: '/5',
      title: 'Ortalama Puan',
      subtitle: '3000+ değerlendirme'
    },
    {
      value: 98,
      suffix: '%',
      title: 'Tavsiye Oranı',
      subtitle: 'Kullanıcılar tarafından'
    }
  ]

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Lüks section başlığı */}
        <div className="text-center mb-20">
          <h2 className="font-serif-classic text-4xl md:text-6xl font-bold text-sand-beige mb-6 luxury-shadow">
            Kullanıcı <span className="text-wine-purple">Deneyimleri</span>
          </h2>
          <p className="text-sand-beige/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Binlerce kullanıcımızın hayatlarını değiştiren deneyimlerini keşfedin.
          </p>
        </div>

        {/* Lüks testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="luxury-card p-8 bg-sand-beige/5 border border-silver-line/30 luxury-hover-shadow"
            >
              {/* Category badge */}
              <div className="inline-block bg-wine-purple/20 border border-wine-purple/30 text-wine-purple text-xs font-semibold px-3 py-1 mb-6">
                {testimonial.category}
              </div>

              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-honey-energy fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <div className="mb-6">
                <p className="text-sand-beige/80 leading-relaxed text-base">
                  "{testimonial.text.split(testimonial.highlight)[0]}
                  <span className="text-wine-purple font-semibold bg-wine-purple/10 px-1 py-0.5">
                    {testimonial.highlight}
                  </span>
                  {testimonial.text.split(testimonial.highlight)[1]}"
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center text-xl luxury-shadow">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-sand-beige font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sand-beige/60 text-sm font-medium">{testimonial.sign}</p>
                </div>
              </div>
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
            />
          ))}
          <div className="text-center luxury-card p-6 bg-sand-beige/5 border border-silver-line/30">
            <div className="font-serif-classic text-3xl font-bold text-honey-energy mb-2">24/7</div>
            <div className="text-sand-beige text-sm">Destek Hizmeti</div>
            <div className="text-sand-beige/60 text-xs mt-1">Her zaman yanınızda</div>
          </div>
        </div>

        {/* Mistik Kozmik Enerji Göstergesi */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card p-16 bg-sand-beige/5 border border-silver-line/30 luxury-shadow-lg relative overflow-hidden">
              
              {/* Arka plan enerji dalgaları */}
              <div className="absolute inset-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-wine-purple/20 animate-pulse"
                    style={{
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: '4s',
                      transform: `scale(${0.2 + i * 0.2})`,
                      opacity: 0.6 - i * 0.1
                    }}
                  />
                ))}
              </div>

              {/* Merkez kozmik gösterge */}
              <div className="relative z-10 mb-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Ana enerji kristali */}
                    <div className="w-20 h-20 bg-gradient-to-br from-honey-energy via-wine-purple to-honey-energy rounded-full animate-glow luxury-shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-sand-beige/30 to-wine-purple/30 rounded-full animate-pulse-slow"></div>
                    </div>
                    
                    {/* Çevresindeki enerji noktaları */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-honey-energy rounded-full animate-twinkle"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `
                            translate(-50%, -50%) 
                            rotate(${i * 45}deg) 
                            translateY(-50px)
                          `,
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: '0 0 10px rgba(255, 204, 112, 0.8)'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="font-serif-classic text-3xl md:text-4xl font-bold text-sand-beige mb-4">
                  <span className="text-honey-energy">Kozmik Enerji</span> Akımı
                </h3>
                
                <p className="text-sand-beige/70 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Şu anda evrensel enerji akımı güçlü. Yıldızlar sizin için uygun zamanı işaret ediyor.
                </p>
              </div>

              {/* Enerji seviyeleri */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-wine-purple/20 rounded-full flex items-center justify-center luxury-shadow">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div className="text-sm text-sand-beige font-semibold mb-1">Sezgi Gücü</div>
                  <div className="w-full bg-night-navy/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-honey-energy to-wine-purple h-2 rounded-full animate-pulse" style={{ width: '92%' }}></div>
                  </div>
                  <div className="text-xs text-honey-energy mt-1">%92</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-wine-purple/20 rounded-full flex items-center justify-center luxury-shadow">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <div className="text-sm text-sand-beige font-semibold mb-1">Mistik Bağlantı</div>
                  <div className="w-full bg-night-navy/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-honey-energy to-wine-purple h-2 rounded-full animate-pulse" style={{ width: '88%' }}></div>
                  </div>
                  <div className="text-xs text-honey-energy mt-1">%88</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-wine-purple/20 rounded-full flex items-center justify-center luxury-shadow">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="text-sm text-sand-beige font-semibold mb-1">Enerji Akışı</div>
                  <div className="w-full bg-night-navy/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-honey-energy to-wine-purple h-2 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                  </div>
                  <div className="text-xs text-honey-energy mt-1">%95</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-wine-purple/20 rounded-full flex items-center justify-center luxury-shadow">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div className="text-sm text-sand-beige font-semibold mb-1">Astral Uyum</div>
                  <div className="w-full bg-night-navy/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-honey-energy to-wine-purple h-2 rounded-full animate-pulse" style={{ width: '90%' }}></div>
                  </div>
                  <div className="text-xs text-honey-energy mt-1">%90</div>
                </div>
              </div>

              {/* Mistik mesaj */}
              <div className="relative z-10">
                <div className="bg-wine-purple/10 border border-wine-purple/30 p-6 mb-6 luxury-shadow">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <span className="text-2xl animate-pulse">🌌</span>
                    <span className="font-serif-classic text-lg font-bold text-honey-energy">Evrensel Mesaj</span>
                    <span className="text-2xl animate-pulse">🌌</span>
                  </div>
                  <p className="text-sand-beige/80 text-center italic leading-relaxed">
                    "Yıldızlar bugün senin için özel bir yolculuk hazırladı. İç sesin seni doğru yöne götürecek."
                  </p>
                </div>
                
                <button 
                  onClick={handleStartJourney}
                  className="bg-gradient-to-r from-honey-energy to-honey-energy/90 hover:from-honey-energy/90 hover:to-honey-energy text-night-navy px-12 py-4 text-xl font-bold transition-all duration-300 luxury-shadow-lg luxury-hover-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl animate-spin-slow">⭐</span>
                    <span className="font-serif-classic">Enerji Akımına Katıl</span>
                    <span className="text-2xl animate-spin-slow">⭐</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 