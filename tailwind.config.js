/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        terminal: "url('/sword-berserk.png')",
      },

      colors: {
        "worn-bg": "#1C1B1A",
        "worn-terminal": "#141312",
        "worn-text": "#C8C4BC",
        "worn-muted": "#8A857C",
        "worn-accent": "#A89F7C",
        "worn-burgundy": "#6B3A3A",
        "worn-cursor": "#8C7A4A",
        "terminal-text-muted": "#8C8C8C",
        "terminal-black": "#1F2229",
        "terminal-gray-dark": "#13141a",
        "terminal-border": "#272a34",
        "terminal-gray": "#E6E6E6",
        "terminal-white": "#FFFFFF",

        "terminal-red": "#B32025",
        "terminal-red-dark": "#8F1D24",

        "terminal-pink": "#D71655",
        "terminal-pink-dark": "#BF2E5D",

        "terminal-yellow": "#FF8A18",
        "terminal-yellow-dark": "#FEA44C",

        "terminal-green": "#47D4B9",
        "terminal-green-dark": "#5EBDAB",

        "terminal-cyan": "#05A1F7",
        "terminal-cyan-dark": "#49AEE6",

        "terminal-blue": "#277FFF",
        "terminal-blue-dark": "#367BF0",
        "terminal-blue-bg": "#2471f3",

        "terminal-purple": "#8C42AB",
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