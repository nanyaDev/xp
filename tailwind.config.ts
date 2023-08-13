import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['var(--font-sequel)'],
        'body': ['var(--font-roboto-mono)'],
      },
      colors: {
        beige: '#ffe9d2',
        'light-beige': 'rgba(247, 240, 199, 0.30)',
        darkest: '#1e1e1e',
        darker: '#252525',
        dark: '#2c2c2c',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        'slide-right': {
          '0%': { transform: 'translate(-50%)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 30s linear infinite',
        'slide-right': 'slide-right 30s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
