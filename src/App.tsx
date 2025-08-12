import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { NotFoundRoute } from './components/Routing/NotFoundRoute';
import { PublicRoute } from './components/Routing/PublicRoute';
import { PrivateRoute } from './components/Routing/PrivateRoute';
import { LoginScreen } from './pages/Login/LoginScreen';
import { CreateAccount } from './pages/Account/CreateAccount';
import { LoginTwoFactor } from './pages/Account/LoginTwoFactor';
import { HomePage } from './pages/Home/HomePage';
import { ConfirmAccount } from './pages/Account/ConfirmAccount';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/account/create" element={<CreateAccount />} />
            <Route path="/account/confirm" element={<ConfirmAccount />} />
            <Route path="/account/twofactor" element={<LoginTwoFactor />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />} />
          </Route>

          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
