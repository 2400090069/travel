import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.restaurantName} />
      <div className="food-card-content">
        <h3>{food.restaurantName}</h3>
        <p><strong>Dish:</strong> {food.recommendedDish}</p>
        <p><strong>Address:</strong> {food.address}</p>
        <div className="rating">
          <span>⭐ {food.rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
