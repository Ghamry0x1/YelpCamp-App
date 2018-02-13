const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp_camp', function(err) {
    if (err) {
        console.log('DB unable to connect to the server. Error:', err);
    } else {
        console.log('DB connected successfully');
    }
});