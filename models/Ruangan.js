const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RuanganSchema = new Schema({
    namaRuangan: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    deskripsiRuangan: {
        type: String,
        required: true
    },
    kapasitasRuangan: {
        type: String,
        required: true
    },
    fasilitasRuangan: {
        type: String,
        required: true
    },
    ukuranRuangan: {
        type: String,
        required: true
    },
    jamOperasional: {
        type: String,
        required: true
    },
    narahubungRuangan: {
        type: String,
        required: true
    },
    hariBuka: {
        type: String,
        required: true
    },
    hariTutup: {
        type: String,
        required: true
    },
    jamBuka: {
        type: String,
        required: true
    },
    jamTutup: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ruangan', RuanganSchema)