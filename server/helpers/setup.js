"use strict";
// Imports
var Koa = require('koa');
var serve = require('koa-static');
var views = require('koa-views');
var http = require('http');
/**
 * Function that creates a koa app and returns it.
 */
function setupApp() {
    var app = new Koa();
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
    var server = http.Server(app.callback());
    return server;
}
exports.createHttpServer = createHttpServer;
//# sourceMappingURL=setup.js.map