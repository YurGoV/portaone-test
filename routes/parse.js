const express = require('express');
const { parser} = require('../controllers');
const textValidator = require('../middlewares/inputValidatorMdlwr');

const router = express.Router();

router.post('/', textValidator, parser);

module.exports = router;
