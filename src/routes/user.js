const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

router.post('/new', controller.newUser);

module.exports = router;