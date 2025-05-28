/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'f1-red': 'rgb(var(--f1-red) / <alpha-value>)',
        'f1-blue': 'rgb(var(--f1-blue) / <alpha-value>)',
        'f1-silver': 'rgb(var(--f1-silver) / <alpha-value>)',
        'f1-black': 'rgb(var(--f1-black) / <alpha-value>)',
        'f1-white': 'rgb(var(--f1-white) / <alpha-value>)',
        'navy': {
          500: '#0b0c22',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};