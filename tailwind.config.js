module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#3b82f6',
        dark: '#0f172a',
        light: '#f9fafb'
      },
      boxShadow: {
        'soft': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      }
    }
  }
};