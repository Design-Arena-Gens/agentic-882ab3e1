import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5A54F9",
          foreground: "#F5F7FF"
        },
        accent: {
          DEFAULT: "#FF8A65",
          foreground: "#1F1300"
        },
        neutral: "#101929"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-cal)", "var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
