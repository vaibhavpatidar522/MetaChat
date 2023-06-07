const express = require('express');
const router = express.Router();
const {getMessages , addMessage } = require('../controller/messagesController');
const {protect} = require('../middleware/authMiddleware');

router.route('/')
    .get( protect ,getMessages)
    .post( protect , addMessage);

module.exports = router