import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10233f",
        amber: "#0b4aa2",
        "amber-deep": "#083b83",
        paper: "#FFFFFF",
        "paper-soft": "#FEFEFE",
        sand: "#F5F5F5",
        line: "#EAEAEA",
        slate: "#526174",
        //  MK Connection brand marks — pulled directly from the agency logo, used for
        // badges, flag chips, and the dark " MK Connection identity" sections only.
        "atlas-red": "#C0392B",
        "atlas-blue": "#2F5496",
        "atlas-navy": "#05070d",
        "atlas-surface": "#0e1220",
        "atlas-gold": {
          100: "#fbeed2",
          300: "#e9c26d",
          400: "#dfab48",
          500: "#c9922f",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 31, 31, 0.08)",
        lift: "0 20px 50px rgba(31, 31, 31, 0.12)",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        dash: "dash 2.4s ease forwards",
        fadeUp: "fadeUp 0.6s ease forwards",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
