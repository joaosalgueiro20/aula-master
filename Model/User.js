const mongoose = require('mongoose');
const UserSchema =  new mongoose.Schema({
    nome : String,
    email : String,
    senha : String,
    idade : Number,
    thumb : String,
    status : Boolean,
});
module.exports = mongoose.model('User', UserSchema);