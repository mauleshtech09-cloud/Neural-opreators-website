import React from 'react';
import { Target } from 'lucide-react';
import Reveal from '../components/Reveal';
import styles from './Pages.module.css';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <Reveal>
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">
            We are young builders specializing in AI systems and business automation.
          </p>
        </Reveal>

        <div className={`grid grid-cols-2 ${styles.aboutGrid}`}>
          <Reveal>
            <div>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                We started Neural Operators with a simple premise: professional AI automation and
                intelligent business systems shouldn&apos;t be locked behind enterprise pricing. As
                ambitious builders, we use modern stacks and AI tools to deliver premium results.
              </p>
              <p className={styles.missionText}>
                Our goal is to give local businesses, consultants, and startups the digital
                infrastructure they need to convert attention into revenue.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card glass">
              <Target size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} aria-hidden />
              <h3 className={styles.cardTitle}>Focus on ROI</h3>
              <p className={styles.missionText}>
                We don&apos;t build sites just to look pretty. We build funnels, lead magnets, and
                communication systems that actually grow your bottom line.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title" style={{ marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Meet the Team
          </h2>
        </Reveal>
        <div className="grid grid-cols-2">
          <Reveal delay={0.08}>
            <div className={`card glass ${styles.teamCard}`}>
              <div className={styles.teamHeader}>
                <div className={`${styles.avatar} ${styles.avatarPrimary}`}>M</div>
                <div>
                  <h3 className={styles.memberName}>Maulesh</h3>
                  <span className="badge">Tech & Automation</span>
                </div>
              </div>
              <p className={styles.teamBio}>
                Maulesh is a dedicated builder focused on architecting intelligent, scalable systems.
                He specializes in AI automation, creating robust workflows that help businesses
                streamline their operations and save hundreds of hours monthly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={`card glass ${styles.teamCard}`}>
              <div className={styles.teamHeader}>
                <div className={`${styles.avatar} ${styles.avatarAccent}`}>J</div>
                <div>
                  <h3 className={styles.memberName}>Jiya</h3>
                  <span className="badge">Design & Client Communication</span>
                </div>
              </div>
              <p className={styles.teamBio}>
                Jiya leads design and client experience. She ensures that every AI automation system
                we deploy is intuitive, professional, and directly aligned with the client&apos;s
                business requirements, ensuring a seamless digital transformation.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              We are dedicated to building real, high-impact automation systems that help businesses
              scale efficiently using practical digital solutions.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
