import * as mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
});

export var User = mongoose.model('user', UserSchema);