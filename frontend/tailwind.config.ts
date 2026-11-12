import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      listStyleType: {
        hyphen: "'- '",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      keyframes: {
        kfFadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kfBannerWidthExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        kfSlideUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        kfSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kfFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kfPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        fadeInUp: "kfFadeInUp 0.8s ease-out forwards",
        withBannerWidthExpand: "kfBannerWidthExpand 2s ease-in-out forwards",
        withArrowSlideUpDown: "kfSlideUpDown 2s infinite ease-in-out",
        horizontalSlide: "kfSlide 45s linear infinite forwards",
        fadeIn: "kfFadeIn 0.6s ease-in forwards",
        pulse: "kfPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".webkit-backdrop-blur-16px": {
          "-webkit-backdrop-filter": "blur(16px)",
          "backdrop-filter": "blur(16px)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },

    function ({ addUtilities }: PluginAPI) {
      const delayUtilities = {
        ".animate-delay-300ms": {
          "animation-delay": "300ms",
        },
        ".animate-delay-500ms": {
          "animation-delay": "500ms",
        },
        ".animate-delay-700ms": {
          "animation-delay": "700ms",
        },
        ".animate-delay-1000ms": {
          "animation-delay": "1000ms",
        },
        ".animate-delay-1300ms": {
          "animation-delay": "1300ms",
        },
        ".animate-delay-1s": {
          "animation-delay": "1s",
        },
        ".animate-delay-1500ms": {
          "animation-delay": "1500ms",
        },
        ".animate-delay-2s": {
          "animation-delay": "2s",
        },
      };

      addUtilities(delayUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".translate-z-0": {
          transform: "translateZ(0)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
