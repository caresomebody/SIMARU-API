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

const DaftarPengajuanSchema = new Schema({
    pengajuan: {
        type: Schema.Types.ObjectId,
        ref: 'Pengajuan'
    },
    statusPengajuan: {
        type: Schema.Types.ObjectId,
        ref: 'StatusPengajuan'
    },
    judulPengajuan: {
        type: String,
    },
    tanggalUpload: {
        type: String,
    },
    tanggapan: {
        type: String,
    },
})

module.exports = mongoose.model('DaftarPengajuan', DaftarPengajuanSchema)