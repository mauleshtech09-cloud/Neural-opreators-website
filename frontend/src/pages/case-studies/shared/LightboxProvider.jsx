import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ease } from './motion';

const LightboxContext = createContext(null);

function ImageLightboxModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" aria-hidden />

      <motion.button
        type="button"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2, ease }}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/90 text-zinc-200 shadow-lg transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white sm:right-6 sm:top-6"
        aria-label="Close image preview"
      >
        <X className="h-5 w-5" aria-hidden />
      </motion.button>

      <motion.img
        src={src}
        alt={alt || ''}
        loading="eager"
        decoding="async"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.35, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-[1] max-h-[min(90dvh,900px)] max-w-[min(95vw,1200px)] rounded-2xl border border-zinc-700/50 object-contain shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)]"
        draggable={false}
      />
    </motion.div>,
    document.body
  );
}

export function LightboxProvider({ children }) {
  const [active, setActive] = useState(null);

  const openLightbox = useCallback((src, alt = 'Image preview') => {
    if (!src) return;
    setActive({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox, isOpen: Boolean(active) }}>
      {children}
      <AnimatePresence>
        {active && (
          <ImageLightboxModal
            key={active.src}
            src={active.src}
            alt={active.alt}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
