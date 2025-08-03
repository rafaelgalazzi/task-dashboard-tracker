import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import CreateAccount from "./pages/Account/CreateAccount";
import LoginScreen from "./pages/Login/LoginScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/account/create" element={<CreateAccount />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
