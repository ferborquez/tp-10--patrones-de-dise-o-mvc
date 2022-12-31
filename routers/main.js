const express = require('express');
const router = express.Router();
const {home,about} = require('../controllers/mainController') /* en esta variable se declaran el home y about */

router.get('/',home);
router.get('/about',about)

module.exports = router;