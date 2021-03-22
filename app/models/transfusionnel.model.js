const mongoose = require('mongoose');

const TransfusionnelSchema = mongoose.Schema({
    id:String,
    patientId:String,
    date:String, 
    volumetransfuse:String,
    hb:String,
    pnn:String,
    plaquettes:String,
    reliculocytes:String,
    hbpost:String,
    rai:String,
    chh:String,
    ldh:String,
    creatine:String,
    glycemie:String,
    autresexamen:String,
    reaction:String,
    observations:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Transfusionnel', TransfusionnelSchema);