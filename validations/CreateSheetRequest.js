const yup = require('yup');

const CreateSheetRequest = yup.object().shape({
  char_name: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  origin: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  region: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  past: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  alignment: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
})

module.exports = CreateSheetRequest;