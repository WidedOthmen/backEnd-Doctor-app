    const app = require('express').Router()
    const bilanTrimestriels = require('../controllers/bilanTrimestriel.controller');

    // Create a new bilanTrimestriel
    app.post('/add', bilanTrimestriels.create);

    // Retrieve all bilanTrimestriels
    app.get('/getAll', bilanTrimestriels.findAll);

    // Retrieve a single bilanTrimestriel with familyId
    app.get('/getOne/:patientId', bilanTrimestriels.findOne);

    // Update a bilanTrimestriel with familyId
    app.put('/update/:patientId', bilanTrimestriels.update);

    // Delete a bilanTrimestriel with familyId
    app.delete('/delete/:patientId', bilanTrimestriels.delete);
module.exports=app;