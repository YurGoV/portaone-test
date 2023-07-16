const express = require('express');
const { parser} = require('../controllers');
// const appointmentMiddleware = require('../middlewares/appointmentsMiddlewares');

const router = express.Router();

router.post('/', parser);

module.exports = router;
