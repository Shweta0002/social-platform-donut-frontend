const express = require('express');
const router = express.Router();
const profileRoutes = require('./profile.routes');
const loginRoutes = require('./login.routes');



router.use('/profile', profileRoutes);
router.use('/auth', loginRoutes);

module.exports = router;