/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },

      animation: {
        "text-gradient": "text-gradient 1.5s linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },

      colors: {
        primary: {
          50: "#F53333",
          600: "#F76666",
          100: "#F20000",
          200: "#FFFFFF",
          300: "#333333",
          400: "#666666",
          500: "#999999",
          600: "#1b1b1b",
        },
      },
    },
  },
  plugins: [],
};
