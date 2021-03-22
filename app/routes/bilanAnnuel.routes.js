    const app = require('express').Router()
    const bilanAnnuels = require('../controllers/bilanAnnuel.controller');

    // Create a new bilanAnnuel
    app.post('/add', bilanAnnuels.create);

    // Retrieve all bilanAnnuels
    app.get('/getAll', bilanAnnuels.findAll);

    // Retrieve a single bilanAnnuels with familyId
    app.get('/getOne/:patientId', bilanAnnuels.findOne);

    // Update a bilanAnnuel with familyId
    app.put('/update/:patientId', bilanAnnuels.update);

    // Delete a bilanAnnuel with familyId
    app.delete('/delete/:patientId', bilanAnnuels.delete);
module.exports=app;