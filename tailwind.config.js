/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0F0F13',
        cardBg: '#181820',
        neonPink: '#FF007A',
        neonPurple: '#7928CA',
      },
      boxShadow: {
        glowPink: '0 0 18px rgba(255, 0, 122, 0.4)',
        glowPurple: '0 0 18px rgba(121, 40, 202, 0.4)',
      },
    },
  },
  plugins: [],
};
