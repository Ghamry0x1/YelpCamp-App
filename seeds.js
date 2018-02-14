const mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment');

let data = [
    {
        name: "Mountain's rest",
        image: "https://images.pexels.com/photos/558454/pexels-photo-558454.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.pexels.com/photos/216676/pexels-photo-216676.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "blah blah blah"
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                        });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;