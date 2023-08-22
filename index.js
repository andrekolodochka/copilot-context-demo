const express = require('express');
// Import math utils
const math_utils_add = require('./math-utils/math_utils_add');
const math_utils_pow = require('./math-utils/math_utils_pow');

// Import swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swagger-config');
const app = express();

app.use(express.json());

// Swagger setup
const specs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// REQUEST HANDLERS

// Endpoint that adds two numbers
app.get('/add', (req, res) => {
  res.send(math_utils_add(req.query.a, req.query.b).toString());
});

// Endpoint that raises one number to the power of another
app.get('/pow', (req, res) => {
  res.send(math_utils_pow(req.query.a, req.query.b).toString());
});
