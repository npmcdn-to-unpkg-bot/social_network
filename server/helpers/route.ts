// Imports
import * as Router from 'koa-router';
import {api} from "./api";
import * as bodyParser from 'koa-bodyparser';

let router = new Router();

/**
 * Function that adds routes to a koa app
 * @param app The koa app to add routes to
 */
export function route(app) {
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    // Index route
    router.get('/', async function(ctx) {
        await ctx.render('index');
    });

    api(router);

    router.get(/.*/, async function(ctx) {
        await ctx.render('index');
    })
}