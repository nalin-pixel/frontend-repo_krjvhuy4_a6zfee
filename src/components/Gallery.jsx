import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1400&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Cinematic Gallery</h2>
          <p className="mt-2 text-slate-400">Parallax frames shot in motion.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((src, i) => (
            <motion.div key={src} whileHover={{ scale: 1.02 }} className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-800">
              <img src={src} alt="car" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
