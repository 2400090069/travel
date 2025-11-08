import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomestayCard from '../components/HomestayCard';
import AttractionCard from '../components/AttractionCard';
import FoodCard from '../components/FoodCard';
import EventCard from '../components/EventCard';
import MenuCard from '../components/MenuCard';
import PaymentModal from '../components/PaymentModal';

const TouristDashboard = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchDates, setSearchDates] = useState('');
  const [selectedMenuItems, setSelectedMenuItems] = useState({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample data - in real app, this would come from API
  const recommendations = [
    { id: 1, name: 'Mountain Retreat', description: 'Peaceful mountain cabin.', price: 120, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    { id: 2, name: 'Beach Bungalow', description: 'Tropical beach paradise.', price: 180, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' },
  ];

  const nearbyAttractions = [
    { id: 1, name: 'Local Market', description: 'Experience local culture.', location: 'Downtown', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
    { id: 2, name: 'Historic Site', description: 'Ancient ruins and history.', location: 'Old Town', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
  ];

  const myBookings = [
    { id: 1, name: 'Cozy Cabin', dates: '2024-01-15 to 2024-01-18', status: 'Confirmed' },
  ];

  const topRatedFood = [
    { id: 1, restaurantName: 'Local Spice House', recommendedDish: 'Butter Chicken', address: '123 Main St, City', rating: 4.5, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400' },
    { id: 2, restaurantName: 'Ocean View Cafe', recommendedDish: 'Fresh Seafood Platter', address: '456 Beach Rd, City', rating: 4.8, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400' },
    { id: 3, restaurantName: 'Mountain Grill', recommendedDish: 'Grilled Trout', address: '789 Hill St, City', rating: 4.3, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
  ];

  const events = [
    { id: 1, name: 'Summer Music Festival', type: 'Concert', admission: 25, location: 'Central Park', date: '2024-07-15', description: 'Enjoy live music from local bands.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' },
    { id: 2, name: 'Shakespeare in the Park', type: 'Theater', admission: 15, location: 'Riverside Theater', date: '2024-07-20', description: 'Classic theater under the stars.', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400' },
    { id: 3, name: 'Food & Wine Festival', type: 'Festival', admission: 35, location: 'Downtown Plaza', date: '2024-08-05', description: 'Taste local cuisines and wines.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { location: searchLocation, dates: searchDates });
    // In real app, this would trigger API search
  };

  const handleMenuSelect = (menuType, selectedItems) => {
    setSelectedMenuItems(prev => ({
      ...prev,
      [menuType]: selectedItems
    }));
  };

  // Sample menu data
  const foodMenu = {
    type: 'food',
    title: 'Select Food Items',
    items: [
      { name: 'Butter Chicken', description: 'Creamy, rich curry with tender chicken', price: 15, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200' },
      { name: 'Fresh Seafood Platter', description: 'Assortment of fresh grilled seafood', price: 25, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200' },
      { name: 'Grilled Trout', description: 'Fresh mountain trout with herbs', price: 18, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200' },
      { name: 'Vegetable Biryani', description: 'Fragrant rice dish with mixed vegetables', price: 12, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200' },
    ]
  };

  const attractionMenu = {
    type: 'attractions',
    title: 'Select Attractions',
    items: [
      { name: 'Local Market Tour', description: 'Guided tour of the vibrant local market', price: 20, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=200' },
      { name: 'Historic Site Visit', description: 'Explore ancient ruins and history', price: 30, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200' },
      { name: 'Mountain Hiking', description: 'Guided hiking tour in the mountains', price: 40, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200' },
      { name: 'Beach Activities', description: 'Water sports and beach relaxation', price: 35, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200' },
    ]
  };

  const eventMenu = {
    type: 'events',
    title: 'Select Events',
    items: [
      { name: 'Summer Music Festival', description: 'Live music from local bands', price: 25, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200' },
      { name: 'Shakespeare in the Park', description: 'Classic theater under the stars', price: 15, image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=200' },
      { name: 'Food & Wine Festival', description: 'Taste local cuisines and wines', price: 35, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200' },
      { name: 'Cultural Dance Show', description: 'Traditional dance performances', price: 20, image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200' },
    ]
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Tourist Dashboard</h2>
        <p>Welcome, Tourist! Discover amazing places to stay.</p>

        {/* Search Bar */}
        <section className="search-section">
          <h3>Find Your Perfect Stay</h3>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Check-in and Check-out dates"
              value={searchDates}
              onChange={(e) => setSearchDates(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>

        {/* Personalized Recommendations */}
        <section>
          <h3>Personalized Recommendations</h3>
          <div className="recommendations-list">
            {recommendations.map(homestay => <HomestayCard key={homestay.id} homestay={homestay} />)}
          </div>
        </section>

        {/* Nearby Attractions */}
        <section>
          <h3>Nearby Attractions</h3>
          <div className="attractions-list">
            {nearbyAttractions.map(attraction => <AttractionCard key={attraction.id} attraction={attraction} />)}
          </div>
        </section>

        {/* Top Rated Local Food */}
        <section>
          <h3>Top Rated Local Food</h3>
          <div className="food-list">
            {topRatedFood.map(food => <FoodCard key={food.id} food={food} />)}
          </div>
        </section>

        {/* Events & Entertainment */}
        <section>
          <h3>Events & Entertainment</h3>
          <div className="events-list">
            {events.map(event => <EventCard key={event.id} event={event} />)}
          </div>
        </section>

        {/* Menu Selection */}
        <section>
          <h3>Select Your Experience</h3>
          <div className="menu-selection">
            <MenuCard menu={foodMenu} onSelect={handleMenuSelect} />
            <MenuCard menu={attractionMenu} onSelect={handleMenuSelect} />
            <MenuCard menu={eventMenu} onSelect={handleMenuSelect} />
          </div>

          {/* Category Selection Buttons */}
          <div className="category-buttons" style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedCategory('food')}
              className={`category-btn ${selectedCategory === 'food' ? 'active' : ''}`}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedCategory === 'food' ? '#007bff' : '#f8f9fa',
                color: selectedCategory === 'food' ? 'white' : '#333',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              🍽️ Food Items
            </button>
            <button
              onClick={() => setSelectedCategory('attractions')}
              className={`category-btn ${selectedCategory === 'attractions' ? 'active' : ''}`}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedCategory === 'attractions' ? '#007bff' : '#f8f9fa',
                color: selectedCategory === 'attractions' ? 'white' : '#333',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              🎭 Attractions
            </button>
            <button
              onClick={() => setSelectedCategory('events')}
              className={`category-btn ${selectedCategory === 'events' ? 'active' : ''}`}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedCategory === 'events' ? '#007bff' : '#f8f9fa',
                color: selectedCategory === 'events' ? 'white' : '#333',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              🎪 Events
            </button>
          </div>

          {/* Display Selected Category Items */}
          {selectedCategory && (
            <div className="category-display" style={{ marginTop: '20px' }}>
              <h4 style={{ color: '#007bff', marginBottom: '15px' }}>
                {selectedCategory === 'food' && '🍽️ Available Food Items'}
                {selectedCategory === 'attractions' && '🎭 Available Attractions'}
                {selectedCategory === 'events' && '🎪 Available Events'}
              </h4>

              {selectedCategory === 'food' && (
                <div className="food-list">
                  {topRatedFood.map(food => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              )}

              {selectedCategory === 'attractions' && (
                <div className="attractions-list">
                  {nearbyAttractions.map(attraction => (
                    <AttractionCard key={attraction.id} attraction={attraction} />
                  ))}
                </div>
              )}

              {selectedCategory === 'events' && (
                <div className="events-list">
                  {events.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Selected Items Summary */}
        <section>
          <h3>Your Selected Items</h3>
          {Object.keys(selectedMenuItems).length > 0 ? (
            <div className="selected-items-summary">
              {Object.entries(selectedMenuItems).map(([type, items]) => (
                <div key={type} className="selected-category">
                  <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                  {items.length > 0 ? (
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No items selected</p>
                  )}
                </div>
              ))}
              <div className="total-summary">
                <h4>Total Cost: $
                  {Object.values(selectedMenuItems).flat().reduce((sum, item) => sum + item.price, 0)}
                </h4>
                <button
                  className="pay-btn"
                  onClick={() => setShowPaymentModal(true)}
                  disabled={Object.values(selectedMenuItems).flat().length === 0}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          ) : (
            <p>No items selected yet. Choose from the menus above!</p>
          )}
        </section>

        {/* My Bookings */}
        <section>
          <h3>My Upcoming Trips</h3>
          <div className="bookings-list">
            {myBookings.map(booking => (
              <div key={booking.id} className="booking-item">
                <h4>{booking.name}</h4>
                <p>Dates: {booking.dates}</p>
                <p>Status: {booking.status}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        totalAmount={Object.values(selectedMenuItems).flat().reduce((sum, item) => sum + item.price, 0)}
        selectedItems={selectedMenuItems}
        onPaymentSuccess={() => {
          alert('Payment successful! Your booking has been confirmed.');
          setSelectedMenuItems({});
        }}
      />
    </div>
  );
};

export default TouristDashboard;
