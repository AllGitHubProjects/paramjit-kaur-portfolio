/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',
        'paper-2': '#F2F1EC',
        ink: '#0E1116',
        'ink-muted': '#5B6066',
        rule: '#E2E1DC',
        pass: '#1A7F37',
        running: '#B45309',
        fail: '#B91C1C',
        accent: '#0969DA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'coverage-fill': 'coverageFill 1.2s ease-out forwards',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'ticker': 'ticker 18s linear infinite',
        'spin-slow': 'spin 2.4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        coverageFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--coverage, 100%)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-paper':
          'linear-gradient(to right, rgba(14,17,22,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,17,22,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
