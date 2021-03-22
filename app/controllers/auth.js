const User =require('../models/user');
const config=require('../config/database.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const _ = require('lodash')
// const nodemailer = require("nodemailer");
// const {google}= require('googleapis')

exports.signup = (req, res) => {
    const user = new User({
        email: req.body.email,
        name:req.body.name,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role,
        
    });
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!" });
    });
}

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
        
    })
    .then((user, err) => {
        if (err) {
            return res.status(500).send({ message: err });
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found!!" });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password, user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user._id,
            name:user.name,
            email: user.email,
            password:user.password,
            role: user.role,
            token: token
        });
    });
};

// exports.forgotPassword =(req,res) =>{
//     const {email} = req.body;
//     const CLIENT_ID = '152311423728-rmb2ibhqfmkj4ddkon985phl6t49l1v9.apps.googleusercontent.com';
//     const CLIENT_SECRET = 'u-Nfmi2C0Da9zXaKs_PkK8Vb';
//     const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
//     const REFRESH_TOKEN = '';
//     const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
//     oAuth2Client.setCredentials({refresh_token :REFRESH_TOKEN})

//     user.findOne({email},(err,user) =>{
//         if(err || !user){
//             return res.status(400).json({error:'user with this email does not exist.'});
//         }
//         const token = jwt.sign({_id:user._id},{expiresIn:'30m'});
//             let transporter = nodemailer.createTransport({
//                 service:'gmail',
//                 auth: {
//                     type: 'OAuth2',
//                     user:`${email}`, // generated ethereal user
//                     clientId:CLIENT_ID, // generated ethereal password
//                     clientSecret:CLIENT_SECRET,
//                     refreshToken:REFRESH_TOKEN,
//                     accessToken:accessToken
//                 }
//             });
//             const mailOptions={
//                 from:  '"noreply" <noreply@hello.com>', // sender address
//                 to: ` ${email} `, // list of receivers
//                 subject: "Reset Password link", // Subject line
//                 text: "Please click on given link to reset your password", // plain text body
//                 html: `<b>Please click on given link to reset your password</b> 
//                 <a href='https://google.com'>here</a>` , // html body
//             };
//             const info =  transporter.sendMail(mailOptions);
//             console.log("Message sent: %s", info.messageId);

//         return user.update({resetlink: token},  function (err,success){
//             if(err){
//                 return res.status(400).json({error:'reset password link error'});
//             }
//             else{
//                 return res.json({message:'Email has been sent, kindly follow the instructions'})
//             }
//         })
//     })
// }

// exports.resetPassword = (req,res) => {
//     const {resetlink , newPass}= req.body;
//     if(resetlink){
//         jwt.verify(resetlink,process.env.RESET_PASSWORD_KEY,function(error,decodedData){
//             if(error){
//                 return res.status(401).json({
//                     error:'Incorrect token or it is expired.'
//                 })
//             }
//             user.findOne({resetlink},(err,user) => {
//                 if(err || !user){
//                     return res.status(400).json({error:'user with this token does not exist.'});
//                 }
//                 const obj = {
//                     password:newPass,
//                     resetlink:''
//                 }
//                 user = _.extend(user,obj);
//                 user.save((err,result) => {
//                     if(err){
//                         return res.status(400).json({error:'reset password error'});
//                     }
//                     else{
//                         return res.status(200).json({message:'Your password has been changed,'})
//                     }

//                 })
//             })
//         })
//     }else{
//         return res.status(401).json({error:'Authentication error !!!'})
//     }


// }