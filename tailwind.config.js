/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm_plex: ["var(--font-ibm-plex)"],
        public_sans: ["var(--font-public-sans)"],
        merriweather: ["var(--font-merriweather)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "dynamic-card": "repeat(auto-fill, minmax(min(30rem, 100%), 1fr))"
      },
    },
  },
  plugins: [],
};
