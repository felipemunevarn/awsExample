const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true}, 
    id: {type: Number, required: true}, 
    email: {type: String, required: true}, 
    permissions: {type: String, required: true},
    edad: {type: String, required: false}, 
    genero: {type: String, required: false}, 
    descripcionPersonal: {type: String, required: false}
})

module.exports = mongoose.model('User', UserSchema);