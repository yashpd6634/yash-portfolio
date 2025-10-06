import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#ffffff", // Standard white
          50: "#d9ecff",
        },
        black: {
          DEFAULT: "#000000", // Standard black
          50: "#1c1c21",
          100: "#0e0e10",
          200: "#282732",
        },
        blue: {
          50: "#839cb5",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#010101",
          300: "#4fb7dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
