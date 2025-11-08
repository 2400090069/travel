import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} />
      <div className="event-card-content">
        <h3>{event.name}</h3>
        <p><strong>Type:</strong> {event.type}</p>
        <p><strong>Admission:</strong> ${event.admission}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
