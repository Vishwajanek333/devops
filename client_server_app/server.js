const express = require("express");

const app = express();// middleware to parse URL-encoded request bodies

app.use(express.json()); // middleware to parse JSON request bodies

app.get("/users", (req, res) => { // "/users" This is the route path. A route path identifies which URL should trigger this function.
    const users = [
        {
            id: 1,
            name: "Rahul",
        },
        {
            id: 2,
            name: "Arun",
        },
    ];

    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

