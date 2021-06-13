const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

//Routes
const postsRoute = require('./routes/api/posts')

const app = express()

// BodyParser Middleware
app.use(express.json())

//connect to mongodb server
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err))

// user routes
app.use('/api/posts', postsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server run at port ${PORT}`))