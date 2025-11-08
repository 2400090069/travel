import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userRole = loginData.email.includes('admin') ? 'admin' : loginData.email.includes('host') ? 'host' : loginData.email.includes('guide') ? 'guide' : 'tourist';
    login({ email: loginData.email, role: userRole });
    navigate(`/${userRole}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate register - in real app, this would come from API
    const userRole = registerData.email.includes('admin') ? 'admin' : registerData.email.includes('host') ? 'host' : registerData.email.includes('guide') ? 'guide' : 'tourist';
    login({ name: registerData.name, email: registerData.email, role: userRole });
    navigate(`/${userRole}`);
  };

  return (
    <div>
      <Navbar variant="auth" />
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          {/* Login Column */}
          <div style={{
            flex: 1,
            padding: '3rem',
            borderRight: '1px solid #eee'
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Login</h2>
            <form onSubmit={handleLogin} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '1rem'
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
                LOGIN
              </button>
            </form>
          </div>

          {/* Sign Up Column */}
          <div style={{
            flex: 1,
            padding: '3rem'
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Sign Up</h2>
            <form onSubmit={handleRegister} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <input
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
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
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '1rem'
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
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
