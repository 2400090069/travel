import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomestayDetails = ({ match }) => {
  // Sample homestay data
  const homestay = {
    id: match.params.id,
    name: 'Cozy Cabin',
    description: 'A beautiful cabin in the woods.',
    price: 100,
    image: 'cabin.jpg',
    amenities: ['WiFi', 'Kitchen', 'Fireplace']
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>{homestay.name}</h2>
        <img src={homestay.image} alt={homestay.name} />
        <p>{homestay.description}</p>
        <p>Price: ${homestay.price}</p>
        <ul>
          {homestay.amenities.map(amenity => <li key={amenity}>{amenity}</li>)}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default HomestayDetails;
