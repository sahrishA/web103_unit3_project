// client/src/services/LocationsAPI.jsx

import React, { useState, useEffect } from 'react';
import LocationsAPI from './LocationsAPI';
import unitygrid from '../assets/unitygrid.jpg';
import '../css/Locations.css';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [venueNames, setVenueNames] = useState({
    venue1: '',
    venue2: '',
    venue3: '',
    venue4: ''
  });

  useEffect(() => {
    (async () => {
      try {
        const locationsData = await LocationsAPI.getAllLocations();
        setLocations(locationsData);

        setVenueNames({
          venue1: locationsData[0]?.name || 'Venue 1',
          venue2: locationsData[1]?.name || 'Venue 2',
          venue3: locationsData[2]?.name || 'Venue 3',
          venue4: locationsData[3]?.name || 'Venue 4'
        });
        setListeners();
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    })();
  }, []);

  const setListeners = () => {
    const polygons = document.querySelectorAll('polygon');

    polygons.forEach((element) => {
      element.addEventListener('mouseover', (event) => {
          const buttonElement = document.getElementById(`${event.target.id}button`); // Use backticks here
          buttonElement.style.opacity = 1;
      });
  
      element.addEventListener('mouseleave', (event) => {
          const buttonElement = document.getElementById(`${event.target.id}button`); // Use backticks here
          buttonElement.style.opacity = 0;
      });
  });
  
  return (
    <div className='available-locations'>
      <div id='venue1button' className='venue1-button-overlay'>
        <button>{venueNames.venue1}</button>
      </div>
      <div id='venue2button' className='venue2-button-overlay'>
        <button>{venueNames.venue2}</button>
      </div>
      <div id='venue3button' className='venue3-button-overlay'>
        <button>{venueNames.venue3}</button>
      </div>
      <div id='venue4button' className='venue4-button-overlay'>
        <button>{venueNames.venue4}</button>
      </div>
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 1000.32 500'
        xmlSpace='preserve'
      >
        <image
          id='background'
          xlinkHref={unitygrid}
          transform='matrix(0.48 0 0 0.48 0 0)'
        ></image>
        {/* SVG polygons for each location */}
      </svg>
    </div>
  );
};
};
export default Locations;