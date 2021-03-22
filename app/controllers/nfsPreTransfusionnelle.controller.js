const NfsPreTransfusionnelle = require('../models/nfsPreTransfusionnelle.model');

// Create and Save a new NfsPreTransfusionnelle
exports.create = (req, res) => {
    // Create a NfsPreTransfusionnelle
    const nfsPreTransfusionnelle = new NfsPreTransfusionnelle({
        id: req.body.id , 
        patientId:req.body.patientId,
        hb:req.body.hb,
        gb:req.body.gb,
        pnn:req.body.pnn,
        lymphocytes:req.body.lymphocytes,
        plq:req.body.plq,
        retic:req.body.retic,
        rai:req.body.rai,
        tcd:req.body.tcd,
        avecOuSansIncedents:req.body.avecOuSansIncedents,
        recu:req.body.recu
    });

    // Save nfsPreTransfusionnelle in the database
    nfsPreTransfusionnelle.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the nfsPreTransfusionnelle."
        });
    });
};

// Retrieve and return all nfsPreTransfusionnelles from the database.
exports.findAll = (req, res) => {
    NfsPreTransfusionnelle.find()
    .then(nfsPreTransfusionnelles => {
        res.send(nfsPreTransfusionnelles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving nfsPreTransfusionnelles."
        });
    });
};

// Find a single nfsPreTransfusionnelle with a noteId
exports.findOne = (req, res) => {
    NfsPreTransfusionnelle.findOne({patientId: req.params.patientId})
    .then(nfsPreTransfusionnelle => {
        if(!nfsPreTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });            
        }
        res.send(nfsPreTransfusionnelle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving nfsPreTransfusionnelle with id " + req.params.patientId
        });
    });
};

// Update a nfsPreTransfusionnelle identified by the nfsPreTransfusionnelleId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.patientId) {
        return res.status(400).send({
            message: "nfsPreTransfusionnelle nom can not be empty"
        });
    }

    // Find nfsPreTransfusionnelle and update it with the request body
    NfsPreTransfusionnelle.findByIdAndUpdate(req.params.patientId, {
        id: req.body.id , 
        hb:req.body.hb,
        gb:req.body.gb,
        pnn:req.body.pnn,
        lymphocytes:req.body.lymphocytes,
        plq:req.body.plq,
        retic:req.body.retic,
        rai:req.body.rai,
        tcd:req.body.tcd,
        avecOuSansIncedents:req.body.avecOuSansIncedents,
        recu:req.body.recu
    }, {new: true})
    .then(nfsPreTransfusionnelle => {
        if(!nfsPreTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });
        }
        res.send(nfsPreTransfusionnelle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating nfsPreTransfusionnelle with id " + req.params.patientId
        });
    });
};

// Delete a nfsPreTransfusionnelle with the specified nfsPreTransfusionnelleId in the request
exports.delete = (req, res) => {
    NfsPreTransfusionnelle.findByIdAndRemove(req.params.patientId)
    .then(nfsPreTransfusionnelle => {
        if(!nfsPreTransfusionnelle) {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });
        }
        res.send({message: "nfsPreTransfusionnelle deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "nfsPreTransfusionnelle not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete nfsPreTransfusionnelle with id " + req.params.patientId
        });
    });
};
