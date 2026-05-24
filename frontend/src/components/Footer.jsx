import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Mail, Github, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Network className={styles.logoIcon} />
            <span>Neural Operators</span>
          </Link>
          <p className={styles.description}>
            AI Automation Systems that save time and generate leads. Modern, intelligent, and scalable.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}><Github size={20} /></a>
            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
            <a href="#" className={styles.socialLink}><Mail size={20} /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h4 className={styles.title}>Company</h4>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/pricing" className={styles.link}>Pricing</Link>
        </div>

        <div className={styles.links}>
          <h4 className={styles.title}>Capabilities</h4>
          <span className={styles.link}>AI Agents</span>
          <span className={styles.link}>Lead Generation</span>
          <span className={styles.link}>WhatsApp Automations</span>
          <span className={styles.link}>CRM Workflows</span>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Neural Operators. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
