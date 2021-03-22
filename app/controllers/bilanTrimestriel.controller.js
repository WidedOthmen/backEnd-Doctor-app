const BilanTrimestriel = require('../models/bilanTrimestriel.model');

// Create and Save a new BilanTrimestriel
exports.create = (req, res) => {
    // Create a BilanTrimestriel
    const bilanTrimestriel = new BilanTrimestriel({
        id:req.body.id,
        patientId:req.body.patientId,
        poidsT1: req.body.poidsT1 , 
        poidsT2: req.body.poidsT2 , 
        poidsT3: req.body.poidsT3 , 
        poidsT4: req.body.poidsT4 , 
        poidsObserv: req.body.poidsObserv, 

        tailleT1: req.body.tailleT1 , 
        tailleT2: req.body.tailleT2 , 
        tailleT3: req.body.tailleT3 , 
        tailleT4: req.body.tailleT4 , 
        tailleObserv: req.body.tailleObserv,
        
        ferritineT1:req.body.ferritineT1,
        ferritineT2:req.body.ferritineT2,
        ferritineT3:req.body.ferritineT3,
        ferritineT4:req.body.ferritineT4,
        ferritineObserv:req.body.ferritineObserv,

        asatT1:req.body.asatT1,
        asatT2:req.body.asatT2,
        asatT3:req.body.asatT3,
        asatT4:req.body.asatT4,
        asatObserv:req.body.asatObserv,

        alatT1:req.body.alatT1,
        alatT2:req.body.alatT2,
        alatT3:req.body.alatT3,
        alatT4:req.body.alatT4,
        alatObserv:req.body.alatObserv,

        bbtT1:req.body.bbtT1,
        bbtT2:req.body.bbtT2,
        bbtT3:req.body.bbtT3,
        bbtT4:req.body.bbtT4,
        bbtObserv:req.body.bbtObserv,

        bbiT1:req.body.bbiT1,
        bbiT2:req.body.bbiT2,
        bbiT3:req.body.bbiT3,
        bbiT4:req.body.bbiT4,
        bbiObserv:req.body.bbiObserv
    });

    // Save BilanTrimestriel in the database
    bilanTrimestriel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the BilanTrimestriel."
        });
    });
};

// Retrieve and return all BilanTrimestriel from the database.
exports.findAll = (req, res) => {
    BilanTrimestriel.find()
    .then(bilanTrimestriels => {
        res.send(bilanTrimestriels);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving bilanTrimestriels."
        });
    });
};

// Find a single BilanTrimestriel with a noteId
exports.findOne = (req, res) => {
    BilanTrimestriel.findOne({patientId: req.params.patientId})
    .then(bilanTrimestriel => {
        if(!bilanTrimestriel) {
            return res.status(404).send({
                message: "BilanTrimestriel not found with id " + req.params.patientId
            });            
        }
        res.send(bilanTrimestriel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bilanTrimestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving bilanTrimestriel with id " + req.params.patientId
        });
    });
};

// Update a bilanTrimestriel identified by the bilanTrimestrielId in the request
exports.update = (req, res) => {
 
    // Find bilanTrimestriel and update it with the request body
    BilanTrimestriel.findByIdAndUpdate(req.params.patientId, {
        id:req.body.id,
        poidsT1: req.body.poidsT1 , 
        poidsT2: req.body.poidsT2 , 
        poidsT3: req.body.poidsT3 , 
        poidsT4: req.body.poidsT4 , 
        poidsObserv: req.body.poidsObserv, 

        tailleT1: req.body.tailleT1 , 
        tailleT2: req.body.tailleT2 , 
        tailleT3: req.body.tailleT3 , 
        tailleT4: req.body.tailleT4 , 
        tailleObserv: req.body.tailleObserv,
        
        ferritineT1:req.body.ferritineT1,
        ferritineT2:req.body.ferritineT2,
        ferritineT3:req.body.ferritineT3,
        ferritineT4:req.body.ferritineT4,
        ferritineObserv:req.body.ferritineObserv,

        asatT1:req.body.asatT1,
        asatT2:req.body.asatT2,
        asatT3:req.body.asatT3,
        asatT4:req.body.asatT4,
        asatObserv:req.body.asatObserv,

        alatT1:req.body.alatT1,
        alatT2:req.body.alatT2,
        alatT3:req.body.alatT3,
        alatT4:req.body.alatT4,
        alatObserv:req.body.alatObserv,

        bbtT1:req.body.bbtT1,
        bbtT2:req.body.bbtT2,
        bbtT3:req.body.bbtT3,
        bbtT4:req.body.bbtT4,
        bbtObserv:req.body.bbtObserv,

        bbiT1:req.body.bbiT1,
        bbiT2:req.body.bbiT2,
        bbiT3:req.body.bbiT3,
        bbiT4:req.body.bbiT4,
        bbiObserv:req.body.bbiObserv
    }, {new: true})
    .then(bilanTrimestriel => {
        if(!bilanTrimestriel) {
            return res.status(404).send({
                message: "bilanTrimestriel not found with id " + req.params.patientId
            });
        }
        res.send(bilanTrimestriel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bilanTrimestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating bilanTrimestriel with id " + req.params.bilanTrimestrielId
        });
    });
};

// Delete a bilanTrimestriel with the specified bilanTrimestrielId in the request
exports.delete = (req, res) => {
    BilanTrimestriel.findByIdAndRemove(req.params.patientId)
    .then(bilanTrimestriel => {
        if(!bilanTrimestriel) {
            return res.status(404).send({
                message: "bilanTrimestriel not found with id " + req.params.bilanTrimestrielId
            });
        }
        res.send({message: "bilanTrimestriel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "bilanTrimestriel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete bilanTrimestriel with id " + req.params.patientId
        });
    });
};
