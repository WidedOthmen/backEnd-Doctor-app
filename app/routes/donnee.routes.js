
    const app = require('express').Router()
    const donnees = require('../controllers/donnee.controller.js');

    // Create a new donnee
    app.post('/addData', donnees.create);

    // Retrieve all donnees
    app.get('/getAllData', donnees.findAll);

    // Retrieve a single donnee with familyId
    app.get('/getOneData/:donneeId', donnees.findOne);

    // Update a donnee with familyId
    app.put('/updateData/:donneesId', donnees.update);

    // Delete a donnee with familyId
    app.delete('/deleteData/:donneeId', donnees.delete);
    // Search a donnee with familyId
    app.get("/searchname/:name", donnees.searchByName);
module.exports=app;
