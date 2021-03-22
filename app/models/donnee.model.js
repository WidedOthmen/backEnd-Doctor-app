const mongoose = require('mongoose');

const DonneeSchema = mongoose.Schema({
    id:String,
    nom: String, 
    prenom:String,
    janvier:String,
    fevrier:String,
    mars:String,
    avril:String,
    mai:String,
    juin:String,
    juillet:String,
    aout:String,
    septembre:String,
    octobre:String,
    novembre:String,
    decembre:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Donnee', DonneeSchema);