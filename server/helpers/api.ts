import {User} from '../models/user';
import * as mongoose from 'mongoose';
import * as jwt from 'jwt-simple';
import * as crypto from 'crypto';

mongoose.connect('mongodb://192.168.0.228:27017/socialnetwork'); // Connecting to mongodb database

export function api(router) {
    router.get('/api/user/:id', async function(ctx) {
        ctx.body = await User.findOne({ _id: ctx.params.id });
    });

    router.get('/api/user/:id/friends', async function(ctx) {
        let user = await User.findOne({ _id: ctx.params.id });
        let friends = [];
        for (let i = 0; i < user.friends.length; i++) {
            var friend = await User.findOne({_id: user.friends[i]});
            friends.push(friend);
        }
        ctx.body = friends;
    });

    router.post('/api/user/addFriend', async function(ctx) {
        let userId = ctx.request.body.id;
        let friendId = ctx.request.body.friend;

        // User.findOne({ _id: userId }, (err, doc) => {
        //     console.log(doc);
        // });
        //
        // User.findOne({ _id: friendId }, (err, doc) => {
        //     doc.friends.push(userId);
        //     doc.save();
        // });

        User.update({ _id: userId }, {
            $push: {
                friends: friendId
            }
        }, (err) => {
            if (err) throw err;
        });

        User.update({ _id: friendId }, {
            $push: {
                friends: userId
            }
        }, (err) => {
            if (err) throw err;
        });

        ctx.body = { succes: true };
    });

    router.post('/api/login', async function(ctx) {
        var email = ctx.request.body.email;
        var password = ctx.request.body.password;
        var hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        var user = await User.findOne({ email: email });

        if (user) {
            if (user.password == hashedPassword) {
                var payload = {
                    iat: new Date().getTime() / 1000,
                    exp: (new Date().getTime() / 1000) + 60 * 60 * 24 * 30,
                    email: email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image,
                    bio: user.biography,
                    friends: user.friends,
                    id: user._id
                };

                ctx.body = { token: jwt.encode(payload, 'secret') };
                return;
            } else {
                ctx.body = { error: 'Invalid Credentials!' };
                return;
            }
        } else {
            ctx.body = { error: 'Invalid Credentials!' };
            return;
        }
    });

    router.post('/api/register', async function(ctx) {
        var firstName = ctx.request.body.firstName;
        var lastName = ctx.request.body.lastName;
        var email = ctx.request.body.email;
        var password = ctx.request.body.password;
        var hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        let user = await User.find({ email: email });

        if (!user.length) {
            var newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                image: '/img/default-avatar.png',
                biography: ''
            });
            await newUser.save();
            ctx.body = { success: true };
            return;
        } else {
            ctx.body = { error: true };
            return;
        }
    });
}