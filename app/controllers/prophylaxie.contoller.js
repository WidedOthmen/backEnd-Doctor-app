const Prophylaxie = require('../models/prophylaxie.model');

// Create and Save a new Prophylaxie
exports.create = (req, res) => {
    // Create a Prophylaxie
    const prophylaxie = new Prophylaxie({
        id:req.body.id,
        patientId:req.body.patientId,
        datesvaccinS1:req.body.datesvaccinS1,
        datesvaccinS2: req.body.datesvaccinS2, 
        datesvaccinS3: req.body.datesvaccinS3, 
        datesvaccinS4: req.body.datesvaccinS4,  
        datesvaccinS5: req.body.datesvaccinS5, 
        datesvaccinS6: req.body.datesvaccinS6, 
        pneumocoquevaccS1: req.body.pneumocoquevaccS1,
        pneumocoquevaccS2: req.body.pneumocoquevaccS2,
        pneumocoquevaccS3: req.body.pneumocoquevaccS3,
        pneumocoquevaccS4: req.body.pneumocoquevaccS4,
        pneumocoquevaccS5: req.body.pneumocoquevaccS5,
        pneumocoquevaccS6: req.body.pneumocoquevaccS6,
        meningocoquevaccS1:req.body.meningocoquevaccS1,
        meningocoquevaccS2:req.body.meningocoquevaccS2,
        meningocoquevaccS3:req.body.meningocoquevaccS3,
        meningocoquevaccS4:req.body.meningocoquevaccS4,
        meningocoquevaccS5:req.body.meningocoquevaccS5,
        meningocoquevaccS6:req.body.meningocoquevaccS6,
        hoemophilusvacc:req.body.hoemophilusvacc,
        hoemophilusvaccS1:req.body.hoemophilusvaccS1,
        hoemophilusvaccS2:req.body.hoemophilusvaccS2,
        hoemophilusvaccS3:req.body.hoemophilusvaccS3,
        hoemophilusvaccS4:req.body.hoemophilusvaccS4,
        hoemophilusvaccS5:req.body.hoemophilusvaccS5,
        hoemophilusvaccS6:req.body.hoemophilusvaccS6,
        hepatiteS1:req.body.hepatiteS1,
        hepatiteS2:req.body.hepatiteS2,
        hepatiteS3:req.body.hepatiteS3,
        hepatiteS4:req.body.hepatiteS4,
        hepatiteS5:req.body.hepatiteS5,
        hepatiteS6:req.body.hepatiteS6,
        autresvaccS1:req.body.autresvaccS1,
        autresvaccS2:req.body.autresvaccS2,
        autresvaccS3:req.body.autresvaccS3,
        autresvaccS4:req.body.autresvaccS4,
        autresvaccS5:req.body.autresvaccS5,
        autresvaccS6:req.body.autresvaccS6,
        antibioprophytaxie:req.body.antibioprophytaxie,
        date1antibioptophy:req.body.date1antibioptophy,
        date2antibioptophy:req.body.date2antibioptophy,
        date3antibioptophy:req.body.date3antibioptophy,
        date4antibioptophy:req.body.date4antibioptophy,
        date5antibioptophy:req.body.date5antibioptophy,
        date6antibioptophy:req.body.date6antibioptophy,
        splnectomieDate:req.body.splnectomieDate,
        splnectomieChirugie:req.body.splnectomieChirugie,
        observations:req.body.observations
    });

    // Save prophylaxie in the database
    prophylaxie.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the prophylaxie."
        });
    });
};

// Retrieve and return all prophylaxies from the database.
exports.findAll = (req, res) => {
    Prophylaxie.find()
    .then(prophylaxies => {
        res.send(prophylaxies);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving prophylaxies."
        });
    });
};

// Find a single prophylaxie with a noteId
exports.findOne = (req, res) => {
    Prophylaxie.findOne({patientId: req.params.patientId})
    .then(prophylaxie => {
        if(!prophylaxie) {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });            
        }
        res.send(prophylaxie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving prophylaxie with id " + req.params.patientId
        });
    });
};

