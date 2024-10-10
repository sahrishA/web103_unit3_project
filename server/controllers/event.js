// controller/event.js

import pg from 'pg';

const config = {
    connectionString: process.env.DATABASE_URL,
};

const pool = new pg.Pool(config);

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createEvent = async (req, res) => {
    const { title, description, date, location_id } = req.body;
    const insertQuery = `
        INSERT INTO events (title, description, date, location_id)
        VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [title, description, date, location_id];
    try {
        const result = await pool.query(insertQuery, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getEvents,
    createEvent,
};
