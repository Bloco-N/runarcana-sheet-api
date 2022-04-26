const yup = require('yup');

const SignInRequest = yup.object().shape({
  username: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  password: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
})

module.exports = SignInRequest;