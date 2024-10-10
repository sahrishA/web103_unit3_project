// controller/location.js

import pg from 'pg';

const config = {
    connectionString: process.env.DATABASE_URL,
};

const pool = new pg.Pool(config);

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createLocation = async (req, res) => {
    const { name, address, description } = req.body;
    const insertQuery = `
        INSERT INTO locations (name, address, description)
        VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [name, address, description];
    try {
        const result = await pool.query(insertQuery, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getLocations,
    createLocation,
};
