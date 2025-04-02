const config = require('../src/config');

test('Config contains the required env vars', () => {
  expect(config).toHaveProperty('environment');
  expect(config).toHaveProperty('port');
});