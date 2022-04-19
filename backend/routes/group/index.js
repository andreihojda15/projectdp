const router = require('express').Router();

// routes
const groupRoutes = require('./group');
const categoryRoutes = require('./category');
const noteRoutes = require('./note');

router.use(groupRoutes);
router.use(categoryRoutes);
router.use(noteRoutes);

module.exports = router;