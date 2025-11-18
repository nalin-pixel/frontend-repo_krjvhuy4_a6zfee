import React, { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useAngle } from './AngleContext'

const AngleSetter = ({ target }) => {
  const ref = React.useRef(null)
  const inView = useInView(ref, { amount: 0.6 })
  const { setAngle } = useAngle()
  useEffect(() => { if (inView) setAngle(target) }, [inView, target, setAngle])
  return <div ref={ref} />
}

const Hero3D = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <AngleSetter target={0} />
      {/* Neon gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-32 w-[70%] rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      {/* 3D Car Scene */}
      <div className="relative h-[70vh] sm:h-[80vh] w-full">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.5)_85%)]" />
      </div>

      {/* Headline and CTAs */}
      <div className="relative mx-auto -mt-8 max-w-6xl px-6 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          NOVA X
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">Redline Edition</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-300"
        >
          A futuristic sports machine engineered for precision. Neon-lit, track-ready, and crafted for the next era of driving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#booking" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-white shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:brightness-110">
            <span className="font-semibold">Book Test Drive</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#viewer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-700/40 bg-slate-900/60 px-6 py-3 text-cyan-300 hover:bg-slate-900">
            <span className="font-semibold">Explore Features</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D
