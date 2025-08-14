# Task Tracker Dashboard

A modern task management dashboard built with React, TypeScript, and Vite. This application provides a comprehensive interface for managing tasks, projects, and user accounts with a focus on clean UI/UX and robust authentication.

## Features

- **User Authentication**: Secure login/logout with session management
- **Task Management**: Create, update, and organize tasks
- **Project Tracking**: Manage projects and associate tasks with projects
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS styling

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit, React Query
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier

## Project Structure

```
src/
├── api/                 # HTTP client configuration
├── assets/              # Static assets (images, icons)
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── services/            # API service functions
├── tests/               # Test files
├── types/               # TypeScript type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Development Guidelines

### Component Design

- Use functional components with TypeScript interfaces
- Implement reusable components in the `components/` directory
- Follow the existing styling patterns with Tailwind CSS
- Use the provided BaseCard, BaseButton, BaseInput, etc. components for consistency

### State Management

- Use React Query for server state (API data)
- Use Redux Toolkit for complex client state
- Implement custom hooks for reusable state logic

### Testing

- Write unit tests for components and hooks
- Use React Testing Library for component testing
- Mock API calls and external dependencies
- Run tests with `npm run test`

### Code Quality

- Follow the TypeScript and ESLint configurations
- Maintain consistent code formatting with Prettier
- Write meaningful commit messages
- Keep components small and focused

## Environment Variables

Create a `.env` file with the following variables:

```
VITE_API_URL=http://localhost:3000/api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.