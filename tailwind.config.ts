import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2A2A2A",
        brand: "#852EF2",
        plum: "#954293",
        "plum-dark": "#7D2279",
        "plum-deep": "#300942",
        lavender: "#E7EAF7",
        mint: "#852EF2",
        sun: "#954293"
      },
      boxShadow: { glow: "0 20px 60px rgba(48, 9, 66, .12)" }
    }
  },
  plugins: []
} satisfies Config;
