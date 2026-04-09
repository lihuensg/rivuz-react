/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--glass-border)",
        input: "var(--glass-border)",
        ring: "var(--primary)",
        background: "var(--bg-main)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--bg-main)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--text-primary)",
        },
        destructive: {
          DEFAULT: "rgba(239, 68, 68, 1)",
          foreground: "white",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          DEFAULT: "rgba(0, 179, 255, 0.1)",
          foreground: "var(--primary)",
        },
        popover: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-primary)",
        },
        card: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-primary)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
}
