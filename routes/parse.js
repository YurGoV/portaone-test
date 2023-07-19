const express = require('express');
const { parserCtrl} = require('../controllers');
const textValidator = require('../middlewares/inputValidatorMdlwr');

const router = express.Router();

router.post('/', textValidator, parserCtrl);

module.exports = router;
