const cognito = require('./cognito');

module.exports = async function login(body) {
    const {
        email,
        password
      } = body;
      
    const params = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: 'q6qgk0v1e05d2jkjmcs67m979',
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    }
    const response = await cognito.initiateAuth(params).promise();
    return response;
}