const serverless = require("serverless-http");
const express = require("express");
const app = express();

const groupRoutes = require('./routes/group/index');
const userRoutes = require('./routes/user/index');

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.use('/group', groupRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
