import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, MessageSquare, Mail } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import styles from './Pricing.module.css';

const tiers = [
  {
    id: 'basic',
    title: 'Basic Automation',
    price: '₹2,000',
    range: 'to ₹3,000',
    description: 'Perfect for simple business automations.',
    featured: false,
    accent: false,
    features: [
      'Simple workflow automation',
      'WhatsApp or Email automation',
      'Basic lead handling',
      'Small business setup',
    ],
  },
  {
    id: 'standard',
    title: 'AI Automation',
    price: '₹5,000',
    range: 'to ₹7,000',
    description: 'Best for growing businesses and workflow scaling.',
    featured: true,
    accent: false,
    features: [
      'CRM integration',
      'Automated workflows',
      'AI lead qualification',
      'Slack / Email notifications',
      'Multi-app automation',
    ],
  },
  {
    id: 'pro',
    title: 'AI Agent System',
    price: '₹8,000',
    range: 'to ₹12,000',
    description: 'Advanced AI systems for autonomous operations.',
    featured: false,
    accent: true,
    features: [
      'AI agents',
      'Smart conversational workflows',
      'AI customer interaction systems',
      'Multi-platform automation',
      'Advanced integrations',
    ],
  },
];

const Pricing = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [hash]);

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    automationType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          automationType: '',
          budget: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="section">
      <div className="container">
        <Reveal>
          <h1 className="section-title">Transparent Pricing</h1>
          <p className="section-subtitle">
            Choose the perfect automation plan to elevate your business operations. No hidden fees.
          </p>
        </Reveal>

        <div className={`grid grid-cols-3 ${styles.pricingGrid}`}>
          {tiers.map((tier, idx) => (
            <Reveal key={tier.id} delay={idx * 0.08}>
              <div
                className={`card glass ${styles.pricingCard} ${
                  tier.featured ? styles.featuredCard : ''
                }`}
              >
                {tier.featured && <span className={styles.popularBadge}>MOST POPULAR</span>}
                <h3
                  className={`${styles.pricingCardTitle} ${
                    tier.featured ? styles.pricingCardTitleFeatured : ''
                  }`}
                >
                  {tier.title}
                </h3>
                <div className={styles.priceRow}>
                  <span className={styles.priceMain}>{tier.price}</span>
                  <span className={styles.priceRange}>{tier.range}</span>
                </div>
                <p className={styles.pricingDesc}>{tier.description}</p>
                <ul className={styles.featureList}>
                  {tier.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <Check
                        size={20}
                        color={tier.accent ? 'var(--accent)' : 'var(--primary)'}
                        style={{ flexShrink: 0, marginTop: 2 }}
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? 'primary' : 'secondary'}
                  style={{ width: '100%' }}
                  href="#contact"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="contact" className={`glass ${styles.contactSection}`}>
          <div className="grid-contact">
            <Reveal className={styles.contactIntro}>
              <h2 className={styles.contactTitle}>Ready to Get Started?</h2>
              <p className={styles.contactText}>
                Fill out the form to request a free consultation, or reach out to us directly via
                WhatsApp or Email. We usually reply within a few hours!
              </p>
              <div className={styles.contactActions}>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappBtn}
                >
                  <MessageSquare size={22} aria-hidden /> Contact on WhatsApp
                </a>
                <a href="mailto:hello@neuraloperators.com" className={styles.emailBtn}>
                  <Mail size={22} aria-hidden /> Email Us Directly
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <form
                onSubmit={handleContactSubmit}
                className={`card glass ${styles.formCard}`}
              >
                <h3 className={styles.formTitle}>Send an Inquiry</h3>

                {status === 'success' && (
                  <div className={styles.alertSuccess} role="status">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className={styles.alertError} role="alert">
                    Failed to send message. Please try WhatsApp directly.
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="businessName">
                    Business Name *
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    className="form-input"
                    placeholder="Acme Corp"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="automationType">
                    Type of Automation Needed *
                  </label>
                  <select
                    id="automationType"
                    name="automationType"
                    className="form-input"
                    required
                    value={formData.automationType}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Lead Automation">Lead Automation</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="AI Agent">AI Agent</option>
                    <option value="Appointment Automation">Appointment Automation</option>
                    <option value="Email Workflow">Email Workflow</option>
                    <option value="CRM Automation">CRM Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="budget">
                    Budget Range *
                  </label>
                  <input
                    id="budget"
                    type="text"
                    name="budget"
                    className="form-input"
                    placeholder="e.g. ₹5,000 - ₹10,000"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="4"
                    placeholder="Briefly describe your goals..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
