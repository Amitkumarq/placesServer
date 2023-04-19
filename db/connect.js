const mongoose = require('mongoose')
const connectionString = 'mongodb://0.0.0.0:27017/placeDB'

const connectDB = (url) =>{
return mongoose.connect(connectionString,{useNewUrlParser: true})
.then(() =>console.log('connected to the DB...'))
.catch((err) => console.log(err))

}
module.exports = connectDB;




