import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#3b82f6",
        blueHover:"#d9eaff",
        green: "#009688",
        greenHover: "#4db6ac"
      },
      screens: {
        "sm": "350px",
        "md": "600px",
        "xl": "1380px",
      }
    },
    
  },
  plugins: [],
} satisfies Config;
