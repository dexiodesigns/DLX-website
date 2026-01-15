/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // This creates the slow, rotating/pulsing effect for the background glow
        'circular-breathe': 'circular-breathe 12s infinite alternate ease-in-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'circular-breathe': {
          '0%': { 
            transform: 'translate(-10%, -10%) scale(1) rotate(0deg)', 
            opacity: '0.2' 
          },
          '50%': { 
            transform: 'translate(10%, 5%) scale(1.2) rotate(180deg)', 
            opacity: '0.35' 
          },
          '100%': { 
            transform: 'translate(-5%, 10%) scale(1.1) rotate(360deg)', 
            opacity: '0.2' 
          },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
};