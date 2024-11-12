import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#040707",
        bg: "#F8F6F2",
        "accent-red": "#EC1D33",
        "accent-blue": "#17A2DC",
        "light-gray": "#EEEBE6",
        "dark-grey": "#606060",
        "overlay-white": "#ffffff0d",
      },
      boxShadow: {
        "shadow-cards": "0px 5px 15px 0px rgba(164, 164, 164, 0.50)",
      },
      screens: {
        "3xl": "1792px",
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      spacing: {},
    },
  },
  plugins: [],
};
export default config;
