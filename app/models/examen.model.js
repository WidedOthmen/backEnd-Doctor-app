const { text } = require('body-parser');
const mongoose = require('mongoose');

const ExamenSchema = mongoose.Schema({
        id: String, 
        patientId:String,
        examenCoeur:String,
        examenPulmonaire:String,
        examenAbdominal:String,
        examenCutane:String,
        examenUrologique:String,
        examenAiresGanglionnaires:String,
        examenNeurologique:String,
        examenMembres:String,
        examenOrificesHerniares:String,
        examenGynecologique:String,
        examenAutre:String,
        problemePose:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Examen', ExamenSchema);