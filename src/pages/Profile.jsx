import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div>
        <Navbar />
        <main style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa',
          minHeight: '80vh',
          textAlign: 'center'
        }}>
          <h1 style={{ marginBottom: '2rem', color: '#333' }}>Access Denied</h1>
          <p>Please log in to view your profile.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '2rem', color: '#333' }}>User Profile</h1>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>Personal Information</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
            <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> {user.address || 'Not provided'}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
