import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        sky: {
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
        },
        blush: {
          100: "#FDF2F8",
          200: "#FCE7F3",
          300: "#FBCFE8",
          400: "#F9A8D4",
          500: "#F472B6",
        },
        violet: {
          deep: "#2D1B69",
          mid: "#4C1D95",
        },
        cream: "#FAFAFE",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-wics":
          "linear-gradient(135deg, #EDE9FE 0%, #E0F2FE 40%, #FDF2F8 100%)",
        "gradient-hero":
          "linear-gradient(160deg, #C4B5FD 0%, #BAE6FD 50%, #FBCFE8 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(237,233,254,0.6) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(167, 139, 250, 0.15)",
        "soft-lg": "0 8px 48px rgba(167, 139, 250, 0.2)",
        card: "0 2px 16px rgba(45, 27, 105, 0.08), 0 0 0 1px rgba(196, 181, 253, 0.2)",
        "card-hover":
          "0 8px 32px rgba(45, 27, 105, 0.12), 0 0 0 1px rgba(167, 139, 250, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
