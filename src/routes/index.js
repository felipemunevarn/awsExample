const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send("Hello, World MF!");
});

router.get('/about', (req, res) => {
    res.status(200).send("About");
});

module.exports = router;