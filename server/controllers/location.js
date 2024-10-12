// controller/location.js

import pg from 'pg';


const config = {
    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD,
    // host: process.env.PGHOST,
    // port: process.env.PGPORT,
    //  database: process.env.PGDATABASE,
    //connectionString: process.env.DATABASE_URL,
    connectionString: 'postgresql://postgres:vmDJSvuCZcXYgEyrOlNHWroIlMKdTVPb@junction.proxy.rlwy.net:36870/railway'
}

const pool = new pg.Pool(config)


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
