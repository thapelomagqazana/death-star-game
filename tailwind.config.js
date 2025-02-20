/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind applies styles across all files
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#0DCAF0",
        neonPurple: "#9B5DE5",
        dangerRed: "#FF3860",
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
