const Materia = require('../Model/Materia');

module.exports = {
    async index(req, res){
        //busca todos os registros
        let materia = await Materia.find() ;
        return res.json(materia);
    },

    async show(req, res){
        let materia = await Materia.findOne({ _id : req.params.id });
        return res.json( materia) ;
    },

    async store(req, res){
        const materia = req.body.materia;
        let materias = await Materia.findOne({materia});
        if(!materias){
            materias = await Materia.create({materia});
        }
        return res.json(materias);
    },

    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let materias = await Materia.findOne({ _id : req.params.id});
        
        materias.materia = req.body.materia;
        // //edito os registro 
        materias = await Materia.update(materias);
        return res.json(materias);
    }, 

    async destroy(req, res){
        let materia = await Materia.deleteOne({_id : req.params_id});
        return res.json(materia);
    }
  };