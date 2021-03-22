    const app = require('express').Router()
    const familys = require('../controllers/family.controller');

    // Create a new Family
    app.post('/addFamily', familys.create);

    // Retrieve all Familys
    app.get('/getAllFamily', familys.findAll);

    // Retrieve a single Family with familyId
    app.get('/getOneFamily/:patientId', familys.findOne);

    // Update a Family with familyId
    app.put('/updateFamily/:patientId', familys.update);

    // Delete a family with familyId
    app.delete('/deleteFamily/:patientId', familys.delete);
module.exports=app;