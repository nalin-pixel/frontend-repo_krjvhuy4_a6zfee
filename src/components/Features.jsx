import React from 'react'
import { motion } from 'framer-motion'
import { Gauge, Zap, Cog, Brain, Seat } from 'lucide-react'

const featureList = [
  { icon: Gauge, title: 'Twin e-Motors', desc: 'Instant torque with vector control for razor-sharp handling.' },
  { icon: Zap, title: 'Solid-State Battery', desc: 'Ultra-fast charging and longer life with thermal stability.' },
  { icon: Cog, title: 'Active Aero', desc: 'Adaptive wings and shutters for optimal downforce and drag.' },
  { icon: Brain, title: 'AI Assist', desc: 'Predictive traction and route optimization using onboard AI.' },
  { icon: Seat, title: 'Immersive Comfort', desc: 'Heated, cooled, and massaging seats with memory foam bolsters.' },
]

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Intelligent Engineering</h2>
          <p className="mt-2 text-slate-400">Technology that fades away until you need it.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <Icon className="mb-3 h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
