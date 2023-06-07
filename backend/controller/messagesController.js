const Message = require("../models/messageModel");
const asyncHandler = require('express-async-handler');


// @desc  add message
// @route POST /api/message/
//@access Private
const addMessage = asyncHandler( async(req , res ) =>{
    const newMessage = new Message({...req.body , sender: req.user.id});

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
})




// @desc  Get messages
// @route GET /api/:conversationId
//@access Private
const getMessages = asyncHandler( async(req , res ) =>{
    try {
        const messages = await Message.find(
          req.body,
        );
        res.status(200).json(messages);
      } catch (err) {
        res.status(500)
        throw new Error(err.message)
      }
})





module.exports = {getMessages , addMessage } ;
