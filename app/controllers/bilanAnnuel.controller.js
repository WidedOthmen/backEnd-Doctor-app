const BilanAnnuel = require('../models/bilanAnnuel.model');

// Create and Save a new BilanAnnuel
exports.create = (req, res) => {
    // Create a BilanAnnuel
    const bilanAnnuel = new BilanAnnuel({
        id:req.body.id,
        patientId:req.body.patientId,

        croissanceStaturaleResult: req.body.croissanceStaturaleResult, 
        croissanceStaturaleObserv: req.body.croissanceStaturaleObserv, 
       
        stadePubertaireResult: req.body.stadePubertaireResult, 
        stadePubertaireObserv: req.body.stadePubertaireObserv,
        
        volumeFoieResult: req.body.volumeFoieResult, 
        volumeFoieObserv: req.body.volumeFoieObserv, 

        volumeRateResult: req.body.volumeFoieResult,
        volumeRateObserv: req.body.volumeRateObserv, 

        nbTransfussionRecuesResult: req.body.nbTransfussionRecuesResult,
        nbTransfussionRecuesObserv: req.body.nbTransfussionRecuesObserv,

        consommationSangAnnuellResult: req.body.consommationSangAnnuellResult,
        consommationSangAnnuellObserv: req.body.consommationSangAnnuellObserv,

        hbMoyPreTransfResult: req.body.hbMoyPreTransfResult,
        hbMoyPreTransfObserv: req.body.hbMoyPreTransfObserv,

        hbMoyPostTransfResult: req.body.hbMoyPostTransfResult,
        hbMoyPostTransfObserv: req.body.hbMoyPostTransfObserv,

        apportFerResult: req.body.apportFerResult,
        apportFerObserv: req.body.apportFerObserv,

        apportAnnuelFerResult: req.body.apportAnnuelFerResult,
        apportAnnuelFerObserv: req.body.apportAnnuelFerObserv,

        observTraitementChelateurFerResult: req.body.observTraitementChelateurFerResult,
        observTraitementChelateurFerObserv: req.body.observTraitementChelateurFerObserv,

        tshResult: req.body.tshResult,
        tshObserv: req.body.tshObserv,

        ft4Result: req.body.ft4Result,
        ft4Observ: req.body.ft4Observ,

        audiogrammeResult: req.body.audiogrammeResult,
        audiogrammeObserv: req.body.audiogrammeObserv,

        examOphtaResult: req.body.examOphtaResult,
        examOphtaObserv: req.body.examOphtaObserv,

        ageOsseuxResult: req.body.ageOsseuxResult,
        ageOsseuxObserv: req.body.ageOsseuxObserv,

        ecgResult: req.body.ecgResult,
        ecgObserv: req.body.ecgObserv,

        rxThoraxResult: req.body.rxThoraxResult,
        rxThoraxObserv: req.body.rxThoraxObserv,

        echoDoppierCardiaqueResult: req.body.echoDoppierCardiaqueResult,
        echoDoppierCardiaqueObserv: req.body.echoDoppierCardiaqueObserv,

        echoAbdominaleResult: req.body.echoAbdominaleResult,
        echoAbdominaleObserv: req.body.echoAbdominaleObserv,

        irmCardiaqueResult: req.body.irmCardiaqueResult,
        irmCardiaqueObserv: req.body.irmCardiaqueObserv,

        irmHepatiqueResult: req.body.irmHepatiqueResult,
        irmHepatiqueObserv: req.body.irmHepatiqueObserv,

        autreExamResult: req.body.autreExamResult,
        autreExamObserv: req.body.autreExamObserv
    });

    // Save BilanAnnuel in the database
    bilanAnnuel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the BilanAnnuel."
        });
    });
};

// Retrieve and return all BilanAnnuel from the database.
exports.findAll = (req, res) => {
    BilanAnnuel.find()
    .then(bilanAnnuels => {
        res.send(bilanAnnuels);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving BilanAnnuel."
        });
    });
};

// Find a single BilanAnnuel with a noteId
exports.findOne = (req, res) => {
    BilanAnnuel.findOne({patientId: req.params.patientId})
    .then(bilanAnnuel => {
        if(!bilanAnnuel) {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });            
        }
        res.send(bilanAnnuel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving BilanAnnuel with id " + req.params.patientId
        });
    });
};

