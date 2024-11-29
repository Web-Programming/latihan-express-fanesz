var express = require('express');
var router = express.Router();
const mahasiswaController = require('../controllers/mahasiswa');

router.get('/index', mahasiswaController.index);
router.post('/insert', mahasiswaController.insert);
router.patch('/update/:id', mahasiswaController.update);
router.get('/show/:id', mahasiswaController.show);
router.delete('/delete/:id', mahasiswaController.destroy);

module.exports = router;
