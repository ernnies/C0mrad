/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Deep blue for NERO branding
        secondary: '#3b82f6', // Lighter blue for accents
        accent: '#22d3ee', // Cyan for highlights
        background: '#f1f5f9', // Light gray background
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};