const mongoose = require('mongoose');

const FamilySchema = mongoose.Schema({
        patientId:String,
        prenomPere:String,
        prenomMere:String,
        prenomFratrie1:String,
        prenomFratrie2:String,
        prenomFratrie3:String,
        prenomFratrie4:String,
        prenomFratrie5:String,

        datedenaissancePere:String,
        datedenaissanceMere:String,
        datedenaissanceFratrie1:String,
        datedenaissanceFratrie2:String,
        datedenaissanceFratrie3:String,
        datedenaissanceFratrie4:String,
        datedenaissanceFratrie5:String,

        hbaPere:String,
        hbaMere:String,
        hbaFratrie1:String,
        hbaFratrie2:String,
        hbaFratrie3:String,
        hbaFratrie4:String,
        hbaFratrie5:String,

        hbfPere:String,
        hbfMere:String,
        hbfFratrie1:String,
        hbfFratrie2:String,
        hbfFratrie3:String,
        hbfFratrie4:String,
        hbfFratrie5:String,

        hba2Pere:String,
        hba2Mere:String,
        hba2Fratrie1:String,
        hba2Fratrie2:String,
        hba2Fratrie3:String,
        hba2Fratrie4:String,
        hba2Fratrie5:String,

        hlaPere:String,
        hlaMere:String,
        hlaFratrie1:String,
        hlaFratrie2:String,
        hlaFratrie3:String,
        hlaFratrie4:String,
        hlaFratrie5:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Family', FamilySchema);