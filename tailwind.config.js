/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef4ff",
          900: "#0a1628",
          800: "#1a2a3a",
          700: "#2a3a4a"
        },
        accent: {
          500: "#2563eb",
          600: "#1d4ed8"
        }
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["DM Sans", "sans-serif"]
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)"
      }
    }
  },
  plugins: []
}
