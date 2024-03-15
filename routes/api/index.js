// Set requirements (Express Router)
const router = require('express').Router();

// Set routes (users and thoughts routes)
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

// Add `/users` to created routes 
router.use('/users', usersRoutes);

// Add `/thoughts` to created routes 
router.use('/thoughts', thoughtsRoutes);

// Export Module Router
module.exports = router;