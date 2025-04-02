const Koa = require('koa');
const cors = require('@koa/cors');
const koaBodyParser = require('koa-bodyparser');
const koa404Handler = require('koa-404-handler');
const errorHandler = require('koa-better-error-handler');
const Router = require('koa-router');
const pokemonRouter = require('./pokemon');
const { environment } = require('../config');
const router = new Router();
const app = new Koa();

app.context.onerror = errorHandler;
app.context.api = true;
app.use(koa404Handler);
app.use(koaBodyParser());
app.use(cors());
app.use(router.routes());

router.use('/pokemons', pokemonRouter.routes(), pokemonRouter.allowedMethods());
router.get('/', (ctx) => ctx.body = 'Hello World! on ' + environment);
module.exports = app;
