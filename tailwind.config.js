/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7baf40",
        secondary: "#55833d"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['emerald']
  },
}

