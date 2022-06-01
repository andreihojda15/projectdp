const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider({region: 'us-west-2'});

module.exports = cognito;