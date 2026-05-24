import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Network } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import styles from './Navbar.module.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/pricing', label: 'Pricing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <Network className={styles.logoIcon} size={28} aria-hidden />
          <span>Neural Operators</span>
        </Link>

        <div className={styles.desktopNav}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
          <Button to="/pricing" variant="primary" className={styles.actionBtn}>
            Get Started
          </Button>
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
              aria-hidden
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              aria-label="Close menu overlay"
            />
            <motion.div
              id="mobile-menu"
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? `${styles.mobileLink} ${styles.mobileLinkActive}` : styles.mobileLink
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <div className={styles.mobileActions}>
                <Button to="/pricing" variant="primary" onClick={closeMenu}>
                  Get Started
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
