const Pengajuan = require('../models/Pengajuan')
const jwt_decode = require("jwt-decode")

//Show list pengajuan
const index = (req, res, next) => {
    Pengajuan.find().populate("ruangan", {namaRuangan: 1}).populate("user", {nama: 1})
    .then( order => {
        res.status(200).json({
            order
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'An error occurred'
        })
    })
}

const show = (req, res, next) => {
    let pengajuanID = req.params.id
    Pengajuan.findById(pengajuanID).populate("ruangan", {namaRuangan: 1}).populate("user", {nama: 1})
    .then(order => {
        res.status(200).json({
            order
        })
    })
    .catch(error => {
        res.status(400).json({message: 'An error occurred'})
    })
}

const store = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt_decode(token)

    let pengajuan = new Pengajuan({
        user: decoded.id,
        ruangan: req.body.ruanganID,
        dokumen: req.body.dokumen,
        deskripsiPengajuan: req.body.deskripsiPengajuan,
        tanggalMulai: req.body.tanggalMulai,
        tanggalSelesai: req.body.tanggalSelesai,
        waktuMulai: req.body.waktuMulai,
        waktuSelesai: req.body.waktuSelesai,
        namaAdmin: req.body.namaAdmin,
    })
    if (req.file){
        pengajuan.dokumen = req
    }
    pengajuan.save()
    .then(order => {
        res.status(200).json({
            message: 'Pengajuan Berhasil!',
            pengajuan
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'Pengajuan Gagal!'
        })
    })
}


//update pengajuan 
const update = (req, res, next) => {
    let pengajuanID = req.params.id
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt_decode(token)

    let updatedData = { 
        status: req.body.status,
        tanggapan: req.body.tanggapan
    }

    Pengajuan.findByIdAndUpdate(pengajuanID, {$set: updatedData})
    .then(() => {
        res.status(200).json({
            message: 'Pengajuan berhasil diupdate!'
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'Pengajuan gagal diupdate!'
        })
    })
}

//delete pengajuan
const destroy = (req, res, next) => {
    let pengajuanID = req.params.id
    Pengajuan.findByIdAndDelete(pengajuanID)
    .then(() => {
        res.status(200).json({
            message: 'Pengajuan berhasil didelete'
        })
    })
    .catch(error => {
        res.status(400).json({ 
            message: 'Error occurred'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}