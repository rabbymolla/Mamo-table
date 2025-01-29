import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "var(--white)",
      black: "var(--black)",
    },

    fontFamily: {
      DmSans: ["var--font-dm-sans)"],
    },
    extend: {
      screens: {
        xs: "350px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
