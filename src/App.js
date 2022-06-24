import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./layouts/Auth/Auth";
import ForgotPass from "./layouts/ForgotPass/ForgotPass";
import Login from "./layouts/Login/Login";
import Register from "./layouts/Register/Register";
import Topic from "./layouts/Topic/Topic";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/register" element={<Register />} />
          <Route path="/topic" element={<Topic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
