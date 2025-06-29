import React from 'react'
import { Star, Heart, Mail, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-black/30 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-cosmic-400" />
              <h3 className="text-xl font-bold text-white">Astrobot</h3>
            </div>
            <p className="text-starlight-300 mb-4 leading-relaxed">
              Doğum haritanızın derinliklerine inerek karakterinizin gizli yönlerini ve potansiyelini ortaya çıkaran kişisel astroloji rehberiniz.
            </p>
            <div className="flex items-center space-x-4 text-starlight-400">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">%94 Doğruluk Oranı</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">3.000+ Mutlu Kullanıcı</span>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-starlight-300 hover:text-cosmic-400 transition-colors">Doğum Haritası</a></li>
              <li><a href="#" className="text-starlight-300 hover:text-cosmic-400 transition-colors">Tarot Falı</a></li>
              <li><a href="#" className="text-starlight-300 hover:text-cosmic-400 transition-colors">Kahve Falı</a></li>
              <li><a href="#" className="text-starlight-300 hover:text-cosmic-400 transition-colors">Burç Uyumu</a></li>
              <li><a href="#" className="text-starlight-300 hover:text-cosmic-400 transition-colors">Numeroloji</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="text-starlight-300">
                <p className="text-sm font-medium mb-1">Adres:</p>
                <p className="text-sm">Barbaros Mah. Şebboy Sokak No:4/1</p>
                <p className="text-sm">İç Kapı No:1 Ataşehir/İstanbul</p>
                <p className="text-sm">Dijitalpark Teknokent</p>
              </div>
              <div className="flex items-center space-x-2 text-starlight-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@knowhy.co</span>
              </div>
              <div className="flex items-center space-x-2 text-starlight-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+90 (555) 123 45 67</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-starlight-400">
          <p>&copy; 2025 Astrobot by Knowhy. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 