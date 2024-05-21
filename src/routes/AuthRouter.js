const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

router.post('/refresh',authController.refreshaccess_token)

module.exports = router