import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(139, 92, 246, 0.35)',
      },
      backgroundImage: {
        'hero-overlay': 'radial-gradient(circle at top, rgba(139, 92, 246, 0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
};

export default config;
