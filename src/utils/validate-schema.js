function validateSchema(body, schema) {
  const { value, error } = schema.validate(body);
  if (error) {
    throw error;
  }
  return value;
}

module.exports = validateSchema;
