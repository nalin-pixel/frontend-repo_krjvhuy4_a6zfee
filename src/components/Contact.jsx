import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="absolute h-1 w-1 rounded-full bg-cyan-400/40" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 23) % 100}%`, animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.2}s infinite alternate` }} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Get in Touch</h2>
            <p className="mt-2 text-slate-400">Find a dealer near you and schedule an exclusive viewing.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.52%2C37.69%2C-122.35%2C37.81&amp;layer=mapnik" className="h-64 w-full"></iframe>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h3 className="text-xl font-semibold">Dealer Contact</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>Phone: (555) 012-3456</p>
              <p>Email: sales@novamotors.example</p>
              <p>Hours: Mon–Sat, 9am–7pm</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes float{from{transform:translateY(0)}to{transform:translateY(-10px)}}`}</style>
    </section>
  )
}

export default Contact
