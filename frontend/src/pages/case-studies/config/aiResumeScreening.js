import {
  FileText,
  Calendar,
  Inbox,
  Database,
  Repeat,
  Zap,
  TrendingUp,
  ShieldCheck,
  CalendarCheck,
  Table,
  Layers,
  Users,
  Bell,
  Brain,
  Workflow,
  GitBranch,
  MessageSquare,
  Mail,
  FileInput,
  FileSearch,
} from 'lucide-react';

import resumeWorkflowDiagram from '../../../assets/workflow diagram/Resume screening Agent/Resume2.png';
import resumeScreenshot1 from '../../../assets/screenshots/resume screening agent/resume1.png';
import resumeScreenshot2 from '../../../assets/screenshots/resume screening agent/resume2.png';
import resumeScreenshot3 from '../../../assets/screenshots/resume screening agent/resume3.png';
import resumeScreenshot4 from '../../../assets/screenshots/resume screening agent/resume4.png';
import resumeScreenshot5 from '../../../assets/screenshots/resume screening agent/resume5.png';
import resumeScreenshot6 from '../../../assets/screenshots/resume screening agent/resume6.png';

export const aiResumeScreeningConfig = {
  hero: {
    title: 'AI Resume Screening Agent',
    subtitle:
      'An AI-powered recruitment automation system that screens resumes, analyzes qualifications, classifies candidates into job roles, automates communication, and streamlines hiring workflows.',
    primaryCta: { label: 'View Workflow', scrollTo: 'workflow' },
    secondaryCta: { label: 'Get Similar System', href: '/pricing#contact' },
  },
  before: {
    badge: 'The Challenge',
    title: 'Before Automation',
    subtitle:
      'Traditional recruitment processes require recruiters to manually review resumes, evaluate qualifications, organize applications, and communicate with candidates. This creates delays, inconsistency, and increased hiring costs.',
    problems: [
      { icon: FileText, text: 'Manual resume screening consumes recruiter time' },
      { icon: ShieldCheck, text: 'Candidate evaluation is inconsistent' },
      { icon: Calendar, text: 'Delayed interview scheduling' },
      { icon: Inbox, text: 'High volume of applications creates bottlenecks' },
      { icon: Database, text: 'Candidate data scattered across systems' },
      { icon: Repeat, text: 'Repetitive administrative work' },
    ],
    footerNote:
      'Manual hiring workflows waste time, reduce consistency, and make it harder to scale recruitment operations.',
  },
  workflow: {
    id: 'workflow',
    badge: 'Process',
    title: 'AI Resume Screening Workflow',
    subtitle:
      'An end-to-end hiring automation pipeline that converts candidate applications into structured hiring decisions.',
    image: resumeWorkflowDiagram,
    imageAlt: 'AI Resume Screening workflow diagram',
    flowText:
      'Candidate Application → Resume Upload → Tally Form → Webhook → HTTP Download → PDF.co → Gemini AI → JSON Parser → Router → Gmail / Google Sheets / Slack',
  },
  modules: {
    badge: 'Architecture',
    title: 'System Modules & Execution',
    subtitle:
      'Each module plays a critical role in delivering a scalable AI-powered recruitment automation system.',
    items: [
      { icon: FileInput, title: 'Tally Forms', desc: 'Captures candidate applications and resume uploads.' },
      { icon: Brain, title: 'Google Gemini AI', desc: 'Analyzes candidate qualifications and determines role suitability.' },
      { icon: FileSearch, title: 'PDF.co', desc: 'Extracts structured text from uploaded resumes.' },
      { icon: Workflow, title: 'Make.com', desc: 'Orchestrates the complete automation workflow.' },
      { icon: GitBranch, title: 'JSON Parser', desc: 'Converts AI responses into structured routing data.' },
      { icon: Layers, title: 'Router Logic', desc: 'Routes candidates to the correct recruitment path.' },
      { icon: Table, title: 'Google Sheets', desc: 'Stores and tracks candidate records.' },
      { icon: MessageSquare, title: 'Slack Notifications', desc: 'Alerts recruiters instantly.' },
      { icon: Mail, title: 'Gmail Automation', desc: 'Sends interview invitations and rejection emails.' },
    ],
  },
  screenshotGallery: {
    title: 'Module Screenshots',
    frames: [
      { id: 'resume-1', image: resumeScreenshot1, imageAlt: 'Resume Submission Form' },
      { id: 'resume-2', image: resumeScreenshot2, imageAlt: 'Make.com Workflow' },
      { id: 'resume-3', image: resumeScreenshot3, imageAlt: 'Gemini Analysis Output' },
      { id: 'resume-4', image: resumeScreenshot4, imageAlt: 'Router Logic' },
      { id: 'resume-5', image: resumeScreenshot5, imageAlt: 'Slack Notification' },
      { id: 'resume-6', image: resumeScreenshot6, imageAlt: 'Candidate Database' },
      { id: 'resume-7', image: null, imageAlt: 'Interview Email' },
      { id: 'resume-8', image: null, imageAlt: 'Rejection Email' },
    ],
  },
  videoDemo: {
    id: 'video-demo',
    badge: 'Live Demo',
    title: 'AI Recruitment Automation in Action',
    subtitle:
      'Watch how the resume screening workflow analyzes candidates, classifies roles, and automates hiring actions.',
    placeholderLabel: 'Resume screening demo video will be added here',
  },
  benefits: {
    badge: 'Impact',
    title: 'Business Benefits',
    subtitle:
      'A production-grade hiring automation platform that improves recruitment speed, candidate quality, and operational efficiency.',
    items: [
      { icon: Zap, title: 'Faster Candidate Screening', desc: 'Accelerates initial resume review and qualification without manual delays.' },
      { icon: TrendingUp, title: 'Reduced Manual Work', desc: 'Eliminates repetitive screening and administrative hiring tasks.' },
      { icon: ShieldCheck, title: 'Consistent Candidate Evaluation', desc: 'Applies standardized AI-driven criteria across every application.' },
      { icon: CalendarCheck, title: 'Automated Interview Scheduling', desc: 'Triggers interview communication workflows for qualified candidates.' },
      { icon: Table, title: 'Centralized Candidate Tracking', desc: 'Keeps hiring records organized in one automated system.' },
      { icon: Layers, title: 'Scalable Recruitment Process', desc: 'Handles growing application volume without adding headcount.' },
      { icon: Users, title: 'Improved Recruiter Productivity', desc: 'Frees recruiters to focus on interviews and strategic hiring decisions.' },
      { icon: Bell, title: 'Real-Time Notifications', desc: 'Alerts hiring teams instantly when candidates require action.' },
    ],
  },
  after: {
    badge: 'Transformation',
    title: 'After Automation',
    subtitle:
      'Once deployed, recruitment operations become structured, scalable, and significantly more efficient.',
    wins: [
      'Candidate evaluation becomes standardized',
      'Hiring decisions become faster',
      'Recruiters save significant manual effort',
      'Applications are tracked automatically',
      'Candidate communication becomes consistent',
      'Interview scheduling is accelerated',
    ],
    stats: [
      { value: '24/7', label: 'Candidate processing' },
      { value: '3x', label: 'Faster candidate evaluation' },
      { value: '100%', label: 'Automated initial screening' },
    ],
  },
  cta: {
    headline: 'Ready to Automate Your Recruitment Process?',
    subheadline: 'Get a custom AI-powered hiring workflow designed for your organization.',
    buttons: [
      { type: 'route', to: '/pricing#contact', label: 'View Pricing', variant: 'primary' },
      { type: 'whatsapp', label: 'WhatsApp Us' },
    ],
  },
};
