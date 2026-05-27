/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        board: '#eef6ec',
        path: '#f59e0b',
        node: '#ffffff',
        accent: '#ef4444',
        accentHover: '#dc2626',
        darkBlue: '#1e3a8a',
        forest: '#10b981'
      },
      boxShadow: {
        'chunky': '0 6px 0 rgba(0, 0, 0, 0.1)',
        'chunky-active': '0 2px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
