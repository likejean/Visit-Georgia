const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send({type:'GET'});
});

router.post('/home', (req, res) => {
    res.send({type:'POST'});
});

module.exports = router;