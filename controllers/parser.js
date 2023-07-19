const { getWordsArray, parseWordsArray, parseString } = require("../utils");

const parserCtrl = (req, res) => {
  const { text } = req.body
  const message = { message: 'there are no unique letter in text' }
  const wordsArray = getWordsArray(text)
  if (wordsArray.length === 0) {
    return res.status(200).json(message)
  }

  const parseWordsResult = parseWordsArray(wordsArray)
  if (parseWordsResult.length === 0) {
    return res.status(200).json(message)
  }

  const letter = parseString(parseWordsResult)
  if (letter.length === 0) {
    return res.status(200).json(message)
  }

  return res.status(200).json({
    message: `the first unique letter in given text is '${letter}'`
  })
}

module.exports = parserCtrl;
