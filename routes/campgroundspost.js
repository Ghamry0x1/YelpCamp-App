const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    let name = req.body.name;
    let image = req.body.image;
    let newCamp = {name: name, image:image};
    campgrounds.push(newCamp);
    res.redirect('/campgrounds');
    console.log(campgrounds.length);
});

module.exports = router;
