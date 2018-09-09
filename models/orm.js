const db = require('./1db.js');
const TestSchema = require('./TestSchema.js')
const UserSchema = require("./UserSchema.js");

const TestModel = db.model('test1',TestSchema)
const UserModel = db.model('users',UserSchema)

module.exports = {
    TestModel,
    UserModel
}