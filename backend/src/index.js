const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
const app = express();
// const client = require('./db/index');

const groupRoutes = require('./routes/group/index');
const userRoutes = require('./routes/user/index');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'))

app.use('/group', groupRoutes);
app.use('/user', userRoutes);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.use((req, res, next) => {
    return res.status(404).json({
      error: "Not Found",
    });
  });

// client.connect(() => {
//     console.log('Connected to DB');
// });

module.exports = app;