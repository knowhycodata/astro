import { useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import SplashScreen from './components/SplashScreen'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App 