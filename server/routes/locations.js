// server/routes/route.js

import express from 'express';

import locationController from '../controllers/location.js';

const router = express.Router();


// Location routes
router.get('/locations', locationController.getLocations);
router.post('/locations', locationController.createLocation);

export default router;
