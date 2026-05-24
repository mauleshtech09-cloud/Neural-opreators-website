import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeUp } from './motion';

export default function VideoDemoPlaceholder({
  label = 'AI automation demo video will be added here',
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-dashed border-zinc-600/80 bg-zinc-900/60 transition-all duration-500 hover:border-blue-500/45 hover:shadow-glow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-zinc-950/40 to-violet-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),_transparent_65%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center gap-5 p-8 text-center sm:min-h-[280px]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/15 text-blue-300 shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:bg-blue-500/25">
          <Play className="h-7 w-7 fill-current pl-1" aria-hidden />
        </div>
        <p className="max-w-md text-sm font-medium text-zinc-400 sm:text-base">{label}</p>
        <p className="text-xs text-zinc-600">
          Replace with &lt;video&gt; or embed when your demo is ready
        </p>
      </div>
    </motion.div>
  );
}
