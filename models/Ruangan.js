const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RuanganSchema = new Schema({
    namaRuangan: {
        type: String,
        required: true
    },
    namaRuangan: {
        type: String,
        required: true
    },
    descRuangan: {
        type: String,
        required: true
    },
    capacityRuangan: {
        type: String,
        required: true
    },
    sizeRuangan: {
        type: String,
        required: true
    },
    narhubRuangan: {
        type: String,
        required: true
    },
    jamOperasional: {
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