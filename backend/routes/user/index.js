const router = require('express').Router();

// routes
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const noteRoutes = require('./note');

router.use(userRoutes);
router.use(categoryRoutes);
router.use(noteRoutes);

module.exports = router;