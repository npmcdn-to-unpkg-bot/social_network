// Imports
import * as Router from 'koa-router';

let router = new Router();

/**
 * Function that adds routes to a koa app
 * @param app The koa app to add routes to
 */
export function route(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());

    // Index route
    router.get('/', async function(ctx) {
        await ctx.render('index');
    });
}