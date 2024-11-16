// signup.js
const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
