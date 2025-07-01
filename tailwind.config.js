/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'big-shoulders-display': ['"Big Shoulders Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
