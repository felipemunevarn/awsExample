const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://felipemunevar:felipe123@cluster0.okb2u.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-g28ksx-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')

.then(db => console.log('DB is connected'))
.catch(err => console.error(err))