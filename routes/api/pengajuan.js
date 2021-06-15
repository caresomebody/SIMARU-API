const express = require('express')
const router = express.Router()

const PengajuanController = require('../../controllers/PengajuanController')
const authenticate = require('../../middleware/authenticate')
const upload = require('../../middleware/upload')

router.get('/', authenticate, PengajuanController.index)
router.get('/:id', authenticate, PengajuanController.show)
router.post('/store', authenticate, upload.single('dokumen'), PengajuanController.store)
router.put('/update/:id', authenticate, PengajuanController.update)
router.delete('/delete/:id', authenticate, PengajuanController.destroy)

module.exports = router