const express = require('express')
const router = express.Router()

const PengajuanController = require('../../controllers/PengajuanController')

router.get('/', PengajuanController.index)
router.post('/show', PengajuanController.show)
router.post('/store', PengajuanController.store)
router.post('/update', PengajuanController.update)
router.post('/delete', PengajuanController.destroy)

module.exports = router