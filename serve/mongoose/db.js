module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect("mongodb://localhost:27017/vue-node",
        { useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false},
    );
}