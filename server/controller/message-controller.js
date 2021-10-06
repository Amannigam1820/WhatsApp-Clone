
import Message from '../model/message.js'
import Conversation from '../model/conversation.js';

export const newMessage = async (request, response) => {
    const newMessage = new Message(request.body);
    try {
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text})
        response.status(200).json('message saved successfully');
    } catch (err) {
        response.status(500).json(err)
    }



}

export const getMessage = async (request, response) => {
    try {
      const messages =  await Message.find({ conversationId: request.params.id })
      response.status(200).json(messages);
    } catch (err) {
        response.status(500).json(err)
    }
}