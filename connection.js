require('dotenv').config();

const mongoose = require("mongoose");

const connectionStr = "mongodb+srv://adarsh:adarsh0901@cluster0.tlykagg.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(connectionStr, { useNewUrlParser: true })
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))


mongoose.connection.on('error', err => {
    console.log(err);
})