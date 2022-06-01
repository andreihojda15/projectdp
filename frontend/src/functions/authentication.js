/* eslint-disable camelcase */
import { Auth } from 'aws-amplify';
import handleChange from './handleChange';

export async function signUp(userInput, setUserInput) {
  try {
    const {
      email, firstName, lastName, phone_number, password, picture,
    } = userInput;
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        family_name: lastName,
        given_name: firstName,
        phone_number,
        picture,
      },
    }).then();
    console.log(user, 'success');
  } catch (error) {
    console.log(error);
    handleChange(setUserInput, 'errors', error);
  }
}

export async function confirmSignUp(userInput, setUserInput) {
  try {
    const {
      email, token,
    } = userInput;
    await Auth.confirmSignUp(email, token);
  } catch (error) {
    handleChange(setUserInput, 'errors', error);
  }
}
