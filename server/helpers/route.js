"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
// Imports
var Router = require('koa-router');
var router = new Router();
/**
 * Function that adds routes to a koa app
 * @param app The koa app to add routes to
 */
function route(app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
    // Index route
    router.get('/', function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ctx.render('index');
        });
    });
    router.get(/.*/, function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ctx.render('index');
        });
    });
}
exports.route = route;
//# sourceMappingURL=route.js.map