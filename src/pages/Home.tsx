import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  )
}

export default Home 