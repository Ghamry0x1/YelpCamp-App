const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('campgrounds', {
        title: 'YelpCamp',
        campgrounds: campgrounds
    })
});

module.exports = router;
