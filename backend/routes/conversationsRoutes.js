const express = require('express');
const router = express.Router();
const {getConversationsIds , getConversations , newConversation} = require('../controller/conversationController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, newConversation).get(protect , getConversations);

router.get('/find/:secondUserId', protect , getConversationsIds);


module.exports = router