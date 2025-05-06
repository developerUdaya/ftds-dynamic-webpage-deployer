import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ChooseThemeIndex from './components/ThemePage';
import ProfilePage from './components/Profile/ProfilePage';
import CreateDomain from './components/CreateDomain';
import Theme2Index from './components/Themes/Theme2/Theme2';

// Function to check authentication status
const isAuthenticated = () => !!localStorage.getItem('token');

// Protected Route Component
const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  return (
    <Router>
      {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full "> */}
      <Routes>
        <Route path="/login" element={<Login onAuthChange={() => setAuth(isAuthenticated())} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chooseTheme/dashboard/:id" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/" element={<Navigate to={auth ? "/chooseTheme" : "/login"} />} />
        <Route path="/chooseTheme" element={<ChooseThemeIndex />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/chooseTheme/dashboard/:id" element={<Dashboard />} />
        <Route path="/profile/chooseTheme/dashboard" element={<Dashboard />} />
        <Route path="/profile/chooseTheme/dashboard" element={<Dashboard />} />
        <Route path="/profile/chooseTheme/theme2/:id" element={<Theme2Index />} />
        <Route path="/profile/chooseTheme/theme1/:id" element={<Theme2Index />} />
        <Route path="/profile/Theme2/:id" element={<Theme2Index />} />
        <Route path="/chooseTheme/subDomainCreate/:id" element={<CreateDomain />} />
        

      </Routes>
      {/* </div>
      </div> */}
    </Router>
  );
}

export default App;