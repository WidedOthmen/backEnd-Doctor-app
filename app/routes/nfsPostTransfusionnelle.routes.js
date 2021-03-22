
    const app = require('express').Router()
    const nfsPostTransfusionnelles = require('../controllers/nfsPostTransfusionnelle.controller');

    // Create a new nfsPostTransfusionnelle
    app.post('/addNfsPost', nfsPostTransfusionnelles.create);

    // Retrieve all nfsPostTransfusionnelles
    app.get('/getAllNfsPost', nfsPostTransfusionnelles.findAll);

    // Retrieve a single nfsPostTransfusionnelle with patientId
    app.get('/getOneNfsPost/:patientId', nfsPostTransfusionnelles.findOne);

    // Update a nfsPostTransfusionnelle with patientId
    app.put('/updateNfsPost/:patientId', nfsPostTransfusionnelles.update);

    // Delete a nfsPostTransfusionnelle with patientId
    app.delete('/deleteNfsPost/:patientId', nfsPostTransfusionnelles.delete);
module.exports = app;