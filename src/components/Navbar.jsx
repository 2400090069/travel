import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ variant = 'default', showSearch = false, showRegister = false }) => {
  const { user, logout } = useAuth();
  const renderLinks = () => {
    switch (variant) {
      case 'auth':
        return (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
          </>
        );
      case 'simple':
        return null;
      default:
        if (user) {
          return (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/top-locations">Location</Link></li>
              <li><button onClick={logout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button></li>
            </>
          );
        } else {
          return (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/auth">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          );
        }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Travel</h1>
        </Link>
      </div>
      {showSearch && (
        <div className="navbar-search">
          <input type="text" placeholder="Search destinations..." />
          <button className="search-btn">🔍</button>
        </div>
      )}
      <ul className="navbar-links">
        {renderLinks()}
        {showRegister && !user && (
          <li>
            <Link to="/register" className="register-btn">Register</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
