const mongoose = require('mongoose');

const BilanAnnuelSchema = mongoose.Schema({
    id: String,
    patientId:String,

    croissanceStaturaleResult: String, 
    croissanceStaturaleObserv: String, 
   

    stadePubertaireResult: String, 
    stadePubertaireObserv: String,
    
    volumeFoieResult: String, 
    volumeFoieObserv: String, 

    
    volumeRateResult: String,
    volumeRateObserv: String, 

    nbTransfussionRecuesResult: String,
    nbTransfussionRecuesObserv: String,

    consommationSangAnnuellResult: String,
    consommationSangAnnuellObserv: String,

    hbMoyPreTransfResult: String,
    hbMoyPreTransfObserv: String,

    hbMoyPostTransfResult: String,
    hbMoyPostTransfObserv: String,

    apportFerResult: String,
    apportFerObserv: String,

    apportAnnuelFerResult: String,
    apportAnnuelFerObserv: String,

    observTraitementChelateurFerResult: String,
    observTraitementChelateurFerObserv: String,

    tshResult: String,
    tshObserv: String,

    ft4Result: String,
    ft4Observ: String,

    audiogrammeResult: String,
    audiogrammeObserv: String,

    examOphtaResult: String,
    examOphtaObserv: String,

    ageOsseuxResult: String,
    ageOsseuxObserv: String,

    ecgResult: String,
    ecgObserv: String,

    rxThoraxResult: String,
    rxThoraxObserv: String,

    echoDoppierCardiaqueResult: String,
    echoDoppierCardiaqueObserv: String,

    echoAbdominaleResult:String,
    echoAbdominaleObserv: String,

    irmCardiaqueResult:String,
    irmCardiaqueObserv: String,

    irmHepatiqueResult: String,
    irmHepatiqueObserv: String,

    autreExamResult: String,
    autreExamObserv: String

}, {
    timestamps: true
});

module.exports = mongoose.model('BilanAnnuel', BilanAnnuelSchema);