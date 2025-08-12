/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Indigo moderno
        secondary: '#8B5CF6', // Roxo vibrante
        accent: '#EC4899', // Rosa neon
        dark: '#0F172A', // Azul escuro para fundo
        darkAlt: '#1E293B', // Alternativa do escuro
        light: '#F1F5F9', // Cinza claro para contraste

        // Texto
        textPrimary: '#E2E8F0', // Cinza bem claro
        textSecondary: '#A5B4FC', // Indigo claro
        textAccent: '#F472B6', // Rosa claro

        // Estados
        success: '#22C55E', // Verde sucesso
        warning: '#F59E0B', // Amarelo alerta
        error: '#EF4444', // Vermelho erro
        spinnerColor: '#99a1af',
        cardBackground: 'rgba(30, 41, 59, 0.7)', // darkAlt com 70% opacidade
        cardBackgroundLight: 'rgba(39, 53, 73, 0.6)', // tom mais claro com transparência
        navbar: '#420686', // Fundo da navbar
        footer: '#420686', // Fundo do footer
        gradientColor1: '#0f172b',
        gradientColor2: '#312c85',
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #BE185D 100%)',
        'gradient-navbar':
          'linear-gradient(90deg, #3730A3 0%, #5B21B6 50%, #9D174D 100%)',
        'gradient-footer':
          'linear-gradient(90deg, #5B21B6 0%, #3730A3 50%, #9D174D 100%)',
        'gradient-navbar-dark':
          'linear-gradient(90deg, #312E81 0%, #1E293B 50%, #0F172A 100%)',
      },
      boxShadow: {
        glow: '0 0 15px rgba(236, 72, 153, 0.7), 0 0 30px rgba(139, 92, 246, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
