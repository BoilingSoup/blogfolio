const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {
    screens: {
      "2xs": "345px",
      xs: "425px",
      ...defaultTheme.screens
    },
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "100%"
          }
        },
        fade: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "100%"
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.2s",
        fade: "fade 550ms"
      },
      transitionDuration: {
        DEFAULT: "550ms"
      }
    }
  },

  plugins: []
};
