/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A',
        'dark-surface': '#1A1A1A',
        'dark-border': '#333333',
        'accent-blue': '#00BFFF', // Deep Sky Blue
        'accent-cyan': '#00FFFF', // Cyan
        'accent-emerald': '#00C9A7', // Caribbean Green
        'accent-orange': '#FF8C00', // Dark Orange
        'text-light': '#E0E0E0',
        'text-muted': '#A0A0A0',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 0.3px 0.3px, rgba(255,255,255,0.01) 0.3px, transparent 0)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)',
      },
      backgroundSize: {
        'dot-pattern': '16px 16px',
      },
      animation: {
        'pulse-slow': 'pulse-slow 30s infinite ease-in-out',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.8s ease-out forwards',
        'border-pulse': 'border-pulse 2s infinite ease-in-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.01' },
          '50%': { opacity: '0.05' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'border-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 0px rgba(0,0,0,0)' },
          '50%': { 'box-shadow': '0 0 15px rgba(0,191,255,0.3)' },
        },
      },
    },
  },
  plugins: [],
};
