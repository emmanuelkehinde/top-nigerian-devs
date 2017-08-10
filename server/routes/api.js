const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.github.com';


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/devs/:language', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    const lang=req.params.language;

    axios.get(`${API}/search/users?q=type:user+location:lagos+language:${lang}`)
        .then(devs => {
            res.status(200).json(devs.data.items);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});


module.exports = router;