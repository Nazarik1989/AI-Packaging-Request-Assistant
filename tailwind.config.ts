import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f6f7f9",
          100: "#e7e9ee",
          300: "#aeb5c2",
          500: "#687282",
          700: "#343b49",
          900: "#131820",
        },
        signal: {
          500: "#2563eb",
          600: "#1d4ed8",
        },
        violet: {
          500: "#7c3aed",
        },
      },
      boxShadow: {
        panel: "0 18px 60px rgba(19, 24, 32, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
