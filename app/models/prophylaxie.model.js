const mongoose = require('mongoose');

const ProphylaxieSchema = mongoose.Schema({
    id:String,
    patientId:String,
    datesvaccinS1:String,
    datesvaccinS2:String, 
    datesvaccinS3:String, 
    datesvaccinS4:String, 
    datesvaccinS5:String,
    datesvaccinS6:String,   
    pneumocoquevaccS1:String,
    pneumocoquevaccS2:String,
    pneumocoquevaccS3:String,
    pneumocoquevaccS4:String,
    pneumocoquevaccS5:String,
    pneumocoquevaccS6:String,
    meningocoquevaccS1:String,
    meningocoquevaccS2:String,
    meningocoquevaccS3:String,
    meningocoquevaccS4:String,
    meningocoquevaccS5:String,
    meningocoquevaccS6:String,
    hoemophilusvaccS1:String,
    hoemophilusvaccS2:String,
    hoemophilusvaccS3:String,
    hoemophilusvaccS4:String,
    hoemophilusvaccS5:String,
    hoemophilusvaccS6:String,
    hepatiteS1:String,
    hepatiteS2:String,
    hepatiteS3:String,
    hepatiteS4:String,
    hepatiteS5:String,
    hepatiteS6:String,
    autresvaccS1:String,
    autresvaccS2:String,
    autresvaccS3:String,
    autresvaccS4:String,
    autresvaccS5:String,
    autresvaccS6:String,
    antibioprophytaxie:String,
    date1antibioptophy:String,
    date2antibioptophy:String,
    date3antibioptophy:String,
    date4antibioptophy:String,
    date5antibioptophy:String,
    date6antibioptophy:String,
    splnectomieDate:String,
    splnectomieChirugie:String,
    observations:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Prophylaxie', ProphylaxieSchema);