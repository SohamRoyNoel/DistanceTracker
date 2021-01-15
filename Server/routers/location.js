const express = require('express');
const { 
    location
} = require('../controllers/location');

const router = express.Router();

const { protectRoute, authRoles } = require('../middleware/auth');

router.route('/city/:city')
.post(protectRoute, authRoles('admin'), location);

module.exports = router;