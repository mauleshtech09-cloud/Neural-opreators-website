import React from 'react';
import { useLightbox } from './LightboxProvider';

/**
 * Wraps an image with click-to-expand lightbox. Only renders when `src` is provided.
 * Preserves layout: pass the same classes you would use on a standalone <img>.
 */
export default function PreviewableImage({
  src,
  alt = 'Image preview',
  className = '',
  wrapperClassName = '',
}) {
  const { openLightbox } = useLightbox();

  if (!src) return null;

  return (
    <button
      type="button"
      onClick={() => openLightbox(src, alt)}
      className={`group block w-full cursor-zoom-in border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${wrapperClassName}`}
      aria-label={`View full size: ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`${className} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
      />
    </button>
  );
}
