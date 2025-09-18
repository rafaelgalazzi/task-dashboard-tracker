import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { NotFoundRoute } from './components/Routing/NotFoundRoute';
import { PublicRoute } from './components/Routing/PublicRoute';
import { PrivateRoute } from './components/Routing/PrivateRoute';
import { LoginScreen } from './pages/Login/LoginScreen';
import { CreateAccount } from './pages/Account/CreateAccount';
import { LoginTwoFactor } from './pages/Account/LoginTwoFactor';
import { ConfirmAccount } from './pages/Account/ConfirmAccount';
import { ProjectList } from './pages/Project/ProjectList';
import { Provider } from 'react-redux';
import store from './store/store';
import { SnackbarHandler } from './components/Snackbar/SnackbarHandler';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
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
              <Route path="/projects" element={<ProjectList />} />
            </Route>
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <SnackbarHandler />
    </Provider>
  );
}

export default App;
