    const app = require('express').Router()
    const nfsPreTransfusionnelles = require('../controllers/nfsPreTransfusionnelle.controller');

    // Create a new nfsPreTransfusionnelle
    app.post('/addNfsPre', nfsPreTransfusionnelles.create);

    // Retrieve all nfsPreTransfusionnelles
    app.get('/getAllNfsPre', nfsPreTransfusionnelles.findAll);

    // Retrieve a single nfsPreTransfusionnelle with nfsPreTransfusionnellesId
    app.get('/getOneNfsPre/:patientId', nfsPreTransfusionnelles.findOne);

    // Update a nfsPreTransfusionnelle with patientId
    app.put('/updateNfsPre/:patientId', nfsPreTransfusionnelles.update);

    // Delete a nfsPreTransfusionnelle with patientId
    app.delete('/deleteNfsPre/:patientId', nfsPreTransfusionnelles.delete);
    module.exports = app;