import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Auth from "./layouts/Auth/Auth";
import Login from "./layouts/Login/Login";
import ForgotPass from "./layouts/ForgotPass/ForgotPass";
import Register from "./layouts/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
