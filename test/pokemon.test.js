const request = require('supertest');
const logger = require('pino')();
const { port, environment } = require('../src/config');
const app = require('../src/routes');

let server;
beforeAll(async (done) => {
  server = app.listen(port, () => {
    logger.info(
      `Example app listening on port ${port} running on ${environment} environment!`
    );
    done();
  });

});

afterAll(async () => {
  await server.close();
});

test('Pokemon is created', async () => {
  const response = await request(server).post('/pokemons').send({
    name: 'Pikachu',
    type: ['electric']
  });
  expect(response.status).toEqual(201);
});

test('Pokemon schema requires name field', async () => {
  const response = await request(server).post('/pokemons').send({
    type: ['electric']
  });
  expect(response.status).toEqual(400);
});

test('Pokemon schema requires name type', async () => {
  const response = await request(server).post('/pokemons').send({
    name: 'Pikachu'
  });
  expect(response.status).toEqual(400);
});

test('List Pokemons', async () => {
  const response = await request(server).get('/pokemons');
  expect(response.status).toEqual(200);
  expect(response.body.length > 0).toEqual(true);
});

test('root', async () => {
  const response = await request(server).get('/');
  expect(response.text.includes('Hello')).toEqual(true);
  expect(response.status).toEqual(200);
});
