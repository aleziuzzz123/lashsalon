
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        marble: "#F8F6F4",
        cream: "#FBF2DE",
        taupe: "#D8CFC7",
        gold: "#C9A969",
        charcoal: "#2B2B2B"
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
