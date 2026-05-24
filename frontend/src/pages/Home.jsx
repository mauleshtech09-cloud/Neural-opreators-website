import React from 'react';
import { ArrowRight, Zap, Bot, LineChart, MessageSquare, TrendingUp, Cpu } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const trustItems = [
    { icon: Zap, label: 'Fast Setup' },
    { icon: MessageSquare, label: 'WhatsApp Support' },
    { icon: Cpu, label: 'AI-Powered Workflows' },
    { icon: Bot, label: 'Lead Automation' },
  ];

  return (
    <div>
      <section className={`${styles.hero} section`} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroContainer}`}>
          <Reveal yOffset={24}>
            <span className="badge">AI Automation Agency</span>
          </Reveal>

          <Reveal delay={0.08} yOffset={28}>
            <h1 id="hero-heading" className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Intelligent Systems That</span>
              <span className={`${styles.heroTitleGradient} gradient-text`}>
                Automate Your Business
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16} yOffset={24}>
            <p className={styles.heroSubtext}>
              We help businesses automate lead capture, customer communication, appointment scheduling, and follow-up workflows using intelligent AI systems.
            </p>
          </Reveal>

          <Reveal delay={0.24} yOffset={20}>
            <div className={styles.heroActions}>
              <Button to="/pricing" variant="primary">
                Book Free Consultation <ArrowRight size={18} aria-hidden />
              </Button>
              <Button to="/services" variant="secondary">View Automations</Button>
            </div>
          </Reveal>

          <Reveal delay={0.32} yOffset={16}>
            <div className={styles.heroTrust}>
              {trustItems.map(({ icon: Icon, label }) => (
                <span key={label} className={styles.trustItem}>
                  <Icon size={16} aria-hidden /> {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">
              We deliver high-impact automation systems built for scale and efficiency.
            </p>
          </Reveal>
          <div className="grid grid-cols-3">
            {[
              { Icon: Bot, title: 'Intelligent Automation', text: 'We automate repetitive business tasks so you can focus on growth and strategy.' },
              { Icon: TrendingUp, title: 'Lead Generation Systems', text: 'Capture, qualify, and organize leads automatically using AI-driven workflows.' },
              { Icon: Zap, title: 'Fast Deployment', text: 'Launch business automation systems in days, not months. We move at startup speed.' },
              { Icon: LineChart, title: 'Affordable Automation', text: 'High-impact automation solutions without enterprise pricing. We deliver maximum ROI.' },
              { Icon: MessageSquare, title: 'AI-Powered Communication', text: 'Automate replies, follow-ups, reminders, and 24/7 customer interactions.' },
              { Icon: Cpu, title: 'ROI-Focused Systems', text: 'We build automation workflows designed explicitly to save time and improve conversion rates.' },
            ].map(({ Icon, title, text }, idx) => (
              <Reveal key={title} delay={idx * 0.06}>
                <div className="card glass">
                  <Icon className={styles.featureIcon} size={32} aria-hidden />
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureText}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Our Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-2">
            <Reveal delay={0.08}>
              <div className={`card glass ${styles.serviceCard}`}>
                <h3>Lead Generation Automation</h3>
                <p>Capture and qualify leads 24/7 using intelligent AI-driven funnels.</p>
                <Link to="/services" className={styles.serviceLink}>
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className={`card glass ${styles.serviceCard}`}>
                <h3>CRM Workflows & Agents</h3>
                <p>Automate your client onboarding, data syncing, and support with AI agents.</p>
                <Link to="/services" className={styles.serviceLink}>
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to Automate Your Business?</h2>
              <p className={styles.ctaText}>
                Stop wasting time on manual tasks. Let&apos;s build AI systems that scale your operations seamlessly.
              </p>
              <Button to="/pricing" variant="primary" className={styles.ctaBtn}>
                Book Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
