import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const TourPackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const tourPackages = [
    {
      id: 1,
      name: 'Bali Paradise Tour',
      location: 'Bali, Indonesia',
      duration: '7 Days / 6 Nights',
      price: '₹45,000',
      originalPrice: '₹55,000',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400',
      type: 'Beach',
      rating: 4.8,
      inclusions: ['Flights', 'Hotels', 'Meals', 'Guide'],
      description: 'Experience the ultimate paradise with our Bali Paradise Tour. Enjoy pristine beaches, vibrant culture, and luxurious accommodations.',
      itinerary: [
        'Day 1: Arrival in Bali, transfer to hotel',
        'Day 2-3: Beach relaxation and water activities',
        'Day 4: Cultural tour of temples',
        'Day 5: Ubud exploration',
        'Day 6: Free day for shopping',
        'Day 7: Departure'
      ]
    },
    {
      id: 2,
      name: 'Alpine Adventure',
      location: 'Swiss Alps',
      duration: '5 Days / 4 Nights',
      price: '₹75,000',
      originalPrice: '₹85,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      type: 'Mountain',
      rating: 4.9,
      inclusions: ['Flights', 'Hotels', 'Activities', 'Guide'],
      description: 'Embark on an exhilarating Alpine Adventure through the majestic Swiss Alps. Perfect for nature lovers and adventure seekers.',
      itinerary: [
        'Day 1: Arrival in Zurich, transfer to Interlaken',
        'Day 2: Jungfraujoch excursion',
        'Day 3: Hiking and mountain activities',
        'Day 4: Lake Thun cruise',
        'Day 5: Departure'
      ]
    },
    {
      id: 3,
      name: 'Cultural Yogyakarta',
      location: 'Yogyakarta, Indonesia',
      duration: '6 Days / 5 Nights',
      price: '₹35,000',
      originalPrice: '₹42,000',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400',
      type: 'Cultural',
      rating: 4.7,
      inclusions: ['Flights', 'Hotels', 'Cultural Tours', 'Guide'],
      description: 'Discover the rich cultural heritage of Yogyakarta with our comprehensive cultural tour package.',
      itinerary: [
        'Day 1: Arrival in Yogyakarta',
        'Day 2: Borobudur Temple visit',
        'Day 3: Prambanan Temple complex',
        'Day 4: Cultural performances and workshops',
        'Day 5: Kraton palace tour',
        'Day 6: Departure'
      ]
    },
    {
      id: 4,
      name: 'Karimun Jawa Escape',
      location: 'Karimun Jawa, Indonesia',
      duration: '4 Days / 3 Nights',
      price: '₹28,000',
      originalPrice: '₹32,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      type: 'Beach',
      rating: 4.6,
      inclusions: ['Flights', 'Hotels', 'Snorkeling', 'Guide'],
      description: 'Escape to the pristine islands of Karimun Jawa for a relaxing beach getaway with snorkeling adventures.',
      itinerary: [
        'Day 1: Arrival and island transfer',
        'Day 2: Snorkeling and beach activities',
        'Day 3: Island exploration and relaxation',
        'Day 4: Departure'
      ]
    },
  ];

  useEffect(() => {
    const pkg = tourPackages.find(p => p.id === parseInt(id));
    if (pkg) {
      setSelectedPackage(pkg);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleOrderNow = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  if (!selectedPackage) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.name}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 107, 53, 0.1)',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1rem',
              display: 'inline-block'
            }}>
              <span style={{ color: '#ff6b35', fontWeight: 'bold' }}>{selectedPackage.type}</span>
            </div>
            <h1 style={{ color: '#333', marginBottom: '1rem' }}>{selectedPackage.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.2rem', color: '#666' }}>⭐ {selectedPackage.rating}</span>
            </div>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              📍 {selectedPackage.location} • ⏱️ {selectedPackage.duration}
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '0.5rem' }}>
                {selectedPackage.price}
              </div>
              <div style={{ fontSize: '1.2rem', color: '#999', textDecoration: 'line-through' }}>
                {selectedPackage.originalPrice}
              </div>
            </div>
            <button
              onClick={handleOrderNow}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e55a2b'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
            >
              Order Now
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>Package Description</h2>
          <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1.1rem' }}>
            {selectedPackage.description}
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>What's Included</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {selectedPackage.inclusions.map((item, index) => (
              <span key={index} style={{
                backgroundColor: '#f8f9fa',
                color: '#666',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid #e9ecef'
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>Itinerary</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {selectedPackage.itinerary.map((day, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e9ecef'
              }}>
                <strong>Day {index + 1}:</strong> {day}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          package={selectedPackage}
          onClose={handleCloseBookingModal}
        />
      )}
    </div>
  );
};

export default TourPackageDetails;
