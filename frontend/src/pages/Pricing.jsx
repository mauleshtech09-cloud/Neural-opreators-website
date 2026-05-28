import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WHATSAPP_URL, EMAIL_URL } from '../config/contact';
import { Check, MessageSquare, Mail, X } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import styles from './Pricing.module.css';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [agreeFreeTerms, setAgreeFreeTerms] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAgree, setConfirmAgree] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openConfirm = () => {
    setConfirmAgree(false);
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setConfirmOpen(false);
    setConfirmAgree(false);
  };

  useEffect(() => {
    if (!confirmOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeConfirm();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [confirmOpen]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!agreeFreeTerms) return;
    openConfirm();
  };

  const finalizeSubmission = async () => {
    if (!confirmAgree) return;
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
        setAgreeFreeTerms(false);
        closeConfirm();
      } else {
        setStatus('error');
        closeConfirm();
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      closeConfirm();
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
          <Reveal>
            <div className={styles.freeOffer}>
              <div className={styles.freeOfferHead}>
                <h2 className={styles.freeOfferTitle}>🚀 Get Your First Basic Automation Setup Free</h2>
                <p className={styles.freeOfferSubtitle}>
                  We are currently onboarding selected businesses for complimentary automation setup projects to
                  help streamline repetitive workflows using AI and automation systems.
                </p>
              </div>

              <div className={styles.freeOfferGrid}>
                <div className={styles.freeOfferCard}>
                  <h3 className={styles.freeOfferCardTitle}>Included Features</h3>
                  <ul className={styles.freeOfferList}>
                    <li>Instagram DM automation</li>
                    <li>Lead capture systems</li>
                    <li>Google Sheets integrations</li>
                    <li>Slack / Email notifications</li>
                    <li>Basic workflow automation</li>
                  </ul>
                  <div className={styles.freeOfferNote}>
                    Limited onboarding slots available.
                  </div>
                </div>

                <div className={`glass ${styles.termsCard}`}>
                  <h3 className={styles.termsTitle}>Terms &amp; Conditions</h3>
                  <ul className={styles.termsList}>
                    <li>Offer valid only for basic automation systems</li>
                    <li>Advanced AI agents and enterprise systems are excluded</li>
                    <li>One free setup per business</li>
                    <li>Client must provide required workflow details and platform access</li>
                    <li>Delivery timeline depends on project complexity</li>
                    <li>Neural Operators reserves the right to reject unsuitable projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid-contact">
            <Reveal className={styles.contactIntro}>
              <h2 className={styles.contactTitle}>Ready to Get Started?</h2>
              <p className={styles.contactText}>
                Fill out the form to request a free consultation, or reach out to us directly via
                WhatsApp or Email. We usually reply within a few hours!
              </p>
              <div className={styles.contactActions}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  <MessageSquare size={22} aria-hidden /> Contact on WhatsApp
                </a>
                <a href={EMAIL_URL} className={styles.emailBtn}>
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
                <div className={styles.termsAgreeRow}>
                  <label className={styles.termsAgreeLabel}>
                    <input
                      type="checkbox"
                      checked={agreeFreeTerms}
                      onChange={(e) => setAgreeFreeTerms(e.target.checked)}
                      required
                    />
                    <span>I agree to the Terms &amp; Conditions for the free automation setup.</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  style={{ width: '100%', marginTop: '0.5rem', opacity: agreeFreeTerms ? 1 : 0.7 }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            className={styles.confirmOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeConfirm}
          >
            <motion.div
              className={styles.confirmModal}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Free automation submission confirmation"
            >
              <button type="button" className={styles.confirmClose} onClick={closeConfirm} aria-label="Close">
                <X size={18} aria-hidden />
              </button>

              <h3 className={styles.confirmTitle}>🎉 Free Automation Request Submitted</h3>
              <p className={styles.confirmText}>
                Thank you for contacting Neural Operators.
                <br />
                <br />
                Your request for a complimentary automation setup has been received successfully.
                <br />
                <br />
                Our team will review your business requirements and contact you shortly if your project qualifies
                for the free onboarding program.
              </p>

              <div className={styles.confirmChecklist}>
                <p className={styles.confirmChecklistTitle}>Before proceeding, please confirm that:</p>
                <ul>
                  <li>You understand this offer applies only to basic automation systems</li>
                  <li>Advanced/custom enterprise systems are not included</li>
                  <li>Required business access/details must be provided</li>
                </ul>
              </div>

              <label className={styles.confirmAgree}>
                <input
                  type="checkbox"
                  checked={confirmAgree}
                  onChange={(e) => setConfirmAgree(e.target.checked)}
                />
                <span>I confirm that I have read and accepted the Terms &amp; Conditions.</span>
              </label>

              <div className={styles.confirmActions}>
                <button type="button" className={styles.confirmSecondary} onClick={closeConfirm}>
                  Back
                </button>
                <button
                  type="button"
                  className={styles.confirmPrimary}
                  onClick={finalizeSubmission}
                  disabled={!confirmAgree || status === 'sending'}
                >
                  {status === 'sending' ? 'Submitting…' : 'Confirm & Submit'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pricing;
