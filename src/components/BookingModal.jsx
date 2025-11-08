import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const BookingModal = ({ isOpen, onClose, package: selectedPackage }) => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    travelers: 1,
    specialRequests: ''
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const calculateDownPayment = () => {
    const price = parseInt(selectedPackage.price.replace('₹', '').replace(',', ''));
    return Math.round(price * 0.2); // 20% down payment
  };

  const handleProceedToPayment = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    setShowPayment(false);
    onClose();
  };

  if (!isOpen) return null;

  const downPayment = calculateDownPayment();
  const totalAmount = parseInt(selectedPackage.price.replace('₹', '').replace(',', ''));

  const orderSummary = {
    package: selectedPackage,
    bookingDetails,
    downPayment,
    totalAmount
  };

  if (showPayment) {
    return (
      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        totalAmount={downPayment}
        selectedItems={{
          'Tour Package': [{
            name: selectedPackage.name,
            price: selectedPackage.price
          }],
          'Booking Details': [{
            name: `Date: ${bookingDetails.date}, Time: ${bookingDetails.time}, Travelers: ${bookingDetails.travelers}`,
            price: '₹0'
          }]
        }}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '2rem',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ margin: 0, color: '#333' }}>Book Your Tour</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>{selectedPackage.name}</h3>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ color: '#666' }}>📍 {selectedPackage.location}</span>
            <span style={{ color: '#666' }}>⏱️ {selectedPackage.duration}</span>
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ff6b35',
            marginBottom: '1rem'
          }}>
            {selectedPackage.price}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: '#333', marginBottom: '1rem' }}>Select Travel Date & Time</h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Travel Date</label>
              <input
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Preferred Time</label>
              <select
                name="time"
                value={bookingDetails.time}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select Time</option>
                <option value="Morning (9:00 AM)">Morning (9:00 AM)</option>
                <option value="Afternoon (2:00 PM)">Afternoon (2:00 PM)</option>
                <option value="Evening (6:00 PM)">Evening (6:00 PM)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              value={bookingDetails.travelers}
              onChange={handleInputChange}
              min="1"
              max="10"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Special Requests (Optional)</label>
            <textarea
              name="specialRequests"
              value={bookingDetails.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requirements or preferences..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                minHeight: '80px',
                resize: 'vertical'
              }}
            />
          </div>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}>
          <h4 style={{ color: '#333', marginBottom: '1rem' }}>Booking Summary</h4>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span>Package Price:</span>
            <span>{selectedPackage.price}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span>Travelers:</span>
            <span>{bookingDetails.travelers}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontWeight: 'bold',
            borderTop: '1px solid #ddd',
            paddingTop: '0.5rem'
          }}>
            <span>Total Amount:</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            color: '#ff6b35'
          }}>
            <span>Down Payment (20%):</span>
            <span>₹{downPayment.toLocaleString()}</span>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginTop: '0.5rem'
          }}>
            Remaining balance of ₹{(totalAmount - downPayment).toLocaleString()} to be paid before travel.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleProceedToPayment}
            disabled={!bookingDetails.date || !bookingDetails.time}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: bookingDetails.date && bookingDetails.time ? 'pointer' : 'not-allowed',
              opacity: bookingDetails.date && bookingDetails.time ? 1 : 0.6
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
