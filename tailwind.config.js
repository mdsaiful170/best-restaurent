/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        rohoob: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1677BD",
        secondary: "#8F8F8F",
        bgcolor1: "#F9F9F9",
        heading: "#1E1E1E",
        textColor: "#232323",
      },
      backgroundImage: {
        bella:
          "url('/bella-bg.png'), linear-gradient(180deg, rgba(16, 16, 16, 0.77) 0.12%, rgba(16, 16, 16, 0.515625) 45.88%, rgba(16, 16, 16, 0) 94.72%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
