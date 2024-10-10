// server/routes/route.js

import express from 'express';
import eventController from '../controller/event.js';
import locationController from '../controller/location.js';

const router = express.Router();

// Event routes
router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);

// Location routes
router.get('/locations', locationController.getLocations);
router.post('/locations', locationController.createLocation);

export default router;
