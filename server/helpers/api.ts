import {User} from '../models/user';
import * as mongoose from 'mongoose';
import * as jwt from 'jwt-simple';
import * as crypto from 'crypto';

mongoose.connect('mongodb://192.168.0.228:27017/socialnetwork'); // Connecting to mongodb database

export function api(router) {
    router.post('/api/login', async function(ctx) {
        var email = ctx.request.body.email;
        var password = ctx.request.body.password;

        var user = await User.findOne({ email: email });

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
            } else {
                ctx.body = { error: 'Invalid Credentials!' };
                ctx.status = 400;
                return;
            }
        }
    });
}