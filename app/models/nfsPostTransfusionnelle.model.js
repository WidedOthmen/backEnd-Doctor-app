const mongoose = require('mongoose');

const NfsPostTransfusionnelleSchema = mongoose.Schema({
    id: String, 
    patientId:String,
    hb:String,
    gb:String,
    pnn:String,
    lymphocytes:String,
    plq:String,
    retic:String,
    rai:String,
    tcd:String
}, {
    timestamps: true
});

module.exports = mongoose.model('NfsPostTransfusionnelle', NfsPostTransfusionnelleSchema);