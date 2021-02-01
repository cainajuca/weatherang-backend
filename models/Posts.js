const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// change it to weather model !!
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);