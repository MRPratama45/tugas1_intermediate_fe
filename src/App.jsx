import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registrasi from "./Pages/Registrasi";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrasi" element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
