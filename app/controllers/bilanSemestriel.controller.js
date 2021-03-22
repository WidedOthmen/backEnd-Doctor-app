const BilanSemestriel = require('../models/bilanSemestriel.model');

// Create and Save a new BilanSemestriel
exports.create = (req, res) => {
    // Create a BilanSemestriel
    const bilanSemestriel = new BilanSemestriel({
        id:req.body.id,
        patientId:req.body.patientId,

        glyHos1: req.body.glyHos1 , 
        glyHos2: req.body.glyHos2 , 
        glyHoObserv: req.body.glyHoObserv, 

        glyH2s1: req.body.glyH2s1 , 
        glyH2s2: req.body.glyH2s2 , 
        glyH2Observ: req.body.glyH2Observ,

        calcemieS1: req.body.calcemieS1, 
        calcemieS2: req.body.calcemieS2, 
        calcemieObserv: req.body.calcemieObserv, 

        phosphS1: req.body.phosphS1,
        phosphS2: req.body.phosphS2,
        phosphObserv: req.body.phosphObserv,

        phAlS1: req.body.phAlS1,
        phAlS2: req.body.phAlS2,
        phAlObserv: req.body.phAlObserv,

        magS1: req.body.magS1,
        magS2: req.body.magS2,
        magObserv: req.body.magObserv,

        tcdS1: req.body.tcdS1,
        tcdS2: req.body.tcdS2,
        tcdObserv: req.body.tcdObserv,

        agHbsS1: req.body.agHbsS1,
        agHbsS2: req.body.agHbsS2,
        agHbsObserv: req.body.agHbsObserv,

        hcvS1: req.body.hcvS1,
        hcvS2: req.body.hcvS2,
        hcvObserv: req.body.hcvObserv,

        hivS1: req.body.hivS1,
        hivS2: req.body.hivS2,
        hivObserv: req.body.hivObserv,   
    });

    // Save BilanSemestriel in the database
    bilanSemestriel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the BilanSemestriel."
        });
    });
};

// Retrieve and return all BilanSemestriel from the database.
exports.findAll = (req, res) => {
    BilanSemestriel.find()
    .then(bilanSemestriels => {
        res.send(bilanSemestriels);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving BilanSemestriel."
        });
    });
};

// Find a single BilanSemestriel with a noteId
exports.findOne = (req, res) => {
    BilanSemestriel.findOne({patientId: req.params.patientId})
    .then(bilanSemestriel => {
        if(!bilanSemestriel) {
            return res.status(404).send({
                message: "BilanSemestriel not found with id " + req.params.patientId
            });            
        }
        res.send(bilanSemestriel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bilanSemestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving bilanSemestriel with id " + req.params.patientId
        });
    });
};

// Update a bilanSemestriel identified by the patientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.patientId) {
        return res.status(400).send({
            message: "bilanSemestriel nom can not be empty"
        });
    }

    // Find bilanSemestriel and update it with the request body
    BilanSemestriel.findByIdAndUpdate(req.params.patientId, {
        id:req.body.id,
        idBilanSemestriel:req.body.idBilanSemestriel,
        glyHos1: req.body.glyHos1 , 
        glyHos2: req.body.glyHos2 , 
        glyHoObserv: req.body.glyHoObserv, 

        glyH2s1: req.body.glyH2s1 , 
        glyH2s2: req.body.glyH2s2 , 
        glyH2Observ: req.body.glyH2Observ,

       

        calcemieS1: req.body.calcemieS1, 
        calcemieS2: req.body.calcemieS2, 
        calcemieObserv: req.body.calcemieObserv, 

        phosphS1: req.body.phosphS1,
        phosphS2: req.body.phosphS2,
        phosphObserv: req.body.phosphObserv,

        phAlS1: req.body.phAlS1,
        phAlS2: req.body.phAlS2,
        phAlObserv: req.body.phAlObserv,

        magS1: req.body.magS1,
        magS2: req.body.magS2,
        magObserv: req.body.magObserv,

        tcdS1: req.body.tcdS1,
        tcdS2: req.body.tcdS2,
        tcdObserv: req.body.tcdObserv,

        agHbsS1: req.body.agHbsS1,
        agHbsS2: req.body.agHbsS2,
        agHbsObserv: req.body.agHbsObserv,

        hcvS1: req.body.hcvS1,
        hcvS2: req.body.hcvS2,
        hcvObserv: req.body.hcvObserv,

        


        hivS1: req.body.hivS1,
        hivS2: req.body.hivS2,
        hivObserv: req.body.hivObserv,




    }, {new: true})
    .then(bilanSemestriel => {
        if(!bilanSemestriel) {
            return res.status(404).send({
                message: "bilanSemestriel not found with id " + req.params.patientId
            });
        }
        res.send(bilanSemestriel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bilanSemestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating bilanSemestriel with id " + req.params.patientId
        });
    });
};

// Delete a bilanSemestriel with the specified bilanSemestrielId in the request
exports.delete = (req, res) => {
    BilanSemestriel.findByIdAndRemove(req.params.patientId)
    .then(bilanSemestriel => {
        if(!bilanSemestriel) {
            return res.status(404).send({
                message: "bilanSemestriel not found with id " + req.params.patientId
            });
        }
        res.send({message: "bilanSemestriel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "bilanSemestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete bilanSemestriel with id " + req.params.patientId
        });
    });
};
