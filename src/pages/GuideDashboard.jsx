import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const GuideDashboard = () => {
  const [insights, setInsights] = useState([
    {
      id: 1,
      title: 'Hidden Gems of the City',
      description: 'Discover the lesser-known spots that make this city special.',
      category: 'Secret Spots',
      attraction: 'Downtown Area',
      views: 45
    }
  ]);

  const [newInsight, setNewInsight] = useState({
    title: '',
    description: '',
    category: '',
    attraction: ''
  });

  const [foodRecommendations, setFoodRecommendations] = useState([
    {
      id: 1,
      restaurantName: 'Local Spice House',
      recommendedDish: 'Butter Chicken',
      address: '123 Main St, City',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400'
    }
  ]);

  const [newFoodRecommendation, setNewFoodRecommendation] = useState({
    restaurantName: '',
    recommendedDish: '',
    address: '',
    rating: 0
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Summer Music Festival',
      type: 'Concert',
      admission: 25,
      location: 'Central Park',
      date: '2024-07-15',
      description: 'Enjoy live music from local bands.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400'
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    name: '',
    type: '',
    admission: '',
    location: '',
    date: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInsight({ ...newInsight, [name]: value });
  };

  const handleFoodInputChange = (e) => {
    const { name, value } = e.target;
    setNewFoodRecommendation({ ...newFoodRecommendation, [name]: value });
  };

  const handleFoodRatingChange = (rating) => {
    setNewFoodRecommendation({ ...newFoodRecommendation, rating });
  };

  const handleEventInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const event = {
      ...newEvent,
      id: events.length + 1,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' // Default image
    };
    setEvents([...events, event]);
    setNewEvent({
      name: '',
      type: '',
      admission: '',
      location: '',
      date: '',
      description: ''
    });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    const foodRec = {
      ...newFoodRecommendation,
      id: foodRecommendations.length + 1,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400' // Default image
    };
    setFoodRecommendations([...foodRecommendations, foodRec]);
    setNewFoodRecommendation({
      restaurantName: '',
      recommendedDish: '',
      address: '',
      rating: 0
    });
  };

  const deleteFoodRecommendation = (id) => {
    setFoodRecommendations(foodRecommendations.filter(rec => rec.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const insight = {
      ...newInsight,
      id: insights.length + 1,
      views: 0
    };
    setInsights([...insights, insight]);
    setNewInsight({
      title: '',
      description: '',
      category: '',
      attraction: ''
    });
  };

  const deleteInsight = (id) => {
    setInsights(insights.filter(insight => insight.id !== id));
  };

  const totalViews = insights.reduce((sum, insight) => sum + insight.views, 0);

  return (
    <div>
      <Navbar />
      <main>
        <h2>Guide Dashboard</h2>
        <p>Welcome, Local Guide! Share your insights here.</p>

        {/* Stats */}
        <section className="stats-section">
          <div className="stat-card">
            <h3>Total Insights</h3>
            <p>{insights.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Views</h3>
            <p>{totalViews}</p>
          </div>
        </section>

        {/* Create New Insight */}
        <section>
          <h3>Create New Insight</h3>
          <form onSubmit={handleSubmit} className="insight-form">
            <input
              type="text"
              name="title"
              placeholder="Insight Title"
              value={newInsight.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Share your local insight..."
              value={newInsight.description}
              onChange={handleInputChange}
              required
            />
            <select
              name="category"
              value={newInsight.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Secret Spots">Secret Spots</option>
              <option value="History">History</option>
              <option value="Culture">Culture</option>
            </select>
            <input
              type="text"
              name="attraction"
              placeholder="Related Tourist Attraction"
              value={newInsight.attraction}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Publish Insight</button>
          </form>
        </section>

        {/* Create Food Recommendation */}
        <section>
          <h3>Add Food Recommendation</h3>
          <form onSubmit={handleFoodSubmit} className="food-form">
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant Name"
              value={newFoodRecommendation.restaurantName}
              onChange={handleFoodInputChange}
              required
            />
            <input
              type="text"
              name="recommendedDish"
              placeholder="Recommended Dish"
              value={newFoodRecommendation.recommendedDish}
              onChange={handleFoodInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={newFoodRecommendation.address}
              onChange={handleFoodInputChange}
              required
            />
            <div className="rating-input">
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                value={newFoodRecommendation.rating}
                onChange={handleFoodInputChange}
                required
              />
            </div>
            <button type="submit">Add Food Recommendation</button>
          </form>
        </section>

        {/* My Food Recommendations */}
        <section>
          <h3>My Food Recommendations</h3>
          <div className="food-recommendations-list">
            {foodRecommendations.map(rec => (
              <div key={rec.id} className="food-item">
                <img src={rec.image} alt={rec.restaurantName} />
                <h4>{rec.restaurantName}</h4>
                <p><strong>Dish:</strong> {rec.recommendedDish}</p>
                <p><strong>Address:</strong> {rec.address}</p>
                <p><strong>Rating:</strong> {rec.rating}/5</p>
                <button onClick={() => deleteFoodRecommendation(rec.id)} className="delete-btn">Delete</button>
              </div>
            ))}
          </div>
        </section>

        {/* Create Event */}
        <section>
          <h3>Add Event</h3>
          <form onSubmit={handleEventSubmit} className="event-form">
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={handleEventInputChange}
              required
            />
            <select
              name="type"
              value={newEvent.type}
              onChange={handleEventInputChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Concert">Concert</option>
              <option value="Theater">Theater</option>
              <option value="Festival">Festival</option>
              <option value="Sports">Sports</option>
            </select>
            <input
              type="number"
              name="admission"
              placeholder="Admission Price ($)"
              value={newEvent.admission}
              onChange={handleEventInputChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newEvent.location}
              onChange={handleEventInputChange}
              required
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleEventInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={handleEventInputChange}
              required
            />
            <button type="submit">Add Event</button>
          </form>
        </section>

        {/* My Events */}
        <section>
          <h3>My Events</h3>
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-item">
                <img src={event.image} alt={event.name} />
                <h4>{event.name}</h4>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Admission:</strong> ${event.admission}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p>{event.description}</p>
                <button onClick={() => deleteEvent(event.id)} className="delete-btn">Delete</button>
              </div>
            ))}
          </div>
        </section>

        {/* My Published Insights */}
        <section>
          <h3>My Published Insights</h3>
          <div className="insights-list">
            {insights.map(insight => (
              <div key={insight.id} className="insight-item">
                <h4>{insight.title}</h4>
                <p>{insight.description}</p>
                <p><strong>Category:</strong> {insight.category}</p>
                <p><strong>Related Attraction:</strong> {insight.attraction}</p>
                <p><strong>Views:</strong> {insight.views}</p>
                <button onClick={() => deleteInsight(insight.id)} className="delete-btn">Delete</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDashboard;
