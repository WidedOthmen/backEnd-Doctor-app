const checkDuplicateEmail =require('../middleware/verifySignUp');
const controller = require('../controllers/auth');

const app = require("express").Router()

app.post("/signup", checkDuplicateEmail, controller.signup);
app.post("/signin", controller.signin);
// app.post('/forgot-password',controller.forgotPassword );
// app.put('/resetPassword',controller.resetPassword);
module.exports = app;