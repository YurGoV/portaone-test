const getWordsArray = (text) => {
  const wordsArray = text.split(/[^A-Za-zА-Яа-я-]+/)
    .filter(word => word !== '')

  return (wordsArray)
}

module.exports = getWordsArray;
