const Veiculos = require('../Model/Veiculo')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let veiculos = await Veiculos.find();
        return res.json(veiculos);
    },

    async show(req, res){
      let veiculo = await Veiculos.findOne({_id : req.params_id});
      return res.json(veiculo);
    },

    async store(req, res){
        const nome = req.body.nome;
        const motor = req.body.motor;
        const portas = req.body.portas;
        const combustivel = req.body.combustivel;
        const ano_fab = req.body.ano_fab;
        const ano_mod = req.body.ano_mod;
        const placa = req.body.placa;
        const thumb = req.file.filename;
        const marca_id = req.body.marca_id;
        const modelo_id = req.body.modelo_id;
        let veiculo = await Veiculos.findOne({placa});
        if(!veiculo){
            veiculo = await Veiculos.create({nome,motor,portas,combustivel,ano_fab,ano_mod,placa,thumb,marca_id,modelo_id});
        }else{
            return res.status(400).json({error : "Veículo já cadastrado!"});
        }
        return res.json(veiculo);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let veiculo = await Veiculos.findOne({_id : req.params.id});
        veiculo.nome        = req.body.nome;
        veiculo.motor       = req.body.motor;
        veiculo.portas      = req.body.portas;
        veiculo.combustivel = req.body.combustivel;
        veiculo.ano_fab     = req.body.ano_fab;
        veiculo.ano_mod     = req.body.ano_mod;
        veiculo.placa       = req.body.placa;
        veiculo.marca_id    = req.body.marca_id;
        veiculo.modelo_id   = req.body.modelo_id;

        if(req.file.filename == 'undefined'){
            veiculo.thumb   = req.file.filename;
        }

        veiculo = await Veiculos.updateOne( veiculo);
        return res.json(veiculo);
    },
    //apaga o registro
    async destroy(req, res){
        let veiculo = await Veiculos.DestroyOne({_id : req.params_id});
        return res.json(veiculo);
    }
  };