    const app = require('express').Router()
    const bilanSemestriels = require('../controllers/bilanSemestriel.controller');

    // Create a new bilanSemestriel
    app.post('/add', bilanSemestriels.create);

    // Retrieve all bilanSemestriels
    app.get('/getAll', bilanSemestriels.findAll);

    // Retrieve a single bilanSemestriel with familyId
    app.get('/getOne/:patientId', bilanSemestriels.findOne);

    // Update a bilanSemestriel with familyId
    app.put('/update/:patientId', bilanSemestriels.update);

    // Delete a bilanSemestriel with familyId
    app.delete('/delete/:patientId', bilanSemestriels.delete);
module.exports=app