import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const TopLocations = () => {
  const { user } = useAuth();
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  const locations = [
    {
      id: 1,
      name: 'Bali',
      description: 'A tropical paradise with beautiful beaches, vibrant culture, and stunning landscapes.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400'
    },
    {
      id: 2,
      name: 'New York',
      description: 'The city that never sleeps, offering world-class attractions, diverse neighborhoods, and endless entertainment.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400'
    },
    {
      id: 3,
      name: 'Alpine',
      description: 'Majestic mountain ranges perfect for skiing, hiking, and experiencing breathtaking natural beauty.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    }
  ];

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
          <p>Please log in to view locations.</p>
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
        minHeight: '80vh'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#333',
          fontSize: '2.5rem'
        }}>
          Your Location
        </h1>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Getting your location...</p>
        ) : userLocation ? (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>Current Location</h2>
            <p><strong>Latitude:</strong> {userLocation.latitude.toFixed(6)}</p>
            <p><strong>Longitude:</strong> {userLocation.longitude.toFixed(6)}</p>
          </div>
        ) : (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            textAlign: 'center'
          }}>
            <p>Location access denied or not supported.</p>
          </div>
        )}

        <h1 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#333',
          fontSize: '2.5rem'
        }}>
          Explore Our Top Locations
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {locations.map(location => (
            <div key={location.id} style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <img
                src={location.image}
                alt={location.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  color: '#333',
                  fontSize: '1.5rem'
                }}>
                  {location.name}
                </h3>
                <p style={{
                  margin: '0 0 1.5rem 0',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {location.description}
                </p>
                <button style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TopLocations;
