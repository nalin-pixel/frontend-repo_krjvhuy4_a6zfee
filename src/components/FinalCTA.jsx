import React from 'react'
import { motion } from 'framer-motion'

const FinalCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 -skew-y-3 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),rgba(2,6,23,0.9))]" />

      {/* Road lines */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-500/40 to-transparent" />

      {/* Car motion blur bar */}
      <motion.div
        initial={{ x: '-20%' }}
        whileInView={{ x: '120%' }}
        viewport={{ once: true }}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-1/2 h-24 w-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/60 to-transparent blur-2xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Experience the Future of Driving</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Step into a new dimension of speed, control and intelligent luxury.</p>
        <a href="#booking" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-semibold shadow-[0_0_50px_rgba(56,189,248,0.35)]">Book Your Test Drive</a>
      </div>
    </section>
  )
}

export default FinalCTA
