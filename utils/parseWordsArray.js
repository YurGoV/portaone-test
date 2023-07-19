const parseString = require("./parseString")

const parseWordsArray = (wordsArray) => {

  let res = ''

  wordsArray.forEach(word => {
    // console.log(word)
    const letter = parseString(word)
    if (letter) {
      res += letter
    }

  })
  return res
}

module.exports = parseWordsArray;
