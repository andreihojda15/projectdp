/* eslint-disable no-unused-vars */
const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// functions
const register = require('./cognito/register');
const confirmSignUp = require('./cognito/confirm-signup');
const getUser = require('./cognito/get-user');
const login = require('./cognito/login');

// middleware
app.use(bodyParser.json());
app.use(cors());

app.post("/login", async (req, res, next) => {
    const response = await login(req.body);
    return res.status(200).json(response);
});

app.post("/register", async (req, res, next) => {
    const response = await register(req.body);
    return res.status(200).json(response);
  });

app.post("/confirm-sign-up", async (req, res, next) => {
    const response = await confirmSignUp(req.body);
    return res.status(200).json(response);
});

app.post("/get-user", async (req, res, next) => {
    const response = await getUser(req.body);
    return res.status(200).json(response);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.listen(3007, () => {
    console.log(`Example app listening on port ${3007}`)
  })

module.exports.handler = serverless(app);
