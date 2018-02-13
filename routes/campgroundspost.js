const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newCamp = {name: name, image:image, description:description};
    Campground.create(newCamp, (err, newlyCreatedCamp) => {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/campgrounds');
        }
    });
});

module.exports = router;