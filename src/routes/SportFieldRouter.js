const express = require('express');
const router = express.Router();
const sportFieldController = require('../controllers/SportFieldController');
const { authMiddleware } = require('../middleWare/authMiddleWare');

router.get('/getSportField/:id',sportFieldController.getSportField)
// router.get('/getAllFarm',authMiddleware,farmController.getAllFarm)
router.post('/createSportField',sportFieldController.createSportField)
router.put('/updateSportField/:id', sportFieldController.updateSportField)
router.delete('/deleteSportField/:id', sportFieldController.deleteSportField)

// router.get('/adakey',farmController.getAdakey)

module.exports = router;