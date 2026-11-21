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
        ivory: {
          50: "#FCFAF6",
          100: "#FAF7F0",
          200: "#F4EFE6",
          300: "#EDE4D6",
          400: "#E3D5C0",
        },
        champagne: {
          100: "#F5EFE3",
          200: "#EDE3D0",
          300: "#E8D9BD",
          400: "#DEC8A3",
          500: "#D4B889",
        },
        gold: {
          light: "#D8C59A",
          DEFAULT: "#B69A68",
          dark: "#967B48",
          deep: "#786134",
        },
        charcoal: {
          50: "#605C56",
          100: "#4A4641",
          DEFAULT: "#292622",
          900: "#1A1815",
          950: "#11100E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(41, 38, 34, 0.05)",
        luxury: "0 10px 40px -4px rgba(41, 38, 34, 0.08)",
        floating: "0 20px 50px -10px rgba(41, 38, 34, 0.12)",
      },
      letterSpacing: {
        luxury: "0.2em",
        editorial: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
