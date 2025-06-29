import React, { useState } from 'react'
import { Star, Moon, Sun, Heart, Menu, X, Sparkles, Zap, ArrowRight } from 'lucide-react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const openChatbot = () => {
    if ((window as any).openKnowhyBot) {
      (window as any).openKnowhyBot();
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-2xl border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cosmic-400 via-mystical-500 to-cosmic-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cosmic-400/20 group-hover:shadow-cosmic-400/40 transition-all duration-500 group-hover:scale-105">
                <Star className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cosmic-400 via-mystical-400 to-cosmic-500 bg-clip-text text-transparent group-hover:from-cosmic-300 group-hover:to-mystical-300 transition-all duration-300">
                Astrobot
              </h1>
            </div>
          </div>

          {/* Professional Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <button 
              onClick={openChatbot}
              className="group relative px-6 py-3 text-starlight-200 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 group-hover:rotate-180 group-hover:text-yellow-400 transition-all duration-500" />
                <span className="font-medium">Keşif</span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-400 to-mystical-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('features')}
              className="group relative px-6 py-3 text-starlight-200 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 group-hover:scale-125 group-hover:text-cosmic-400 transition-all duration-300" />
                <span className="font-medium">Özellikler</span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-400 to-mystical-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="group relative px-6 py-3 text-starlight-200 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4 group-hover:animate-pulse group-hover:text-mystical-400 transition-all duration-300" />
                <span className="font-medium">Yorumlar</span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-400 to-mystical-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('stats')}
              className="group relative px-6 py-3 text-starlight-200 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                <span className="font-medium">İstatistikler</span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-400 to-mystical-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>

          {/* Premium CTA Button */}
          <button 
            onClick={openChatbot}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cosmic-600 via-mystical-600 to-cosmic-700 hover:from-cosmic-500 hover:via-mystical-500 hover:to-cosmic-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 shadow-2xl shadow-cosmic-500/25 hover:shadow-cosmic-400/40 group relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative flex items-center space-x-2">
              <Zap className="w-5 h-5 group-hover:animate-pulse text-yellow-300" />
              <span>Falımı Bak</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-starlight-200 hover:text-white transition-colors rounded-xl hover:bg-white/5 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Premium Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10">
            <nav className="flex flex-col space-y-2 pt-6">
              <button 
                onClick={openChatbot}
                className="flex items-center space-x-3 p-4 text-starlight-200 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <Sun className="w-5 h-5 group-hover:rotate-180 group-hover:text-yellow-400 transition-all duration-500" />
                <span className="font-medium">Kozmik Keşif</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('features')}
                className="flex items-center space-x-3 p-4 text-starlight-200 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 group-hover:scale-125 group-hover:text-cosmic-400 transition-all duration-300" />
                <span className="font-medium">Mistik Özellikler</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center space-x-3 p-4 text-starlight-200 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <Moon className="w-5 h-5 group-hover:animate-pulse group-hover:text-mystical-400 transition-all duration-300" />
                <span className="font-medium">Kullanıcı Yorumları</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('stats')}
                className="flex items-center space-x-3 p-4 text-starlight-200 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <Heart className="w-5 h-5 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                <span className="font-medium">Güvenilirlik</span>
              </button>
              
              {/* Mobile CTA */}
              <button 
                onClick={openChatbot}
                className="mt-4 bg-gradient-to-r from-cosmic-600 via-mystical-600 to-cosmic-700 hover:from-cosmic-500 hover:via-mystical-500 hover:to-cosmic-600 text-white p-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl shadow-cosmic-500/25"
              >
                <Zap className="w-5 h-5 text-yellow-300" />
                <span>🔮 Falımı Bak Şimdi</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 