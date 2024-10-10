// server/routes/route.js

import express from 'express';
import eventController from '../controller/event.js';


const router = express.Router();

// Event routes
router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);


export default router;
