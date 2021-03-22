const Patient = require('../models/partient.model');

// Create and Save a new Patient
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nom) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Patient
    const patient = new Patient({
        patientId:req.body.patientId,
        nom: req.body.nom , 
        prenom:req.body.prenom,
        datedenaissance:req.body.datedenaissance,
        matricule:req.body.matricule,
        groupesanguin:req.body.groupesanguin,
        phenotype:req.body.phenotype,
        diagnostic:req.body.diagnostic,
        numtransfusion:req.body.numtransfusion,
        dernieretransfusion:req.body.dernieretransfusion,
        tauxdedeglobulisationactuelle:req.body.tauxdedeglobulisationactuelle,
        ancientauxdeglobulisation:req.body.ancientauxdeglobulisation,
        derniereferritinemie:req.body.derniereferritinemie,
        ferritinemieactuelle:req.body.ferritinemieactuelle,
        traitement:req.body.traitement
    });

    // Save patient in the database
    patient.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Patient."
        });
    });
};

// Retrieve and return all patient from the database.
exports.findAll = (req, res) => {
    Patient.find()
    .then(patients => {
        res.send(patients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving patients."
        });
    });
};

// Find a single patient with a noteId
exports.findOne = (req, res) => {
    Patient.findOne({patientId: req.params.patientId})
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });            
        }
        res.send(patient);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving patient with id " + req.params.patientId
        });
    });
};

// Update a patient identified by the patientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nom) {
        return res.status(400).send({
            message: "Patient nom can not be empty"
        });
    }

    // Find patient and update it with the request body
    Patient.findByIdAndUpdate(req.params.patientId, {
        nom: req.body.nom , 
        prenom:req.body.prenom,
        datedenaissance:req.body.datedenaissance,
        matricule:req.body.matricule,
        groupesanguin:req.body.groupesanguin,
        phenotype:req.body.phenotype,
        diagnostic:req.body.diagnostic,
        numtransfusion:req.body.numtransfusion,
        dernieretransfusion:req.body.dernieretransfusion,
        tauxdedeglobulisationactuelle:req.body.tauxdedeglobulisationactuelle,
        ancientauxdeglobulisation:req.body.ancientauxdeglobulisation,
        derniereferritinemie:req.body.derniereferritinemie,
        ferritinemieactuelle:req.body.ferritinemieactuelle,
        traitement:req.body.traitement
    }, {new: true})
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        res.send(patient);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating patient with id " + req.params.patientId
        });
    });
};

// Delete a patient with the specified patientId in the request
exports.delete = (req, res) => {
    Patient.findByIdAndRemove(req.params.patientId)
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        res.send({message: "Patient deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete patient with id " + req.params.patientId
        });
    });
};
