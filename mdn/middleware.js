const express = require('express');
const app = express();

const a_middleware_function = (req, res, next) => {
  res.send("welcome to my page");
  next();
};

// for all routes and HTTP verbs with using use()
app.use(a_middleware_function);

// for a specific route with using use()
app.use('/someroute', a_middleware_function);

// for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);