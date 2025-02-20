/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00FFFF",
        dark: "#080A0D", // Ensure dark is correctly defined
      },
      animation: {
        "pulse-glow": "glow 1.5s infinite alternate",
        "background-pan": "pan 10s infinite linear",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF" },
          "100%": { textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF" },
        },
        pan: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
