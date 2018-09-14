const db = require('./1db.js');
const TestSchema = require('./TestSchema.js')
const UserSchema = require("./UserSchema.js");
const FatherSchema = require("./fatherModel.js");

const TestModel = db.model('test1',TestSchema)
const UserModel = db.model('users',UserSchema)
const FatherModel = db.model('father',FatherSchema);


module.exports = {
    TestModel,
    UserModel,
    FatherModel
}