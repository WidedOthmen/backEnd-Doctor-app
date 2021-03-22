const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true
    },
    name:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        require: true
    },
    resetlink:{
        data:String,
        default:''
    }
}, {timestamps: true});

module.exports = mongoose.model('user', UserSchema);