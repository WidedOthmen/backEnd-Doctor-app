const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
require('dotenv').config(); //to use  env variables
// create express app
const app = express();
const donneeRouter = require('./app/routes/donnee.routes');
const patientRouter = require('./app/routes/patient.routes');
const familyRouter= require('./app/routes/family.routes');
const examenRouter = require('./app/routes/examen.routes');
const transfusionnelRouter = require('./app/routes/transfusionnel.routes');
const bilanTrimestrielRouter = require('./app/routes/bilanTrimestriel.routes');
const bilanSemestrielRouter = require('./app/routes/bilanSemestriel.routes');
const bilanAnnuelRouter = require('./app/routes/bilanAnnuel.routes');
const nfsPreTransfusionnelleRouter = require('./app/routes/nfsPreTransfusionnelle.routes');
const nfsPostTransfusionnelleRouter = require('./app/routes/nfsPostTransfusionnelle.routes');
const auth = require('./app/routes/auth.routes');
const observ = require('./app/routes/prophylaxie.routes')

app.use(cors())
// parse application/json
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(express.urlencoded(
    { extended: true }
))

app.use('/donnee',donneeRouter)
app.use('/patient',patientRouter);
app.use('/family',familyRouter);
app.use('/examen',examenRouter);
app.use('/transfusionnel',transfusionnelRouter);
app.use('/bilanTrimestriel',bilanTrimestrielRouter);
app.use('/bilanSemestriel',bilanSemestrielRouter);
app.use('/bilanAnnuel',bilanAnnuelRouter);
app.use('/nfsPreTransfusionnelle',nfsPreTransfusionnelleRouter);
app.use('/nfsPostTransfusionnelle',nfsPostTransfusionnelleRouter);
app.use('/auth',auth);
app.use('/prophylaxie',observ)


// Configuring the database
const dbConfig = require('./app/config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url , {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Medicals Rest API By Rim."});
});

// listen for requests
app.listen(3000,   () => {
    console.log("Server is listening on port 3000");
});