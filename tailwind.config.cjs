
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        // Original palette
        marble: "#F8F6F4",
        cream: "#FBF2DE",
        taupe: "#D8CFC7",
        gold: "#C9A969",
        charcoal: "#2B2B2B",
        
        // Enhanced palette inspired by thelash.mx
        rose: "#E8B4B8",
        blush: "#F4E4E6",
        sage: "#9CAF88",
        sageLight: "#B8C5A6",
        warmGray: "#8B7D6B",
        deepGold: "#B8860B",
        softPink: "#F7E7E7",
        warmWhite: "#FEFCFB",
        mutedGold: "#D4AF37",
        dustyRose: "#D4A5A5",
        creamGold: "#F5E6A3",
        softTaupe: "#C4B5A0"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      }
    },
    fontFamily: {
      serif: ["'Playfair Display'", "serif"],
      sans: ["Inter", "ui-sans-serif", "system-ui"]
    }
  },
  plugins: []
};
