/**
 * API base URL for contact form submissions.
 * - Local dev: leave unset — Vite proxies /api → http://127.0.0.1:5000
 * - Production: set VITE_API_URL to your deployed backend (e.g. https://api.example.com)
 */
const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export const CONTACT_API_URL = `${API_BASE}/api/contact`;
