import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import CreateAccount from './pages/Account/CreateAccount';
import LoginScreen from './pages/Login/LoginScreen';
import HomePage from './pages/Home/HomePage';
import { PublicRoute } from './components/Routing/PublicRoute';
import { PrivateRoute } from './components/Routing/PrivateRoute';
import { NotFoundRoute } from './components/Routing/NotFoundRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/account/create"
            element={
              <PublicRoute>
                <CreateAccount />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