// Update a prophylaxie identified by the patientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.datesvaccinS1) {
        return res.status(400).send({
            message: "prophylaxie nom can not be empty"
        });
    }
    // Find prophylaxie and update it with the request body
    Prophylaxie.findByIdAndUpdate(req.params.patientId, {
        datesvaccinS1:req.body.datesvaccinS1,
        datesvaccinS2: req.body.datesvaccinS2, 
        datesvaccinS3: req.body.datesvaccinS3, 
        datesvaccinS4: req.body.datesvaccinS4,  
        datesvaccinS5: req.body.datesvaccinS5, 
        datesvaccinS6: req.body.datesvaccinS6, 
        pneumocoquevaccS1: req.body.pneumocoquevaccS1,
        pneumocoquevaccS2: req.body.pneumocoquevaccS2,
        pneumocoquevaccS3: req.body.pneumocoquevaccS3,
        pneumocoquevaccS4: req.body.pneumocoquevaccS4,
        pneumocoquevaccS5: req.body.pneumocoquevaccS5,
        pneumocoquevaccS6: req.body.pneumocoquevaccS6,
        meningocoquevaccS1:req.body.meningocoquevaccS1,
        meningocoquevaccS2:req.body.meningocoquevaccS2,
        meningocoquevaccS3:req.body.meningocoquevaccS3,
        meningocoquevaccS4:req.body.meningocoquevaccS4,
        meningocoquevaccS5:req.body.meningocoquevaccS5,
        meningocoquevaccS6:req.body.meningocoquevaccS6,
        hoemophilusvacc:req.body.hoemophilusvacc,
        hoemophilusvaccS1:req.body.hoemophilusvaccS1,
        hoemophilusvaccS2:req.body.hoemophilusvaccS2,
        hoemophilusvaccS3:req.body.hoemophilusvaccS3,
        hoemophilusvaccS4:req.body.hoemophilusvaccS4,
        hoemophilusvaccS5:req.body.hoemophilusvaccS5,
        hoemophilusvaccS6:req.body.hoemophilusvaccS6,
        hepatiteS1:req.body.hepatiteS1,
        hepatiteS2:req.body.hepatiteS2,
        hepatiteS3:req.body.hepatiteS3,
        hepatiteS4:req.body.hepatiteS4,
        hepatiteS5:req.body.hepatiteS5,
        hepatiteS6:req.body.hepatiteS6,
        autresvaccS1:req.body.autresvaccS1,
        autresvaccS2:req.body.autresvaccS2,
        autresvaccS3:req.body.autresvaccS3,
        autresvaccS4:req.body.autresvaccS4,
        autresvaccS5:req.body.autresvaccS5,
        autresvaccS6:req.body.autresvaccS6,
        antibioprophytaxie:req.body.antibioprophytaxie,
        date1antibioptophy:req.body.date1antibioptophy,
        date2antibioptophy:req.body.date2antibioptophy,
        date3antibioptophy:req.body.date3antibioptophy,
        date4antibioptophy:req.body.date4antibioptophy,
        date5antibioptophy:req.body.date5antibioptophy,
        date6antibioptophy:req.body.date6antibioptophy,
        splnectomieDate:req.body.splnectomieDate,
        splnectomieChirugie:req.body.splnectomieChirugie,
        observations:req.body.observations
    }, {new: true})
    .then(prophylaxie => {
        if(!prophylaxie) {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });
        }
        res.send(prophylaxie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating prophylaxie with id " + req.params.patientId
        });
    });
};

// Delete a prophylaxie with the specified patientId in the request
exports.delete = (req, res) => {
    Prophylaxie.findByIdAndRemove(req.params.patientId)
    .then(prophylaxie => {
        if(!prophylaxie) {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });
        }
        res.send({message: "prophylaxie deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "prophylaxie not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete prophylaxie with id " + req.params.patientId
        });
    });
};
