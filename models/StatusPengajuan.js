const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StatusPengajuanSchema = new Schema({
    status: {
        type: Number,
    },
    tanggapan: {
        type: String,
    }
})

module.exports = mongoose.model('StatusPengajuan', StatusPengajuanSchema)