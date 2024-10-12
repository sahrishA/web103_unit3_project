//content of the dotenv.js file
import dotenv from 'dotenv'
import path from 'path';
dotenv.config({path:'../.env'})
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import {locationsData, eventsData} from '../data/database.js'
import pg from 'pg'
//following code is similar to database.js I use here directly bcs it wasn't working
const config ={
    // user: process.env.PGUSER,
    // password:process.env.PGPASSWORD,
    // host: process.env.PGHOST,
    // port: process.env.PGPORT,
    // database: process.env.PGDATABASE,
    //connectionString: process.env.DATABASE_URL,
    connectionString: 'postgresql://postgres:vmDJSvuCZcXYgEyrOlNHWroIlMKdTVPb@junction.proxy.rlwy.net:36870/railway'
}
const pool = new pg.Pool(config);
// console.log("DATABASE_URL:", process.env.DATABASE_URL);
//create locations Table
const createLocationsTable= async ()=> {
    const createTableQuery=`
    DROP TABLE IF EXISTS locations;
    CREATE TABLE IF NOT EXISTS locations(
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT,
            description TEXT
        );
    `;
    try{
        await pool.query(createTableQuery);
        console.log('locations table created successfuly')
    }catch(err){
        console.error('Error Creating locatins table:',err);
    }
}
const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            date TIMESTAMP,
            location_id INTEGER REFERENCES locations(id)
        );
    `;
    try {
        await pool.query(createTableQuery);
        console.log('events table created successfully');
    } catch (err) {
        console.error('Error creating events table:', err);
    }
};

// Seed Locations Table
const seedLocationsTable = async () => {
    await createLocationsTable();
    for (const location of locationsData) {
        const insertQuery = `
            INSERT INTO locations (name, address, description)
            VALUES ($1, $2, $3);
        `;
        const values = [location.name, location.address, location.description];
        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${location.name} location added successfully`);
        } catch (err) {
            console.error(`⚠️ Error inserting location ${location.name}:`, err);
        }
    }
};

// Seed Events Table
const seedEventsTable = async () => {
    await createEventsTable();
    for (const event of eventsData) {
        const insertQuery = `
            INSERT INTO events (title, description, date, location_id)
            VALUES ($1, $2, $3, $4);
        `;
        const values = [event.title, event.description, event.date, event.location_id];
        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${event.title} event added successfully`);
        } catch (err) {
            console.error(`⚠️ Error inserting event ${event.title}:`, err);
        }
    }
};


// Seed all tables
const seedTables = async () => {
    await seedLocationsTable();
    await seedEventsTable();
};

seedTables();