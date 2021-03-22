
    const app = require('express').Router()
    const patients = require('../controllers/partient.controller');

    // Create a new Patient
    app.post('/addPatient', patients.create);

    // Retrieve all Patiens
    app.get('/getAllPatient', patients.findAll);

    // Retrieve a single Patient with familyId
    app.get('/getOnePatient/:patientId', patients.findOne);

    // Update a Patient with familyId
    app.put('/updatePatient/:patientId', patients.update);

    // Delete a patient with familyId
    app.delete('/deletepatient/:patientId', patients.delete);
module.exports=app;