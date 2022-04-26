const yup = require('yup');

const SignUpRequest = yup.object().shape({
  username: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  password: yup
    .string()
    .required()
    .min(8)
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0)
})

module.exports = SignUpRequest;