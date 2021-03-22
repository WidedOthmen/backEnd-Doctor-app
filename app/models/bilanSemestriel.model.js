const mongoose = require('mongoose');

const BilanSemestrielSchema = mongoose.Schema({
        id:String,
        patientId:String,

        glyHos1: String , 
        glyHos2: String , 
        glyHoObserv: String, 

        glyH2s1: String , 
        glyH2s2: String , 
        glyH2Observ: String,

        calcemieS1: String, 
        calcemieS2: String, 
        calcemieObserv: String, 

        phosphS1: String,
        phosphS2: String,
        phosphObserv: String,

        phAlS1: String,
        phAlS2: String,
        phAlObserv: String,

        magS1:String,
        magS2: String,
        magObserv: String,

        tcdS1:String,
        tcdS2:String,
        tcdObserv: String,

        agHbsS1: String,
        agHbsS2: String,
        agHbsObserv:String,

        hcvS1: String,
        hcvS2: String,
        hcvObserv:String,

        hivS1:String,
        hivS2:String,
        hivObserv:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('BilanSemestriel', BilanSemestrielSchema);