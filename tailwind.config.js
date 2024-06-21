/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#a7c7e7',
          300: '#89b0d3',
          400: '#6b98bf',
        },
        gray: {
          100: '#f7fafc',
          300: '#e2e8f0',
          400: '#cbd5e0',
          600: '#a1a1a1',
          800: '#2d3748',
        },
      },
    },
  },
  plugins: [],
}
