const parser = (req, res) => {
  console.log('test')

  return res.status(200).json({
    message: "test message"
  });
}

module.exports = parser;
