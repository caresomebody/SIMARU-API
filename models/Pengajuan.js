const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PengajuanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ruangan: {
        type: Schema.Types.ObjectId,
        ref: 'Ruangan'
    },
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