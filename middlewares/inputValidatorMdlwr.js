const Joi = require('joi')

const schemaTxt = Joi.object()
  .keys({
    text: Joi.string().min(3).max(3000).required()
  })

const textValidator = (req, res, next) => {
  const { error } = schemaTxt.validate(req.body)
  if (error) {
    return res
      .status(400)
      .json({ error: error.details[0].message })
  }
  next()
}

module.exports = textValidator
