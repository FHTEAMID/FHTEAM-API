__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

/*router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})*/

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            Apikey : 'BBB'
    }
    res.json(config)
})

module.exports = router
