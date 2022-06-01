const cognito = require('./cognito');

module.exports = async function get_user(body){
    const params = {
        AccessToken: body.accessToken
    }
    const response = await cognito.getUser(params)
        .promise()
        .catch(err => err);

    const data = {};
    if(response.UserAttributes) {
        response.UserAttributes.map((attr) => {
            data[attr.Name] = attr.Value;
        })
        data.UserStatus = response.UserStatus; 
        return data;
    }
    return response;
}