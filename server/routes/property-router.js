const express = require('express')

const PropertyController = require('../controllers/property')

const router = express.Router()

router.get('/get-properties', PropertyController.getProperties)
router.get('/get-property/:id', PropertyController.getPropertyById)
router.post('/add-property', PropertyController.addProperty)
router.put('/update-property/:id', PropertyController.updateProperty)
router.delete('/delete-property/:id', PropertyController.deleteProperty)


module.exports = router