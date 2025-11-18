import React from 'react'
import Hero3D from './components/Hero3D'
import Viewer from './components/Viewer'
import Performance from './components/Performance'
import Interior from './components/Interior'
import Gallery from './components/Gallery'
import Features from './components/Features'
import PricingBooking from './components/PricingBooking'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero3D />
      <Viewer />
      <Performance />
      <Interior />
      <Gallery />
      <Features />
      <PricingBooking />
      <Contact />
      <FinalCTA />
    </div>
  )
}

export default App
