/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#06B6D4',
        secondary: '#22D3EE',
        accent: '#67E8F9',
        bg: '#000000',
        card: '#0A0F18',
        text: '#E0F7FA',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg,#06B6D4 0%,#06B6D4 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'particle': 'particleFloat 15s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0) scale(0)', opacity: '0' },
          '10%': { transform: 'translateY(-10vh) scale(1)', opacity: '0.7' },
          '90%': { transform: 'translateY(-90vh) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateY(-100vh) scale(0)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
