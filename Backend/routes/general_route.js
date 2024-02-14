const express = require('express');
const {  register_route } = require('../controllers/generalController');

const router = express.Router();

router.get('/', )
router.post('/register', register_route)

module.exports = router;
