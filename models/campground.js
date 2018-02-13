const mongoose = require('mongoose');

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

module.exports = mongoose.model("Campground", campgroundSchema);