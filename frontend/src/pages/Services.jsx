import React from 'react';
import {
  Smartphone,
  Cpu,
  Instagram,
  Target,
  MessageSquare,
  Calendar,
  Workflow,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import pageStyles from './Pages.module.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'WhatsApp Automation',
      icon: <Smartphone size={40} color="var(--primary)" aria-hidden />,
      description: 'Engage customers directly on their favorite messaging app with automated workflows.',
      benefits: ['Automated confirmations', 'Reminder messages', 'Booking workflow', 'Bulk messaging'],
    },
    {
      id: 2,
      title: 'AI Agents',
      icon: <Cpu size={40} color="var(--primary)" aria-hidden />,
      description: 'Autonomous AI agents capable of performing complex, multi-step business tasks.',
      benefits: ['Smart conversational workflows', 'Multi-platform automation', 'Advanced reasoning', 'Task execution'],
    },
    {
      id: 3,
      title: 'Instagram DM Automation',
      icon: <Instagram size={40} color="var(--primary)" aria-hidden />,
      description: 'Convert followers into customers instantly with smart keyword-triggered DM replies.',
      benefits: ['Keyword triggers', 'Story reply automation', 'Lead capture', 'Instant engagement'],
    },
    {
      id: 4,
      title: 'Lead Qualification',
      icon: <Target size={40} color="var(--primary)" aria-hidden />,
      description: 'Capture, qualify, and route leads automatically to your CRM or sales team.',
      benefits: ['AI lead scoring', 'Automated follow-up', 'Slack notifications', 'CRM pushing'],
    },
    {
      id: 5,
      title: 'AI Chatbots',
      icon: <MessageSquare size={40} color="var(--primary)" aria-hidden />,
      description: 'Intelligent conversational agents that engage visitors and answer queries 24/7.',
      benefits: ['Instant replies', 'Multi-language support', 'FAQ automation', 'Human handoff'],
    },
    {
      id: 6,
      title: 'Appointment Systems',
      icon: <Calendar size={40} color="var(--primary)" aria-hidden />,
      description: 'Automated booking workflows that eliminate back-and-forth emails.',
      benefits: ['Calendar syncing', 'Automated reminders', 'Timezone detection', 'Payment collection'],
    },
    {
      id: 7,
      title: 'CRM Integration',
      icon: <Workflow size={40} color="var(--primary)" aria-hidden />,
      description: 'Connect all your tools and automate data entry across your business stack.',
      benefits: ['Data syncing', 'Lead tagging', 'Pipeline management', 'Error reduction'],
    },
    {
      id: 8,
      title: 'Email Automation',
      icon: <Mail size={40} color="var(--primary)" aria-hidden />,
      description: 'Smart email sequences that nurture leads and re-engage dormant customers.',
      benefits: ['Behavior-based triggers', 'Personalized content', 'A/B testing', 'Analytics tracking'],
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <Reveal>
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive AI solutions designed to help your business scale efficiently.
          </p>
        </Reveal>

        <div className="grid grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.06}>
              <div className={`card glass ${pageStyles.serviceCardInner}`}>
                <div className={pageStyles.serviceIconWrap}>
                  <div className={pageStyles.serviceIconBox}>{service.icon}</div>
                </div>
                <h3 className={pageStyles.serviceCardTitle}>{service.title}</h3>
                <p className={pageStyles.serviceCardDesc}>{service.description}</p>
                <ul className={pageStyles.benefitList}>
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className={pageStyles.benefitItem}>
                      <CheckCircle2
                        size={20}
                        color="var(--accent)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                        aria-hidden
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/pricing" variant="secondary" style={{ width: '100%' }}>
                  View Pricing
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
