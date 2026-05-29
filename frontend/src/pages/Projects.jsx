import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import styles from './Pages.module.css';

const projects = [
  {
    id: 1,
    name: 'AI Lead Qualification System',
    description:
      'Intelligent workflow that classifies leads into Great/Okay/Bad, creates Todoist tasks, and sends automated Slack notifications & email drafts.',
    tech: ['Gemini AI', 'Make.com', 'Slack API', 'Todoist'],
    github: '#',
    caseStudyPath: '/projects/ai-lead-qualification',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'YouTube Comment Responder Automation',
    description:
      'AI-powered system that analyzes YouTube comments, detects intent, generates human-like replies, and automates smart audience engagement.',
    tech: ['Gemini AI', 'Make.com', 'YouTube API', 'Slack'],
    github: '#',
    caseStudyPath: '/projects/youtube-comment-responder',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'AI Customer Inquiry Assistant',
    description:
      '24/7 AI chatbot deployed for an e-commerce brand handling FAQs, lead capture, and automatic CRM syncing.',
    tech: ['Voiceflow', 'HubSpot CRM', 'Zendesk'],
    github: '#',
    live: '#',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'AI Resume Screening Agent',
    description:
      'AI-powered recruitment automation that screens resumes, classifies candidates by role, automates interview invites, and centralizes hiring workflows.',
    tech: ['Gemini AI', 'Make.com', 'PDF.co', 'Gmail'],
    github: '#',
    caseStudyPath: '/projects/ai-resume-screening-agent',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Automated Reporting Dashboard',
    description:
      'Internal system aggregating data from 5 different ad platforms into daily summaries sent directly via team notifications.',
    tech: ['Python', 'Looker Studio', 'Telegram API'],
    github: '#',
    live: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

function ProjectCardContent({ project }) {
  return (
    <>
      <img src={project.image} alt={project.name} className={styles.projectImage} loading="lazy" />
      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{project.name}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.techTags}>
          {project.tech.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
        {project.caseStudyPath ? (
          <span className={`${styles.projectLink} ${styles.projectLinkPrimary}`}>
            View Case Study <ArrowRight size={18} aria-hidden />
          </span>
        ) : (
          <div className={styles.projectLinks}>
            <a href={project.live} className={`${styles.projectLink} ${styles.projectLinkPrimary}`}>
              <ExternalLink size={18} aria-hidden /> Live Preview
            </a>
            <a href={project.github} className={`${styles.projectLink} ${styles.projectLinkMuted}`}>
              <Github size={18} aria-hidden /> GitHub
            </a>
          </div>
        )}
      </div>
    </>
  );
}

const Projects = () => {
  return (
    <div className="section">
      <div className="container">
        <Reveal>
          <h1 className="section-title">Our Work</h1>
          <p className="section-subtitle">
            A selection of recent websites and automation systems we&apos;ve built for clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
              <article className={`card glass ${styles.projectCard}`}>
                {project.caseStudyPath ? (
                  <Link to={project.caseStudyPath} className={styles.projectCardLink}>
                    <ProjectCardContent project={project} />
                  </Link>
                ) : (
                  <ProjectCardContent project={project} />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
