"use strict";
const mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    image: String,
    biography: String,
    friends: [],
    notifications: []
});
exports.User = mongoose.model('user', UserSchema);
//# sourceMappingURL=user.js.map