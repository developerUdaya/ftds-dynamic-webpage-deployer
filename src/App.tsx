import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ChooseThemeIndex from './components/ThemePage';
import ProfilePage from './components/Profile/ProfilePage';
import CreateDomain from './components/CreateDomain';
import Theme2Index from './components/Themes/Theme2/Theme2';
import ForgotPassword from './components/ForgotPassword';
import ProtectedRoutes from './ProtectedRoutes';

// Function to check authentication status
const isAuthenticated = () => !!localStorage.getItem('token');

function App() {
  const [auth, setAuth] = useState(isAuthenticated());
  const token = localStorage.getItem('token');
  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onAuthChange={() => setAuth(isAuthenticated())} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate to={token ? "/chooseTheme" : "/login"} />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/chooseTheme" element={<ChooseThemeIndex />} />
          <Route path="/chooseTheme/dashboard/:id" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/chooseTheme/dashboard/:id" element={<Dashboard />} />
          <Route path="/profile/chooseTheme/dashboard" element={<Dashboard />} />
          <Route path="/profile/chooseTheme/Theme2/:id" element={<Theme2Index />} />
          <Route path="/profile/chooseTheme/Theme1/:id" element={<Theme2Index />} />
          <Route path="/profile/Theme2/:id" element={<Theme2Index />} />
          <Route path="/chooseTheme/subDomainCreate/:id" element={<CreateDomain />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;