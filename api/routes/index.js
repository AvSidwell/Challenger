const express = require('express');
const router = express.Router();

//Define routes here

//GET / - Home page display all routes
router.get('/', (req, res) => {
    //Implement logic to display routes and descriptions
});

//GET /user - Display a list of users
router.get('/users', (req, res) => {
    //Implement logic to fetch and display a single user
});

//GET /user/:id - Display a single user
router.get('/user/:id', (req, res) => {
//Implement logic to fetch and display a single user
});

//PUT /user/:id - Update user's record
router.put('/user/:id', (req, res) =>{
    //Implement logic to update a user's record
});

//PATCH /user/:id - Modify a user's record
router.patch('user/:id', (req, res) =>{
    //Implement logic to modify a user's record
});
router.delete('user/:id', (req, res) =>{
    //Implement logic to modify a user's record
});
router.head('user/:id', (req, res) =>{
    //Implement logic to modify a user's record
});
router.options('user/:id', (req, res) =>{
    //Implement logic to modify a user's record
});

// ... and so on for other routes

modules.exports = router;







