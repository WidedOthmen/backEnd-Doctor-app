const Examen = require('../models/examen.model');

// Create and Save a new Examen
exports.create = (req, res) => {
    // Create a Examen
    const examen = new Examen({
        id: req.body.id , 
        patientId:req.body.patientId,
        examenCoeur:req.body.examenCoeur,
        examenPulmonaire:req.body.examenPulmonaire,
        examenAbdominal:req.body.examenAbdominal,
        examenCutane:req.body.examenCutane,
        examenUrologique:req.body.examenUrologique,
        examenAiresGanglionnaires:req.body.examenAiresGanglionnaires,
        examenNeurologique:req.body.examenNeurologique,
        examenMembres:req.body.examenMembres,
        examenOrificesHerniares:req.body.examenOrificesHerniares,
        examenGynecologique:req.body.examenGynecologique,
        examenAutre:req.body.examenAutre,
        problemePose:req.body.problemePose
    });

    // Save Examen in the database
    examen.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Examen."
        });
    });
};

// Retrieve and return all Examens from the database.
exports.findAll = (req, res) => {
    Examen.find()
    .then(examens => {
        res.send(examens);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Examens."
        });
    });
};

// Find a single Examen with a noteId
exports.findOne = (req, res) => {
    Examen.findOne({patientId: req.params.patientId})
    .then(examen => {
        if(!examen) {
            return res.status(404).send({
                message: "Examen not found with id " + req.params.patientId
            });            
        }
        res.send(examen);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Examen not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Examen with id " + req.params.patientId
        });
    });
};

// Update a Examen identified by the examenId in the request
exports.update = (req, res) => {
    // Find Examen and update it with the request body
    Examen.findByIdAndUpdate(req.params.patientId, {
        id: req.body.id, 
        examenCoeur:req.body.examenCoeur,
        examenPulmonaire:req.body.examenPulmonaire,
        examenAbdominal:req.body.examenAbdominal,
        examenCutane:req.body.examenCutane,
        examenUrologique:req.body.examenUrologique,
        examenAiresGanglionnaires:req.body.examenAiresGanglionnaires,
        examenNeurologique:req.body.examenNeurologique,
        examenMembres:req.body.examenMembres,
        examenOrificesHerniares:req.body.examenOrificesHerniares,
        examenGynecologique:req.body.examenGynecologique,
        examenAutre:req.body.examenAutre,
        problemePose:req.body.problemePose
    }, {new: true})
    .then(examen => {
        if(!examen) {
            return res.status(404).send({
                message: "examen not found with id " + req.params.patientId
            });
        }
        res.send(examen);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "examen not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating examen with id " + req.params.patientId
        });
    });
};

// Delete a examen with the specified examenId in the request
exports.delete = (req, res) => {
    Examen.findByIdAndRemove(req.params.patientId)
    .then(examen => {
        if(!examen) {
            return res.status(404).send({
                message: "examen not found with id " + req.params.patientId
            });
        }
        res.send({message: "examen deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "examen not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete examen with id " + req.params.patientId
        });
    });
};
