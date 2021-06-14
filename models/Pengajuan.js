const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PengajuanSchema = new Schema({
    dokumen: {
        type: String,
        required: true
    },
    deskripsiPengajuan: {
        type: String,
        required: true
    },
    tanggalMulai: {
        type: String,
        required: true
    },
    tanggalSelesai: {
        type: String,
        required: true
    },
    waktuMulai: {
        type: String,
        required: true
    },
    waktuSelesai: {
        type: String,
        required: true
    },
    namaAdmin: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Pengajuan', PengajuanSchema)