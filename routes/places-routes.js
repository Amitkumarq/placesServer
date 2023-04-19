const express = require('express')
const router = express.Router()

const { getAllPlaces, createPlace, getPlace, updatePlace, deletePlace } = require('../controllers/places-controller')

router.route('/').get(getAllPlaces).post(createPlace)
router.route('/:id').get(getPlace).patch(updatePlace).delete(deletePlace)
//router.post('/post',createPlace);
module.exports = router