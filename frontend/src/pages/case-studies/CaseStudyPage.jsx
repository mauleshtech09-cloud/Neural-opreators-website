import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, MessageCircle } from 'lucide-react';
import SectionShell from './shared/SectionShell';
import SectionHeader from './shared/SectionHeader';
import DiagramPlaceholder from './shared/DiagramPlaceholder';
import ScreenshotFrame from './shared/ScreenshotFrame';
import VideoDemoPlaceholder from './shared/VideoDemoPlaceholder';
import { WHATSAPP_URL } from '../../config/contact';
import { ease, fadeUp, stagger } from './shared/motion';

function HeroGlow({ accent = 'blue' }) {
  const isRed = accent === 'red';
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -left-32 top-20 h-72 w-72 rounded-full blur-[100px] animate-pulse-slow ${
          isRed ? 'bg-red-600/15' : 'bg-blue-600/20'
        }`}
      />
      <div
        className={`absolute -right-24 bottom-10 h-80 w-80 rounded-full blur-[120px] animate-pulse-slow ${
          isRed ? 'bg-rose-600/12' : 'bg-indigo-600/15'
        }`}
      />
      <div
        className={`absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full blur-[80px] animate-float ${
          isRed ? 'bg-red-500/10' : 'bg-violet-500/10'
        }`}
      />
    </div>
  );
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const primaryBtnClass =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg sm:text-base';

const secondaryBtnClass =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/60 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-zinc-800/80 sm:text-base';

function renderHeroCta(cta, variant = 'primary') {
  const className = variant === 'primary' ? primaryBtnClass : secondaryBtnClass;

  if (cta.scrollTo) {
    return (
      <button type="button" onClick={() => scrollToId(cta.scrollTo)} className={className}>
        {cta.label}
        {variant === 'primary' && <ArrowRight className="h-4 w-4" aria-hidden />}
      </button>
    );
  }

  if (cta.href) {
    return (
      <Link to={cta.href} className={className}>
        {cta.label}
      </Link>
    );
  }

  return null;
}

function CtaButton({ button }) {
  if (button.type === 'route') {
    const isPrimary = button.variant === 'primary';
    return (
      <Link
        to={button.to}
        className={
          isPrimary
            ? 'inline-flex min-h-[52px] w-full min-w-[200px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg sm:w-auto'
            : 'inline-flex min-h-[52px] w-full min-w-[200px] items-center justify-center gap-2 rounded-xl border border-zinc-500/50 bg-zinc-900/50 px-8 py-3.5 text-base font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:w-auto'
        }
      >
        {button.label}
        {isPrimary && <ArrowRight className="h-5 w-5" aria-hidden />}
      </Link>
    );
  }
  if (button.type === 'whatsapp') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[52px] w-full min-w-[200px] items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-600/20 px-8 py-3.5 text-base font-semibold text-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600/30 hover:shadow-glow-green sm:w-auto"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        {button.label}
      </a>
    );
  }
  return null;
}

export default function CaseStudyPage({ config }) {
  const { hero, before, workflow, modules, screenshotGallery, videoDemo, benefits, after, cta } =
    config;

  return (
    <div className="overflow-x-hidden bg-surface text-zinc-200">
      {/* HERO */}
      <section className="relative flex min-h-[calc(100dvh-5rem)] items-center bg-hero-gradient pt-8 pb-16 sm:pt-12 sm:pb-20">
        <HeroGlow accent={hero.accentGlow} />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              to="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-blue-400"
            >
              ← Back to Projects
            </Link>

            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
              Case Study
            </span>

            <h1 className="max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {renderHeroCta(hero.primaryCta, 'primary')}
              {renderHeroCta(hero.secondaryCta, 'secondary')}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEFORE */}
      <SectionShell className="border-t border-zinc-800/80 bg-surface-elevated/50">
        <SectionHeader
          badge={before.badge}
          title={before.title}
          subtitle={before.subtitle}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:gap-5"
        >
          {before.problems.map(({ icon: Icon, text }) => (
            <motion.div
              key={text}
              variants={fadeUp}
              className="group flex items-start gap-4 rounded-2xl border border-amber-500/15 bg-gradient-to-br from-amber-500/5 to-zinc-900/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-glow-amber sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-500/90">
                    Pain point
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center text-sm italic text-zinc-500 sm:text-base"
        >
          {before.footerNote}
        </motion.p>
      </SectionShell>

      {/* WORKFLOW */}
      <SectionShell id={workflow.id} className="bg-surface">
        <SectionHeader
          badge={workflow.badge}
          title={workflow.title}
          subtitle={workflow.subtitle}
        />

        {workflow.image ? (
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            src={workflow.image}
            alt={workflow.imageAlt || 'Workflow diagram'}
            className="mx-auto mt-10 w-full max-w-5xl rounded-2xl border border-zinc-800/90 shadow-2xl"
          />
        ) : (
          <div className="mt-10">
            <DiagramPlaceholder />
          </div>
        )}

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 text-center font-mono text-xs text-zinc-500 sm:text-sm"
        >
          {workflow.flowText}
        </motion.p>
      </SectionShell>

      {/* MODULES */}
      <SectionShell className="border-t border-zinc-800/80 bg-surface-elevated/30">
        <SectionHeader
          badge={modules.badge}
          title={modules.title}
          subtitle={modules.subtitle}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {modules.items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-zinc-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>

      {/* SCREENSHOT GALLERY */}
      {screenshotGallery?.frames?.length > 0 && (
        <SectionShell className="bg-surface">
          {screenshotGallery.title && (
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="mb-8 text-center text-2xl font-extrabold tracking-tight text-zinc-50 sm:mb-10 sm:text-3xl lg:mb-12"
            >
              {screenshotGallery.title}
            </motion.h2>
          )}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {screenshotGallery.frames.map((frame, index) => (
              <ScreenshotFrame
                key={frame.id ?? `screenshot-${index}`}
                image={frame.image}
                imageAlt={frame.imageAlt}
              />
            ))}
          </motion.div>
        </SectionShell>
      )}

      {/* VIDEO DEMO */}
      {videoDemo && (
        <SectionShell
          id={videoDemo.id}
          className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-900/50 to-surface"
        >
          <SectionHeader
            badge={videoDemo.badge}
            title={videoDemo.title}
            subtitle={videoDemo.subtitle}
          />
          <VideoDemoPlaceholder label={videoDemo.placeholderLabel} />
        </SectionShell>
      )}

      {/* BENEFITS */}
      <SectionShell className="bg-surface">
        <SectionHeader
          badge={benefits.badge}
          title={benefits.title}
          subtitle={benefits.subtitle}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {benefits.items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-glow"
            >
              <Icon
                className="mb-4 h-8 w-8 text-blue-400 transition-transform group-hover:scale-110"
                aria-hidden
              />
              <h3 className="text-lg font-bold text-zinc-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>

      {/* AFTER */}
      <SectionShell className="border-t border-zinc-800/80 bg-gradient-to-b from-emerald-950/20 to-surface">
        <SectionHeader badge={after.badge} title={after.title} subtitle={after.subtitle} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {after.wins.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-3.5 sm:px-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  ✓
                </span>
                <span className="text-sm text-zinc-300 sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {after.stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-6 text-center backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:shadow-glow-green sm:p-8"
              >
                <p className="text-3xl font-extrabold text-emerald-400 sm:text-4xl">{value}</p>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionShell>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-violet-600/10 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                {cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-zinc-400 sm:text-lg">
                {cta.subheadline}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                {cta.buttons.map((button) => (
                  <CtaButton key={button.label} button={button} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
