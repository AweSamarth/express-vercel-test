
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect('mongodb+srv://dakshdosi1804:gntMsGSLUH7aTVY4@cluster0.mp00xqd.mongodb.net/', { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    })
}



module.exports = connectDB;