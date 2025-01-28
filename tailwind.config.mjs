/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
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
      backgroundColor: {
        alo: "#3570D2",
        tagKesehatan: "#F85B06",
        tagKeluarga: "#559808",
        tagHidupSehat: "#C78F00",
      },
      borderColor: {
        alo: "#3570D2",
      },
      textColor: {
        alo: "#3570D2",
      },
      boxShadow: {
        soft: "0 0 8px 0 rgba(26, 23, 48, 0.13)",
      },
      backgroundImage: {
        aloshop: "linear-gradient(to left, #5494f9, #3570d2)",
      },
    },
  },
  plugins: [],
};
