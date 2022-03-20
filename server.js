// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.json())
app.use(cors())

// places
app.use('/books', require('./controllers/books'))


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the books! API')
  })
  


// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })


