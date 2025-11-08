import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import HostDashboard from './pages/HostDashboard';
import TouristDashboard from './pages/TouristDashboard';
import GuideDashboard from './pages/GuideDashboard';
import HomestayDetails from './pages/HomestayDetails';
import './styles.css';

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/host" element={<ProtectedRoute allowedRoles={['host']}><HostDashboard /></ProtectedRoute>} />
          <Route path="/tourist" element={<ProtectedRoute allowedRoles={['tourist']}><TouristDashboard /></ProtectedRoute>} />
          <Route path="/guide" element={<ProtectedRoute allowedRoles={['guide']}><GuideDashboard /></ProtectedRoute>} />
          <Route path="/homestay/:id" element={<HomestayDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
