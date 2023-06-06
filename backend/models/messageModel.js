const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      required : [true , 'Please add a conversationId ']
    },
    sender: {
      type: String,
      required : [true , 'Please add a senderID']
    },
    text: {
      type: String,
      required : [true , 'Please add a message']    
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
