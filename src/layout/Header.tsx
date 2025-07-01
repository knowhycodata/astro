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
    <header className="fixed top-0 left-0 right-0 z-50 bg-night-navy/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Premium Logo - Lüks Tema */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-wine-purple to-wine-purple/80 flex items-center justify-center luxury-shadow-lg group-hover:luxury-hover-shadow transition-all duration-300">
                <Star className="w-6 h-6 text-sand-beige" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif-classic font-bold text-sand-beige group-hover:text-sand-beige/90 transition-colors duration-300">
                Astrobot
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Lüks Tema */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 font-medium text-lg luxury-hover-shadow px-4 py-2"
            >
              Özellikler
            </button>
            
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 font-medium text-lg luxury-hover-shadow px-4 py-2"
            >
              Yorumlar
            </button>
            
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-sand-beige/70 hover:text-sand-beige transition-all duration-300 font-medium text-lg luxury-hover-shadow px-4 py-2"
            >
              Analizler
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-sand-beige hover:text-sand-beige/80 transition-colors luxury-hover-shadow"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6">
            <nav className="flex flex-col space-y-4 pt-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="flex items-center space-x-3 p-4 text-sand-beige/70 hover:text-sand-beige hover:bg-wine-purple/10 transition-all duration-300 luxury-hover-shadow"
              >
                <Heart className="w-5 h-5" />
                <span className="font-medium text-lg">Özellikler</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center space-x-3 p-4 text-sand-beige/70 hover:text-sand-beige hover:bg-wine-purple/10 transition-all duration-300 luxury-hover-shadow"
              >
                <Moon className="w-5 h-5" />
                <span className="font-medium text-lg">Yorumlar</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('stats')}
                className="flex items-center space-x-3 p-4 text-sand-beige/70 hover:text-sand-beige hover:bg-wine-purple/10 transition-all duration-300 luxury-hover-shadow"
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