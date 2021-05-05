'use strict';
const AuthManager = require('../manager/auth.manager');
const { STATE, DISTRICT, LOGIN, SIGNUP } = require('../constants/schema');
const { DISTRICT_MODEL, STATE_MODEL, CHILD_MODEL, SIGNUP_MODEL} = require('../constants/model')

class AuthController extends Controller {

    constructor() {
        super();
        this._authManager = new AuthManager();
    }

    userSignUp = async (req, res) => {
        try {
            const userSignup = await this._authManager.signUp(req.body, SIGNUP, require(SIGNUP_MODEL));
            this.ok(res, userSignup)
        } catch (err) {
            this.error(res, err);
        }
    }

    userLogin = async (req, res) => {
        try {
            const userLogin = await this._authManager.login(req.body, LOGIN);
            this.ok(res, userLogin)
        } catch (err) {
            this.error(res, err);
        }
    }
    userLogout = async (req, res) => {
        try {
            const userLogout = await this._authManager.logout();
            this.ok(res, userLogout)
        } catch (err) {
            this.error(res, err);
        }
    }
    addState = async (req, res) => {
        try {
            const addState = await this._authManager.addState(req.body, require(STATE_MODEL));
            this.ok(res, addState)
        } catch (err) {
            this.error(res, err);
        }
    }

    getState = async (req, res) => {
        try {
            const getState = await this._authManager.getState(require(STATE_MODEL));
            this.ok(res, getState)
        } catch (err) {
            this.error(res, err);
        }
    }

    addDistrict = async (req, res) => {
        try {
            const updatingService = await this._authManager.updateService(req.body, require(DISTRICT_MODEL));
            this.ok(res, updatingService)
        } catch (err) {
            this.error(res, err);
        }
    }

    getDistrict = async (req, res) => {
        try {
            const deletingService = await this._authManager.deleteService(require(DISTRICT_MODEL));
            this.ok(res, deletingService)
        } catch (err) {
            this.error(res, err);
        }
    }

    addChild = async (req, res) => {
        try {
            const addChild = await this._authManager.addChild(req.body, require(CHILD_MODEL));
            this.ok(res, addChild)
        } catch (err){
            this.error(res, err);
        }
    }

    getChild = async (req, res) => {
        try {
            const getChild = await this._authManager.getChild(require(CHILD_MODEL));
            this.ok(res, getChild)
        } catch (err) {
            this.error(res, err);
        }
    }
}

module.exports = AuthController;