var mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;
const childSchema = Schema({
    name:{type:String},
    sex:{type:String}
})

module.exports = childSchema;