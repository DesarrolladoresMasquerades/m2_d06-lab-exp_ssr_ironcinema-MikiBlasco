const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB =>{
        //console.log(`these are the movies that has been FOUND for moviesFromDB ----> `, moviesFromDB)
        res.render('movies/movies-list.hbs', {movies:moviesFromDB})
    })
    .catch(error => console.log('there is an error finding moviesFromDB and rendereing them ', error))
});


router.get('/movies/:id/details', (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
    .then(movieTarget => {
        console.log('this is the movie the user wants to get rendered the details ---> ', movieTarget)
        res.render('movies/movie-details.hbs', {movieTarget})
    })
    .catch(error => console.loog('there is an error trying to find and render the targeted movie ', error))
});

module.exports = router;
