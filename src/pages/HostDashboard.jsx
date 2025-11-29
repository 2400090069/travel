import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HostDashboard = () => {
  const [homestays, setHomestays] = useState([
    {
      id: 1,
      name: 'Beachside Villa',
      location: 'Goa, India',
      price: '₹5000/night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      location: 'Manali, India',
      price: '₹3000/night',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'Booked'
    }
  ]);

  const [newHomestay, setNewHomestay] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    image: ''
  });

  const handleInputChange = (e) => {
    setNewHomestay({
      ...newHomestay,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const homestay = {
      id: homestays.length + 1,
      ...newHomestay,
      status: 'Available'
    };
    setHomestays([...homestays, homestay]);
    setNewHomestay({
      name: '',
      location: '',
      price: '',
      description: '',
      image: ''
    });
  };

  return (
    <div>
      <Navbar />
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif', minHeight: '80vh' }}>
        <h2 style={{ fontSize: '2.5em', color: '#333', marginBottom: '5px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          Host Dashboard
        </h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Manage your homestays and view bookings
        </p>

        <section style={{ marginBottom: '50px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.8em', color: '#2c3e50', marginTop: '0', borderBottom: '1px dashed #e0e0e0', paddingBottom: '10px', marginBottom: '20px' }}>
            Add New Homestay
          </h3>
          <form onSubmit={handleSubmit} className="homestay-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Homestay Name"
              value={newHomestay.name}
              onChange={handleInputChange}
              required
              style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newHomestay.location}
              onChange={handleInputChange}
              required
              style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="price"
              placeholder="Price per night"
              value={newHomestay.price}
              onChange={handleInputChange}
              required
              style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              value={newHomestay.image}
              onChange={handleInputChange}
              required
              style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newHomestay.description}
              onChange={handleInputChange}
              required
              style={{ gridColumn: '1 / -1', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: '100%', boxSizing: 'border-box', resize: 'vertical', minHeight: '100px' }}
            />
            <button
              type="submit"
              style={{ gridColumn: '1 / -1', padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '18px', cursor: 'pointer' }}
            >
              Add Homestay
            </button>
          </form>
        </section>

        <section style={{ marginBottom: '50px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.8em', color: '#2c3e50', marginTop: '0', borderBottom: '1px dashed #e0e0e0', paddingBottom: '10px', marginBottom: '20px' }}>
            Your Homestays
          </h3>
          <div className="homestay-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
            {homestays.map(homestay => (
              <div key={homestay.id} className="homestay-item" style={{ background: '#f7f9fa', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
                <img src={homestay.image} alt={homestay.name} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                <h4 style={{ fontSize: '1.5em', color: '#333', padding: '10px 15px 0', marginTop: '0' }}>{homestay.name}</h4>
                <p style={{ fontSize: '0.95em', color: '#555', padding: '0 15px', marginBottom: '5px' }}>
                  📍 {homestay.location}
                </p>
                <p style={{ fontSize: '0.95em', color: '#555', padding: '0 15px', marginBottom: '5px' }}>
                  💰 <strong>{homestay.price}</strong>
                </p>
                <p style={{ fontSize: '0.95em', color: '#555', padding: '0 15px', marginBottom: '15px' }}>
                  Status: <strong style={{ color: homestay.status === 'Available' ? '#2ecc71' : '#e74c3c' }}>{homestay.status}</strong>
                </p>
                <button style={{ display: 'inline-block', backgroundColor: '#2ecc71', color: 'white', padding: '8px 15px', margin: '10px 15px 15px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HostDashboard;
