const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    error: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    localtime: {
        type: String,
        required: true
    },
    weather_code: {
        type: Number,
        required: true
    },
    timezone_id: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    weather_icon: {
        type: String,
        required: true
    },
    weather_description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', PostSchema);