"use strict";
// Imports
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const http = require('http');
/**
 * Function that creates a koa app and returns it.
 */
function setupApp() {
    let app = new Koa();
    app.use(views('../client/views', { extension: 'pug' }));
    app.use(serve('../client/public'));
    app.use(serve('../client/node_modules'));
    return app;
}
exports.setupApp = setupApp;
/**
 * Function that converts a koa app to an http server and returns the result
 * (this is because later I want to use socket.io which only works on an http server)
 * @param app The koa app that will be converted.
 */
function createHttpServer(app) {
    let server = http.Server(app.callback());
    return server;
}
exports.createHttpServer = createHttpServer;
//# sourceMappingURL=setup.js.map