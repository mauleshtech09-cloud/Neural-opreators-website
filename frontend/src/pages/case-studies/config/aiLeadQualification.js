import {
  Clock,
  Inbox,
  Database,
  ListTodo,
  Repeat,
  Zap,
  FolderKanban,
  Users,
  Brain,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Mail,
  CheckSquare,
  Table,
  FileInput,
  GitBranch,
  Workflow,
  Layers,
} from 'lucide-react';

export const aiLeadQualificationConfig = {
  hero: {
    title: 'AI Lead Qualification System',
    subtitle:
      'An AI-powered automation workflow that analyzes incoming leads, classifies lead quality, automates notifications, and improves response efficiency.',
    primaryCta: { label: 'View Workflow', scrollTo: 'workflow' },
    secondaryCta: { label: 'Get Similar System', href: '/pricing#contact' },
  },
  before: {
    badge: 'The Challenge',
    title: 'Before Automation',
    subtitle:
      'Manual lead workflows create bottlenecks, slow response times, and lost opportunities for growing businesses.',
    problems: [
      { icon: Inbox, text: 'Manually reviewing every incoming lead' },
      { icon: Clock, text: 'Delayed responses and missed follow-ups' },
      { icon: Database, text: 'Scattered customer data across tools' },
      { icon: ListTodo, text: 'Inconsistent lead tracking and poor organization' },
      { icon: Repeat, text: 'Repetitive manual tasks draining team time' },
    ],
    footerNote:
      'Manual workflows waste time, reduce efficiency, and make it harder to scale lead operations.',
  },
  workflow: {
    id: 'workflow',
    badge: 'Process',
    title: 'AI Lead Qualification Workflow',
    subtitle:
      'A connected automation pipeline that transforms raw form submissions into classified, actionable business intelligence.',
    flowText:
      'Tally Form → AI Analysis → JSON Parsing → Router → Slack / Gmail / Todoist / Google Sheets',
  },
  modules: {
    badge: 'Architecture',
    title: 'System Modules & Execution',
    subtitle:
      'Each module plays a specific role in delivering a reliable, scalable lead qualification system.',
    items: [
      { icon: FileInput, title: 'Tally Forms', desc: 'Captures structured lead submissions from campaigns and landing pages.' },
      { icon: Brain, title: 'Google Gemini AI', desc: 'Analyzes lead quality using intelligent classification logic.' },
      { icon: Workflow, title: 'Make.com', desc: 'Orchestrates the full automation pipeline end-to-end.' },
      { icon: GitBranch, title: 'JSON Parser', desc: 'Structures AI output into clean, actionable data fields.' },
      { icon: Layers, title: 'Router Logic', desc: 'Routes leads to the right channels based on classification.' },
      { icon: MessageSquare, title: 'Slack Notifications', desc: 'Alerts teams instantly when high-value leads arrive.' },
      { icon: Mail, title: 'Gmail Automation', desc: 'Drafts and sends follow-up communication automatically.' },
      { icon: CheckSquare, title: 'Todoist Integration', desc: 'Creates prioritized tasks for sales and operations teams.' },
      { icon: Table, title: 'Google Sheets', desc: 'Logs leads centrally for reporting and visibility.' },
    ],
  },
  screenshotGallery: {
    title: 'Module Screenshots',
    count: 6,
  },
  videoDemo: {
    id: 'video-demo',
    badge: 'Live Demo',
    title: 'AI Automation in Action',
    subtitle:
      'Watch how the lead qualification workflow processes submissions, classifies intent, and triggers automated business actions.',
    placeholderLabel: 'AI automation demo video will be added here',
  },
  benefits: {
    badge: 'Impact',
    title: 'Business Benefits',
    subtitle:
      'A production-grade automation system designed to improve speed, clarity, and operational ROI.',
    items: [
      { icon: Zap, title: 'Faster Lead Response', desc: 'Automatically reacts to incoming leads without manual delay.' },
      { icon: FolderKanban, title: 'Improved Lead Organization', desc: 'Centralizes lead handling and classification workflows.' },
      { icon: TrendingUp, title: 'Reduced Manual Work', desc: 'Eliminates repetitive operational tasks across your team.' },
      { icon: Users, title: 'Better Team Communication', desc: 'Instant Slack notifications improve coordination and speed.' },
      { icon: Sparkles, title: 'Smart AI Classification', desc: 'AI helps prioritize high-value leads automatically.' },
      { icon: ShieldCheck, title: 'Scalable Workflow System', desc: 'Easy to expand across multiple business operations.' },
    ],
  },
  after: {
    badge: 'Transformation',
    title: 'After Automation',
    subtitle: 'Once implemented, lead operations become structured, responsive, and built for scale.',
    wins: [
      'Lead handling becomes organized and predictable',
      'Response time improves across the sales pipeline',
      'Workflows are centralized in one automation stack',
      'Teams receive instant notifications for priority leads',
      'Repetitive operational work is significantly reduced',
      'Follow-up systems become more reliable and consistent',
    ],
    stats: [
      { value: '24/7', label: 'Automated monitoring' },
      { value: '3x', label: 'Faster lead routing' },
      { value: '100%', label: 'Centralized logging' },
    ],
  },
  cta: {
    headline: 'Ready to Automate Your Lead Operations?',
    subheadline: 'Get a custom AI automation workflow designed for your business.',
    buttons: [
      { type: 'route', to: '/pricing#contact', label: 'View Pricing', variant: 'primary' },
      { type: 'whatsapp', label: 'WhatsApp Us' },
    ],
  },
};
