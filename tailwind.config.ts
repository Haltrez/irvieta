import type { Config } from "tailwindcss";

/**
 * Design tokens for irvieta.
 *
 * The neumorphism shadows only read correctly on the warm off-white `bg`
 * (#F5F5F0) or on pure white surfaces — the light shadow is white and the dark
 * shadow is a desaturated green, so on any other backdrop they turn to mud.
 * Keep them off dark or coloured surfaces.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D6A4F",
          dark: "#1B4332",
          light: "#95D5B2",
        },
        bg: "#F5F5F0",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1A1A1A",
          // Darkened from #6B7280 (4.7:1 on the off-white bg) to #4B5563
          // (6.9:1) — the page read washed out at the lighter value.
          soft: "#4B5563",
          faint: "#6B7280",
        },
        accent: "#D8E4CE",
        // Dark sections. Neumorphism does NOT work on these — the white
        // highlight turns to mud — so they use hairline borders and glow
        // instead. See the `.dark-section` helpers in globals.css.
        forest: {
          950: "#0F2A1D",
          900: "#1B4332",
          800: "#245741",
        },
        "on-dark": {
          DEFAULT: "#F5F5F0", // 10.1:1 on forest-900
          soft: "#B7CFC2",    //  6.7:1 on forest-900
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        btn: "16px",
        input: "12px",
      },
      boxShadow: {
        // Raised: light from top-left, soft green-grey from bottom-right.
        neu: "-8px -8px 16px rgba(255, 255, 255, 0.9), 8px 8px 16px rgba(163, 177, 138, 0.15)",
        "neu-sm":
          "-4px -4px 8px rgba(255, 255, 255, 0.9), 4px 4px 8px rgba(163, 177, 138, 0.15)",
        // Hover lift: same direction, spread further.
        "neu-lg":
          "-12px -12px 24px rgba(255, 255, 255, 0.95), 12px 12px 24px rgba(163, 177, 138, 0.2)",
        // Pressed / input wells: the same two lights, inverted.
        "neu-inset":
          "inset -4px -4px 8px rgba(255, 255, 255, 0.9), inset 4px 4px 8px rgba(163, 177, 138, 0.2)",
        "neu-inset-deep":
          "inset -6px -6px 12px rgba(255, 255, 255, 0.9), inset 6px 6px 12px rgba(163, 177, 138, 0.25)",
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-lg": ["4.5rem", { lineHeight: "1.03", letterSpacing: "-0.025em" }],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 55% at 20% 0%, rgba(149, 213, 178, 0.38) 0%, rgba(149, 213, 178, 0) 70%)",
        "mint-fade": "linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        // Parcels travelling along the map routes.
        "dash-travel": {
          to: { strokeDashoffset: "-240" },
        },
        "ring-out": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "dash-travel": "dash-travel 14s linear infinite",
        "ring-out": "ring-out 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
