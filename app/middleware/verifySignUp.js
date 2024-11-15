const user = require('../models/user');

checkDuplicateEmail= (req,res,next) => {
    user.findOne({email:req.body.email})
    .exec((err,user) =>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        if(user){
            res.status(400).send({message: "Failed! Email is already in use!"})
            return;
        }
        console.log(user)
    next();
    })
};
module.exports=checkDuplicateEmail;