const Donnee = require('../models/donnee.model');

// Create and Save a new Donnee
exports.create = (req, res) => {
    // Create a Donnee
    const donnee = new Donnee({
        id:req.body.id,
        nom: req.body.nom, 
        prenom:req.body.prenom,
        janvier:req.body.janvier,
        fevrier:req.body.fevrier,
        mars:req.body.mars,
        avril:req.body.avril,
        mai:req.body.mai,
        juin:req.body.juin,
        juillet:req.body.juillet,
        aout:req.body.aout,
        septembre:req.body.septembre,
        octobre:req.body.octobre,
        novembre:req.body.novembre,
        decembre:req.body.decembre
    });
    // Save Donnee in the database
    donnee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Donnee."
        });
    });
};

// Retrieve and return all Donnees from the database.
exports.findAll = (req, res) => {
    Donnee.find()
    .then(donnees => {
        res.send(donnees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Donnees."
        });
    });
};

// Find a single Donnee with a noteId
exports.findOne = (req, res) => {
    Donnee.findById(req.params.donneeId)
    .then(donnee => {
        if(!donnee) {
            return res.status(404).send({
                message: "donnee not found with id " + req.params.donneeId
            });            
        }
        res.send(donnee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "donnee not found with id " + req.params.donneeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving donnee with id " + req.params.donneeId
        });
    });
};
// Update a donnee identified by the donneeId in the request
exports.update = (req, res) => {
    // Find donnee and update it with the request body
    Donnee.updateOne({_id:req.params.donneesId},{$set:req.body},
        {
            nom: req.body.nom, 
            prenom:req.body.prenom,
            janvier:req.body.janvier,
            fevrier:req.body.fevrier,
            mars:req.body.mars,
            avril:req.body.avril,
            mai:req.body.mai,
            juin:req.body.juin,
            juillet:req.body.juillet,
            aout:req.body.aout,
            septembre:req.body.septembre,
            octobre:req.body.octobre,
            novembre:req.body.novembre,
            decembre:req.body.decembre
        }, 
        function(err){
            if(err){
                res.json({status:'no',msg:'error'+err})
            }else{
                res.json({msg:'patient updated'})
            }
        }
    )    
};

// Delete a donnee with the specified donneeId in the request
exports.delete = (req, res) => {
    Donnee.findByIdAndRemove(req.params.donneeId)
    .then(donnee => {
        if(!donnee) {
            return res.status(404).send({
                message: "donnee not found with id " + req.params.donneeId
            });
        }
        res.send({message: "donnee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "donnee not found with id " + req.params.donneeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete donnee with id " + req.params.donneeId
        });
    });
};
exports.searchByName = (req, res) => {
    User.find({ name: new RegExp(req.params.name, 'i') }, function (err, data) {
        if (err) {
            res.json({ msg: 'wrong' + err })
        } else {
            res.json(data)
        }
    })
};