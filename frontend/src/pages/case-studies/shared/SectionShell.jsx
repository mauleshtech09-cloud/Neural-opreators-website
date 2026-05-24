import React from 'react';

export default function SectionShell({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
