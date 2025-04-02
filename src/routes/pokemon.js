const logger = require('pino')();
const Router = require('koa-router');
const router = new Router();
const validateSchema = require('../utils/validate-schema');
const pokemonSchema = require('../schemas/pokemon');


let pokemons = [];

router.get('/', async (ctx) => {
  const pokemon = { name: 'Bulbasaur', type: ['grass', 'poison'] };
  await pokemons.push(pokemon);
  ctx.body = pokemons;
});

router.post('/', async (ctx) => {
  let body = ctx.request.body;
  try {
    body = validateSchema(body, pokemonSchema);
  } catch (error) {
    logger.error(error.toString());
    ctx.throw(400, error.toString());
  }
  const { name, type } = body;
  const pokemon = { name, type };
  pokemons.push(pokemon);
  logger.info(
    pokemon
  );
  ctx.status = 201;
  ctx.body = {
    statusCode: 201
  };
});

module.exports = router;
