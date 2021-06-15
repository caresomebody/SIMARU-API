const Pengajuan = require('../models/Pengajuan')
const jwt_decode = require("jwt-decode")

//Show list pengajuan
const index = (req, res, next) => {
    Pengajuan.find()
    .then( response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred'
        })
    })
}

const show = (req, res, next) => {
    let pengajuanID = req.body.pengajuanID
    Pengajuan.findById(pengajuanID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({message: 'An error occurred'})
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
        pengajuan.dokumen = req.file.path
    }
    pengajuan.save()
    .then(response => {
        res.json({
            message: 'Pengajuan Berhasil!',
            pengajuan
        })
    })
    .catch(error => {
        res.json({
            message: 'Pengajuan Gagal!'
        })
    })
}


//update pengajuan 
const update = (req, res, next) => {
    let pengajuanID = req.body.pengajuanID
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt_decode(token)

    let updatedData = { 
        user: decoded.id,
        ruangan: req.body.ruanganID,
        dokumen: req.body.dokumen,
        deskripsiPengajuan: req.body.deskripsiPengajuan,
        tanggalMulai: req.body.tanggalMulai,
        tanggalSelesai: req.body.tanggalSelesai,
        waktuMulai: req.body.waktuMulai,
        waktuSelesai: req.body.waktuSelesai,
        namaAdmin: req.body.namaAdmin,
    }

    Pengajuan.findByIdAndUpdate(pengajuanID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Pengajuan berhasil diupdate!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Pengajuan gagal diupdate!'
        })
    })
}

//delete pengajuan
const destroy = (req, res, next) => {
    let pengajuanID = req.body.pengajuanID
    Pengajuan.findOneAndDelete(pengajuanID)
    .then(() => {
        res.json({
            message: 'Pengajuan berhasil didelete'
        })
    })
    .catch(error => {
        res.json({ 
            message: 'Error occurred'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}