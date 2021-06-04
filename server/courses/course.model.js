const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 255, required: true },
    image: { type: String, maxLength: 255, required: true },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Course', Course)
