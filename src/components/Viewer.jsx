import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Paintbrush, Sun, DoorOpen, RefreshCcw, Disc3 } from 'lucide-react'

const colors = [
  { name: 'Shadow Gray', class: 'from-slate-800 to-slate-700', body: '#2b2f36' },
  { name: 'Neo Cyan', class: 'from-cyan-600 to-sky-600', body: '#0ea5e9' },
  { name: 'Crimson Pulse', class: 'from-rose-600 to-pink-600', body: '#e11d48' },
]

const wheels = [
  { name: 'Aero Black', ring: 'bg-slate-800', spokes: 'bg-slate-600' },
  { name: 'Forged Gunmetal', ring: 'bg-zinc-700', spokes: 'bg-zinc-500' },
  { name: 'Chrome Edge', ring: 'bg-slate-300', spokes: 'bg-slate-400' },
]

const Viewer = () => {
  const [doorOpen, setDoorOpen] = useState(false)
  const [headlights, setHeadlights] = useState(true)
  const [colorIndex, setColorIndex] = useState(0)
  const [wheelIndex, setWheelIndex] = useState(0)

  const color = colors[colorIndex]
  const wheel = wheels[wheelIndex]

  // Lightweight illustrative viewer using 2.5D card with interactive toggles.
  // Provides smooth transitions while keeping performance high.

  return (
    <section id="viewer" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Interactive Viewer</h2>
            <p className="mt-2 text-slate-400">Rotate, toggle features, and style your Nova X.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          {/* Car card */}
          <motion.div
            className="relative aspect-[16/9] rounded-3xl border border-slate-800 bg-gradient-to-br p-6 shadow-2xl"
            whileHover={{ rotateX: 3, rotateY: -3 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ background: undefined }}
          >
            {/* Road */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_80%)]" />

            {/* Car body */}
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative mx-auto mt-8 h-52 w-[88%] rounded-[2.2rem] bg-gradient-to-br ${color.class} shadow-[inset_0_1px_8px_rgba(255,255,255,0.2),0_20px_60px_rgba(14,165,233,0.2)]`}
              style={{
                filter: 'saturate(1.05) contrast(1.05)',
                transform: 'translateZ(30px)'
              }}
            >
              {/* Cabin */}
              <div className="absolute left-1/2 top-2 h-24 w-[70%] -translate-x-1/2 rounded-2xl bg-gradient-to-b from-slate-700/80 to-slate-900/90 backdrop-blur-sm" />
              {/* Light glow */}
              <AnimatePresence>
                {headlights && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -left-6 top-14 h-8 w-20 rounded-full bg-cyan-400/30 blur-xl"
                  />
                )}
              </AnimatePresence>

              {/* Wheels */}
              <div className={`absolute -bottom-6 left-10 h-16 w-16 rounded-full ${wheel.ring} shadow-inner`}>
                <div className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${wheel.spokes}`} />
              </div>
              <div className={`absolute -bottom-6 right-10 h-16 w-16 rounded-full ${wheel.ring} shadow-inner`}>
                <div className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${wheel.spokes}`} />
              </div>

              {/* Door */}
              <motion.div
                className="absolute right-[22%] top-8 h-28 w-24 origin-left rounded-xl bg-slate-800/60"
                animate={{ rotateY: doorOpen ? -55 : 0, translateZ: 10 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setDoorOpen(v => !v)} className="group flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-left hover:border-cyan-600/50">
                  <DoorOpen className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
                  <span className="text-sm">{doorOpen ? 'Close' : 'Open'} Door</span>
                </button>
                <button onClick={() => setHeadlights(v => !v)} className="group flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-left hover:border-cyan-600/50">
                  <Sun className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
                  <span className="text-sm">{headlights ? 'Lights Off' : 'Lights On'}</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">Appearance</h3>
              <div className="flex items-center gap-3">
                {colors.map((c, i) => (
                  <button key={c.name} onClick={() => setColorIndex(i)} className={`h-9 w-9 rounded-full border ${i === colorIndex ? 'border-cyan-400' : 'border-slate-700'}`} style={{ background: `linear-gradient(135deg, ${c.body}, #111827)` }} aria-label={c.name} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {wheels.map((w, i) => (
                  <button key={w.name} onClick={() => setWheelIndex(i)} className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${i === wheelIndex ? 'border-cyan-400 bg-slate-800/70' : 'border-slate-700/60 bg-slate-800/40'}`}>
                    <Disc3 className="h-4 w-4" />
                    <span className="text-xs text-slate-300">{w.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewer
