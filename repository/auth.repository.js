const model = require("../constants/model");

class AuthRepository{
    async saveOne(model, bodyParams) {
        try {
          let newCreated = new model(bodyParams);
          const q = await newCreated.save();
          return q;
        } catch (err) {
          throw err;
        }
      }
    
    async findState(id, model){
        try{
          const q = await model.find({id}).lean().exec()
          return q;
        }catch(err){
          throw err;
        }
      }

    async findDistrict(id_1, id_2, model){
        try{
          const q = await model.find({id_1, id_2}).lean().exec()
          return q;
        }catch(err){
          throw err;
        }
      }

    async findChild(model){
        try{
          const q = await model.find({}).lean().exec()
          return q;
        }catch(err){
          throw err;
        }
      }
}

module.exports = AuthRepository;