const express = require('express');
const router = express.Router();

// GET /mishimoney/helloworld
router.get('/helloworld', (req, res) => {
    res.json({ message: 'Hola mundo desde GET en Mishi Money!' });
});

// POST /mishimoney/helloworld
router.post('/helloworld', (req, res) => {
    res.json({ message: 'Hola mundo desde POST en Mishi Money!', body: req.body });
});

module.exports = router;