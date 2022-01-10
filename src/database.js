const mongoose = require('mongoose');

const URI = 'mongodb+srv://felipemunevar:felipe123@cluster0.okb2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// 'mongodb+srv://felipemunevar:felipe123@cluster0.okb2u.mongodb.net/users.users?authSource=admin&replicaSet=atlas-g28ksx-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))