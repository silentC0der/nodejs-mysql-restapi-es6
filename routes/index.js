const express = require('express');
const router = express.Router();
const path = require('path');

// *********************** routes user API **********************************//
var userObj = require('../controllers/user.js');
router.get('/user', userObj.getUserList); //version




module.exports = router;