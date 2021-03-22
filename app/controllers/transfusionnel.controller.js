const Transfusionnel = require('../models/transfusionnel.model');

// Create and Save a new transfusionnel
exports.create = (req, res) => {
 // Create a transfusionnel
    const transfusionnel = new Transfusionnel({
        id:req.body.id,
        patientId:req.body.patientId,
        date: req.body.date , 
        volumetransfuse:req.body.volumetransfuse,
        hb:req.body.hb,
        pnn:req.body.pnn,
        plaquettes:req.body.plaquettes,
        reliculocytes:req.body.reliculocytes,
        hbpost:req.body.hbpost,
        rai:req.body.rai,
        chh:req.body.chh,
        ldh:req.body.ldh,
        creatine:req.body.creatine,
        glycemie:req.body.glycemie,
        autresexamen:req.body.autresexamen,
        reaction:req.body.reaction,
        observations:req.body.observations
    });

    // Save transfusionnel in the database
    transfusionnel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the transfusionnel."
        });
    });
};

// Retrieve and return all transfusionnel from the database.
exports.findAll = (req, res) => {
    Transfusionnel.find()
    .then(transfusionnels => {
        res.send(transfusionnels);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transfusionnels."
        });
    });
};

// Find a single transfusionnel with a noteId
exports.findOne = (req, res) => {
    Transfusionnel.findOne({patientId: req.params.patientId})
    .then(transfusionnel => {
        if(!transfusionnel) {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });            
        }
        res.send(transfusionnel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving transfusionnel with id " + req.params.patientId
        });
    });
};

// Update a transfusionnel identified by the transfusionnelId in the request
exports.update = (req, res) => {
    // Find transfusionnel and update it with the request body
    Transfusionnel.findByIdAndUpdate(req.params.patientId, {
        id:req.body.id,
        date: req.body.date , 
        volumetransfuse:req.body.volumetransfuse,
        hb:req.body.hb,
        pnn:req.body.pnn,
        plaquettes:req.body.plaquettes,
        reliculocytes:req.body.reliculocytes,
        hbpost:req.body.hbpost,
        rai:req.body.rai,
        chh:req.body.chh,
        ldh:req.body.ldh,
        creatine:req.body.creatine,
        glycemie:req.body.glycemie,
        autresexamen:req.body.autresexamen,
        reaction:req.body.reaction,
        observations:req.body.observations
    }, {new: true})
    .then(transfusionnel => {
        if(!transfusionnel) {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });
        }
        res.send(transfusionnel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating transfusionnel with id " + req.params.patientId
        });
    });
};

// Delete a transfusionnel with the specified transfusionnelId in the request
exports.delete = (req, res) => {
    Transfusionnel.findByIdAndRemove(req.params.patientId)
    .then(transfusionnel => {
        if(!transfusionnel) {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });
        }
        res.send({message: "transfusionnel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "transfusionnel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete transfusionnel with id " + req.params.patientId
        });
    });
};
