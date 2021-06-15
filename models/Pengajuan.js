const mongoose = require('mongoose')
const Schema = mongoose.Schema

var date = new Date();
date.toDateString();

const PengajuanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ruangan: {
        type: Schema.Types.ObjectId,
        ref: 'Ruangan',
        nama: String
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
    },
    tglUpload: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        enum: [0,1,2],
        default: 1
        //O tolak, 1 waiting, 2 terima
    },
    tanggapan: {
        type: String,
    }
})

module.exports = mongoose.model('Pengajuan', PengajuanSchema)