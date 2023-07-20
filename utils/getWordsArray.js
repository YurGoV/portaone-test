const getWordsArray = (text) => {
  const wordsArray = text.split(/[^\p{L}'`-]+/u)
    .filter(word => word !== '')

  return (wordsArray)
}

module.exports = getWordsArray;
