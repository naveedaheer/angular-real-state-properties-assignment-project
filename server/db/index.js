const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://osama:osama@cluster0-6ude4.mongodb.net/properties_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Database connected")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
const db = mongoose.connection

module.exports = db