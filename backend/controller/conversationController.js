const Conversation = require("../models/conversationModel")
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");



// @desc  Create new conversation
// @route POST /api/conversations/
//@access Private
const newConversation = asyncHandler( async(req , res ) =>{

    // check if user is already registered
    const ConversationExists = await Conversation.findOne({members: [req.user.id, req.body.receiverId]})
   
   
    

    if (ConversationExists ) {
        res.status(400) 
        throw new Error( "Conversation alredy Exists")
    }

   

    const newConv = new Conversation({

        members: [req.user.id, req.body.receiverId],
      });
    
      try {
        const savedConversation = await newConv.save();
        res.status(200).json(savedConversation);
      } catch (err) {
        res.status(500)
        throw new Error('Invalide credentials')
      }
})


// @desc  Get all conversations 
// @route GET /api/conversations/:userId
//@access Private
const getConversations = asyncHandler( async(req , res ) =>{

    try {
        const conversation = await Conversation.find({
          members: { $in: [req.user.id] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500)
        throw new Error(err.message);
      }
})


// @desc  Get conv includes two userId
// @route GET /api/conversations/find/:firstUserId/:secondUserId
//@access Private
const getConversationsIds = asyncHandler( async(req , res ) =>{
    try {
        const conversation = await Conversation.findOne({
          members: { $all: [req.user.id, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
      } catch (err) {
        res.status(500)
        ;throw new Error(err.message);
      }
})





module.exports = {getConversationsIds , getConversations , newConversation} ;
