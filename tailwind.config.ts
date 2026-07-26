import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#112340", brand: "#2456A6", mint: "#2BBE9A", sun: "#F4B740" }, boxShadow: { glow: "0 20px 60px rgba(16, 40, 78, .12)" } } },
  plugins: []
} satisfies Config;
