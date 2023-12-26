/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      // => @media (min-width: 1024px) { ... }

      // => @media (min-width: 1280px) { ... }

      // => @media
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};
