import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          DEFAULT: '#0f1f3d',
          light: '#1a3260',
        },
        accent: '#f59e0b',
        surface: {
          DEFAULT: '#ffffff',
          soft: '#fafbfc',
          muted: '#f7f8fa',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display scale for hero / section headings — fluid, tight tracking
        'display-2xl': ['clamp(3rem, 6vw + 0.5rem, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-xl':  ['clamp(2.25rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.022em' }],
        'display-lg':  ['clamp(1.875rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        // Soft, layered shadows — closer to Linear / Vercel
        'card':       '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px rgba(15, 23, 42, 0.08)',
        'btn-blue':   '0 1px 2px rgba(37, 99, 235, 0.15), 0 6px 20px -4px rgba(37, 99, 235, 0.35)',
        'btn-blue-hover': '0 1px 2px rgba(37, 99, 235, 0.18), 0 12px 28px -4px rgba(37, 99, 235, 0.45)',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "radial-gradient(circle, rgba(37, 99, 235, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

export default config