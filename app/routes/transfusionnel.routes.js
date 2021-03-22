const app = require('express').Router()
const transfusionnels = require('../controllers/transfusionnel.controller');

    // Create a new transfusionnel
    app.post('/addTransfusionnel', transfusionnels.create);

    // Retrieve all Patiens
    app.get('/getAllTransfusionnel', transfusionnels.findAll);

    // Retrieve a single transfusionnels with familyId
    app.get('/getOneTransfusionnel/:patientId', transfusionnels.findOne);

    // Update a transfusionnel with familyId
    app.put('/UpdateTransfusionnel/:patientId', transfusionnels.update);

    // Delete a transfusionnel with familyId
    app.delete('/deleteTransfusionnel/:patientId', transfusionnels.delete);
module.exports =app;