import React from 'react';

const AttractionCard = ({ attraction }) => {
  return (
    <div className="attraction-card">
      <img src={attraction.image} alt={attraction.name} />
      <h3>{attraction.name}</h3>
      <p>{attraction.description}</p>
      <p>Location: {attraction.location}</p>
    </div>
  );
};

export default AttractionCard;
