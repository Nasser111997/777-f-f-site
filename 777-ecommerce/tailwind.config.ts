import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2342', // Darker blue for primary actions/branding
          light: '#1A4D8F', // Lighter blue for accents
        },
        secondary: {
          DEFAULT: '#FFD700', // Gold accent
        },
        background: {
          DEFAULT: '#FFFFFF', // Clean white background
        },
        text: {
          DEFAULT: '#333333', // Dark grey for body text
          light: '#555555', // Lighter grey for secondary text
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'], // Use Geist Sans as the primary sans-serif font
        mono: ['var(--font-geist-mono)'], // Use Geist Mono as the primary mono font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;