"use strict";
var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    image: String,
    biography: String
});
exports.User = mongoose.model('user', UserSchema);
//# sourceMappingURL=user.js.map