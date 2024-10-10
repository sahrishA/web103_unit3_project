// data/database.js

const locationsData = [
    {
        name: "City Park",
        address: "123 Park Ave",
        description: "A beautiful city park",
    },
    {
        name: "Downtown Center",
        address: "456 Main St",
        description: "A bustling downtown area",
    },
    {
        name: "University Campus",
        address: "789 College Rd",
        description: "Local university campus",
    },
    {
        name: "Old Town",
        address: "101 Heritage Ln",
        description: "Historic part of the city",
    },
];

const eventsData = [
    {
        title: "Concert in the Park",
        description: "Live music at City Park",
        date: "2024-11-01 18:00:00",
        location_id: 1,
    },
    {
        title: "Downtown Art Festival",
        description: "An arts festival in Downtown Center",
        date: "2024-11-05 12:00:00",
        location_id: 2,
    },
    {
        title: "Campus Science Fair",
        description: "A science fair at University Campus",
        date: "2024-11-10 09:00:00",
        location_id: 3,
    },
    {
        title: "Old Town Farmers Market",
        description: "Weekly market in Old Town",
        date: "2024-11-15 08:00:00",
        location_id: 4,
    },
];

export { locationsData, eventsData };
