import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Homepage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { IssuePage } from "./pages/IssuePage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <Header />
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? <img src="/light_mode.png" alt="light_mode"></img> : "🌙"}
        {/* {darkMode ? "☀️" : "🌙"} */}
      </button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/issue/:id" element={<IssuePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
