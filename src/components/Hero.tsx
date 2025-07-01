import React, { useState, useEffect } from 'react'
import { Sparkles, Zap, Star, Moon, Sun } from 'lucide-react'

const Hero: React.FC = () => {
  const [currentZodiac, setCurrentZodiac] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showMysticalText, setShowMysticalText] = useState(false)

  const handleAnalysisStart = (zodiacIndex?: number) => {
    setIsAnalyzing(true)
    if (zodiacIndex !== undefined) {
      setCurrentZodiac(zodiacIndex)
    }
    
    // Chatbot'u aç
    setTimeout(() => {
      if ((window as any).openKnowhyBot) {
        (window as any).openKnowhyBot();
      } else {
        const chatButton = document.querySelector('knowhy-bot') as any;
        if (chatButton) {
          chatButton.click();
        }
      }
      setIsAnalyzing(false)
    }, 2000)
  }

  // Burç simgeleri ve isimleri
  const zodiacSigns = [
    { symbol: '♈', name: 'Koç', dates: '21 Mar - 19 Apr' },
    { symbol: '♉', name: 'Boğa', dates: '20 Apr - 20 May' },
    { symbol: '♊', name: 'İkizler', dates: '21 May - 20 Jun' },
    { symbol: '♋', name: 'Yengeç', dates: '21 Jun - 22 Jul' },
    { symbol: '♌', name: 'Aslan', dates: '23 Jul - 22 Aug' },
    { symbol: '♍', name: 'Başak', dates: '23 Aug - 22 Sep' },
    { symbol: '♎', name: 'Terazi', dates: '23 Sep - 22 Oct' },
    { symbol: '♏', name: 'Akrep', dates: '23 Oct - 21 Nov' },
    { symbol: '♐', name: 'Yay', dates: '22 Nov - 21 Dec' },
    { symbol: '♑', name: 'Oğlak', dates: '22 Dec - 19 Jan' },
    { symbol: '♒', name: 'Kova', dates: '20 Jan - 18 Feb' },
    { symbol: '♓', name: 'Balık', dates: '19 Feb - 20 Mar' }
  ]

  // Otomatik burç değişimi
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnalyzing) {
        setCurrentZodiac((prev) => (prev + 1) % zodiacSigns.length)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isAnalyzing, zodiacSigns.length])

  // Mistik yazı animasyonu
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMysticalText(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      
      {/* Mistik Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-navy via-night-navy/95 to-night-navy">
        
        {/* Sisli Efekt */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-wine-purple/10 blur-3xl animate-pulse-slow"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Mistik Işık Dalgaları */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-honey-energy/20 animate-pulse"
              style={{
                animationDelay: `${i * 1.5}s`,
                animationDuration: '6s',
                transform: `scale(${0.5 + i * 0.3})`,
              }}
            />
          ))}
        </div>

        {/* Yüzen Mistik Parçacıklar */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sand-beige/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        
        {/* Mistik Üst Yazı */}
        <div className="mb-6">
          <h1 
            className={`font-serif-classic text-lg md:text-xl text-sand-beige/80 transition-all duration-2000 transform ${
              showMysticalText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
            style={{
              textShadow: '0 0 20px rgba(241, 232, 220, 0.3)',
              letterSpacing: '0.1em'
            }}
          >
            ✨ Yıldızlar seni sana anlatıyor... ✨
          </h1>
        </div>

        {/* Ana Başlık */}
        <div className="mb-8">
          <h2 className="font-serif-classic text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-sand-beige mb-4 luxury-shadow">
            Kişisel Astrolojik
            <br />
            <span className="text-wine-purple">Rehberiniz</span>
          </h2>
          <p className="text-lg md:text-xl text-sand-beige/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Yapay zeka ile karakterinizin gizli yönlerini keşfedin
          </p>
        </div>

        {/* Merkez Ayna Yüzey ve Burç Simgeleri */}
        <div className="relative max-w-xl mx-auto mb-12 h-80 flex items-center justify-center">
          
          {/* Ana Ayna Yüzey */}
          <div className="relative">
            {/* Ayna çerçevesi */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-silver-line/30 bg-gradient-to-br from-sand-beige/10 via-wine-purple/5 to-night-navy/20 luxury-shadow-lg relative overflow-hidden">
              
              {/* Ayna yansıması efekti */}
              <div className="absolute inset-0 bg-gradient-to-br from-sand-beige/20 via-transparent to-transparent rounded-full"></div>
              <div className="absolute top-3 left-3 w-12 h-12 bg-sand-beige/30 rounded-full blur-xl"></div>
              
              {/* Dönen ayna yüzeyi */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-wine-purple/20 via-sand-beige/10 to-honey-energy/20 animate-spin-slow">
                <div className="absolute inset-2 rounded-full border border-silver-line/20"></div>
              </div>

              {/* Aktif burç simgesi */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-6xl md:text-7xl font-bold text-honey-energy transition-all duration-1000 transform"
                  style={{
                    textShadow: '0 0 30px rgba(255, 204, 112, 0.8)',
                    filter: 'drop-shadow(0 4px 20px rgba(255, 204, 112, 0.4))',
                    animation: 'fadeInScale 1s ease-out'
                  }}
                  key={currentZodiac}
                >
                  {zodiacSigns[currentZodiac].symbol}
                </div>
              </div>

              {/* Aktif burç bilgisi */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-lg md:text-xl font-serif-classic font-bold text-sand-beige mb-1">
                  {zodiacSigns[currentZodiac].name}
                </div>
                <div className="text-xs text-sand-beige/60">
                  {zodiacSigns[currentZodiac].dates}
                </div>
              </div>
            </div>

            {/* Çevredeki enerji halkası */}
            <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 border border-wine-purple/30 rounded-full animate-pulse"></div>
            <div className="absolute -inset-3 border border-honey-energy/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Çevredeki Tıklanabilir Burç Simgeleri */}
          <div className="absolute inset-0">
            {zodiacSigns.map((sign, index) => (
              <button
                key={index}
                onClick={() => handleAnalysisStart(index)}
                className={`absolute text-xl md:text-2xl font-bold transition-all duration-500 hover:scale-125 hover:text-honey-energy transform ${
                  index === currentZodiac ? 'text-honey-energy scale-110' : 'text-wine-purple/60'
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${index * 30}deg) 
                    translateY(-140px) 
                    rotate(-${index * 30}deg)
                  `,
                  textShadow: index === currentZodiac ? '0 0 15px rgba(255, 204, 112, 0.8)' : '0 0 10px rgba(94, 39, 80, 0.4)',
                  filter: `drop-shadow(0 2px 8px ${index === currentZodiac ? 'rgba(255, 204, 112, 0.3)' : 'rgba(94, 39, 80, 0.2)'})`
                }}
              >
                {sign.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Analiz Durumu */}
        {isAnalyzing && (
          <div className="mb-6 animate-fadeInScale">
            <div className="text-xl md:text-2xl font-serif-classic text-honey-energy mb-3">
              ✨ Astrobot analize başlıyor... ✨
            </div>
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-honey-energy rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Ana CTA Butonu */}
        {!isAnalyzing && (
          <div className="mb-12">
            <button 
              onClick={() => handleAnalysisStart()}
              className="group relative bg-gradient-to-r from-honey-energy to-honey-energy/90 hover:from-honey-energy/90 hover:to-honey-energy text-night-navy px-8 py-4 text-lg md:text-xl font-bold transition-all duration-500 luxury-shadow-lg luxury-hover-shadow mx-auto block"
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="relative">
                  <Sparkles className="w-6 h-6 group-hover:animate-spin transition-all duration-500" />
                  <div className="absolute inset-0 w-6 h-6 bg-honey-energy/30 rounded-full animate-pulse"></div>
                </div>
                <span className="font-serif-classic">Kozmik Yolculuğuna Başla</span>
                <div className="relative">
                  <Zap className="w-6 h-6 group-hover:scale-125 transition-all duration-300" />
                  <div className="absolute inset-0 w-6 h-6 bg-honey-energy/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Buton parıltıları */}
              <div className="absolute -inset-1 bg-gradient-to-r from-honey-energy via-wine-purple to-honey-energy opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 -z-10"></div>
            </button>

            {/* Alt açıklama */}
            <p className="text-sand-beige/60 text-base mt-4 leading-relaxed max-w-xl mx-auto">
              <Star className="inline w-4 h-4 text-wine-purple mr-2" />
              Mistik güçlerin rehberliğinde kendinizi keşfedin
              <Moon className="inline w-4 h-4 text-wine-purple ml-2" />
            </p>
          </div>
        )}

        {/* Lüks İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-serif-classic font-bold text-honey-energy mb-2 group-hover:scale-110 transition-transform duration-300">3.000+</div>
            <div className="text-sm text-sand-beige/70 font-medium">Günlük Kullanıcı</div>
            <div className="w-8 h-px bg-wine-purple/50 mx-auto mt-2"></div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-serif-classic font-bold text-honey-energy mb-2 group-hover:scale-110 transition-transform duration-300">%94</div>
            <div className="text-sm text-sand-beige/70 font-medium">Doğruluk Oranı</div>
            <div className="w-8 h-px bg-wine-purple/50 mx-auto mt-2"></div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-serif-classic font-bold text-honey-energy mb-2 group-hover:scale-110 transition-transform duration-300">75.000+</div>
            <div className="text-sm text-sand-beige/70 font-medium">Hazırlanmış Rapor</div>
            <div className="w-8 h-px bg-wine-purple/50 mx-auto mt-2"></div>
          </div>
        </div>

        {/* Çevresel Mistik Elementler */}
        <div className="absolute top-20 left-10 animate-float">
          <Sun className="w-8 h-8 text-honey-energy/60" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-32 right-16 animate-float">
          <Moon className="w-6 h-6 text-wine-purple/60" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <Star className="w-5 h-5 text-sand-beige/60" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-20 right-12 animate-float">
          <Sparkles className="w-7 h-7 text-honey-energy/60" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero 