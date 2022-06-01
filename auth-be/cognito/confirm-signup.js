const cognito = require('./cognito');

module.exports = async function confirmSignUp(body) {

    console.log(body);
    const { code, email } = body;

    const params = {
        ClientId: 'q6qgk0v1e05d2jkjmcs67m979',
        ConfirmationCode: code,
        Username: email
     };

    const response = await cognito.confirmSignUp(params).promise()
        .catch(err => err);
    return response;
}