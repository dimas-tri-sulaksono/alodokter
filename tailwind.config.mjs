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
    },
  },
  plugins: [],
};
