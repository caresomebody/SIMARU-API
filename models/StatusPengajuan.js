const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StatusPengajuanSchema = new Schema({
    status: {
        type: Boolean,
    },
    tanggapan: {
        type: String,
    }
})

module.exports = mongoose.model('StatusPengajuan', StatusPengajuanSchema)