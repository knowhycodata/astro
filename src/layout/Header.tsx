import React, { useState } from 'react'
import { Star, Moon, Heart, Menu, X, TrendingUp } from 'lucide-react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
          {/* Premium Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                Astrobot
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Özellikler
            </button>
            
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Yorumlar
            </button>
            
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Analizler
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-white hover:text-purple-300 transition-colors rounded-lg hover:bg-white/5"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6">
            <nav className="flex flex-col space-y-3 pt-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="flex items-center space-x-3 p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
              >
                <Heart className="w-5 h-5" />
                <span className="font-medium text-lg">Özellikler</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center space-x-3 p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
              >
                <Moon className="w-5 h-5" />
                <span className="font-medium text-lg">Yorumlar</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('stats')}
                className="flex items-center space-x-3 p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium text-lg">Analizler</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 