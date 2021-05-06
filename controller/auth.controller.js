'use strict';
const AuthManager = require('../manager/auth.manager');
const { STATE, DISTRICT, LOGIN, SIGNUP } = require('../constants/schema');
const { DISTRICT_MODEL, STATE_MODEL, CHILD_MODEL, SIGNUP_MODEL} = require('../constants/model')

class AuthController {

    constructor() {
        this._authManager = new AuthManager();
    }

    userSignUp = async (req, res) => {
        try {
            const userSignup = await this._authManager.signup(req.body, require(SIGNUP_MODEL));
            res.status(200).send(userSignup);
        } catch (err) {
            res.status(400).send("Signup Failed!");
        }
    }

    userLogin = async (req, res) => {
        try {
            const userLogin = await this._authManager.login(req.body, LOGIN);
            res.status(200).send(userLogin);
        } catch (err) {
            res.status(400).send("Failed to Login");
        }
    }
    userLogout = async (req, res) => {
        try {
            const userLogout = await this._authManager.logout();
            res.status(200).send(userLogout);
        } catch (err) {
            res.status(400).send("Unable to Logout");
        }
    }
    addState = async (req, res) => {
        try {
            const addState = await this._authManager.addState(req.body, require(STATE_MODEL));
            res.status(200).send(addState);
        } catch (err) {
            res.status(400).send("Failed to Add!");
        }
    }

    getState = async (req, res) => {
        try {
            const getState = await this._authManager.getState(require(STATE_MODEL));
            res.status(200).send(getState);
        } catch (err) {
            res.status(400).send("Failed to Find!");
        }
    }

    addDistrict = async (req, res) => {
        try {
            const addDistrict = await this._authManager.updateService(req.body, require(DISTRICT_MODEL));
            res.status(200).send(addDistrict);
        } catch (err) {
            res.status(400).send("Failed to Add!");
        }
    }

    getDistrict = async (req, res) => {
        try {
            const getDistrict = await this._authManager.deleteService(require(DISTRICT_MODEL));
            res.status(200).send(getDistrict);
        } catch (err) {
            res.status(400).send("Failed to Find!");
        }
    }

    addChild = async (req, res) => {
        try {
            const addChild = await this._authManager.addChild(req.body, require(CHILD_MODEL));
            res.status(200).send(addChild);
        } catch (err){
            res.status(400).send("Failed to Add!");
        }
    }

    getChild = async (req, res) => {
        try {
            const getChild = await this._authManager.getChild(require(CHILD_MODEL));
            res.status(200).send(getChild);
        } catch (err) {
            res.status(400).send("Child Not Found!");
        }
    }
}

module.exports = AuthController;