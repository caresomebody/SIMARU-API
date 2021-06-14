const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

//Routes
const postsRoute = require('./routes/api/posts')
const RuanganRoute = require('./routes/api/ruangan')
const AuthRoute = require('./routes/auth')
const PengajuanRoute = require('./routes/api/pengajuan')

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
app.use('/api', AuthRoute)
app.use('/api/pengajuan', PengajuanRoute)
app.use('/api/ruangan', RuanganRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server run at port ${PORT}`))