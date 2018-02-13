const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    Campground.find({}, (err, allCampgrounds) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render('campgrounds', {
                title: 'YelpCamp',
                campgrounds: allCampgrounds
            });
        }
    });
});

module.exports = router;
