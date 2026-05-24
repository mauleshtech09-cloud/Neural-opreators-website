import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className={`mb-12 max-w-3xl sm:mb-14 lg:mb-16 ${alignClass}`}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
          {badge}
        </span>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
