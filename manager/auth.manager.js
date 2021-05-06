var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const SCHEMA = require("../constants/schema");
const randomize = require("randomatic");
const MODEL = require("../constants/model");
const AuthRepository = require("../repository/auth.repository");

class AuthManager{
    constructor() {
      this._authRepository = new AuthRepository();
    }

    async signup(bodyParams, model){
      var hashedPassword = bcrypt.hashSync(bodyParams.password, 8);
      bodyParams.password = hashedPassword;
      bodyParams.user_id = randomize("Aa0", 5);
      const newUser = await this._authRepository.saveOne(model, bodyParams);
      return newUser;
    }

    async login(bodyParams, model){
      const { username, password: pwd } = bodyParams;
      const checkCredentials = await this._authRepository.findData(model, username, pwd);
      const { userName, password } = checkCredentials;
      const checkPassword = await bcrypt.compare(pwd, password);
      if(bodyParams.username == userName && checkPassword){
        return 1;
      }
    }

    async logout(bodyParams, model){
    }

    async addState(bodyParams, model){
      bodyParams.state_id = randomize("Aa0", 4);
      const stateAdded = await this._authRepository.saveOne(model, bodyParams);
      return stateAdded;
    }

    async addDistrcit(bodyParams, model){
      bodyParams.district_id = randomize("Aa0", 3);
      const districtAdded = await this._authRepository.saveOne(model, bodyParams);
      return districtAdded;
    }

    async addChild(bodyParams, model){
      const childAdded = await this._authRepository.saveOne(model, bodyParams);
      return childAdded;
    }

    async getState(bodyParams, model){
      try{
        const id_state = bodyParams.state_id;
        const State = await this._authRepository.findState(
          id_state,
          model
        );
        return State;
      }
      catch (err){
        throw err;
      }
    }

    async getDistrict(bodyParams, model){
      try{
        const id_state = bodyParams.state_id;
        const id_district = bodyParams.district_id;
        const District = await this._authRepository.findDistrict(
          id_state,
          id_district,
          model
        );
        return District;
      }
      catch (err){
        throw err;
      }
    }

    async getChild(model){
      try{
        const Child = await this._authRepository.findChild(
          model
        );
        return Child;
      }
      catch (err){
        throw err;
      }
    }
}

module.exports = AuthManager;