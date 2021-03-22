const app = require('express').Router()
const prophylaxies = require('../controllers/prophylaxie.contoller');

// Create a new prophylaxie
app.post('/addProphylaxie', prophylaxies.create);

// Retrieve all prophylaxies
app.get('/getAllProphylaxie', prophylaxies.findAll);

// Retrieve a single prophylaxie with familyId
app.get('/getOneProphylaxie/:patientId', prophylaxies.findOne);

// Update a prophylaxie with familyId
app.put('/updateProphylaxie/:patientId', prophylaxies.update);

// Delete a prophylaxie with familyId
app.delete('/deleteProphylaxie/:patientId', prophylaxies.delete);

module.exports=app;
