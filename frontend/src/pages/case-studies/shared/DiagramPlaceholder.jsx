import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { fadeUp } from './motion';

export default function DiagramPlaceholder({
  label = 'Workflow diagram will be added here',
  aspect = 'aspect-[16/9]',
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative w-full overflow-hidden rounded-2xl border-2 border-dashed border-zinc-600/80 bg-zinc-900/50 ${aspect} transition-all duration-500 hover:border-blue-500/50 hover:shadow-glow`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800/80 text-blue-400 shadow-glow transition-transform duration-500 group-hover:scale-110">
          <Upload className="h-7 w-7" aria-hidden />
        </div>
        <p className="max-w-xs text-sm font-medium text-zinc-400 sm:text-base">{label}</p>
      </div>
    </motion.div>
  );
}
