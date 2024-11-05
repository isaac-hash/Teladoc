/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}