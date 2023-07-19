require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swaggerApi.json');

const { NODE_ENV } = process.env;

const { parserRoute } = require('./routes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Methods',
    'POST'
  );
  next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/parser', parserRoute);

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'route not found. Go to the /api-docs route please',
  });
});

/**
 * * Global error handler (middleware)
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {

  if (NODE_ENV === 'development') {
    return res.status(err.status).json({ error: err.message, stack: err.stack });
  } 
  return res.status(err.status).json({ error: err.message });
    
});

module.exports = app;
