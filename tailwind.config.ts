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
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '3%': { transform: 'translateY(15px)' },
          '8%': { transform: 'translateY(-85px)' },
          '10%': { transform: 'translateY(-80px)' },
          '20%': { transform: 'translateY(-80px)' },
          '23%': { transform: 'translateY(-65px)' },
          '28%': { transform: 'translateY(-165px)' },
          '30%': { transform: 'translateY(-160px)' },
          '40%': { transform: 'translateY(-160px)' },
          '43%': { transform: 'translateY(-145px)' },
          '48%': { transform: 'translateY(-245px)' },
          '50%': { transform: 'translateY(-240px)' },
          '60%': { transform: 'translateY(-240px)' },
          '63%': { transform: 'translateY(-225px)' },
          '68%': { transform: 'translateY(-325px)' },
          '70%': { transform: 'translateY(-320px)' },
          '80%': { transform: 'translateY(-320px)' },
          '83%': { transform: 'translateY(-305px)' },
          '88%': { transform: 'translateY(-405px)' },
          '90%': { transform: 'translateY(-400px)' },
          '100%': { transform: 'translateY(-400px)' },
        },
      },
      animation: {
        'slide-1': 'slide-left 45s linear infinite',
        'slide-2': 'slide-right 70s linear infinite',
        'bounce-text': 'slide-up 10s ease-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
