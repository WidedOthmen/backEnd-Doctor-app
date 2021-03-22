const Family = require('../models/family.model');

// Create and Save a new Family
exports.create = (req, res) => {
    // Validate request
    if(!req.body.prenomMere) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Family
    const family = new Family({
        patientId:req.body.patientId,
        prenomPere:req.body.prenomPere,
        prenomMere:req.body.prenomMere,
        prenomFratrie1:req.body.prenomFratrie1,
        prenomFratrie2:req.body.prenomFratrie2,
        prenomFratrie3:req.body.prenomFratrie3,
        prenomFratrie4:req.body.prenomFratrie4,
        prenomFratrie5:req.body.prenomFratrie5,

        datedenaissancePere:req.body.datedenaissancePere,
        datedenaissanceMere:req.body.datedenaissanceMere,
        datedenaissanceFratrie1:req.body.datedenaissanceFratrie1,
        datedenaissanceFratrie2:req.body.datedenaissanceFratrie2,
        datedenaissanceFratrie3:req.body.datedenaissanceFratrie3,
        datedenaissanceFratrie4:req.body.datedenaissanceFratrie4,
        datedenaissanceFratrie5:req.body.datedenaissanceFratrie5,

        hbaPere:req.body.hbaPere,
        hbaMere:req.body.hbaMere,
        hbaFratrie1:req.body.hbaFratrie1,
        hbaFratrie2:req.body.hbaFratrie2,
        hbaFratrie3:req.body.hbaFratrie3,
        hbaFratrie4:req.body.hbaFratrie4,
        hbaFratrie5:req.body.hbaFratrie5,

        hbfPere:req.body.hbfPere,
        hbfMere:req.body.hbfMere,
        hbfFratrie1:req.body.hbfFratrie1,
        hbfFratrie2:req.body.hbfFratrie2,
        hbfFratrie3:req.body.hbfFratrie3,
        hbfFratrie4:req.body.hbfFratrie4,
        hbfFratrie5:req.body.hbfFratrie5,

        hba2Pere:req.body.hba2Pere,
        hba2Mere:req.body.hba2Mere,
        hba2Fratrie1:req.body.hba2Fratrie1,
        hba2Fratrie2:req.body.hba2Fratrie2,
        hba2Fratrie3:req.body.hba2Fratrie3,
        hba2Fratrie4:req.body.hba2Fratrie4,
        hba2Fratrie5:req.body.hba2Fratrie5,

        hlaPere:req.body.hlaPere,
        hlaMere:req.body.hlaMere,
        hlaFratrie1:req.body.hlaFratrie1,
        hlaFratrie2:req.body.hlaFratrie2,
        hlaFratrie3:req.body.hlaFratrie3,
        hlaFratrie4:req.body.hlaFratrie4,
        hlaFratrie5:req.body.hlaFratrie5

    });

    // Save family in the database
    family.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Family."
        });
    });
};

// Retrieve and return all family from the database.
exports.findAll = (req, res) => {
    Family.find()
    .then(familys => {
        res.send(familys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving familys."
        });
    });
};

// Find a single family with a noteId
exports.findOne = (req, res) => {
    Family.findOne({patientId: req.params.patientId})
    .then(family => {
        if(!family) {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });            
        }
        res.send(family);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving family with id " + req.params.patientId
        });
    });
};

// Update a family identified by the familyId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.prenomMere) {
        return res.status(400).send({
            message: "Family nom can not be empty"
        });
    }

    // Find family and update it with the request body
    Family.findByIdAndUpdate(req.params.patientId, {

        prenomPere:req.body.prenomPere,
        prenomMere:req.body.prenomMere,
        prenomFratrie1:req.body.prenomFratrie1,
        prenomFratrie2:req.body.prenomFratrie2,
        prenomFratrie3:req.body.prenomFratrie3,
        prenomFratrie4:req.body.prenomFratrie4,
        prenomFratrie5:req.body.prenomFratrie5,

        datedenaissancePere:req.body.datedenaissancePere,
        datedenaissanceMere:req.body.datedenaissanceMere,
        datedenaissanceFratrie1:req.body.datedenaissanceFratrie1,
        datedenaissanceFratrie2:req.body.datedenaissanceFratrie2,
        datedenaissanceFratrie3:req.body.datedenaissanceFratrie3,
        datedenaissanceFratrie4:req.body.datedenaissanceFratrie4,
        datedenaissanceFratrie5:req.body.datedenaissanceFratrie5,

        hbaPere:req.body.hbaPere,
        hbaMere:req.body.hbaMere,
        hbaFratrie1:req.body.hbaFratrie1,
        hbaFratrie2:req.body.hbaFratrie2,
        hbaFratrie3:req.body.hbaFratrie3,
        hbaFratrie4:req.body.hbaFratrie4,
        hbaFratrie5:req.body.hbaFratrie5,

        hbfPere:req.body.hbfPere,
        hbfMere:req.body.hbfMere,
        hbfFratrie1:req.body.hbfFratrie1,
        hbfFratrie2:req.body.hbfFratrie2,
        hbfFratrie3:req.body.hbfFratrie3,
        hbfFratrie4:req.body.hbfFratrie4,
        hbfFratrie5:req.body.hbfFratrie5,

        hba2Pere:req.body.hba2Pere,
        hba2Mere:req.body.hba2Mere,
        hba2Fratrie1:req.body.hba2Fratrie1,
        hba2Fratrie2:req.body.hba2Fratrie2,
        hba2Fratrie3:req.body.hba2Fratrie3,
        hba2Fratrie4:req.body.hba2Fratrie4,
        hba2Fratrie5:req.body.hba2Fratrie5,

        hlaPere:req.body.hlaPere,
        hlaMere:req.body.hlaMere,
        hlaFratrie1:req.body.hlaFratrie1,
        hlaFratrie2:req.body.hlaFratrie2,
        hlaFratrie3:req.body.hlaFratrie3,
        hlaFratrie4:req.body.hlaFratrie4,
        hlaFratrie5:req.body.hlaFratrie5
    }, {new: true})
    .then(family => {
        if(!family) {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });
        }
        res.send(family);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating family with id " + req.params.patientId
        });
    });
};

// Delete a family with the specified familyId in the request
exports.delete = (req, res) => {
    Family.findByIdAndRemove(req.params.patientId)
    .then(family => {
        if(!family) {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });
        }
        res.send({message: "Family deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Family not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete family with id " + req.params.patientId
        });
    });
};
