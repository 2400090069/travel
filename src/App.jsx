import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ContactUs from './pages/ContactUs';
import TopLocations from './pages/TopLocations';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import HostDashboard from './pages/HostDashboard';
import TouristDashboard from './pages/TouristDashboard';
import GuideDashboard from './pages/GuideDashboard';
import HomestayDetails from './pages/HomestayDetails';
import TourPackageDetails from './pages/TourPackageDetails';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/top-locations" element={<TopLocations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/host" element={<HostDashboard />} />
          <Route path="/tourist" element={<TouristDashboard />} />
          <Route path="/guide" element={<GuideDashboard />} />
          <Route path="/homestay/:id" element={<HomestayDetails />} />
          <Route path="/tour-package/:id" element={<TourPackageDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
