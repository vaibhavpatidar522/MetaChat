const express = require('express');
const router = express.Router();
const {getConversationsIds , getConversations , newConversation} = require('../controller/conversationController');
const {protect} = require('../middleware/authMiddleware');

router.get('/find/:firstUserId/:secondUserId', getConversationsIds);
router.get('/:userId', getConversations);
router.post('/', newConversation);

// router.get('/me', protect,  getMe);

module.exports = router