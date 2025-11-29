import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { icon: '✈️', name: 'Flight Booking', description: 'Book flights worldwide with best prices' },
    { icon: '🏨', name: 'Hotel Booking', description: 'Book accommodations for your stay' },
    { icon: '📦', name: 'Tour Package', description: 'Complete travel packages with all inclusions' },
    { icon: '🚗', name: 'Car Rental', description: 'Rent vehicles for your journey' },
  ];

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
      inclusions: ['Flights', 'Hotels', 'Meals', 'Guide']
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
      inclusions: ['Flights', 'Hotels', 'Activities', 'Guide']
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
      inclusions: ['Flights', 'Hotels', 'Cultural Tours', 'Guide']
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
      inclusions: ['Flights', 'Hotels', 'Snorkeling', 'Guide']
    },
  ];

  const destinations = [
    {
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=200',
      description: 'Tropical paradise with beautiful beaches and culture',
      price: '₹45,000',
      duration: '7 Days',
      rating: 4.8
    },
    {
      name: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200',
      description: 'Vibrant beaches, nightlife, and Portuguese heritage',
      price: '₹25,000',
      duration: '5 Days',
      rating: 4.6
    },
    {
      name: 'Manali, India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
      description: 'Mountain paradise with adventure activities',
      price: '₹35,000',
      duration: '6 Days',
      rating: 4.7
    },
    {
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
      description: 'Stunning alpine landscapes and luxury resorts',
      price: '₹75,000',
      duration: '8 Days',
      rating: 4.9
    },
    {
      name: 'Yogyakarta, Indonesia',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=200',
      description: 'Cultural heart of Java with ancient temples',
      price: '₹35,000',
      duration: '6 Days',
      rating: 4.7
    },
    {
      name: 'Karimun Jawa, Indonesia',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
      description: 'Hidden paradise with pristine beaches',
      price: '₹28,000',
      duration: '4 Days',
      rating: 4.6
    },
    {
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=200',
      description: 'City of love with iconic landmarks',
      price: '₹85,000',
      duration: '7 Days',
      rating: 4.8
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200',
      description: 'Modern metropolis with traditional culture',
      price: '₹95,000',
      duration: '8 Days',
      rating: 4.9
    },
    {
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=200',
      description: 'The city that never sleeps',
      price: '₹1,20,000',
      duration: '9 Days',
      rating: 4.7
    },
    {
      name: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200',
      description: 'Luxury and innovation in the desert',
      price: '₹65,000',
      duration: '6 Days',
      rating: 4.8
    }
  ];

  const filteredPackages = activeFilter === 'All' ? tourPackages : tourPackages.filter(pkg => pkg.type === activeFilter);

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (destination) => {
    setSearchQuery(destination);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    // Navigate to search results or filter packages
    console.log('Searching for:', searchQuery, 'Check-in date:', checkInDate);
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
    setSelectedPackage(null);
  };

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', display: 'block' }}>
      <Navbar showSearch={true} showRegister={true} />
      <main>
        {/* Hero Section */}
        <section style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '2rem',
            zIndex: 1,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            BOOK YOUR DESTINATION WITH US
          </h1>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 1,
            maxWidth: '600px',
            width: '100%',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              position: 'relative'
            }} ref={searchRef}>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                Search
              </button>
              {showSuggestions && filteredDestinations.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: '120px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  zIndex: 1000
                }}>
                  {filteredDestinations.slice(0, 5).map((destination, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(destination.name)}
                      style={{
                        padding: '1rem',
                        cursor: 'pointer',
                        borderBottom: index < filteredDestinations.slice(0, 5).length - 1 ? '1px solid #eee' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        hover: {
                          backgroundColor: '#f8f9fa'
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                      }}
                    >
                      <img
                        src={destination.image}
                        alt={destination.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '8px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontWeight: 'bold',
                          color: '#333',
                          marginBottom: '0.25rem'
                        }}>
                          {destination.name}
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#666',
                          marginBottom: '0.25rem'
                        }}>
                          {destination.description}
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.8rem',
                          color: '#666'
                        }}>
                          <span>⏱️ {destination.duration}</span>
                          <span>⭐ {destination.rating}</span>
                          <span style={{
                            color: '#ff6b35',
                            fontWeight: 'bold'
                          }}>
                            {destination.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow({
                            name: destination.name,
                            location: destination.name,
                            price: destination.price,
                            duration: destination.duration,
                            image: destination.image
                          });
                        }}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#ff6b35',
                          color: 'white',
                          border: 'none',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <label style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}>
                Check-in Date:
              </label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-in date"
                minDate={new Date()}
                style={{
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  width: '200px'
                }}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#333', fontSize: '2.5rem' }}>Our Services</h2>
          <p style={{ marginBottom: '3rem', color: '#666', fontSize: '1.1rem' }}>Comprehensive travel solutions for all your journey needs</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                padding: '2.5rem 2rem',
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  lineHeight: '60px',
                  textAlign: 'center'
                }}>{service.icon}</div>
                <h3 style={{
                  color: '#333',
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>{service.name}</h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Destinations Section */}
        <section style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{ marginBottom: '2rem', color: '#333', fontSize: '2.5rem' }}>Top Destinations</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {['All', 'Beach', 'Mountain', 'Cultural'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.75rem 2rem',
                  border: activeFilter === filter ? '2px solid #ff6b35' : '2px solid #ddd',
                  backgroundColor: activeFilter === filter ? '#ff6b35' : 'white',
                  color: activeFilter === filter ? 'white' : '#333',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {filteredPackages.map(pkg => (
              <div key={pkg.id} style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}>
                <div style={{ position: 'relative' }}>
                  <img src={pkg.image} alt={pkg.name} style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(255, 107, 53, 0.9)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {pkg.type}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    ⭐ {pkg.rating}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#333',
                    fontSize: '1.4rem',
                    fontWeight: '600'
                  }}>{pkg.name}</h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    📍 {pkg.location}
                  </p>
                  <p style={{
                    color: '#666',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    ⏱️ {pkg.duration}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {pkg.inclusions.map((item, index) => (
                      <span key={index} style={{
                        backgroundColor: '#f8f9fa',
                        color: '#666',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        border: '1px solid #e9ecef'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#ff6b35'
                      }}>
                        {pkg.price}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#999',
                        textDecoration: 'line-through'
                      }}>
                        {pkg.originalPrice}
                      </div>
                    </div>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e55a2b';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6b35';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={() => navigate(`/tour-package/${pkg.id}`)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section style={{
          padding: '4rem 2rem',
          backgroundColor: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#333', fontSize: '2.5rem' }}>Featured Destinations</h2>
          <p style={{ marginBottom: '3rem', color: '#666', fontSize: '1.1rem' }}>Explore our most popular travel destinations</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {tourPackages.slice(0, 3).map(pkg => (
              <div key={pkg.id} style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ position: 'relative' }}>
                  <img src={pkg.image} alt={pkg.name} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(255, 107, 53, 0.9)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {pkg.type}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#333',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>{pkg.name}</h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}>
                    {pkg.location} • {pkg.duration}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#ff6b35'
                      }}>
                        {pkg.price}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#999',
                        textDecoration: 'line-through'
                      }}>
                        {pkg.originalPrice}
                      </div>
                    </div>
                    <button style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e55a2b';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6b35';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
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

export default Home;
