const cognito = require('./cognito');

// module.exports = async function register(body) {

//     console.log(body);

//     const {
//         email,
//         password,
//         phone_number,
//         picture,
//         family_name,
//         given_name
//     } = body;

//     const params = {
//         UserPoolId: 'us-west-2_YuiiZlXKa',
//         Username: email,
//         UserAttributes: [
//             { Name: 'email', Value: email },
//             // { Name: 'email_verified', Value: 'true' },
//             { Name: 'phone_number', Value: phone_number },
//             { Name: 'picture', Value: picture },
//             { Name: 'family_name', Value: family_name },
//             { Name: 'given_name', Value: given_name },
//         ],
//         // MessageAction: 'SUPPRESS'
//       }
//     const response = await cognito.adminCreateUser(params).promise()
//     .catch(err => {return err;});

//     if (response.User) {
//         const paramsForSetPass = {
//           Password: password,
//           UserPoolId: 'us-west-2_YuiiZlXKa',
//           Username: email,
//           Permanent: true
//         };
//         await cognito.adminSetUserPassword(paramsForSetPass)
//             .promise()
//             .catch(err => {return err;});
//       }

//     return response;

// }

module.exports = async function register(body) {
    console.log(body);

    const {
        email,
        password,
        phone_number,
        picture,
        family_name,
        given_name
    } = body;

    const params = {
        ClientId: 'q6qgk0v1e05d2jkjmcs67m979',
        Username: email,
        Password: password,
        UserAttributes: [
            { Name: 'email', Value: email },
            { Name: 'phone_number', Value: phone_number },
            { Name: 'picture', Value: picture },
            { Name: 'family_name', Value: family_name },
            { Name: 'given_name', Value: given_name },
        ],
      }

    const response = await cognito.signUp(params)
        .promise()
        .catch(err => {return err;});

    return response;

}