const { registerUser, addNote, getNotesByUserId } = require('../Controllers/userController');


const router = require('express').Router();
router.post('/register', registerUser);
router.post('/addnote', addNote);
router.get('/notes/:userId', getNotesByUserId);
module.exports = router;