import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(59, 130, 246, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
