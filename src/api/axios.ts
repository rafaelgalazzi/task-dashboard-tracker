import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ou process.env.REACT_APP_API_URL
});

export default api;


// src/
// │
// ├── api/                 # Configurações de API e clientes HTTP
// │   ├── axios.ts         # Instância do Axios (baseURL, interceptores, etc.)
// │   └── queryClient.ts   # Configuração do React Query Client
// │
// ├── hooks/               # Hooks customizados (composables)
// │   └── useUsers.ts      # Ex: Hook para buscar usuários
// │
// ├── services/            # Funções puras que chamam a API
// │   └── usersService.ts  # Funções que fazem fetch dos dados (usadas nos hooks)
// │
// ├── pages/               # Páginas principais do app
// │   └── UsersPage.tsx
// │
// ├── components/          # Componentes compartilhados
// │
// └── App.tsx
