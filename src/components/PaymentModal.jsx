import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, totalAmount, selectedItems, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCardChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="payment-modal-header">
          <h2>Complete Your Payment</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="payment-modal-body">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="selected-items">
              {Object.entries(selectedItems).map(([type, items]) => (
                <div key={type} className="summary-category">
                  <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                  {items.map((item, index) => (
                    <div key={index} className="summary-item">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="total-amount">
              <strong>Total: ${totalAmount}</strong>
            </div>
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="method-tabs">
              <button
                className={paymentMethod === 'card' ? 'active' : ''}
                onClick={() => setPaymentMethod('card')}
              >
                Credit/Debit Card
              </button>
              <button
                className={paymentMethod === 'upi' ? 'active' : ''}
                onClick={() => setPaymentMethod('upi')}
              >
                UPI
              </button>
              <button
                className={paymentMethod === 'wallet' ? 'active' : ''}
                onClick={() => setPaymentMethod('wallet')}
              >
                Digital Wallet
              </button>
            </div>

            {paymentMethod === 'card' && (
              <div className="card-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="number"
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.number}
                    onChange={handleCardChange}
                    maxLength="19"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={handleCardChange}
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      maxLength="3"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={cardDetails.name}
                    onChange={handleCardChange}
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="upi-form">
                <div className="form-group">
                  <label>UPI ID</label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </div>
                <p className="upi-note">Enter your UPI ID to proceed with payment</p>
              </div>
            )}

            {paymentMethod === 'wallet' && (
              <div className="wallet-options">
                <div className="wallet-option">
                  <input type="radio" id="paytm" name="wallet" />
                  <label htmlFor="paytm">Paytm</label>
                </div>
                <div className="wallet-option">
                  <input type="radio" id="gpay" name="wallet" />
                  <label htmlFor="gpay">Google Pay</label>
                </div>
                <div className="wallet-option">
                  <input type="radio" id="phonepe" name="wallet" />
                  <label htmlFor="phonepe">PhonePe</label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="payment-modal-footer">
          <button className="cancel-btn" onClick={onClose} disabled={isProcessing}>
            Cancel
          </button>
          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay $${totalAmount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
