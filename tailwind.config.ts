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
        lavender: {
          50: "#FAF4FD",
          100: "#F8EEFC", // Signature pastel lavender background
          200: "#F1DCF7",
          300: "#E6C5F0",
          400: "#D5A6E4",
        },
        ivory: {
          DEFAULT: "#FFFDF9", // Ivory white for cards and content sections
          50: "#FFFFFF",
          100: "#FFFDF9",
          200: "#FBF7EE",
          300: "#F5ECE0",
        },
        plum: {
          royal: "#765078", // Royal Plum for headings, navigation, primary buttons
          deep: "#49334D", // Deep Plum for readable primary text
          soft: "#8D678F",
          dark: "#3B263F",
        },
        floral: {
          lavender: "#B69ACB", // Floral Lavender for decorative accents
          soft: "#CDB6DC", // Soft Purple
          light: "#E3D5ED",
        },
        sage: {
          DEFAULT: "#A8C9B5", // Sage green for botanical details
          light: "#C7DECF",
          dark: "#84A893",
        },
        champagne: {
          DEFAULT: "#E8D9A9", // Champagne gold for delicate borders & lines
          light: "#F3ECD2",
          dark: "#C9B67C",
          deep: "#A99354",
        },
        mutedText: "#776D78", // Secondary typography text
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(73, 51, 77, 0.05)",
        luxury: "0 10px 40px -4px rgba(73, 51, 77, 0.08)",
        floating: "0 20px 50px -10px rgba(73, 51, 77, 0.12)",
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
