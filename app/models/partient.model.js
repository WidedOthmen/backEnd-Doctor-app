const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    patientId:String,
    nom: String, 
    prenom:String,
    datedenaissance:String,
    matricule:String,
    groupesanguin:String,
    phenotype:String,
    diagnostic:String,
    numtransfusion:String,
    dernieretransfusion:String,
    tauxdedeglobulisationactuelle:String,
    ancientauxdeglobulisation:String,
    derniereferritinemie:String,
    ferritinemieactuelle:String,
    traitement:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);