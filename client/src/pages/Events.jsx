// In client/src/pages/Events.jsx

import React from 'react';
import '../css/Event.css';


const Event = ({ event }) => {
  const { name, image, date, description } = event;

  const isPastEvent = new Date(date) < new Date();

  return (
    <div className='event-information'>
      <img src={image} alt={`${name} event`} />
      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
          {isPastEvent && (
            <div className='negative-time-remaining'>Event has passed</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
