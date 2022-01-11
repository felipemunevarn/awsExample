const { Router } = require('express');
const { find } = require('../models/user');
const router = Router();
const User = require('../models/user');

router.get('/signin', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.post('/signin', async (req, res) => {
    const { name, email, age, gender, personalDescription } = req.body;
    const usuario = await User.find().sort({id: -1}).limit(1);
    const id = usuario.length ? usuario[0].id + 1 : 1;
    const permissions = 'user';
    const user = new User({name, id, email, permissions, age, gender, personalDescription });
    await user.save();
    res.status(200).json({status: 'user saved'});
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
})

router.put('/:id', async (req, res) =>{
    const { name, id, email, permissions } = req.body;
    const updateUser = {name, id, email, permissions};
    await User.findByIdAndUpdate(req.params.id, updateUser);
    res.status(200).json({status: 'user updated'});
})

router.delete('/:id', async (req, res) =>{
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({status: 'user deleted'});
})

router.get('/users/signup', (req, res) => {
    res.status(200).send("Signup");
});

module.exports = router;