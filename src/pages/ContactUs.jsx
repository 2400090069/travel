import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <div>
      <Navbar variant="simple" />
      <main style={{
        display: 'flex',
        minHeight: '80vh',
        padding: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          flex: 1,
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          marginRight: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ marginBottom: '2rem', color: '#333' }}>Contact Us</h2>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div style={{
          flex: 1,
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#e9ecef',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '4rem',
              color: '#6c757d'
            }}>🗺️</div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '2rem',
              color: '#ff6b35'
            }}>📍</div>
          </div>
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <a href="#" style={{
              fontSize: '2rem',
              color: '#E4405F',
              textDecoration: 'none'
            }}>📷</a>
            <a href="#" style={{
              fontSize: '2rem',
              color: '#1877F2',
              textDecoration: 'none'
            }}>📘</a>
            <a href="#" style={{
              fontSize: '2rem',
              color: '#1DA1F2',
              textDecoration: 'none'
            }}>🐦</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
