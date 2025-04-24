import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Header } from "./components/Header";
import './index.css';
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <main className="w-full min-h-screen bg-white">
              <Header />
              <Hero />
              <Features />
              <HowItWorks />
              <Contact />
              <Footer />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;