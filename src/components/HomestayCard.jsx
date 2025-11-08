import React from 'react';

const HomestayCard = ({ homestay }) => {
  return (
    <div className="homestay-card">
      <img src={homestay.image} alt={homestay.name} />
      <div className="homestay-info">
        <h3>{homestay.name}</h3>
        <p>{homestay.description}</p>
        <p className="price">Price: ${homestay.price}/night</p>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default HomestayCard;
