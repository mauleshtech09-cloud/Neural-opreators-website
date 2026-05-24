import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
import { fadeUp } from './motion';

export default function ScreenshotPlaceholder({
  label = 'Module screenshot will be added here',
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-dashed border-zinc-600/70 bg-zinc-900/40 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-glow"
    >
      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <ImageIcon
          className="h-8 w-8 text-zinc-500 transition-colors group-hover:text-blue-400"
          aria-hidden
        />
        <p className="text-xs font-medium text-zinc-500 sm:text-sm">{label}</p>
      </div>
    </motion.div>
  );
}
