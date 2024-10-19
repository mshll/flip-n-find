/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        move: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "40px 40px" },
        },
      },
      animation: {
        move: "move 2s linear infinite",
      },
    },
  },
  plugins: [],
};
