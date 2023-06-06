const express = require('express');
const router = express.Router();
const {getMessages , addMessage } = require('../controller/messagesController');
const {protect} = require('../middleware/authMiddleware');

router.get('/:conversationId', getMessages);
router.post('/', addMessage);

// router.get('/me', protect,  getMe);

module.exports = router