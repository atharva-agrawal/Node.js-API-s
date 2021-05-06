const express = require('express');
const router = express.Router();
const AuthenticateJWT = require("../middleware");
const jwt_token = new AuthenticateJWT().authenticateJWT;
const AuthController = require("../controller/auth.controller");

//api's

//User Signup
router.post('/signup', new AuthController().userSignUp);
//User Login
router.post('/login', new AuthController().userLogin);
//User Logout
router.get('/logout', jwt_token, new AuthController().userLogin);
//Get State
router.get('/getState', jwt_token, new AuthController().getState);
//Post State
router.post('/postState', jwt_token, new AuthController().addState);
//Get District
router.get('/getDistrict', jwt_token, new AuthController().getDistrict);
//Post District
router.post('/postDistrict', jwt_token, new AuthController().addDistrict);
//Get Child 
router.get('/getChild', jwt_token, new AuthController().getChild);
//Post Child
router.post('/postChild', jwt_token, new AuthController().addChild);

module.exports = router;