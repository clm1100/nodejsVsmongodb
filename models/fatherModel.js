var mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;
const childSchema = require("./childSchema.js")
const fatherSchema = Schema({
    name:{type:String},
    age:{type:Number},
    child:[childSchema]
})

module.exports = fatherSchema;