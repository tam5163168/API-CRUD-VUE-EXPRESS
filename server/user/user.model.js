const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullName: { type: String, min: 6, max: 255, required: true, },
    email: { type: String, min: 6, max: 255, required: true },
    password: { type: String, min: 4, max: 255, required: true },
    phone: { type: Number, required: true },
    active: { type: Number, enum: [1, 2, 3], default: 1, },
    role: { type: String, enum: ['ACCOUNT', 'ADMIN'], default: 'ACCOUNT' },
    avatar: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});



module.exports = mongoose.model('User', User)