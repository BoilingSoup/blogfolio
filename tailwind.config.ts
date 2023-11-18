import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "2xs": "345px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "100%",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.2s",
      },
    },
  },
  plugins: [],
};
export default config;