// Update a BilanAnnuel identified by the patientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.patientId) {
        return res.status(400).send({
            message: "BilanAnnuel nom can not be empty"
        });
    }

    // Find BilanAnnuel and update it with the request body
    BilanAnnuel.findByIdAndUpdate(req.params.patientId, {
        id:req.body.id,
        idBilanAnnuel:req.body.idBilanAnnuel,

        croissanceStaturaleResult: req.body.croissanceStaturaleResult, 
        croissanceStaturaleObserv: req.body.croissanceStaturaleObserv, 
       

        stadePubertaireResult: req.body.stadePubertaireResult, 
        stadePubertaireObserv: req.body.stadePubertaireObserv,
        
        volumeFoieResult: req.body.volumeFoieResult, 
        volumeFoieObserv: req.body.volumeFoieObserv, 

        
        volumeRateResult: req.body.volumeFoieResult,
        volumeRateObserv: req.body.volumeRateObserv, 

        nbTransfussionRecuesResult: req.body.nbTransfussionRecuesResult,
        nbTransfussionRecuesObserv: req.body.nbTransfussionRecuesObserv,

        consommationSangAnnuellResult: req.body.consommationSangAnnuellResult,
        consommationSangAnnuellObserv: req.body.consommationSangAnnuellObserv,

        hbMoyPreTransfResult: req.body.hbMoyPreTransfResult,
        hbMoyPreTransfObserv: req.body.hbMoyPreTransfObserv,

        hbMoyPostTransfResult: req.body.hbMoyPostTransfResult,
        hbMoyPostTransfObserv: req.body.hbMoyPostTransfObserv,

        apportFerResult: req.body.apportFerResult,
        apportFerObserv: req.body.apportFerObserv,

        apportAnnuelFerResult: req.body.apportAnnuelFerResult,
        apportAnnuelFerObserv: req.body.apportAnnuelFerObserv,

        observTraitementChelateurFerResult: req.body.observTraitementChelateurFerResult,
        observTraitementChelateurFerObserv: req.body.observTraitementChelateurFerObserv,

        tshResult: req.body.tshResult,
        tshObserv: req.body.tshObserv,

        ft4Result: req.body.ft4Result,
        ft4Observ: req.body.ft4Observ,

        audiogrammeResult: req.body.audiogrammeResult,
        audiogrammeObserv: req.body.audiogrammeObserv,

        examOphtaResult: req.body.examOphtaResult,
        examOphtaObserv: req.body.examOphtaObserv,

        ageOsseuxResult: req.body.ageOsseuxResult,
        ageOsseuxObserv: req.body.ageOsseuxObserv,

        ecgResult: req.body.ecgResult,
        ecgObserv: req.body.ecgObserv,

        rxThoraxResult: req.body.rxThoraxResult,
        rxThoraxObserv: req.body.rxThoraxObserv,

        echoDoppierCardiaqueResult: req.body.echoDoppierCardiaqueResult,
        echoDoppierCardiaqueObserv: req.body.echoDoppierCardiaqueObserv,

        echoAbdominaleResult: req.body.echoAbdominaleResult,
        echoAbdominaleObserv: req.body.echoAbdominaleObserv,

        irmCardiaqueResult: req.body.irmCardiaqueResult,
        irmCardiaqueObserv: req.body.irmCardiaqueObserv,

        irmHepatiqueResult: req.body.irmHepatiqueResult,
        irmHepatiqueObserv: req.body.irmHepatiqueObserv,

        autreExamResult: req.body.autreExamResult,
        autreExamObserv: req.body.autreExamObserv


    }, {new: true})
    .then(bilanAnnuel => {
        if(!bilanAnnuel) {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });
        }
        res.send(bilanAnnuel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating BilanAnnuel with id " + req.params.patientId
        });
    });
};

// Delete a BilanAnnuel with the specified patientId in the request
exports.delete = (req, res) => {
    BilanAnnuel.findByIdAndRemove(req.params.patientId)
    .then(bilanAnnuel => {
        if(!bilanAnnuel) {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });
        }
        res.send({message: "BilanAnnuel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "BilanAnnuel not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete BilanAnnuel with id " + req.params.bilanAnnueld
        });
    });
};
