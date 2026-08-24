/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        terminal: "url('/sword-berserk.png')",
      },

      colors: {
        // Worn Steel palette
        "terminal-text-muted": "#8A857C",
        "terminal-black": "#141312",
        "terminal-gray-dark": "#141312",
        "terminal-border": "#3A3835",
        "terminal-gray": "#C8C4BC",
        "terminal-white": "#C8C4BC",

        "terminal-red": "#6B3A3A",
        "terminal-red-dark": "#553030",

        "terminal-pink": "#6B3A3A",
        "terminal-pink-dark": "#553030",

        "terminal-yellow": "#A89F7C",
        "terminal-yellow-dark": "#8C7A4A",

        "terminal-green": "#A89F7C",
        "terminal-green-dark": "#8C7A4A",

        "terminal-hint": "#628BA9",

        "terminal-cyan": "#C8C4BC",
        "terminal-cyan-dark": "#8A857C",
        "terminal-cursor": "#8C7A4A",

        "terminal-blue": "#C8C4BC",
        "terminal-blue-dark": "#8A857C",
        "terminal-blue-bg": "#3A3835",

        "terminal-purple": "#8A857C",

        // Explicit Worn Steel tokens
        "worn-bg": "#1C1B1A",
        "worn-terminal": "#141312",
        "worn-text": "#C8C4BC",
        "worn-muted": "#8A857C",
        "worn-accent": "#A89F7C",
        "worn-burgundy": "#6B3A3A",
        "worn-cursor": "#8C7A4A",
      },

      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "Fira Code", "monospace"],
        "fira-code": ["Fira Code", "monospace"],
        segoe: "Segoe UI",
      },

      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "48%": { opacity: 1 },
          "50%": { opacity: 0 },
          "99%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },

      animation: {
        blink: "blink 1.5s linear infinite",
      },

      boxShadow: {
        "5xl": "0 10px 30px 0 rgba(0, 0, 0, 0.75)",
        terminal: "0 18px 50px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(200, 196, 188, 0.04)",
      },
    },
  },

  plugins: [],
};