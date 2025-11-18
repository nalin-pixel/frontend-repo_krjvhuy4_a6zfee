import React from 'react'
import { motion } from 'framer-motion'

const hotspots = [
  { x: '30%', y: '38%', label: 'Ambient LED' },
  { x: '56%', y: '52%', label: 'Carbon Fiber Trim' },
  { x: '68%', y: '42%', label: 'Heads-up Display' },
]

const Interior = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Interior Experience</h2>
          <p className="mt-2 text-slate-400">Immerse yourself in a driver-first cockpit with luminous details.</p>
        </div>

        <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-800 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),rgba(2,6,23,0.9))]">
          {/* Placeholder cockpit panorama gradient with subtle texture */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.9),rgba(2,6,23,0.9)),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-70" />

          {/* Hotspots */}
          {hotspots.map((h) => (
            <motion.div key={h.label} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="absolute" style={{ left: h.x, top: h.y }}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-cyan-500/20 blur-xl" />
                <div className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/70 px-3 py-1.5 text-xs">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                  <span className="text-slate-200">{h.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interior
