import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        foreground: "#1A1A1A",
        accent: "#000000",
        separator: "#E5E5E5",
      },
      fontFamily: {
        clash: ["var(--font-clash-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "clash-medium": "500",
      },
    },
  },
  plugins: [],
};

export default config;
