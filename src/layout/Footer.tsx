import React from 'react'
import { Star, Sparkles, Youtube, Instagram, Linkedin, Mail, Phone, MapPin, Hash } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-black/30 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {/* Logo & Açıklama */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-cosmic-400 to-mystical-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cosmic-400/20">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Astrobot</h3>
                <p className="text-cosmic-400 text-sm font-medium">Kişisel Astroloji Rehberiniz</p>
              </div>
            </div>
            
            <p className="text-starlight-300 leading-relaxed max-w-sm transition-colors">
              Yapay zeka teknolojileri ile astroloji deneyiminizi dönüştüren akıllı çözümler geliştiriyoruz.
            </p>
            
            <div className="flex space-x-3">
              <a href="https://www.youtube.com/@knowhyco" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-cosmic-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/25">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/knowhyco/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-cosmic-900 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/25">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/106222959" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-cosmic-900 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white flex items-center">
              <Sparkles className="mr-3 h-6 w-6 text-cosmic-400" />
              Astrobot
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-starlight-300 hover:text-white transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-cosmic-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#stats" className="text-starlight-300 hover:text-white transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-cosmic-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  İstatistikler
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-starlight-300 hover:text-white transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-cosmic-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kullanıcı Yorumları
                </a>
              </li>
              <li>
                <a href="https://www.knowhy.co/#pricing" className="text-starlight-300 hover:text-white transition-all duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-cosmic-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl text-white">İletişim</h3>
            
            <div className="space-y-4">
              <div className="text-starlight-300">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cosmic-400 rounded-full flex-shrink-0 mt-0.5"></div>
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
              
              <div className="text-starlight-300">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cosmic-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-medium text-white mb-1">E-posta</p>
                    <a href="mailto:data@knowhy.co" className="text-sm hover:text-cosmic-400 transition-colors">
                      data@knowhy.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-starlight-400 text-sm">
              © 2025 <span className="text-cosmic-400 font-medium">Knowhy</span>. Tüm hakları saklıdır. Astrobot, Knowhy'ın tescilli markasıdır.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-starlight-400 hover:text-cosmic-400 text-sm transition-all duration-200 hover:underline" href="https://www.knowhy.co">
                Gizlilik Politikası
              </a>
              <a className="text-starlight-400 hover:text-cosmic-400 text-sm transition-all duration-200 hover:underline" href="https://www.knowhy.co">
                Çerez Politikası
              </a>
              <a className="text-starlight-400 hover:text-cosmic-400 text-sm transition-all duration-200 hover:underline" href="https://www.knowhy.co">
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