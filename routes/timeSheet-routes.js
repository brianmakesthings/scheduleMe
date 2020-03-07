const express = require('express')

const timeSheetCtrl = require('../controllers/timeSheet-ctrl')

const router = express.Router()

router.post('/timeSheet', timeSheetCtrl.createTimeSheet)
router.put('/timeSheet/:id', timeSheetCtrl.updateTimeSheet)
router.delete('/timeSheet/:id', timeSheetCtrl.deleteTimeSheet)
router.get('/timeSheet/:id', timeSheetCtrl.getTimeSheetById)
router.get('/timeSheets', timeSheetCtrl.getTimeSheets)

module.exports = router
