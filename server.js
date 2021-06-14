const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

//Routes
const postsRoute = require('./routes/api/posts')
const RuanganRoute = require('./routes/api/ruangan')
const AuthRoute = require('./routes/auth')
const PengajuanRoute = require('./routes/api/pengajuan')
var cors = require('cors')

const app = express()



// BodyParser Middleware
app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
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