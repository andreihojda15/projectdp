/* eslint-disable camelcase */
import handleChange from './handleChange';

function passwordValidation(password1, password2) {
  if (password1 !== password2) {
    return { error: 'Passwords do not match' };
  }
  if (password1.length >= 100) {
    return { error: 'Password is too long' };
  }
  if (password1.length < 8) {
    return { error: 'Password is too short' };
  }
  return { success: true };
}

function emailValidation(email) {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const matches = email.match(pattern);
  if (!matches) {
    return { error: 'Email is invalid' };
  }
  return { success: true };
}

function nameValidation(name) {
  if (/[^a-zA-Z]/.test(name)) {
    return { error: 'Invalid name' };
  }
  return { success: true };
}

function phoneNumberValidation(phone) {
  // eslint-disable-next-line no-useless-escape
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!re.test(phone)) {
    return { error: 'Invalid phone number' };
  }
  return { success: true };
}

// // eslint-disable-next-line no-useless-escape
// const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
// console.log(re.test('0733896986'));

export function registerValidation(userInput, setUserInput) {
  const {
    firstName, lastName, phone_number, email, password, confirmPassword,
  } = userInput;

  let error = '';

  const checkFirstName = nameValidation(firstName);
  const checkLastName = nameValidation(lastName);
  const checkEmail = emailValidation(email);
  const checkPassword = passwordValidation(password, confirmPassword);
  const checkPhoneNumber = phoneNumberValidation(phone_number);
  if (checkFirstName.error) {
    error = checkFirstName.error;
  }
  if (checkLastName.error) {
    error = checkLastName.error;
  }
  if (checkPhoneNumber.error) {
    error = checkPhoneNumber.error;
  }
  if (checkEmail.error) {
    error = checkEmail.error;
  }
  if (checkPassword.error) {
    error = checkPassword.error;
  }

  if (error) {
    handleChange(setUserInput, 'errors', error);
    return { error };
  }
  return { success: true };
}

export function loginValidation(userInput, setUserInput) {
  const {
    email, password,
  } = userInput;

  let error = '';
  const checkEmail = emailValidation(email);
  const checkPassword = passwordValidation(password, password);
  if (checkEmail.error) {
    error = checkEmail.error;
  }
  if (checkPassword.error) {
    error = checkPassword.error;
  }

  if (error) {
    handleChange(setUserInput, 'errors', error);
    return { error };
  }
  return { success: true };
}

export function changePassValidation(userInput, setUserInput) {
  const {
    password, confirmPassword,
  } = userInput;

  let error = '';
  const checkPassword = passwordValidation(password, confirmPassword);
  if (checkPassword.error) {
    error = checkPassword.error;
  }

  if (error) {
    handleChange(setUserInput, 'errors', error);
    return { error };
  }
  return { success: true };
}
