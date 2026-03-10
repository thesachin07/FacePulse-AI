const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONOGO_URI)
    console.log('connected to MONOGO DB')
}

module.exports = connectDB