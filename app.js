const express = require('express')

const app = express()

//ROUTES
app.get('/', (req, res) =>{
    res.send('We are on home')
})

//Listening to server
app.listen(3000)
