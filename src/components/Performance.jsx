import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useAngle } from './AngleContext'

const AngleSetter = ({ target }) => {
  const ref = React.useRef(null)
  const inView = useInView(ref, { amount: 0.6 })
  const { setAngle } = useAngle()
  useEffect(() => { if (inView) setAngle(target) }, [inView, target, setAngle])
  return <div ref={ref} />
}

const Gauge = ({ label, value, unit, delay = 0 }) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (inView) controls.start({ width: `${value}%` })
  }, [inView])

  return (
    <div>
      <div className="mb-2 flex items-end justify-between text-slate-400">
        <span className="text-sm">{label}</span>
        <span className="text-sm text-cyan-300">{value}{unit}</span>
      </div>
      <div ref={ref} className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, delay }}
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
        />
      </div>
    </div>
  )
}

const Performance = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <AngleSetter target={45} />
      {/* Motion streaks */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute left-0 top-10 h-0.5 w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />
        <div className="absolute right-0 top-24 h-0.5 w-1/2 bg-gradient-to-l from-transparent via-fuchsia-400 to-transparent blur-[1px]" />
        <div className="absolute left-10 top-40 h-0.5 w-2/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Raw Performance</h2>
          <p className="mt-2 text-slate-400">Instant torque, relentless acceleration, and track-bred dynamics.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Speedometer */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full border border-slate-800 bg-slate-900/60 p-6">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-500 via-blue-600 to-transparent opacity-30" />
              <div className="absolute inset-8 rounded-full bg-slate-950" />
              <motion.div
                initial={{ rotate: -110 }}
                whileInView={{ rotate: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 h-24 w-1 -translate-x-1/2 -translate-y-1/2 origin-bottom rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-center">
                  <div className="text-4xl font-extrabold">2.9s</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">0–60 mph</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Power bars */}
          <div className="grid gap-5">
            <Gauge label="Horsepower" value={92} unit="%" />
            <Gauge label="Torque" value={88} unit="%" delay={0.1} />
            <Gauge label="Downforce" value={74} unit="%" delay={0.2} />
            <Gauge label="Battery Efficiency" value={81} unit="%" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance
