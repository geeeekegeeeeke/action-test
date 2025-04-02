const { port, environment } = require('./config');
const logger = require('pino')();

const app = require('./routes');

const server = app.listen(port, () => {
  logger.info(
    `Example app listening on port ${port} running on ${environment} environment!`
  );
});

module.exports = server;
