    const app = require('express').Router()
    const examens = require('../controllers/examen.controller');

    // Create a new examen
    app.post('/add', examens.create);
    // Retrieve all examens
    app.get('/getAll', examens.findAll);

    // Retrieve a single examen with examensId
    app.get('/getOne/:patientId', examens.findOne);

    // Update a examen with familyId
    app.put('/update/:patientId', examens.update);

    // Delete a examen with familyId
    app.delete('/delete/:patientId', examens.delete);

module.exports=app;