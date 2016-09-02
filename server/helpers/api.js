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
var crypto = require('crypto');
mongoose.connect('mongodb://192.168.0.228:27017/socialnetwork'); // Connecting to mongodb database
function api(router) {
    router.post('/api/login', function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            var email = ctx.request.body.email;
            var password = ctx.request.body.password;
            var hashedPassword = crypto.createHash('md5').update(password).digest('hex');
            var user = yield user_1.User.findOne({ email: email });
            if (user) {
                if (user.password == hashedPassword) {
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
                    return;
                }
            }
            else {
                ctx.body = { error: 'Invalid Credentials!' };
                return;
            }
        });
    });
    router.post('/api/register', function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            var firstName = ctx.request.body.firstName;
            var lastName = ctx.request.body.lastName;
            var email = ctx.request.body.email;
            var password = ctx.request.body.password;
            var hashedPassword = crypto.createHash('md5').update(password).digest('hex');
            var user = yield user_1.User.find({ email: email });
            if (!user.length) {
                var newUser = new user_1.User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword
                });
                yield newUser.save();
                ctx.body = { success: true };
                return;
            }
            else {
                ctx.body = { error: true };
                return;
            }
        });
    });
}
exports.api = api;
//# sourceMappingURL=api.js.map