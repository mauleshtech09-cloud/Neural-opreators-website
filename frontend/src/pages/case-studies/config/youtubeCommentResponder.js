import {
  MessageCircle,
  Clock,
  HelpCircle,
  Users,
  ShieldAlert,
  Frown,
  Gauge,
  Repeat,
  Zap,
  Heart,
  Timer,
  Brain,
  ShieldCheck,
  BarChart3,
  Youtube,
  Bot,
  GitBranch,
  Layers,
  Sparkles,
  MessageSquare,
  Table,
  Filter,
  Target,
} from 'lucide-react';

import youtubeDiagram from "../../../assets/youtube_comment_automation_diagram.jpg";

export const youtubeCommentResponderConfig = {
  hero: {
    title: 'YouTube Comment Responder Automation',
    subtitle:
      'An AI-powered engagement automation system that analyzes YouTube comments, detects intent, generates human-like responses, and automates smart audience interaction.',
    primaryCta: { label: 'View Workflow', scrollTo: 'workflow' },
    secondaryCta: { label: 'Watch AI Demo', scrollTo: 'video-demo' },
    accentGlow: 'red',
  },
  before: {
    badge: 'The Challenge',
    title: 'Before Automation',
    subtitle:
      'Manual comment management slows engagement, reduces community quality, and limits scalable audience growth.',
    problems: [
      { icon: MessageCircle, text: 'Manually replying to every comment on videos' },
      { icon: Clock, text: 'Delayed audience engagement and slow response times' },
      { icon: HelpCircle, text: 'Missed questions and opportunities from viewers' },
      { icon: Users, text: 'Inconsistent community management across channels' },
      { icon: ShieldAlert, text: 'Spam comments cluttering valuable discussions' },
      { icon: Frown, text: 'Negative comments handled too slowly or inconsistently' },
      { icon: Gauge, text: 'Poor response speed hurting channel credibility' },
      { icon: Repeat, text: 'Repetitive engagement tasks consuming creator time' },
    ],
    footerNote:
      'Manual engagement systems waste time and reduce audience interaction quality at scale.',
  },
  workflow: {
    id: 'workflow',
    badge: 'Process',
    title: 'AI Comment Automation Workflow',
    subtitle:
      'An intelligent pipeline that listens for comments, understands intent, and routes responses through AI-powered automation.',

    image: youtubeDiagram,  
    flowText:
      'YouTube Comment Trigger → AI Intent Detection → JSON Parser → Router → Gemini AI → YouTube Auto Reply → Slack / Google Sheets',
  },
  modules: {
    badge: 'Architecture',
    title: 'Automation Modules & AI Execution',
    subtitle:
      'Each module contributes to reliable, scalable YouTube audience engagement automation.',
    items: [
      { icon: Youtube, title: 'YouTube Watch Comments', desc: 'Monitors new comments in real time across your channel content.' },
      { icon: Bot, title: 'Make AI Agent', desc: 'Coordinates AI decision-making and workflow execution logic.' },
      { icon: GitBranch, title: 'JSON Parser', desc: 'Structures comment data and AI outputs into actionable fields.' },
      { icon: Layers, title: 'Router Logic', desc: 'Routes comments to the correct automation path based on intent.' },
      { icon: Brain, title: 'Google Gemini AI', desc: 'Generates human-like, context-aware comment responses.' },
      { icon: MessageSquare, title: 'YouTube Reply Automation', desc: 'Posts approved replies directly to YouTube comments.' },
      { icon: Zap, title: 'Slack Notifications', desc: 'Alerts your team when priority comments need attention.' },
      { icon: Table, title: 'Google Sheets Logging', desc: 'Centralizes comment logs for monitoring and reporting.' },
      { icon: Filter, title: 'Spam Detection', desc: 'Identifies and filters low-quality or spam interactions.' },
      { icon: Target, title: 'Intent Classification', desc: 'Detects positive, negative, question, and neutral comment intent.' },
    ],
  },
  screenshotGallery: {
    title: 'Module Screenshots',
    frames: [
      { id: 'yt-1', image: null, imageAlt: 'Module screenshot 1' },
      { id: 'yt-2', image: null, imageAlt: 'Module screenshot 2' },
      { id: 'yt-3', image: null, imageAlt: 'Module screenshot 3' },
    ],
  },
  videoDemo: {
    id: 'video-demo',
    badge: 'AI Demo',
    title: 'Watch the Automation in Action',
    subtitle:
      'See how AI detects comment intent, generates responses, and executes end-to-end YouTube engagement workflows.',
    placeholderLabel: 'AI automation demo video will be added here',
  },
  benefits: {
    badge: 'Impact',
    title: 'Business Benefits',
    subtitle:
      'A scalable engagement engine designed for creators, brands, and agencies managing high-volume audience interaction.',
    items: [
      { icon: Zap, title: 'Faster Audience Engagement', desc: 'Replies to comments instantly using AI automation.' },
      { icon: Heart, title: 'Improved Community Interaction', desc: 'Maintains active and responsive audience communication.' },
      { icon: Timer, title: 'Reduced Manual Work', desc: 'Eliminates repetitive engagement tasks for your team.' },
      { icon: Brain, title: 'Smart Intent Detection', desc: 'AI identifies positive, negative, spam, and question comments.' },
      { icon: BarChart3, title: 'Better Brand Monitoring', desc: 'Negative comments and spam can be tracked automatically.' },
      { icon: ShieldCheck, title: 'Scalable Engagement System', desc: 'Easily handles large volumes of audience interaction.' },
    ],
  },
  after: {
    badge: 'Transformation',
    title: 'After Automation',
    subtitle:
      'Once deployed, audience engagement becomes faster, smarter, and significantly more efficient.',
    wins: [
      'Engagement becomes faster across all video content',
      'Audience interaction quality improves consistently',
      'Response consistency increases across comment threads',
      'Creators save hours of manual community management',
      'Spam handling and moderation improve automatically',
      'AI manages repetitive communication at scale',
      'Workflows become centralized in one automation stack',
    ],
    stats: [
      { value: '24/7', label: 'Comment monitoring' },
      { value: '10x', label: 'Faster response speed' },
      { value: 'AI', label: 'Intent-aware replies' },
    ],
  },
  cta: {
    headline: 'Ready to Automate Your Audience Engagement?',
    subheadline:
      'Build intelligent AI automation systems for your business, audience, and workflows.',
    buttons: [
      { type: 'route', to: '/pricing#contact', label: 'View Pricing', variant: 'primary' },
      { type: 'route', to: '/pricing#contact', label: 'Contact Neural Operators', variant: 'secondary' },
      { type: 'whatsapp', label: 'WhatsApp Us' },
    ],
  },
};
