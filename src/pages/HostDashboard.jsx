import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HostDashboard = () => {
  const [homestays, setHomestays] = useState([
    {
      id: 1,
      name: 'Cozy Cabin',
      location: 'Forest Hills',
      description: 'A beautiful cabin in the woods.',
      price: 100,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
      amenities: ['WiFi', 'Kitchen', 'Fireplace'],
      food: ['Local Breakfast', 'BBQ Grill'],
      restaurants: ['Forest Diner', 'Mountain Cafe'],
      maps: 'https://maps.google.com/?q=Forest+Hills'
    }
  ]);

  const [newHomestay, setNewHomestay] = useState({
    name: '',
    location: '',
    description: '',
    price: '',
    image: '',
    amenities: '',
    food: '',
    restaurants: '',
    maps: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHomestay({ ...newHomestay, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const homestay = {
      ...newHomestay,
      id: homestays.length + 1,
      amenities: newHomestay.amenities.split(',').map(a => a.trim()),
      food: newHomestay.food.split(',').map(f => f.trim()),
      restaurants: newHomestay.restaurants.split(',').map(r => r.trim())
    };
    setHomestays([...homestays, homestay]);
    setNewHomestay({
      name: '',
      location: '',
      description: '',
      price: '',
      image: '',
      amenities: '',
      food: '',
      restaurants: '',
      maps: ''
    });
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Host Dashboard</h2>
        <p>Welcome, Host! Manage your homestays here.</p>

        <section>
          <h3>Add New Homestay</h3>
          <form onSubmit={handleSubmit} className="homestay-form">
            <input type="text" name="name" placeholder="Homestay Name" value={newHomestay.name} onChange={handleInputChange} required />
            <input type="text" name="location" placeholder="Location" value={newHomestay.location} onChange={handleInputChange} required />
            <textarea name="description" placeholder="Description" value={newHomestay.description} onChange={handleInputChange} required />
            <input type="number" name="price" placeholder="Price per night" value={newHomestay.price} onChange={handleInputChange} required />
            <input type="url" name="image" placeholder="Image URL" value={newHomestay.image} onChange={handleInputChange} required />
            <input type="text" name="amenities" placeholder="Amenities (comma separated)" value={newHomestay.amenities} onChange={handleInputChange} />
            <input type="text" name="food" placeholder="Food options (comma separated)" value={newHomestay.food} onChange={handleInputChange} />
            <input type="text" name="restaurants" placeholder="Nearby restaurants (comma separated)" value={newHomestay.restaurants} onChange={handleInputChange} />
            <input type="url" name="maps" placeholder="Google Maps URL" value={newHomestay.maps} onChange={handleInputChange} />
            <button type="submit">Add Homestay</button>
          </form>
        </section>

        <section>
          <h3>Your Homestays</h3>
          <div className="homestay-list">
            {homestays.map(homestay => (
              <div key={homestay.id} className="homestay-item">
                <img src={homestay.image} alt={homestay.name} />
                <h4>{homestay.name}</h4>
                <p><strong>Location:</strong> {homestay.location}</p>
                <p>{homestay.description}</p>
                <p><strong>Price:</strong> ${homestay.price}/night</p>
                <p><strong>Amenities:</strong> {homestay.amenities.join(', ')}</p>
                <p><strong>Food:</strong> {homestay.food.join(', ')}</p>
                <p><strong>Restaurants:</strong> {homestay.restaurants.join(', ')}</p>
                <a href={homestay.maps} target="_blank" rel="noopener noreferrer">View on Map</a>
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
