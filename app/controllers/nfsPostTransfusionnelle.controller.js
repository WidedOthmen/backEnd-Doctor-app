const NfsPostTransfusionnelle = require('../models/nfsPostTransfusionnelle.model');

// Create and Save a new nfsPostTransfusionnelle
exports.create = (req, res) => {
    // Create a nfsPostTransfusionnelle
    const nfsPostTransfusionnelle = new NfsPostTransfusionnelle({
        id: req.body.id, 
        patientId:req.body.patientId,
        hb:req.body.hb,
        gb:req.body.gb,
        pnn:req.body.pnn,
        lymphocytes:req.body.lymphocytes,
        plq:req.body.plq,
        retic:req.body.retic,
        rai:req.body.rai,
        tcd:req.body.tcd,
    });

    // Save nfsPostTransfusionnelle in the database
    nfsPostTransfusionnelle.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the nfsPreTransfusionnelle."
        });
    });
};

// Retrieve and return all nfsPostTransfusionnelles from the database.
exports.findAll = (req, res) => {
    NfsPostTransfusionnelle.find()
    .then(nfsPostTransfusionnelles => {
        res.send(nfsPostTransfusionnelles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving nfsPostTransfusionnelles."
        });
    });
};

// Find a single nfsPostTransfusionnelle with a noteId
exports.findOne = (req, res) => {
    NfsPostTransfusionnelle.findOne({patientId: req.params.patientId})
    .then(nfsPostTransfusionnelle => {
        if(!nfsPostTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });            
        }
        res.send(nfsPostTransfusionnelle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving nfsPostTransfusionnelle with id " + req.params.patientId
        });
    });
};

// Update a nfsPostTransfusionnelle identified by the nfsPostTransfusionnelleId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.patientId) {
        return res.status(400).send({
            message: "nfsPostTransfusionnelle nom can not be empty"
        });
    }

    // Find nfsPostTransfusionnelle and update it with the request body
    NfsPostTransfusionnelle.findByIdAndUpdate(req.params.patientId, {
        id: req.body.id , 
        hb:req.body.hb,
        gb:req.body.gb,
        pnn:req.body.pnn,
        lymphocytes:req.body.lymphocytes,
        plq:req.body.plq,
        retic:req.body.retic,
        rai:req.body.rai,
        tcd:req.body.tcd,
    
    }, {new: true})
    .then(nfsPostTransfusionnelle => {
        if(!nfsPostTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });
        }
        res.send(nfsPostTransfusionnelle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating nfsPostTransfusionnelle with id " + req.params.patientId
        });
    });
};

// Delete a nfsPostTransfusionnelle with the specified nfsPostTransfusionnelleId in the request
exports.delete = (req, res) => {
    NfsPostTransfusionnelle.findByIdAndRemove(req.params.patientId)
    .then(nfsPostTransfusionnelle => {
        if(!nfsPostTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });
        }
        res.send({message: "nfsPostTransfusionnelle deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "nfsPostTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete nfsPostTransfusionnelle with id " + req.params.patientId
        });
    });
};
