// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-up': 'slide-up 1s ease-out'
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    }
  }
};