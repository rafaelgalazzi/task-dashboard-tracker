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
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #312E81 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
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
