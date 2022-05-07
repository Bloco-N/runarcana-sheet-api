const yup = require('yup');

const CreateSheetRequest = yup.object().shape({
  name: yup
    .string()
    .required()
    .test('not-blank', "${path} can't be blank", value => value.trim().length > 0),
  origin_id: yup
    .number()
    .required(),
  region_id: yup
    .number()
    .required(),
  past_id: yup
    .number()
    .required(),
  alignment_id: yup
    .number()
    .required(),
})

module.exports = CreateSheetRequest;