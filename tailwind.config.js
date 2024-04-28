/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "noto": ["Noto Sans TC", "sans-serif"],
        "sedan": ["Sedan", "serif"]
      }
    },
  },
  plugins: [],
}

