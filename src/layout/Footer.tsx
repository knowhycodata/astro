import React, { useState } from 'react'
import { Star, Youtube, Instagram, Linkedin, Mail, Send, Users } from 'lucide-react'

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
    <footer className="relative z-20 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 mt-20">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Haftalık <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Enerji Rehberi</span>
          </h3>
          
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Astrobot'tan haftalık enerji rehberi almak için e-posta bırakın. Kişiye özel astrolojik öngörüler ve kozmik rehberlik sizinle olsun.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-2">
                {isSubscribed ? (
                  <>
                    <span className="text-green-400">✓</span>
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
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Astrobot</h3>
                <p className="text-purple-300 text-sm font-medium">Kişisel Astroloji Rehberiniz</p>
              </div>
            </div>
            
            <p className="text-white/70 leading-relaxed max-w-sm">
              Yapay zeka teknolojileri ile astroloji deneyiminizi dönüştüren akıllı çözümler geliştiriyoruz.
            </p>
            
            <div className="flex space-x-3">
              <a href="https://www.youtube.com/@knowhyco" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-red-600/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/knowhyco/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-pink-600/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/106222959" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-blue-600/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">
              Astrobot
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#stats" className="text-white/70 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Analizler
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kullanıcı Yorumları
                </a>
              </li>
              <li>
                <a href="https://www.knowhy.co" className="text-white/70 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Destek
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl text-white">İletişim</h3>
            
            <div className="space-y-4">
              <div className="text-white/70">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-medium text-white mb-1">Adres</p>
                    <p className="text-sm leading-relaxed">
                      Barbaros Mah. Şebboy Sokak No:4/1<br />
                      İç Kapı No:1 Ataşehir/İstanbul<br />
                      Dijitalpark Teknokent
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-white/70">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-medium text-white mb-1">E-posta</p>
                    <a href="mailto:data@knowhy.co" className="text-sm hover:text-purple-300 transition-colors">
                      data@knowhy.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2025 <span className="text-purple-300 font-medium">Knowhy</span>. Tüm hakları saklıdır. Astrobot, Knowhy'ın tescilli markasıdır.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-white/60 hover:text-purple-300 text-sm transition-all duration-300" href="https://www.knowhy.co">
                Gizlilik Politikası
              </a>
              <a className="text-white/60 hover:text-purple-300 text-sm transition-all duration-300" href="https://www.knowhy.co">
                Çerez Politikası
              </a>
              <a className="text-white/60 hover:text-purple-300 text-sm transition-all duration-300" href="https://www.knowhy.co">
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