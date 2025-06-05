import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import LearningListPage from "./pages/LearningListPage";
import LoginPage from "./pages/LoginPage";
import PhonicsPage from "./pages/PhonicsPage"; // Import PhonicsPage
import "./App.css"; // Assuming App.css might be used or created by Vite
import { NavMain } from "./components/dashboard/NavMain";

function App() {
  return (
    <Router>
      <div>
        <NavMain />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learning-list" element={<LearningListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/phonics" element={<PhonicsPage />} /> {/* Add PhonicsPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
