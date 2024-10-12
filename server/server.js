// import express from 'express'
// import path from 'path'
// import favicon from 'serve-favicon'
// import dotenv from 'dotenv'
// import Router from './routes/route.js'; // Update this path if needed


// // import the router from your routes file


// dotenv.config()

// const PORT = process.env.PORT || 3000

// const app = express()

// app.use(express.json())

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
// }
// else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'party.png')))
//     app.use(express.static('public'))
// }

// // specify the api path for the server to use


// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     )
// }

// app.listen(PORT, () => {
//     console.log(`server listening on http://localhost:${PORT}`)
// })

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import favicon from 'serve-favicon'
import eventsRouter from './routes/events.js';  // Adjust path if needed
import locationsRouter from './routes/locations.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for cross-origin requ ests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// API routes
app.use('/api/events', eventsRouter);
app.use('/api/locations', locationsRouter);
// app.use('/api', eventsRouter);
// app.use('/api', locationsRouter);
// Test endpoint
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnityGrid Plaza API</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
