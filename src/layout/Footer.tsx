import React, { useState } from 'react'
import { Star, Youtube, Instagram, Linkedin, Mail, Send } from 'lucide-react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // E-posta kayıt işlemi (şimdilik simüle edilmiş)
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="relative z-20 bg-night-navy/95 backdrop-blur-md border-t border-silver-line/20 mt-20">
      {/* Newsletter Bölümü */}
      <div className="container mx-auto px-4 py-16 border-b border-silver-line/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center luxury-shadow">
              <Mail className="w-8 h-8 text-sand-beige" />
            </div>
          </div>
          
          <h3 className="font-serif-classic text-3xl md:text-4xl font-bold text-sand-beige mb-4">
            <span className="text-wine-purple">Haftalık Enerji Rehberi</span>
          </h3>
          
          <p className="text-sand-beige/70 text-lg mb-8 max-w-2xl mx-auto">
            Astrobot'tan haftalık enerji rehberi almak için e-posta bırakın. Kişiye özel astrolojik öngörüler ve kozmik rehberlik sizinle olsun.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                className="w-full px-6 py-4 bg-night-navy/30 border border-silver-line/30 text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wine-purple luxury-hover-shadow transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-gradient-to-r from-honey-energy to-honey-energy/90 hover:from-honey-energy/90 hover:to-honey-energy text-night-navy font-semibold transition-all duration-300 luxury-shadow luxury-hover-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-2">
                {isSubscribed ? (
                  <>
                    <span className="text-green-600">✓</span>
                    <span>Kaydedildi!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Kayıt Ol</span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {/* Logo & Açıklama */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center luxury-shadow">
                <Star className="w-6 h-6 text-sand-beige" />
              </div>
              <div>
                <h3 className="font-serif-classic text-2xl font-bold text-sand-beige">Astrobot</h3>
                <p className="text-wine-purple text-sm font-medium">Kişisel Astroloji Rehberiniz</p>
              </div>
            </div>
            
            <p className="text-sand-beige/70 leading-relaxed max-w-sm">
              Yapay zeka teknolojileri ile astroloji deneyiminizi dönüştüren akıllı çözümler geliştiriyoruz.
            </p>
            
            <div className="flex space-x-3">
              <a href="https://www.youtube.com/@knowhyco" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-wine-purple/20 hover:bg-red-600/80 flex items-center justify-center transition-all duration-300 luxury-hover-shadow">
                <Youtube className="w-5 h-5 text-sand-beige" />
              </a>
              <a href="https://www.instagram.com/knowhyco/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-wine-purple/20 hover:bg-pink-600/80 flex items-center justify-center transition-all duration-300 luxury-hover-shadow">
                <Instagram className="w-5 h-5 text-sand-beige" />
              </a>
              <a href="https://www.linkedin.com/company/106222959" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-wine-purple/20 hover:bg-blue-600/80 flex items-center justify-center transition-all duration-300 luxury-hover-shadow">
                <Linkedin className="w-5 h-5 text-sand-beige" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-5">
            <h4 className="font-serif-classic text-xl font-bold text-sand-beige">
              Astrobot
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-wine-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#stats" className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-wine-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Analizler
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-wine-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kullanıcı Yorumları
                </a>
              </li>
              <li>
                <a href="https://www.knowhy.co" className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-wine-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Destek
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-5">
            <h3 className="font-serif-classic font-bold text-xl text-sand-beige">İletişim</h3>
            
            <div className="space-y-4">
              <div className="text-sand-beige/70">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-wine-purple rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-medium text-sand-beige mb-1">Adres</p>
                    <p className="text-sm leading-relaxed">
                      Barbaros Mah. Şebboy Sokak No:4/1<br />
                      İç Kapı No:1 Ataşehir/İstanbul<br />
                      Dijitalpark Teknokent
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-sand-beige/70">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-wine-purple rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-medium text-sand-beige mb-1">E-posta</p>
                    <a href="mailto:data@knowhy.co" className="text-sm hover:text-wine-purple transition-colors">
                      data@knowhy.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="border-t border-silver-line/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sand-beige/60 text-sm">
              © 2025 <span className="text-wine-purple font-medium">Knowhy</span>. Tüm hakları saklıdır. Astrobot, Knowhy'ın tescilli markasıdır.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-sand-beige/60 hover:text-wine-purple text-sm transition-all duration-300" href="https://www.knowhy.co">
                Gizlilik Politikası
              </a>
              <a className="text-sand-beige/60 hover:text-wine-purple text-sm transition-all duration-300" href="https://www.knowhy.co">
                Çerez Politikası
              </a>
              <a className="text-sand-beige/60 hover:text-wine-purple text-sm transition-all duration-300" href="https://www.knowhy.co">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 