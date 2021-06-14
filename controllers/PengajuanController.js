const Pengajuan = require('../models/Pengajuan');

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
    let pengajuan = new Pengajuan({
        dokumen: req.body.dokumen,
        deskripsiPengajuan: req.body.deskripsiPengajuan,
        tanggalMulai: req.body.tanggalMulai,
        tanggalSelesai: req.body.tanggalSelesai,
        waktuMulai: req.body.waktuMulai,
        waktuSelesai: req.body.waktuSelesai,
        namaAdmin: req.body.namaAdmin,
    })
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

    let updatedData = { 
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