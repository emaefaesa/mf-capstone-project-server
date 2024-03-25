const router = require('express').Router();
const catRoutes = require('./cat.routes');
const authRoutes = require('./auth.routes');

router.use('/cats', catRoutes);
router.use('/auth', authRoutes);
router.use('/user', require('./user.routes'));

module.exports = router;
