var express = require('express');
var router = express.Router();
// Import Controller
const mainController = require('../controllers/main');
/* GET home page. */
router.get('/', mainController.index);
router.get('/contact', mainController.contact);
module.exports = router;
