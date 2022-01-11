const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true}, 
    id: {type: Number, required: true}, 
    email: {type: String, required: true}, 
    permissions: {type: String, required: true},
    age: {type: Number, required: false}, 
    gender: {type: String, required: false}, 
    personalDescription: {type: String, required: false}
})

module.exports = mongoose.model('User', UserSchema);