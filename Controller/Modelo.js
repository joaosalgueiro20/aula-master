//index,show,store,update,destroy
const Modelo = require('../Model/Modelo')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let modelos = await Modelo.find();
    return res.json(modelos); 
  },

  //show traz um registro onde o id do registro é igual ao id passado na url
  async show(req, res){
    //Busca um registro no banco
    let modelo = await Modelo.findOne({_id : req.params.id});
    return res.json(modelo);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome;
    const thumb = req.file.filename;
    modelo = await Modelo.create({nome,thumb});
    return res.json(modelo);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let modelo = await Modelo.findOne({_id : req.params.id});
    //edito os registros
    modelo.nome = req.nome;
    modelo.thumb = req.file.thumb;
    //atualiza os dados no banco
    modelo = await Modelo.update(modelo);
    return res.json(modelo);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let Modelo = await Modelo.deleteOne({_id : req.params.id});
    return res.json(Modelo);
  }
};