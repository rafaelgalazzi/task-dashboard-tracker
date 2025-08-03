import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './pages/Account/CreateAccount';
import LoginScreen from './pages/Login/LoginScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account/create" element={<CreateAccount />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
