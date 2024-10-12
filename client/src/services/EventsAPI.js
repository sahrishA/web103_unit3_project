// services/EventsAPI.js

const EventsAPI = {
    getAllEvents: async () => {
      try {
        // Replace '/api/events' with the actual API endpoint you're using to fetch events
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching events from API:', error);
        throw error;
      }
    }
  };
  
  export default EventsAPI;
  