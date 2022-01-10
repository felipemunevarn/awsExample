const { Router } = require('express');
const router = Router();

router.get('/users/signin', (req, res) => {
    res.status(200).send("Signin");
});

router.get('/users/signup', (req, res) => {
    res.status(200).send("Signup");
});

module.exports = router;