const app = require("./app");

const PORT = 3011;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running up on port ${PORT}
  api available at http://localhost:${PORT}/api/`);

});
