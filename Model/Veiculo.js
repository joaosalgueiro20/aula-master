const mongoose = require('mongoose');
const VeiculoSchema =  new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    combustivel : String,
    ano_fab : Number,
    ano_mod : Number,
    thumb : String,
    placa : String,
    marca_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marca'
    },
    modelo_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Modelo'
    },
});
module.exports = mongoose.model('Veiculo', VeiculoSchema);