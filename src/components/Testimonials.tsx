import React from 'react'
import { Star, Sparkles, Quote, Heart, ArrowRight } from 'lucide-react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface TrustIndicatorProps {
  value: number
  decimals?: number
  suffix?: string
  title: string
  subtitle: string
  textColor: string
  index: number
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  value,
  decimals = 0,
  suffix = '',
  title,
  subtitle,
  textColor,
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
    <div ref={ref} className="text-center bg-black/10 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
      <div className={`text-3xl font-bold ${textColor} mb-2`}>{animatedValue}</div>
      <div className="text-starlight-300 text-sm">{title}</div>
      <div className="text-starlight-400 text-xs mt-1">{subtitle}</div>
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
      name: 'Elif Kaya',
      sign: 'Aslan Burcu',
      avatar: '🦁',
      rating: 5,
      text: 'Astrobot sayesinde kendimi çok daha iyi tanıdım. Doğum haritası analizi gerçekten çok detaylı ve doğruydu. Artık hayatımda daha bilinçli kararlar alabiliyorum.',
      highlight: 'kendimi çok daha iyi tanıdım',
      category: 'Doğum Haritası'
    },
    {
      name: 'Mehmet Demir',
      sign: 'Akrep Burcu',
      avatar: '🦂',
      rating: 5,
      text: 'AI falcı gerçekten çok başarılı! Tarot okumalarım her zaman doğru çıkıyor ve hayatıma yön veriyor. Özellikle ilişki konularında çok yardımcı oluyor.',
      highlight: 'her zaman doğru çıkıyor',
      category: 'Tarot & AI'
    },
    {
      name: 'Zeynep Özkan',
      sign: 'Balık Burcu',
      avatar: '🐟',
      rating: 5,
      text: 'Burç uyumluluğu özelliği sayesinde partnerimle aramızdaki dinamikleri çok daha iyi anlayabiliyoruz. İlişkimiz öncekinden çok daha güçlü.',
      highlight: 'çok daha iyi anlayabiliyoruz',
      category: 'İlişki Analizi'
    },
    {
      name: 'Can Yılmaz',
      sign: 'İkizler Burcu',
      avatar: '👯‍♂️',
      rating: 5,
      text: 'Numeroloji analizim beni çok etkiledi. Yaşam yolu sayım ve kişilik özelliklerim birebir uyuşuyor. Kariyer kararlarımda rehber olarak kullanıyorum.',
      highlight: 'birebir uyuşuyor',
      category: 'Numeroloji'
    },
    {
      name: 'Ayşe Çelik',
      sign: 'Başak Burcu',
      avatar: '👸',
      rating: 5,
      text: 'Rüya yorumları inanılmaz detaylı ve anlamlı. Bilinçaltımdan gelen mesajları anlamamda çok yardımcı oluyor. Her gece rüyalarımı not alıp yorumlatıyorum.',
      highlight: 'inanılmaz detaylı ve anlamlı',
      category: 'Rüya Yorumu'
    },
    {
      name: 'Emre Kara',
      sign: 'Koç Burcu',
      avatar: '🐏',
      rating: 5,
      text: 'Günlük burç yorumlarım her sabah motivasyonumu artırıyor. Gün içinde karşılaşacağım durumlar için hazırlanabiliyorum. Çok pratik ve faydalı.',
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
      subtitle: '3000+ değerlendirme',
      textColor: 'text-cosmic-400'
    },
    {
      value: 98,
      suffix: '%',
      title: 'Tavsiye Oranı',
      subtitle: 'Kullanıcılar tarafından',
      textColor: 'text-mystical-400'
    }
  ]

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Premium section header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl shadow-pink-400/10">
              <Heart className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Kullanıcı Deneyimleri
            </span>
          </h2>
          <p className="text-starlight-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Binlerce kullanıcımızın hayatlarını değiştiren deneyimlerini keşfedin. 
            Siz de bu büyülü yolculuğa katılın ve kendi hikayenizi yazın.
          </p>
        </div>

        {/* Premium testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 card-hover overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-600/5 via-transparent to-mystical-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-all duration-300">
                <Quote className="w-8 h-8 text-cosmic-400" />
              </div>

              {/* Category badge */}
              <div className="inline-block bg-cosmic-600/20 backdrop-blur-sm border border-cosmic-400/30 text-cosmic-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                {testimonial.category}
              </div>

              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <div className="relative z-10 mb-6">
                <p className="text-starlight-200 leading-relaxed text-base">
                  "{testimonial.text.split(testimonial.highlight)[0]}
                  <span className="text-cosmic-300 font-semibold bg-cosmic-600/20 px-1 py-0.5 rounded">
                    {testimonial.highlight}
                  </span>
                  {testimonial.text.split(testimonial.highlight)[1]}"
                </p>
              </div>

              {/* User info */}
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cosmic-500 to-mystical-600 rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-cosmic-400/20 group-hover:scale-105 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-starlight-400 text-sm font-medium">{testimonial.sign}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-mystical-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-cosmic-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {trustIndicators.map((indicator, index) => (
            <TrustIndicator
              key={index}
              value={indicator.value}
              decimals={indicator.decimals}
              suffix={indicator.suffix}
              title={indicator.title}
              subtitle={indicator.subtitle}
              textColor={indicator.textColor}
              index={index}
            />
          ))}
          <div className="text-center bg-black/10 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-starlight-300 text-sm">Destek Hizmeti</div>
            <div className="text-starlight-400 text-xs mt-1">Her zaman yanınızda</div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cosmic-400/20 to-mystical-500/20 rounded-3xl flex items-center justify-center shadow-2xl shadow-cosmic-400/10">
                  <Sparkles className="w-10 h-10 text-cosmic-400 animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siz de bu{' '}
                <span className="bg-gradient-to-r from-cosmic-400 to-mystical-400 bg-clip-text text-transparent">
                  özel deneyimi
                </span>
                {' '}yaşayın
              </h3>
              
              <p className="text-starlight-300 mb-8 text-lg leading-relaxed">
                Binlerce kullanıcımız gibi siz de kozmik yolculuğunuza başlayın ve hayatınızda pozitif değişiklikler deneyimleyin.
              </p>
              
              <button 
                onClick={handleStartJourney}
                className="group bg-gradient-to-r from-cosmic-600 via-mystical-600 to-cosmic-700 hover:from-cosmic-500 hover:via-mystical-500 hover:to-cosmic-600 text-white px-12 py-4 rounded-3xl text-xl font-bold transition-all duration-500 hover:scale-105 shadow-2xl shadow-cosmic-500/30 hover:shadow-cosmic-400/50 flex items-center space-x-3 mx-auto border border-white/10 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                  <span>Kozmik Yolculuğuma Başla</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 