import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Astroloji teması
        cosmic: {
          50: '#f0f0ff',
          100: '#e5e7ff',
          200: '#cdcfff',
          300: '#a5a9ff',
          400: '#7c7aff',
          500: '#5d4cff',
          600: '#4c2eff',
          700: '#3c1eff',
          800: '#2e14d9',
          900: '#1a0b8a',
        },
        mystical: {
          50: '#f3f1ff',
          100: '#e9e5ff',
          200: '#d5cfff',
          300: '#b8a9ff',
          400: '#9575ff',
          500: '#7c3aed',
          600: '#6b21d9',
          700: '#5b1bb8',
          800: '#4c1d95',
          900: '#3e1a78',
        },
        starlight: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      spacing: {
        '88': '22rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'zodiacRotate': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'gradientShift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'textGlow': {
          '0%, 100%': { textShadow: '0 0 60px rgba(139, 92, 246, 0.5)' },
          '50%': { textShadow: '0 0 80px rgba(139, 92, 246, 0.8), 0 0 100px rgba(139, 92, 246, 0.3)' },
        },
        'starPulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
        'galaxyRotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'particleFloat': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-3px)' },
          '75%': { transform: 'translateY(-15px) translateX(8px)' },
        },
        'particleGlow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'textFormation': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.5) rotate(2deg)',
            filter: 'blur(8px)',
          },
          '50%': { 
            opacity: '0.7',
            transform: 'scale(0.8) rotate(1deg)',
            filter: 'blur(4px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) rotate(0deg)',
            filter: 'blur(0px)',
          },
        },
        'parchmentUnfold': {
          '0%': { 
            transform: 'scaleY(0.1) scaleX(0.8)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scaleY(0.6) scaleX(0.9)',
            opacity: '0.5',
          },
          '100%': { 
            transform: 'scaleY(1) scaleX(1)',
            opacity: '1',
          },
        },
        'textFadeIn': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'starRotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'starBreathe': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '1',
            boxShadow: '0 0 8px rgba(254, 240, 138, 1), 0 0 16px rgba(254, 240, 138, 0.6)' 
          },
          '50%': { 
            transform: 'scale(1.3)', 
            opacity: '0.8',
            boxShadow: '0 0 12px rgba(254, 240, 138, 1), 0 0 24px rgba(254, 240, 138, 0.8), 0 0 36px rgba(254, 240, 138, 0.4)' 
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin-slow 30s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'starPulse': 'starPulse 2s ease-in-out infinite',
        'galaxyRotate': 'galaxyRotate 8s linear infinite',
        'galaxyRotateReverse': 'galaxyRotate 12s linear infinite reverse',
        'particleFloat': 'particleFloat 3s ease-in-out infinite',
        'particleGlow': 'particleGlow 1.5s ease-in-out infinite',
        'textFormation': 'textFormation 2s ease-out',
        'textGlow': 'textGlow 3s ease-in-out infinite',
        'parchmentUnfold': 'parchmentUnfold 1.5s ease-out',
        'textFadeIn': 'textFadeIn 2s ease-out',
        'starRotate': 'starRotate 8s linear infinite',
        'starBreathe': 'starBreathe 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config 