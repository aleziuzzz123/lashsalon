
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}", 
    "./components/**/*.{ts,tsx}", 
    "./pages/**/*.{ts,tsx}", 
    "./styles/**/*.css"
  ],
  darkMode: 'media', // Enable dark mode support
  theme: {
    extend: {
      // Enhanced breakpoints for better responsive design
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
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
        softTaupe: "#C4B5A0",
        
        // Main theme color from thelash.mx
        theme: "#a26866",
        themeLight: "#B87A7A",
        themeDark: "#8B5A5A",
        themeAlpha: "rgba(162, 104, 102, 0.1)",
      },
      boxShadow: {
        'soft': "0 10px 30px rgba(0,0,0,0.06)",
        'medium': "0 8px 32px rgba(0,0,0,0.08)",
        'strong': "0 20px 40px rgba(0,0,0,0.12)",
        'glow': "0 0 20px rgba(162, 104, 102, 0.3)",
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
    fontFamily: {
      'serif': ["'Playfair Display'", "serif"],
      'sans': ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      'mono': ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    // Add custom utilities
    function({ addUtilities, theme }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme('colors.gray.100'),
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.theme'),
            borderRadius: '2px',
          },
        }
      })
    }
  ],
  // Optimize for production
  future: {
    hoverOnlyWhenSupported: true,
  },
};
