const express = require('express')
const router = express.Router()

const PengajuanController = require('../../controllers/PengajuanController')
const authenticate = require('../../middleware/authenticate')

router.get('/', authenticate, PengajuanController.index)
router.post('/show', authenticate, PengajuanController.show)
router.post('/store', authenticate, PengajuanController.store)
router.post('/update', authenticate, PengajuanController.update)
router.post('/delete', authenticate, PengajuanController.destroy)

module.exports = router