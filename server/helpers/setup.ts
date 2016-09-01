// Imports
import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import * as http from 'http';

/**
 * Function that creates a koa app and returns it.
 */
export function setupApp(): Koa {
    let app = new Koa();
    app.use(views('../client/views', { extension: 'pug' }));
    app.use(serve('../client/node_modules'));
    app.use(serve('../client/public'));

    return app;
}

/**
 * Function that converts a koa app to an http server and returns the result
 * (this is because later I want to use socket.io which only works on an http server)
 * @param app The koa app that will be converted.
 */
export function createHttpServer(app) {
    let server = http.Server(app.callback());
    return server;
}