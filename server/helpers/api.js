"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var user_1 = require('../models/user');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
mongoose.connect('mongodb://192.168.0.228:27017/socialnetwork'); // Connecting to mongodb database
function api(router) {
    router.post('/api/login', function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            var email = ctx.request.body.email;
            var password = ctx.request.body.password;
            var user = yield user_1.User.findOne({ email: email });
            if (user) {
                if (user.password == password) {
                    var payload = {
                        iat: new Date().getTime() / 1000,
                        exp: (new Date().getTime() / 1000) + 60 * 60 * 24 * 30,
                        email: email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        id: user._id
                    };
                    ctx.body = { token: jwt.encode(payload, 'secret') };
                    return;
                }
                else {
                    ctx.body = { error: 'Invalid Credentials!' };
                    ctx.status = 400;
                    return;
                }
            }
        });
    });
}
exports.api = api;
//# sourceMappingURL=api.js.map