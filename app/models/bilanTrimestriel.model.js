const mongoose = require('mongoose');

const BilanTrimestrielSchema = mongoose.Schema({
    id:String,
    patientId:String,
    poidsT1:String , 
    poidsT2:String , 
    poidsT3: String , 
    poidsT4:String , 
    poidsObserv: String, 

    tailleT1:String, 
    tailleT2: String , 
    tailleT3:String , 
    tailleT4:String , 
    tailleObserv: String,
    
    ferritineT1:String,
    ferritineT2:String,
    ferritineT3:String,
    ferritineT4:String,
    ferritineObserv:String,

    asatT1:String,
    asatT2:String,
    asatT3:String,
    asatT4:String,
    asatObserv:String,

    alatT1:String,
    alatT2:String,
    alatT3:String,
    alatT4:String,
    alatObserv:String,

    bbtT1:String,
    bbtT2:String,
    bbtT3:String,
    bbtT4:String,
    bbtObserv:String,

    bbiT1:String,
    bbiT2:String,
    bbiT3:String,
    bbiT4:String,
    bbiObserv:String
}, {
    timestamps: true
});

module.exports = mongoose.model('BilanTrimestriel', BilanTrimestrielSchema);