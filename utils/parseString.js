const parseString = (string) => {

  let res = ''

  for (const letter of string) {
    if (string.indexOf(letter) === string.lastIndexOf(letter)) {
      res += letter

      break
    }
  }

  return res
}

module.exports = parseString;
