const mongoose = require('mongoose');

const ModeloSchema =  new mongoose.Schema({
    nome : String,
});

module.exports = mongoose.model('Modelo', ModeloSchema);