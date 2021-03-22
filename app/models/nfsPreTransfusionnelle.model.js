const mongoose = require('mongoose');

const NfsPreTransfusionnelleSchema = mongoose.Schema({
        id: String, 
        patientId:String,
        hb:String,
        gb:String,
        pnn:String,
        lymphocytes:String,
        plq:String,
        retic:String,
        rai:String,
        tcd:String,
        avecOuSansIncedents:String,
        recu:String
}, {
    timestamps: true
});

module.exports = mongoose.model('NfsPreTransfusionnelle', NfsPreTransfusionnelleSchema);