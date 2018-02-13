const express = require('express');
const router = express.Router();

/* GET showcampground page. */
router.get('/:id', function(req, res, next) {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render('showcampground', {
                campground: foundCampground,
                title: 'YelpCamp' });
        }
    });
});

module.exports = router;
