/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#09090b',
          elevated: '#111113',
          card: 'rgba(24, 24, 27, 0.72)',
        },
        brand: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.25)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.35)',
        'glow-green': '0 0 30px rgba(16, 185, 129, 0.2)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59, 130, 246, 0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(99, 102, 241, 0.12), transparent 50%), radial-gradient(ellipse 40% 30% at 10% 20%, rgba(139, 92, 246, 0.1), transparent 50%)',
      },
    },
  },
  plugins: [],
};
