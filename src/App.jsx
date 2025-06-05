import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import LearningListPage from './pages/LearningListPage';
import LoginPage from './pages/LoginPage';
import './App.css'; // Assuming App.css might be used or created by Vite

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/learning-list">Learning List</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learning-list" element={<LearningListPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
