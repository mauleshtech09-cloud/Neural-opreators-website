import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';
import PreviewableImage from './PreviewableImage';

export default function ScreenshotFrame({ image, imageAlt = 'Module screenshot' }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative aspect-[4/3] w-full min-h-[220px] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/35 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-glow sm:min-h-[260px] lg:min-h-[300px]"
    >
      {image ? (
        <PreviewableImage
          src={image}
          alt={imageAlt}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-950/90 to-blue-950/10"
          aria-hidden
        />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </motion.div>
  );
}
