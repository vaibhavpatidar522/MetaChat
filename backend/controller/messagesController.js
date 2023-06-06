const Message = require("../models/messageModel");
const asyncHandler = require('express-async-handler');


// @desc  add message
// @route POST /api/message/
//@access Public
const addMessage = asyncHandler( async(req , res ) =>{
    const newMessage = new Message(req.body);

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
})




// @desc  Get messages
// @route GET /api/:conversationId
//@access Public
const getMessages = asyncHandler( async(req , res ) =>{
    try {
        const messages = await Message.find({
          conversationId: req.params.conversationId,
        });
        res.status(200).json(messages);
      } catch (err) {
        res.status(500)
        throw new Error(err.message)
      }
})





module.exports = {getMessages , addMessage } ;
