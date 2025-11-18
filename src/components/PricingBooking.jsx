import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PricingBooking = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Pricing Card */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 blur-3xl" />
            <h3 className="text-2xl font-bold">NOVA X Redline</h3>
            <div className="mt-4 text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$149,900</span>
            </div>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>• Dual-motor AWD, adaptive suspension</li>
              <li>• Premium interior with carbon accents</li>
              <li>• Performance package and aero kit</li>
            </ul>
            <button className="mt-8 rounded-2xl bg-gradient-to-r from-slate-300 to-white px-6 py-3 font-semibold text-slate-900 shadow-[0_0_40px_rgba(148,163,184,0.25)]">Reserve Now</button>
          </motion.div>

          {/* Booking Form */}
          <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h3 className="text-2xl font-bold">Book a Test Drive</h3>
            <div className="mt-6 grid gap-5">
              <div>
                <label className="mb-2 block text-sm text-slate-400">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none ring-cyan-500/30 focus:ring" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none ring-cyan-500/30 focus:ring" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Preferred Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none ring-cyan-500/30 focus:ring" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold shadow-[0_0_40px_rgba(56,189,248,0.35)] disabled:opacity-60">{loading ? 'Submitting...' : 'Submit'}</button>
            {submitted && <p className="mt-3 text-sm text-cyan-300">Thanks! We’ll be in touch shortly.</p>}
            {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default PricingBooking
