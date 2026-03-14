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
        background: "#F4F4F5",
        foreground: "#27272A",
        card: "#FFFFFF",
        muted: "#52525B",
        accent: "#F64617",
        separator: "#E5E5E5",
      },
      borderRadius: {
        button: "56px",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "system-ui", "sans-serif"],
        sans: ["var(--font-clash)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "clash-medium": "500",
      },
    },
  },
  plugins: [],
};

export default config;
